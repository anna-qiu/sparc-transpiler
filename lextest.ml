open Core ;;

let show_token tok = let open Parser in
  match tok with
    | EOF -> "EOF"
    | ID x -> sprintf "ID %s" x

    (* symbols *)
    | LPAREN -> "LPAREN"
    | RPAREN -> "RPAREN"
    | LBRACKET -> "LBRACKET"
    | RBRACKET -> "RBRACKET"
    | LBRACE -> "LBRACE"
    | RBRACE -> "RBRACE"
    | PLUS -> "PLUS"
    | MINUS -> "MINUS"
    | TIMES -> "TIMES"
    | DIV -> "DIV"
    | NOT -> "NOT"
    | EQUALS -> "EQUALS"
    | GREATER -> "GREATER"
    | LESS -> "LESS"
    | DOT -> "DOT"
    | ARROW -> "ARROW"
    | COLON -> "COLON"
    | COMMA -> "COMMA"
    | TO -> "TO"
    | UNDERSCORE -> "UNDERSCORE"

    (* types *)
    | NAT -> "NAT"
    | INT -> "INT"
    | BOOL -> "BOOL"
    | STRING -> "STRING"

    (* keywords *)
    | LET -> "LET"
    | ELSE -> "ELSE"
    | FALSE -> "FALSE"
    | IF -> "IF"
    | TRUE -> "TRUE"
    | IN -> "IN"
    | TYPE -> "TYPE"
    | DATATYPE -> "DATATYPE"
    | THEN -> "THEN"
    | PARA -> "PARA"
    | OF -> "OF"
    | LAMBDA -> "LAMBDA"
    | END -> "END"
    | CASE -> "CASE"
    | BAR -> "BAR"

    | OR -> "OR"
    | AND -> "AND"

    | NUM n -> sprintf "NUM %g" n
    | STR s -> sprintf "STR %s" (Yojson.Basic.pretty_to_string (`String s))
in

let rec print_lex_all lexbuf = match Lexer.token lexbuf with
  | EOF -> ()
  | tok ->
    print_endline (show_token tok) ;
    print_lex_all lexbuf
in

print_lex_all (Lexing.from_string (In_channel.read_all "sparc/test.sparc"))
