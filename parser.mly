%{
  open Syntax
%}

(* symbols *)
%token LPAREN RPAREN LBRACE RBRACE LBRACKET RBRACKET
%token PLUS MINUS TIMES DIV
%token EQUALS GREATER LESS
%token PARA BAR
%token DOT ARROW COMMA TO COLON

(* types *)
%token NAT INT BOOL STRING

(* keywords *)
%token CASE END ELSE FALSE IF IN LAMBDA LET NOT OF 
%token THEN TRUE TYPE DATATYPE AND OR

%token <string> ID
%token <float> NUM
%token <string> STR
%token EOF

%start <main> main
%%
main:
  | el = list(expression); EOF { el }
  ;

id:
  | x = ID { { name = x } }
  ;

var:
  | x = id { x }
  ;

tycon:
  | x = id { x }
  ;

dcon:
  | x = id { x }
  ;

pattern:
  | x = var { PVar x }
  | LPAREN; p = pattern; RPAREN { p }
  | p1 = pattern; COMMA; p2 = pattern { PPair { p1 = p1; p2 = p2 } }
  | d = dcon; LPAREN; p = pattern; RPAREN { PCon { pconstructor = d; pattern = p } }
  ;

typ:
  | n = ntyp { n }
  | d = dty { DTyp d }

ntyp:
  | t = typ_prod { t }
  | t = typ_noprod { t }
  ;

typ_prod:
  | t1 = typ; TO; t2 = typ; { Func { domain = t1; codomain = t2 } }
  | t1 = typ_noprod; TIMES; tail = typ_tail { 
    match tail with
    | (false, Prod t2) -> Prod (t1::t2)
    | (_, t2) -> Prod [t1; t2]
   }
  ;

typ_tail:
  | t = typ { (false, t) }
  | LPAREN; t = typ; RPAREN { (true, t) }
  ;

typ_noprod:
  | NAT { Nat }
  | INT { Int }
  | BOOL { Boolean }
  | LPAREN; t = typ; RPAREN { t }
  | t = tycon { Typ t }
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
  | n = NUM { Lit (Num n) }
  | TRUE { Lit (Bool true) }
  | FALSE { Lit (Bool false) }
  | NOT { UnOp Not }
  | AND { BinOp And }
  | OR { BinOp Or }
  | v1 = value; COMMA; v2 = value { VPair { v1 = v1; v2 = v2 } }
  | LPAREN; v = value; RPAREN { v }
  | d = dcon; LPAREN; v = value; RPAREN { VCon { vconstructor = d; value = v } }
  | LAMBDA; p = pattern; DOT; e = expression { Lambda { params = p; body = e } }
  ;

expression:
  | e = expression_noapp { e }
  // function application is left-associative
  | e1 = expression_noapp; e2 = expression { App { func = e1; arg = e2 } }
  ;
expression_noapp:
  // maybe split into expression without binding and with bindings (like for if/then/else)
  | x = var { EVar x }
  | v = value { Value v }
  | b = binding { TopLevelBinding b }
  | e1 = expression; op = operator; e2 = expression { Infix { op = op; e1 = e1; e2 = e2 } }
  | e1 = expression; COMMA; e2 = expression { Sequential { first = e1; second = e2 } }
  | e1 = expression; PARA; e2 = expression { Parallel { left = e1; right = e2 } }
  | LPAREN; e = expression; RPAREN { e }
  | CASE; e1 = expression; branches = nonempty_list(case_branch) { Case { sum = e1; branches = branches } }
  | IF; e1 = expression; THEN; e2 = expression; ELSE; e3 = expression { If { guard = e1; then_branch = e2; else_branch = e3 } }
  | LET; bl = nonempty_list(binding); IN; e = expression; END { Bindings { bindings = bl; usage = e } }
  ;
case_branch:
  | BAR; p = pattern; ARROW; e = expression { { matchp = p; exp = e } }
  ;

operator:
  | PLUS { Plus }
  | MINUS { Minus }
  | TIMES { Times }
  | DIV { Divide }
  | LESS { Less }
  | GREATER { Greater }
  | EQUALS { Equals }
  | OR { Or }
  | AND { And }
  ;

binding:
  | x = var; LPAREN; p = pattern; RPAREN; EQUALS; e = expression { FBind { func_name = x; func_args = p; func_body = e } }
  | p = pattern; EQUALS; e = expression { PBind { bind_pattern = p; bind_exp = e } }
  | TYPE; n = tycon; EQUALS; t = ntyp { TBind { typ_name = n; bind_typ = t } }
  | DATATYPE; n = tycon; EQUALS; t = dty { DBind { dtyp_name = n; bind_dty = t }}
  ;
