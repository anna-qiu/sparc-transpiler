open! Core
open Syntax

exception SyntaxError of string

type token = 
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
  | LESS
  | LBRACKET
  | LBRACE
  | LAMBDA
  | INT
  | IN
  | IF
  | ID of string
  | GREATER
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
  | ARROW
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

let parse_variable () =
  match (List.hd !tokens) with
  (* x -> id *)
  | Some ID x -> tokens := List.drop !tokens 1; Ok { name = x }
  | _ -> Error (SyntaxError "cannot parse variable")

let parse_tycon () = 
  match (List.hd !tokens) with
  (* tycon -> id *)
  | Some ID x -> tokens := List.drop !tokens 1; Ok { name = x }
  | _ -> Error (SyntaxError "cannot parse tycon")

let parse_dcon () = 
  match (List.hd !tokens) with
  (* dcon -> id *)
  | Some ID x -> tokens := List.drop !tokens 1; Ok { name = x }
  | _ -> Error (SyntaxError "cannot parse dcon")


(****
--------parse types--------
precedence:
- N, Z, B, (T)
- T * T * ...
- T -> T
- TODO: tycon vs dty
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
    let result = ref left in
    let is_looping = ref true in 
    let is_valid = ref true in
    while !is_looping do
      match (List.hd !tokens) with
      | Some TIMES -> tokens := List.drop !tokens 1;
      | _ -> is_looping := false;
      ;
      if !is_looping then (match (parse_type_top ()) with
        | Ok right -> result := Prod [left; right];
        | _ -> tokens := stack; is_looping := false; is_valid := false;
      ) else ();
    done;
    if !is_valid then Ok !result else Error (SyntaxError "cannot parse type (prod)")
  )
  | _ -> Error (SyntaxError "cannot parse type (prod)")

and parse_type_top () = 
  match (List.hd !tokens) with
  (* T -> N *)
  | Some NAT -> tokens := List.drop !tokens 1; Ok Nat
  (* T -> Z *)
  | Some INT -> tokens := List.drop !tokens 1; Ok Int
  (* T -> B *)
  | Some BOOL -> tokens := List.drop !tokens 1; Ok Boolean
  (* T -> (T) *)
  | Some LPAREN -> (
    let stack = !tokens in
    tokens := List.drop !tokens 1;
    match (parse_type ()) with
    | Ok t' -> (
      match (List.hd !tokens) with
      | Some RPAREN -> tokens := List.drop !tokens 1; Ok t'
      | _ -> tokens := stack; Error (SyntaxError "cannot parse type (top)")
    )
    | _ -> tokens := stack; Error (SyntaxError "cannot parse type (top)")
  )
  (* TODO: tycon and dty - how to disambiguate? *)
  | _ -> Error (SyntaxError "TODO: other cases")

(****
--------parse values--------
TODO: didn't reason about precedence yet, should probably test on the simple ones first
****)
let parse_value () = 
  print_tokens ();
  match (List.hd !tokens) with
  (* v -> numbers *)
  | Some NUM n -> tokens := List.drop !tokens 1; Ok (Lit (Num n))
  (* v -> booleans *)
  | Some TRUE -> print_debug ("checking true"); tokens := List.drop !tokens 1; Ok (Lit (Bool true))
  | Some FALSE -> print_debug ("checking false"); tokens := List.drop !tokens 1; Ok (Lit (Bool false))
  (* v -> unary operators *)
  (* | Some NOT -> tokens := List.drop !tokens 1; Ok (UnOp Not) *)
  (* v -> binary operators *) (* TODO: do we really need this *)
  (* | Some PLUS -> tokens := List.drop !tokens 1; Ok (BinOp Plus)
  | Some MINUS -> tokens := List.drop !tokens 1; Ok (BinOp Minus)
  | Some TIMES -> tokens := List.drop !tokens 1; Ok (BinOp Times)
  | Some DIV -> tokens := List.drop !tokens 1; Ok (BinOp Divide)
  | Some LESS -> tokens := List.drop !tokens 1; Ok (BinOp Less)
  | Some GREATER -> tokens := List.drop !tokens 1; Ok (BinOp Greater)
  | Some EQUALS -> tokens := List.drop !tokens 1; Ok (BinOp Equals)
  | Some OR -> tokens := List.drop !tokens 1; Ok (BinOp Or)
  | Some AND -> tokens := List.drop !tokens 1; Ok (BinOp And) *)
  (* TODO: *)
  (* v -> v1,v2 *)
  (* v -> (v) *)
  (* v -> dcon(v) *)
  (* v -> lambda p.e *)
  | _ -> Error (SyntaxError "TODO: other cases")

