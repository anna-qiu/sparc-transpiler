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
  | "//" [^'\n']* '\n' { token lexbuf }
  | "/*" ([^'*']|('*' [^'/']))* '*' ['*']* '/' { token lexbuf }

  (* types *)
  | "any" { ANY }
  | "boolean" { BOOLEAN }
  | "number" { NUMBER }
  | "string" { STRING }
  | "void" { VOID }

  (* keywords *)
  | "as" { AS }
  | "const" { CONST }
  | "do" { DO }
  | "else" { ELSE }
  | "false" { FALSE }
  | "for" { FOR }
  | "function" { FUNCTION }
  | "if" { IF }
  | "import" { IMPORT }
  | "in" { IN }
  | "instanceof" { INSTANCEOF }
  | "interface" { INTERFACE }
  | "let" { LET }
  | "return" { RETURN }
  | "true" { TRUE }
  | "while" { WHILE }

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
  | "&&" { AND }
  | "||" { OR }
  | '!' { NOT }
  | "===" { EQUALS }
  | '>' { GREATER }
  | '<' { LESS }
  | ';' { SEMICOLON }
  | '.' { DOT }
  | "=>" { ARROW }
  | ':' { COLON }
  | '=' { ASSIGN }
  | ',' { COMMA }

  (* literals *)
  | '"' { read_string (Buffer.create 17) lexbuf }
  | digit+ '.'? digit* exponent? as n { NUM (float_of_string n) }
  | '.' digit+ exponent? as n { NUM (float_of_string n) }
  | id_begin id_token* as s { ID s }

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