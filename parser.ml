open! Core
open Syntax

exception SyntaxError of string

type token = 
  | UNDERSCORE
  | TYPE
  | TRUE
  | TO
  | TIMES
  | THEN
  | STRING
  | STR of string
  | RPAREN
  | RBRACKET
  | RBRACE
  | RANGLE
  | PLUS
  | PARA
  | OR
  | OF
  | NUM of float
  | NOT
  | NAT
  | MINUS
  | LPAREN
  | LET
  | LESS_EQUAL
  | LESS
  | LBRACKET
  | LBRACE
  | LANGLE
  | LAMBDA
  | IS_IN
  | INT
  | IN
  | IF
  | ID of string
  | GREATER
  | FUN
  | FALSE
  | EQUALS
  | EOF
  | END
  | ELSE
  | DOT
  | DIV
  | DATATYPE
  | COMMA
  | COLON
  | CASE
  | BOOL
  | BAR
  | ASSIGN
  | ARROW
  | APPEND
  | AND
[@@deriving show { with_path = false }]

let tokens = ref []

(* DEBUG MODE SETTING *)
let debug = ref false
let print_debug s =
  if !debug then print_endline s else ()

let print_tokens () = 
  print_debug "current tokens: "; List.iter ~f:(fun tk -> print_debug ("-" ^ show_token tk)) !tokens
    
let print_op op =
  if !debug then 
    (match op with
    | Plus -> print_endline "op: plus"
    | Minus -> print_endline "op: minus"
    | Times -> print_endline "op: times"
    | Divide -> print_endline "op: divide"
    | _ -> print_endline "op: ???")
  else ()

(* x -> id *)
let parse_variable () =
  match (List.hd !tokens) with
  | Some ID x -> tokens := List.drop !tokens 1; Ok { name = x }
  | _ -> Error (SyntaxError "cannot parse variable")

(* tycon -> id *)
let parse_tycon () = 
  match (List.hd !tokens) with
  | Some ID x -> tokens := List.drop !tokens 1; Ok { name = x }
  | _ -> Error (SyntaxError "cannot parse tycon")

(* dcon -> _id *)
let parse_dcon () = 
  match (List.hd !tokens) with
  | Some UNDERSCORE -> (
    match (List.hd (List.drop !tokens 1)) with
    | Some ID x -> tokens := List.drop !tokens 2; Ok { name = x }
    | _ -> Error (SyntaxError "cannot parse dcon (unused underscore)")
  )
  | _ -> Error (SyntaxError "cannot parse dcon")

(****
--------parse patterns--------
precedence:
- x, (), (p), dcon(p), dcon(), dcon
- p1, p2
****)
let rec parse_pattern () =
  parse_pattern_pair ()

(* p -> p1, p2 *)
and parse_pattern_pair () =
  let stack = !tokens in
  match (parse_pattern_top ()) with
  | Ok p1 -> (
    match (List.hd !tokens) with
    | Some COMMA -> tokens := List.drop !tokens 1; (
      match (parse_pattern_top ()) with
      | Ok p2 -> Ok (PPair { p1 = p1; p2 = p2 })
      | _ -> tokens := stack; Error (SyntaxError "cannot parse pattern (unused comma)")
      )
    | _ -> Ok p1
    )
  | _ -> Error (SyntaxError "cannot parse pattern")