(****
--------parse expressions--------
precedence:
- x, v, (e), case e1 ..., let b+ in e end, if e1 then e2 else e3
- not e1
- e1 * / e2
- e1 + - e2
- e1 < > = e2
- e1 and or e2
- e1 , || e2
- e1 e2 (* TODO: not working?!?!?! *)
****)
let rec parse_expr () =
  parse_expr_sequence ()
  (* TODO: *)
  (* e -> case e1 ... *)
  (* e -> let b+ in e end *)

(* and parse_expr_funcapp () = 
  match (parse_expr_sequence ()) with
  | Ok caller -> (
    print_debug ("\nCaller: " ^ Syntax.show_expression caller);
    print_tokens ();
    let result = ref caller in
    let is_looping = ref true in
    while !is_looping do
      print_debug ("\n --looping for " ^ Syntax.show_expression !result);
      match (parse_expr_sequence ()) with
      | Ok arg -> result := App { func = !result; arg = arg };
      | _ -> is_looping := false;
      ;
    done;
    Ok !result
  )
  | _ -> Error (SyntaxError "cannot parse expression (funcapp)") *)

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

(* e -> v *)
(* e -> x *)
(* e -> (e) *)
(* e -> if e1 then e2 else e3 *)
and parse_expr_top () =
  match (parse_value ()) with
    | Ok value -> print_debug ("successfully parsed value " ^ show_value value); Ok (Value value)
    | _ -> (
      match (parse_variable ()) with
      | Ok id -> print_debug ("successfully parsed variable " ^ show_id id); Ok (EVar id)
      | _ -> (
        let stack = !tokens in
        match (List.hd !tokens) with
        | Some LPAREN -> tokens :=  List.drop !tokens 1; (
          match (parse_expr ()) with
          | Ok e' -> (
            print_debug ("\n---> found e " ^ Syntax.show_expression e');
            match (List.hd !tokens) with
            | Some RPAREN -> tokens := List.drop !tokens 1; Ok e'
            | _ -> tokens := stack; Error (SyntaxError "cannot parse expression (missing right paren)")
          )
          | _ -> tokens := stack; Error (SyntaxError "cannot parse expression (unclosed left paren)")
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
                  | _ -> tokens := stack; Error (SyntaxError "cannot parse expression (unclosed else)")
                )
                | _ -> tokens := stack; Error (SyntaxError "cannot parse expression (missing else)")
              )
              | _ -> tokens := stack; Error (SyntaxError "cannot parse expression (unclosed then)")
            )
            | _ -> tokens := stack; Error (SyntaxError "cannot parse expression (missing then)")
          )
          | _ -> tokens := stack; Error (SyntaxError "cannot parse expression (unclosed if)")
        )
        | _ -> Error (SyntaxError "TODO: other cases")
      )
    )

(* TODO: patterns, types, data types, bindings *)

let parse_main () =
  let is_looping = ref true in
  let is_valid = ref true in
  let result = ref [] in
  while !is_looping do 
    match (List.hd !tokens) with
    | Some EOF -> is_looping := false;
    | _ -> (
      match (parse_expr ()) with
      | Ok e -> result := e::(!result);
      | _ -> is_looping := false; is_valid := false;
    )
    ;
  done;
  if !is_valid then List.rev !result else [Value (Lit (Str "failed"))]

let parse (tks : token list) = tokens := tks; parse_main ()
