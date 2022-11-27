{
open Parser 

exception SyntaxError of string
}

let whitespace = ' '|"\r\n"|'\n'|'\t'
let digit = ['0'-'9']
let letter = ['a'-'z' 'A'-'Z']
let id_begin = (letter|'_'|'$')
let id_token = (letter|digit|'_'|'$')
let exponent = ['e' 'E'] ['+' '-']? digit+

rule token = parse
  (* ignored stuff *)
  | whitespace { token lexbuf }

  (* types *)
  | "bool" { BOOL }
  | "int" { INT }
  | "nat" { NAT }
  | "string" { STRING }

  (* keywords *)
  | "case" { CASE }
  | "end" { END }
  | "else" { ELSE }
  | "false" { FALSE }
  | "if" { IF }
  | "in" { IN }
  | "lambda" { LAMBDA }
  | "let" { LET }
  | "not" { NOT }
  | "of" { OF }
  | "then" { THEN }
  | "true" { TRUE }
  | "type" { TYPE }

  (* symbols *)
  | '(' { LPAREN }
  | ')' { RPAREN }
  | '[' { LBRACKET }
  | ']' { RBRACKET }
  | '{' { LBRACE }
  | '}' { RBRACE }
  | '+' { PLUS }
  | '-' { MINUS }
  | '*' { TIMES }
  | '/' { DIV }
  | "||" { PARA }
  | '|' { BAR }
  | '>' { GREATER }
  | '<' { LESS }
  | '.' { DOT }
  | "=>" { ARROW }
  | ':' { COLON }
  | '=' { EQUALS }
  | ',' { COMMA }

  (* literals *)
  | '"' { read_string (Buffer.create 17) lexbuf }
  | digit+ '.'? digit* exponent? as n { NUM (float_of_string n) }
  | '.' digit+ exponent? as n { NUM (float_of_string n) }
  | id_begin id_token* '\''* as s { ID s }

  (* eof *)
  | eof { EOF }

  (* raise syntaxerror if can't be parsed *)
  | _ { raise (SyntaxError ("Unexpected char: " ^ Lexing.lexeme lexbuf)) }

(* string parsing from real world ocaml (modified to fit our definition of string literals) *)
and read_string buf =
  parse
  | '"'       { STR (Buffer.contents buf) }
  | '\\' '"'  { Buffer.add_char buf '"'; read_string buf lexbuf }
  | '\\' '\\' { Buffer.add_char buf '\\'; read_string buf lexbuf }
  | '\\' 'n'  { Buffer.add_char buf '\n'; read_string buf lexbuf }
  | '\\' 'r'  { Buffer.add_char buf '\r'; read_string buf lexbuf }
  | '\\' 't'  { Buffer.add_char buf '\t'; read_string buf lexbuf }
  | [^ '"' '\\' '\n' '\r']+
    { Buffer.add_string buf (Lexing.lexeme lexbuf);
      read_string buf lexbuf
    }
  | eof { raise (SyntaxError ("String is not terminated")) }
  | _ { raise (SyntaxError ("Illegal string character: " ^ Lexing.lexeme lexbuf)) }