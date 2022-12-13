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

let parse_binop () = 
  match (List.hd tokens) with
  | PLUS -> tokens := List.drop !tokens 1; Ok Plus
  | MINUS -> tokens := List.drop !tokens 1; Ok Minus
  | TIMES -> tokens := List.drop !tokens 1; Ok Times
  | DIV -> tokens := List.drop !tokens 1; Ok Divide
  | LESS -> tokens := List.drop !tokens 1; Ok Less
  | GREATER -> tokens := List.drop !tokens 1; Ok Greater
  | EQUALS -> tokens := List.drop !tokens 1; Ok Equals
  | OR -> tokens := List.drop !tokens 1; Ok Or
  | AND -> tokens := List.drop !tokens 1; Ok And
  | _ -> Error SyntaxError "cannot parse binop"

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
  | _ -> Error SyntaxError "cannot parse value"

let parse_variable () =
  match (List.hd tokens) with
  (* x -> id *)
  | Some ID x -> tokens := List.drop !tokens 1; Ok { name = x }
  | _ -> Error SyntaxError "cannot parse variable"

let parse_expr () =
  let stack = !tokens in
  (* e -> e1 op e2 *)
  match (parse_value (), parse_binop (), parse_expr()) with
    | (Ok e1, Ok op, Ok e2) -> Ok (Infix { op = op; e1 = e1; e2 = e2 })
    | _ -> (
      tokens := stack;
      (* TODO: *)
      (* e -> e1, e2 *)
      (* e -> e1 || e2 *)
      (* e -> (e) *)
      (* e -> case e1 ... *)
      (* e -> e1 e2 *)
      (* e -> let b+ in e end *)

      (* e -> x *)
      match (parse_variable ()) with
      | Ok id -> Ok id
      | _ -> (
        (* e -> v *)
        match (parse_value ()) with
        | Ok value -> Ok value
        | _ -> Error SyntaxError "cannot parse expression"
      )
    )

(* let parse_file (tokens : Lexing.lexbuf) = () *)
let main _ _ = ()