(* p -> x *)
(* p -> (p) *)
(* p -> dcon(p) or dcon() or dcon *)
and parse_pattern_top () =
  let stack = !tokens in
  match (parse_variable ()) with
  | Ok var -> Ok (PVar var)
  | _ -> (
    match (List.hd !tokens) with
    | Some LPAREN -> tokens :=  List.drop !tokens 1; (
      match (List.hd !tokens) with
      | Some RPAREN -> tokens := List.drop !tokens 1; Ok PUnit
      | _ -> (
        match (parse_pattern ()) with 
        | Ok p' -> (
          match (List.hd !tokens) with
          | Some RPAREN -> tokens := List.drop !tokens 1; Ok (PParen p')
          | _ -> tokens := stack; Error (SyntaxError "cannot parse pattern (missing right paren)")
        )
        | _ -> tokens := stack; Error (SyntaxError "cannot parse pattern (unused left paren)")
      )
    )
    | _ -> (
      match (parse_dcon ()) with
      | Ok dc -> (
        match (List.hd !tokens) with
        | Some LPAREN -> tokens :=  List.drop !tokens 1; (
          match (List.hd !tokens) with
          | Some RPAREN -> tokens := List.drop !tokens 1; Ok (PCon { pconstructor = dc; pattern = Some PUnit })
          | _ -> (
            match (parse_pattern ()) with
            | Ok p' -> (
              match (List.hd !tokens) with
              | Some RPAREN -> tokens := List.drop !tokens 1; Ok (PCon { pconstructor = dc; pattern = Some p' })
              | _ -> tokens := stack; Error (SyntaxError "cannot parse pattern (missing right paren after dcon)")
            )
            | _ -> tokens := stack; Error (SyntaxError "cannot parse pattern (unused left paren after dcon)")
          )
        )
        | _ -> Ok (PCon { pconstructor = dc; pattern = None })
      )
      | _ -> Error (SyntaxError "cannot parse pattern")
    )
  )

(****
--------parse types--------
precedence:
- N, Z, B, (T), tycon
- T * T * ...
- T -> T
****)
let rec parse_type () = 
  parse_type_arrow ()

(* T: T -> T *)
and parse_type_arrow () = 
  let stack = !tokens in
  match (parse_type_prod ()) with
  | Ok domain -> (
    let result = ref domain in
    let is_looping = ref true in 
    let is_valid = ref true in
    while !is_looping do
      match (List.hd !tokens) with
      | Some TO -> tokens := List.drop !tokens 1;
      | _ -> is_looping := false;
      ;
      if !is_looping then (match (parse_type_prod ()) with
        | Ok codomain -> result := Func { domain = !result; codomain = codomain };
        | _ -> tokens := stack; is_looping := false; is_valid := false;
        ) else ();
    done;
    if !is_valid then Ok !result else Error (SyntaxError "cannot parse type (arrow)")
  )
  | _ -> Error (SyntaxError "cannot parse type (arrow)")

(* T: T * T * ... *)
and parse_type_prod () =
  let stack = !tokens in
  match (parse_type_top ()) with
  | Ok left -> (
    let result : typ list ref = ref [left] in
    let is_looping = ref true in 
    let is_valid = ref true in
    while !is_looping do
      match (List.hd !tokens) with
      | Some TIMES -> tokens := List.drop !tokens 1;
      | _ -> is_looping := false;
      ;
      if !is_looping then (match (parse_type_top ()) with
        | Ok right -> result := right::!result;
        | _ -> tokens := stack; is_looping := false; is_valid := false;
      ) else ();
    done;
    if !is_valid 
    then (if (List.length !result = 1) then Ok left else Ok (Prod (List.rev !result)))
    else Error (SyntaxError "cannot parse type (prod)")
  )
  | _ -> Error (SyntaxError "cannot parse type (prod)")

(* T -> N *)
(* T -> Z *)
(* T -> B *)
(* T -> (T) *)
(* T -> tycon *)
and parse_type_top () = 
  match (List.hd !tokens) with
  | Some NAT -> tokens := List.drop !tokens 1; Ok Nat
  | Some INT -> tokens := List.drop !tokens 1; Ok Int
  | Some BOOL -> tokens := List.drop !tokens 1; Ok Boolean
  | Some LPAREN -> (
    let stack = !tokens in
    tokens := List.drop !tokens 1;
    match (parse_type ()) with
    | Ok t' -> (
      match (List.hd !tokens) with
      | Some RPAREN -> tokens := List.drop !tokens 1; Ok (TParen t')
      | _ -> tokens := stack; Error (SyntaxError "cannot parse type (missing right paren)")
    )
    | _ -> tokens := stack; Error (SyntaxError "cannot parse type (unused left paren)")
  )
  (* TODO: tycon and dty - how to disambiguate? *)
  | _ -> (
    match (parse_tycon()) with
    | Ok tc -> Ok (Typ tc)
    | _ -> Error (SyntaxError "TODO: other cases")
  )

(****
--------parse datatypes--------   
dty -> dcon [of T]
dty -> dcon [od T] | dty 
****)
let rec parse_datatype () =
  let stack = !tokens in
  let result = ref [] in
  match (parse_datatype_recur ()) with
  | Ok dty -> result := [dty]; (
    let is_looping = ref true in
    let is_valid = ref true in
    while !is_looping do
      match (List.hd !tokens) with
      | Some BAR -> tokens := List.drop !tokens 1; (
        match (parse_datatype_recur ()) with
        | Ok dty -> result := dty::!result;
        | _ -> tokens := stack; is_looping := false; is_valid := false;
      )
      | _ -> is_looping := false;
    done;
    if !is_valid then Ok (DTyp (List.rev !result)) else Error (SyntaxError "cannot parse datatype")
  )
  | _ -> Error (SyntaxError "cannot parse datatype")
 

and parse_datatype_recur () =
  let stack = !tokens in
  match (parse_dcon ()) with
  | Ok dc -> (
    match (List.hd !tokens) with
    | Some OF -> tokens := List.drop !tokens 1; (
      match (parse_type()) with
      | Ok t -> Ok ({ id = dc; typ = Some t })
      | _ -> tokens := stack; Error (SyntaxError "cannot parse datatype (unused of)")
    )
    | _ -> Ok ({ id = dc; typ = Some TUnit })
  )
  | _ -> Error (SyntaxError "cannot parse datatype")

(****
--------parse values--------
precedence:
- numbers, booleans, x, (), (v), dcon(v), dcon(), dcon, lambda p.e
- v1, v2
****)
let rec parse_value () = 
  parse_value_pair () 

(* v -> v1, v2 *)
and parse_value_pair () = 
  let stack = !tokens in
  match (parse_value_top ()) with
  | Ok v1 -> (
    match (List.hd !tokens) with
    | Some COMMA -> tokens := List.drop !tokens 1; (
      match (parse_value_top ()) with
      | Ok v2 -> Ok (VPair { v1 = v1; v2 = v2 })
      | _ -> tokens := stack; Error (SyntaxError "cannot parse value (unused comma)")
    )
    | _ -> Ok v1
  )
  | _ -> tokens := stack; Error (SyntaxError "cannot parse value")

(* v -> numbers *)
(* v -> booleans *)
(* v -> (v) *)
(* v -> lambda p.e *)
(* v -> dcon(v) or dcon() or dcon *)
(* v -> x *)
and parse_value_top () = 
  let stack = !tokens in
  match (List.hd !tokens) with
  | Some NUM n -> tokens := List.drop !tokens 1; Ok (Lit (Num n))
  | Some TRUE -> tokens := List.drop !tokens 1; Ok (Lit (Bool true))
  | Some FALSE -> tokens := List.drop !tokens 1; Ok (Lit (Bool false))
  | Some MINUS -> (
    match (List.hd (List.drop !tokens 1)) with
    | Some NUM n -> tokens := List.drop !tokens 2; Ok (Lit (Num (~-. n)))
    | _ -> tokens := stack; Error (SyntaxError "cannot parse value (unused minus)")
  )
  | Some LPAREN -> tokens := List.drop !tokens 1; (
    match (List.hd !tokens) with
    | Some RPAREN -> tokens := List.drop !tokens 1; Ok VUnit
    | _ -> (
      match (parse_value ()) with
      | Ok v' -> (
        match (List.hd !tokens) with
        | Some RPAREN -> tokens := List.drop !tokens 1; Ok (VParen v')
        | _ -> tokens := stack; Error (SyntaxError "cannot parse value (missing right paren)")
      )
      | _ -> tokens := stack; Error (SyntaxError "cannot parse value (unused left paren)")
    )
  )
  | Some LAMBDA -> tokens := List.drop !tokens 1; (
    print_tokens ();
    match (parse_pattern ()) with
    | Ok p -> (
      match (List.hd !tokens) with
      | Some DOT -> tokens := List.drop !tokens 1; (
        match (parse_expr ()) with
        | Ok e -> Ok (Lambda { params = p; body = e })
        | _ -> tokens := stack; Error (SyntaxError "cannot parse value (missing func body)") 
      )
      | _ -> tokens := stack; Error (SyntaxError "cannot parse value (missing dot)") 
    )
    | _ -> tokens := stack; Error (SyntaxError "cannot parse value (unused lambda)")
  )
  | _ -> (
    match (parse_dcon ()) with
    | Ok dc -> (
      match (List.hd !tokens) with 
      | Some LPAREN -> tokens := List.drop !tokens 1; (
          match (List.hd !tokens) with
          | Some RPAREN -> tokens := List.drop !tokens 1; Ok (VCon { vconstructor = dc; value = Some VUnit })
          | _ -> (
            match (parse_value ()) with
            | Ok v' -> (
              match (List.hd !tokens) with
              | Some RPAREN -> tokens := List.drop !tokens 1; Ok (VCon { vconstructor = dc; value = Some v' })
              | _ -> tokens := stack; Error (SyntaxError "cannot parse value (missing right paren after dcon)")
            )
            | _ -> tokens := stack; Error (SyntaxError "cannot parse value (unused left paren after dcon)")
          )
      )
      | _ -> Ok (VCon { vconstructor = dc; value = None })
    )
    | _ -> (match (parse_variable ()) with
      | Ok v -> Ok (VVar v)
      | _ -> tokens := stack; Error (SyntaxError "cannot parse value")
    )
  )

(****
--------parse bindings--------
- fun x(p) = e
- type tycon = T
- type tycon = dty
- p = e
****)
and parse_binding () =
  let stack = !tokens in
  match (List.hd !tokens) with
  | Some FUN -> tokens := List.drop !tokens 1; (
    match (parse_variable ()) with
    | Ok x -> (
      match (List.hd !tokens) with
      | Some LPAREN -> tokens := List.drop !tokens 1; 
        let args = ref PUnit in
        (match (parse_pattern ()) with
        | Ok p -> args := p;
        | _ -> ());
        (match (List.hd !tokens) with
        | Some RPAREN -> tokens := List.drop !tokens 1; (
          match (List.hd !tokens) with
          | Some ASSIGN -> tokens := List.drop !tokens 1; (
            match (parse_expr ()) with
            | Ok e -> Ok (FBind { func_name = x; func_args = !args; func_body = e })
            | _ -> tokens := stack; Error (SyntaxError "cannot parse binding (missing func body)")
          )
          | _ -> tokens := stack; Error (SyntaxError "cannot parse binding (missing assign)")
        )
        | _ -> tokens := stack; Error (SyntaxError "cannot parse binding (missing right paren)")
      )
      | _ -> tokens := stack; Error (SyntaxError "cannot parse binding (missing func args)")
    )
    | _ -> tokens := stack; Error (SyntaxError "cannot parse binding (unused fun)")
  )
  | Some TYPE -> tokens := List.drop !tokens 1; (
    match (parse_tycon ()) with
    | Ok tc -> (
      match (List.hd !tokens) with 
      | Some ASSIGN -> tokens := List.drop !tokens 1; (
        match (parse_type ()) with
        | Ok t -> Ok (TBind { typ_name = tc; bind_typ = t })
        | _ -> (
          match (parse_datatype ()) with
          | Ok (DTyp dt) -> Ok (DBind { dtyp_name = tc; bind_dty = dt })
          | _ -> tokens := stack; Error (SyntaxError "cannot parse binding (invalid type or datatype)")
        )
      )
      | _ -> tokens := stack; Error (SyntaxError "cannot parse binding (missing assign)")
    )
    | _ -> tokens := stack; Error (SyntaxError "cannot parse binding (missing tycon)")
  )
  | _ -> (
    match (parse_pattern ()) with
    | Ok p -> (
      match (List.hd !tokens) with
      | Some ASSIGN -> tokens := List.drop !tokens 1; (
        match (parse_expr ()) with
        | Ok e -> Ok (PBind { bind_pattern = p; bind_exp = e })
        | _ -> tokens := stack; Error (SyntaxError "cannot parse binding (invalid expression)")
      )
      | _ -> tokens := stack; Error (SyntaxError "cannot parse binding (missing assign)")
    )
    | _ -> Error (SyntaxError "cannot parse binding")
  )

(****
--------parse expressions--------
precedence:
- v, (e), case, let in end, if then else, {e1 e2}, global bindings, 
  |es|, <<>>, <<es>>, <<es : 0 <= x < en>>, <<es : p \in e>>
- not e1
- e1 * / e2
- e1 + - e2
- e1 < > = e2
- e1 and or e2
- e1 , || e2
- es[i], es[i:j], e1 ++ e2
****)

(* e -> es[i] *)
(* e -> es[i:j] *)
(* e -> e1 ++ e2 *)
and parse_expr () =
  match (parse_expr_sequence ()) with
  | Ok seq -> (
    let stack = !tokens in
    match (List.hd !tokens) with
    | Some LBRACKET -> tokens := List.drop !tokens 1; (
      match (parse_expr_sequence ()) with
      | Ok s -> (
        match (List.hd !tokens) with
        | Some RBRACKET -> tokens := List.drop !tokens 1; Ok (SeqOp (Nth {nth_seq = seq; nth_idx = s }))
        | _ -> (
          match (List.hd !tokens) with
          | Some COLON -> tokens := List.drop !tokens 1; (
            match (parse_expr_sequence ()) with
            | Ok e -> (
              match (List.hd !tokens) with
              | Some RBRACKET -> tokens := List.drop !tokens 1; Ok (SeqOp (Subseq { sub_seq = seq; start_idx = s; end_idx = e }))
              | _ -> tokens := stack; Error (SyntaxError "Seq.subseq: missing right bracket")
            )
            | _ -> tokens := stack; Error (SyntaxError "Seq.subseq: invalid expressions")
          )
          | _ -> tokens := stack; Error (SyntaxError "Seq.subseq: missing arguments")
        )
      )
      | _ -> tokens := stack; Error (SyntaxError "Seq.nth: missing indices")
    )
    | Some APPEND -> tokens := List.drop !tokens 1; (
      match (parse_expr_sequence ()) with
      | Ok seq2 -> Ok (SeqOp (Append { append_left = seq; append_right = seq2 }))
      | _ -> tokens := stack; Error (SyntaxError "Seq.append: invalid RHS")
    )
    | _ -> Ok seq
  )
  | Error e -> Error e

(* e -> e1, e2 *)
(* e -> e1 || e2 *)
and parse_expr_sequence () =
  let stack = !tokens in
  match (parse_expr_logic ()) with
  | Ok e1 -> (
    print_debug ("\nLHS: " ^ Syntax.show_expression e1);
    print_tokens ();
    let result = ref e1 in
    let is_looping = ref true in
    let is_valid = ref true in
    let is_seq = ref true in
    while !is_looping do
      print_debug ("\n --looping for " ^ Syntax.show_expression !result);
      match (List.hd !tokens) with
      | Some COMMA -> tokens := List.drop !tokens 1;
      | Some PARA -> tokens := List.drop !tokens 1; is_seq := false;
      | _ -> print_debug ("Failed to find op" ); is_looping := false;
      ;
      if !is_looping then (match (parse_expr_logic ()) with
        | Ok e2 -> 
          if !is_seq
          then (result := Sequential { first = !result; second = e2 };)
          else (result := Parallel { left = !result; right = e2 };)
        | _ -> tokens := stack; is_looping := false; is_valid := false;
        ) else ();
    done;
    if !is_valid then print_debug ("\n!!!Returning, " ^ Syntax.show_expression !result);
    if !is_valid then Ok !result else Error (SyntaxError "cannot parse expression (sequence)")
  )
  | _ -> Error (SyntaxError "cannot parse expression (sequence)")

(* e1 and or e2 *)
and parse_expr_logic () = 
  let stack = !tokens in
  match (parse_expr_compare ()) with
  | Ok e1 -> (
    print_debug ("\nLHS: " ^ Syntax.show_expression e1);
    print_tokens ();
    let result = ref e1 in
    let is_looping = ref true in
    let is_valid = ref true in
    while !is_looping do
      print_debug ("\n --looping for " ^ Syntax.show_expression !result);
      let op = ref And in
      match (List.hd !tokens) with
      | Some AND -> tokens := List.drop !tokens 1; op := And;
      | Some OR -> tokens := List.drop !tokens 1; op := Or;
      | _ -> print_debug ("Failed to find op" ); is_looping := false;
      ;
      if !is_looping then (match (parse_expr_compare ()) with
        | Ok e2 -> result := Infix { op = !op; e1 = !result; e2 = e2 };
        | _ -> tokens := stack; is_looping := false; is_valid := false;
        ) else ();
    done;
    if !is_valid then print_debug ("\n!!!Returning, " ^ Syntax.show_expression !result);
    if !is_valid then Ok !result else Error (SyntaxError "cannot parse expression (logic)")
  )
  | _ -> Error (SyntaxError "cannot parse expression (logic)")

(* e1 > < = e2 *)
and parse_expr_compare () = 
  let stack = !tokens in
  match (parse_expr_plus ()) with
  | Ok e1 -> (
    print_debug ("\nLHS: " ^ Syntax.show_expression e1);
    print_tokens ();
    let result = ref e1 in
    let is_looping = ref true in
    let is_valid = ref true in
    while !is_looping do
      print_debug ("\n --looping for " ^ Syntax.show_expression !result);
      let op = ref Equals in
      match (List.hd !tokens) with
      | Some GREATER -> tokens := List.drop !tokens 1; op := Greater;
      | Some LESS -> tokens := List.drop !tokens 1; op := Less;
      | Some EQUALS -> tokens := List.drop !tokens 1; op := Equals;
      | _ -> print_debug ("Failed to find op" ); is_looping := false;
      ;
      if !is_looping then (match (parse_expr_plus ()) with
        | Ok e2 -> result := Infix { op = !op; e1 = !result; e2 = e2 };
        | _ -> tokens := stack; is_looping := false; is_valid := false;
        ) else ();
    done;
    if !is_valid then print_debug ("\n!!!Returning, " ^ Syntax.show_expression !result);
    if !is_valid then Ok !result else Error (SyntaxError "cannot parse expression (compare)")
  )
  | _ -> Error (SyntaxError "cannot parse expression (compare)")

(* e1 + - e2 *)
and parse_expr_plus () = 
  let stack = !tokens in
  match (parse_expr_mult ()) with
  | Ok e1 -> (
    print_debug ("\nLHS: " ^ Syntax.show_expression e1);
    print_tokens ();
    let result = ref e1 in
    let is_looping = ref true in
    let is_valid = ref true in
    while !is_looping do
      print_debug ("\n --looping for " ^ Syntax.show_expression !result);
      let op = ref Plus in
      match (List.hd !tokens) with
      | Some PLUS -> tokens := List.drop !tokens 1; op := Plus;
      | Some MINUS -> tokens := List.drop !tokens 1; op := Minus;
      | _ -> print_debug ("Failed to find op" ); is_looping := false;
      ;
      if !is_looping then (match (parse_expr_mult ()) with
        | Ok e2 -> result := Infix { op = !op; e1 = !result; e2 = e2 };
        | _ -> tokens := stack; is_looping := false; is_valid := false;
        ) else ();
    done;
    if !is_valid then print_debug ("\n!!!Returning, " ^ Syntax.show_expression !result);
    if !is_valid then Ok !result else Error (SyntaxError "cannot parse expression (plus)")
  )
  | _ -> Error (SyntaxError "cannot parse expression (plus)")

(* e -> e1 * / e2 *)
and parse_expr_mult () =
  let stack = !tokens in
  match (parse_expr_not ()) with
  | Ok e1 -> (
    print_debug ("\nLHS: " ^ Syntax.show_expression e1);
    print_tokens ();
    let result = ref e1 in
    let is_looping = ref true in (* act as loop break *)
    let is_valid = ref true in
    (* loop until no more binops can be found *)
    while !is_looping do
      print_debug ("\n --looping for " ^ Syntax.show_expression !result);
      let op = ref Times in
      match (List.hd !tokens) with
      | Some TIMES -> tokens := List.drop !tokens 1; op := Times;
      | Some DIV -> tokens := List.drop !tokens 1; op := Divide;
      | _ -> print_debug ("Failed to find op" ); is_looping := false;
      ;
      if !is_looping then print_op !op;
      (* if binop found, attempt to parse RHS expr:
        - if found: accumulate expr on the LHS (since left-associative), and continue the loop
        - if failed, retore tokens and signal error by setting is_valid to false *)
      if !is_looping then (match (parse_expr_not ()) with
        | Ok e2 -> result := Infix { op = !op; e1 = !result; e2 = e2 };
        | _ -> tokens := stack; is_looping := false; is_valid := false;
        ) else ();
    done;
    if !is_valid then print_debug ("\n!!!Returning, " ^ Syntax.show_expression !result);
    if !is_valid then Ok !result else Error (SyntaxError "cannot parse expression (binop)")
  )
  | _ -> Error (SyntaxError "cannot parse expression (binop)")

(* e -> not e *)
and parse_expr_not () =
  let stack = !tokens in
  let is_looping = ref true in
  let is_valid = ref true in
  let result = ref None in
  while !is_looping do
    match (List.hd !tokens) with
    | Some NOT -> tokens := List.drop !tokens 1;
    | _ -> is_looping := false;
    ;
    if !is_looping then (match (parse_expr_top ()) with
      | Ok e' -> (match (!result) with
        | None -> result := Some (Unary { unary_op = Not; e = e' });
        | Some e -> result := Some (Unary { unary_op = Not; e = e })
        )
      | _ -> tokens := stack; is_looping := false; is_valid := false;
      ) else ();
  done;
  if !is_valid then (
    match (!result) with
    | None -> parse_expr_top();
    | Some r -> Ok r
  ) else Error (SyntaxError "cannot parse expression (not)")

(* e -> b *)
(* e -> v *)
(* e -> (e) *)
(* e -> if e1 then e2 else e3 *)
(* e -> {e1 e2} *)
(* e -> case e1 | p => e2 *)
(* e -> let b+ in e end *)
(* e -> |es| *)
(* e -> <<>> *)
(* e -> <<es>> *)
(* e -> <<es : 0 <= x < en >> *)
(* e -> <<es : p \in e >> *)
and parse_expr_top () =
  let stack = !tokens in
  match (parse_binding ()) with
    | Ok b -> Ok (GlobalBinding b)
    | _ -> (
      match (parse_value ()) with
      | Ok value -> print_debug ("successfully parsed value " ^ show_value value); Ok (Value value)
      | _ -> (
        match (List.hd !tokens) with
        | Some LPAREN -> tokens :=  List.drop !tokens 1; (
          match (parse_expr ()) with
          | Ok e' -> (
            print_debug ("\n---> found e " ^ Syntax.show_expression e');
            match (List.hd !tokens) with
            | Some RPAREN -> tokens := List.drop !tokens 1; Ok (EParen e')
            | _ -> tokens := stack; Error (SyntaxError "cannot parse expression (missing right paren)")
          )
          | _ -> tokens := stack; Error (SyntaxError "cannot parse expression (unused left paren)")
        )
        | Some IF -> tokens :=  List.drop !tokens 1; (
          match (parse_expr ()) with
          | Ok cond -> (
            match (List.hd !tokens) with
            | Some THEN -> tokens := List.drop !tokens 1; ( 
              match (parse_expr ()) with
              | Ok then_e -> (
                match (List.hd !tokens) with
                | Some ELSE -> tokens := List.drop !tokens 1; (
                  match (parse_expr ()) with
                  | Ok else_e -> Ok (If { guard = cond; then_branch = then_e; else_branch = else_e })
                  | _ -> tokens := stack; Error (SyntaxError "cannot parse expression (unused else)")
                )
                | _ -> tokens := stack; Error (SyntaxError "cannot parse expression (missing else)")
              )
              | _ -> tokens := stack; Error (SyntaxError "cannot parse expression (unused then)")
            )
            | _ -> tokens := stack; Error (SyntaxError "cannot parse expression (missing then)")
          )
          | _ -> tokens := stack; Error (SyntaxError "cannot parse expression (unused if)")
        )
        | Some LBRACE -> tokens := List.drop !tokens 1; (
          match (parse_expr ()) with
          | Ok caller -> (
            let result = ref caller in
            let is_looping = ref true in
            while !is_looping do
              match (parse_expr ()) with
              | Ok arg -> result := App { func = !result; arg = arg };
              | _ -> is_looping := false;
              ;
            done;
            match (List.hd !tokens) with
            | Some RBRACE -> tokens := List.drop !tokens 1; Ok !result
            | _ -> tokens := stack; Error (SyntaxError "cannot parse expression (missing right bracket)")
          )
          | _ -> tokens := stack; Error (SyntaxError "cannot parse expression (unused left bracket)")
        )
        | Some CASE -> tokens := List.drop !tokens 1; (
          match (parse_expr ()) with
          | Ok e -> (
            let cases = ref [] in
            let is_looping = ref true in
            let is_valid = ref true in
            while !is_looping do
              match (List.hd !tokens) with 
              | Some BAR -> tokens := List.drop !tokens 1; (
                match (parse_pattern ()) with
                | Ok p -> (
                  match (List.hd !tokens) with
                  | Some ARROW -> tokens := List.drop !tokens 1; (
                    match (parse_expr ()) with
                    | Ok e' -> cases := {matchp = p; exp = e'}::!cases
                    | _ -> is_looping := false; is_valid := false; (* case missing expression *)
                  )
                  | _ -> is_looping := false; is_valid := false; (* case missing arrow *)
                )
                | _ -> is_looping := false; is_valid := false;  (* case missing pattern *)
                ;
              )
              | _ -> is_looping := false; (* no more cases *)
              ;
            done;
            if (not !is_valid) || (List.length !cases = 0) 
            then (tokens := stack; Error (SyntaxError "cannot parse expression (malformed case)"))
            else Ok (Case { sum = e; branches = (List.rev !cases) })
          )
          | _ -> tokens := stack; Error (SyntaxError "cannot parse expression (unused case)")
        )
        | Some LET -> tokens := List.drop !tokens 1; (
          match (parse_binding ()) with
          | Ok b -> (
            let bindings = ref [b] in 
            let is_looping = ref true in
            while !is_looping do
              match (List.hd !tokens) with
              | Some IN -> is_looping := false;
              | _ -> (
                match (parse_binding ()) with
                | Ok b' -> bindings := b'::!bindings;
                | _ -> is_looping := false;
              )
            done;
            match (List.hd !tokens) with
            | Some IN -> tokens := List.drop !tokens 1; (
              match (parse_expr ()) with
              | Ok e -> (
                match (List.hd !tokens) with
                | Some END -> tokens := List.drop !tokens 1; Ok (LocalBinding { bindings = List.rev !bindings; usage = e})
                | _ -> Error (SyntaxError "cannot parse expression (missing end)")
              )
              | _ -> tokens := stack; Error (SyntaxError "cannot parse expression (invalid binding result)")
            )
            | _ -> tokens := stack; Error (SyntaxError "cannot parse expression (invalid binding or missing in)")
          )
          | _ -> tokens := stack; Error (SyntaxError "cannot parse expression (unused let)")
        )
        | Some BAR -> tokens := List.drop !tokens 1; (
          match (parse_expr()) with 
          | Ok es -> (
            match (List.hd !tokens) with
            | Some BAR -> tokens := List.drop !tokens 1; Ok (SeqOp (Length es))
            | _ -> tokens := stack; Error (SyntaxError "Seq.length: missing bar")
          )
          | _ -> tokens := stack; Error (SyntaxError "Seq.length: invalid expression")
        )
        | Some LANGLE -> tokens := List.drop !tokens 1; (
          match (List.hd !tokens) with
          | Some RANGLE -> tokens := List.drop !tokens 1; Ok (SeqOp Empty)
          | _ -> (
            match (parse_pattern ()) with
            | Ok p -> (
              print_endline "testing222";
              match (List.hd !tokens) with
              | Some IS_IN -> tokens := List.drop !tokens 1; (
                match (parse_expr ()) with
                | Ok es -> (
                  match (List.hd !tokens) with
                  | Some BAR -> tokens := List.drop !tokens 1; (
                    match (parse_expr ()) with
                    | Ok cond -> (
                      match (List.hd !tokens) with
                      | Some RANGLE -> tokens := List.drop !tokens 1; Ok (SeqOp (Filter { filter_fn = { params = p; body = cond }; filter_seq = es }))
                      | _ -> tokens := stack; Error (SyntaxError "Seq.filter: missing >")
                    )
                    | _ -> tokens := stack; Error (SyntaxError "Seq.filter: missing condition")
                  )
                  | _ -> tokens := stack; Error (SyntaxError "Seq.filter: missing bar")
                )
                | _ -> tokens := stack; Error (SyntaxError "Seq.filter: missing seq")
              )
              | _ -> tokens := stack; Error (SyntaxError "Seq.filter: missing \\in")
            )
            | _ -> (
              match (parse_expr ()) with 
              | Ok es -> (
                match (List.hd !tokens) with
                | Some COLON -> tokens := List.drop !tokens 1; (
                  match (List.nth !tokens 0, List.nth !tokens 1, List.nth !tokens 3) with
                  | Some (NUM 0.), Some LESS_EQUAL, Some LESS -> (
                    tokens := List.drop !tokens 2;
                    match (parse_variable ()) with
                    | Ok v -> tokens := List.drop !tokens 1; (
                      match (parse_expr ()) with
                      | Ok en -> (
                        match (List.hd !tokens) with
                        | Some RANGLE -> tokens := List.drop !tokens 1; Ok (SeqOp (Tabulate { tab_fn = { params = PVar v; body = es}; tab_len = en }))
                        | _ -> tokens := stack; Error (SyntaxError "Seq.tabulate: missing >")
                      )
                      | _ -> tokens := stack; Error (SyntaxError "Seq.tabulate: missing length")
                    )
                    | _ -> tokens := stack; Error (SyntaxError "Seq.tabulate: malformed condition")
                  )
                  | _ -> (
                    match (parse_pattern ()) with
                    | Ok p -> (
                      match (List.hd !tokens) with
                      | Some IS_IN -> tokens := List.drop !tokens 1; (
                        match (parse_expr ()) with
                        | Ok ep -> (
                          match (List.hd !tokens) with
                          | Some RANGLE -> tokens := List.drop !tokens 1; Ok (SeqOp (Map { map_fn = { params = p; body = es }; map_seq = ep }))
                          | _ -> tokens := stack; Error (SyntaxError "Seq.map: missing >")
                        )
                        | _ -> tokens := stack; Error (SyntaxError "Seq.map: missing seq")
                      )
                      | _ -> tokens := stack; Error (SyntaxError "Seq.map: missing \\in")
                    )
                    | _ -> tokens := stack; Error (SyntaxError "Invalid Seq operation")
                  )
                )
                | Some RANGLE -> tokens := List.drop !tokens 1; Ok (SeqOp (Singleton es))
                | _ -> tokens := stack; Error (SyntaxError "Seq.singleton: missing >")
              )
              | _ -> tokens := stack; Error (SyntaxError "Invalid Seq operation")
            )
          )
            
           
        )
        | _ -> Error (SyntaxError "Seq.singleton: invalid expression")
      )
    )

let parse_main () =
  let is_looping = ref true in
  let is_valid = ref true in
  let result = ref [] in
  let error = ref "" in
  while !is_looping do 
    match (List.hd !tokens) with
    | Some EOF -> is_looping := false;
    | _ -> (
      match (parse_expr ()) with
      | Ok e -> result := e::(!result);
      | Error (SyntaxError s) -> is_looping := false; is_valid := false; error := s;
      | _ -> is_looping := false; is_valid := false; 
    )
    ;
  done;
  if !is_valid then List.rev !result else [Value (Lit (Str !error))]

let parse (tks : token list) = tokens := tks; print_tokens (); parse_main ()
