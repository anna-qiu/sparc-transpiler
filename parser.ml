open! Core

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

let parse_variable () =
  match (List.hd tokens) with
  (* x -> id *)
  | Some ID x -> tokens := List.drop !tokens 1; Ok { name = x }
  | _ -> Error SyntaxError "cannot parse variable"

let parse_tycon () = 
  match (List.hd tokens) with
  (* tycon -> id *)
  | Some ID x -> tokens := List.drop !tokens 1; Ok { name = x }
  | _ -> Error SyntaxError "cannot parse tycon"

let parse_dcon () = 
  match (List.hd tokens) with
  (* dcon -> id *)
  | Some ID x -> tokens := List.drop !tokens 1; Ok { name = x }
  | _ -> Error SyntaxError "cannot parse dcon"

(****
--------parse values--------
TODO: didn't reason about precedence yet, should probably test on the simple ones first
****)
let parse_value () = 
  match (List.hd tokens) with
  (* v -> numbers *)
  | Some NUM n -> tokens := List.drop !tokens 1; Ok (Lit (Num n))
  (* v -> booleans *)
  | Some TRUE -> tokens := List.drop !tokens 1; Ok (Lit (Bool true))
  | Some FALSE -> tokens := List.drop !tokens 1; Ok (Lit (Bool false))
  (* v -> unary operators *)
  | Some NOT -> tokens := List.drop !tokens 1; Ok (Lit (UnOp Not))
  (* v -> binary operators *) (* TODO: do we really need this *)
  | PLUS -> tokens := List.drop !tokens 1; Ok (Binop Plus)
  | MINUS -> tokens := List.drop !tokens 1; Ok (Binop Minus)
  | TIMES -> tokens := List.drop !tokens 1; Ok (Binop Times)
  | DIV -> tokens := List.drop !tokens 1; Ok (Binop Divide)
  | LESS -> tokens := List.drop !tokens 1; Ok (Binop Less)
  | GREATER -> tokens := List.drop !tokens 1; Ok (Binop Greater)
  | EQUALS -> tokens := List.drop !tokens 1; Ok (Binop Equals)
  | OR -> tokens := List.drop !tokens 1; Ok (Binop Or)
  | AND -> tokens := List.drop !tokens 1; Ok (Binop And)
  (* TODO: *)
  (* v -> v1,v2 *)
  (* v -> (v) *)
  (* v -> dcon(v) *)
  (* v -> lambda p.e *)
  | _ -> Error SyntaxError "TODO: other cases"

(****
--------parse expressions--------
precedence:
- x, v, (e), case e1 ..., let ... in ... end
- e1 op e2   
- TODO: what about e1, e2 and e1 || e2?
****)
let parse_expr () =
  parse_expr_binop ()
  (* TODO: *)
  (* e -> e1, e2 *)
  (* e -> e1 || e2 *)
  (* e -> case e1 ... *)
  (* e -> e1 e2 *)
  (* e -> let b+ in e end *)

(* e -> e1 op e2 *)
let parse_expr_binop () =
  let stack = !tokens in
  match (parse_expr ()) with
  | Ok e1 -> (
    let result = ref e1 in
    let is_looping = ref true in 
    let is_valid = ref true in
    while is_looping do
      let op = ref None in
      match (List.hd tokens) with
      | PLUS -> tokens := List.drop !tokens 1; op := Plus;
      | MINUS -> tokens := List.drop !tokens 1; op := Minus;
      | TIMES -> tokens := List.drop !tokens 1; op := Times;
      | DIV -> tokens := List.drop !tokens 1; op := Divide;
      | LESS -> tokens := List.drop !tokens 1; op := Less;
      | GREATER -> tokens := List.drop !tokens 1; op := Greater;
      | EQUALS -> tokens := List.drop !tokens 1; op := Equals;
      | OR -> tokens := List.drop !tokens 1; op := Or;
      | AND -> tokens := List.drop !tokens 1; op := And;
      | _ -> is_looping := false; 
        (match (parse_expr_top ()) with
        | Ok e2 -> left := Infix { op = op; e1 = !left, e2 = e2};
        | _ -> tokens := stack; is_looping := false; is_valid := false;
        )
    done;
    if is_valid then Ok !result else Error SyntaxError "cannot parse expression (binop)"
  )
  | _ -> Error SyntaxError "cannot parse expression (binop)"
    
let parse_expr_top () =
  (* e -> x *)
  match (parse_variable ()) with
    | Ok id -> Ok id
    | _ -> (
      (* e -> v *)
      match (parse_value ()) with
      | Ok value -> Ok value
      | _ -> (
        (* e -> (e) *)
        let stack = !tokens in
        match (List.hd tokens) with
        | LPAREN -> List.drop !tokens 1; (
          match (parse_expr ()) with
          | Ok e' -> (
            match (List.hd tokens) with
            | RPAREN -> Ok e'
            | _ -> tokens := stack; Error SyntaxError "cannot parse expression (top)"
          )
          | _ -> tokens := stack; Error SyntaxError "cannot parse expression (top)"
        )
        | _ -> Error SyntaxError "TODO: other cases"
      )
    )

let tokens = ref [];

(* let parse_file (tokens : Lexing.lexbuf) = () *)
let main _ _ = ()