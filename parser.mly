%token EOF
%token <string> ID

(* symbols *)
%token LPAREN RPAREN LBRACE RBRACE LBRACKET RBRACKET
%token PLUS MINUS TIMES DIV
%token EQUALS GREATER LESS
%token PARA BAR
%token DOT ARROW COLON COMMA

(* types *)
%token NAT INT BOOL STRING

(* keywords *)
%token CASE END ELSE FALSE IF IN LAMBDA LET NOT OF 
%token THEN TRUE TYPE

%token <float> NUM
%token <string> STR

%start <unit> main
%%
main:
  | NUM { () }
  | LPAREN; main; RPAREN { () }
  ;
