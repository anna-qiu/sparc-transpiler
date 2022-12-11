%token EOF
%token <string> ID

(* symbols *)
%token LPAREN RPAREN LBRACE RBRACE LBRACKET RBRACKET
%token PLUS MINUS TIMES DIV
%token EQUALS GREATER LESS
%token PARA BAR
%token DOT ARROW COLON COMMA TO

(* types *)
%token NAT INT BOOL STRING

(* keywords *)
%token CASE END ELSE FALSE IF IN LAMBDA LET NOT OF 
%token THEN TRUE TYPE AND OR

%token <float> NUM
%token <string> STR

%start <unit> main
%%
main:
  | NUM { () }
  | LPAREN; main; RPAREN { () }
  ;

var:
  | x = ID { { name = x } }

tycon:
  | x = ID { { name = x } }
  ;

dcon:
  | x = ID { { name = x } }
  ;

pattern:
  | v = var { PVar x }
  | LPAREN; p = pattern; RPAREN { p }
  | p1 = pattern; COMMA; p2 = pattern { PPair { left = p1; right = p2 } }
  | d = dcon; LPAREN; p = pattern; RPAREN { PCon { constructor = d; pattern = p } }
  ;

type:
  | t = type_noprod { t }
  | tl = separated_nonempty_list(TIMES, type_noprod) { Prod tl }

type_noprod:
  | NAT { Nat }
  | INT { Int }
  | BOOL { Bool }
  | LPAREN; t = type; RPAREN { t }
  | t1 = type; TO; t2 = type { Func { domain = t1; codomain = t2 } }
  | t = tycon { Typ t }
  | d = dty { DTyp d }
  ;

dty:
  | dl = separated_list(BAR, dty_one) { dl }
  ;
dty_one:
  | d = dcon; op = option(dty_oftyp) { { id = d; typ = op } }
  ;
dty_oftyp:
  | OF; t = typ { t }
  ;

value:
  | n = NUM { Num n }
  | TRUE { Bool true }
  | FALSE { Bool false }
  | NOT { Not }
  | AND { And }
  | OR { Or }
  | v1 = value; COMMA; v2 = value { Pair { left = v1; right = v2 } }
  | LPAREN; v = value; RPAREN { v }
  | d = dcon; LPAREN; v = value; RPAREN { Con { constructor = dcon; value = v } }
  | LAMBDA; p = pattern; DOT; e = expression { Lambda { params = p; body = e } }
  ;

expression:
  // maybe split into expression without binding and with bindings (like for if/then/else)
  | x = var { EVar x }
  | v = value { Value v }
  | e1 = expression; op = operator; e2 = expression { op = op; left = e1; right = e2 }
  | e1 = expression; COMMA; e2 = expression { Sequential { first = e1; second = e2 } }
  | e1 = expression; PARA; e2 = expression { Parallel { left = e1; right = e2 } }
  | LPAREN; e = expression; RPAREN { e }
  | CASE; e1 = expression; branches = nonempty_list(case_branch) { Case { sum = e1; branches = branches } }
  | IF; e1 = expression; THEN; e2 = expression; ELSE; e3 = expression { If { guard = e1; if_branch = e2; then_branch = e3 } }
  | e1 = expression; e2 = expression { App { func = e1; arg = e2 } }
  | LET; bl = nonempty_list(binding); IN; e = expression; END { Bindings { bindings = bl; exp = e } }
  ;
case_branch:
  | BAR; p = pattern; ARROW; e = expression { { pattern = pl exp = e } }

operator:
  | PLUS { Plus }
  | MINUS { Minus }
  | TIMES { Times }
  | DIVIDE { Divide }
  | LESS { Less }
  | GREATER { Greater }
  | EQUALS { Equals }
  | OR { Or }
  | AND { And }
  ;

binding:
  | x = var; LPAREN; p = pattern; RPAREN; EQUALS; e = expression { FBind { name = x; args = p; body = e } }
  | p = pattern; EQUALS; e = expression { PBind { pattern = p; exp = e } }
  | TYPE; n = tycon; EQUALS; t = typ { TBind { name = n; typ = t } }
  | TYPE; n = tycon; EQUALS; t = dty { name = n; dty = t }
  ;
