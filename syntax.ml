(*
  These datatypes are loosely based on the ESTree specification:
  https://github.com/estree/estree/blob/14df8a024956ea289bd55b9c2226a1d5b8a473ee/es5.md
  https://github.com/estree/estree/blob/70d58d73f69a3a72b51ed3fb540fae2550160619/es2015.md

  If a type definition is preceded by a CamelCase name, that indicates that that
  type is meant to roughly correspond to the ESTree type of the same name.
*)

(* Identifier *)
type id =
  { name : string;
  }
[@@deriving show { with_path = false }]

and typ =
  | Func of func_typ
  | Prod of prod_typ
  | Typ of tycon
  | DTyp of dtyp
  | Nat
  | Int
  | Bool
[@@deriving show { with_path = false }]

and func_typ =
  { domain : typ;
    codomain : typ;
  }
[@@deriving show { with_path = false }]

and prod_typ = typ list
[@@deriving show { with_path = false }]

and dtyp = typeable list

and typeable =
  { id : id;
    typ : typ option;
  }
[@@deriving show { with_path = false }]

(* Literal *)
and lit =
  | Str of string
  | Bool of bool
  | Num of float
[@@deriving show { with_path = false }]

and var = id

and tycon = id

and dcon = id

and pattern =
  | PVar of var
  | PPair of ppair
  | PCon of pcon

and ppair =
  {
    left : pattern;
    right : pattern;
  }

and pcon =
  {
    constructor : dcon;
    pattern : pattern;
  }

and value = 
  | Lit of lit
  | UnOp of unary_op
  | BinOp of binary_op
  | VPair of vpair
  | VCon of vcon
  | Lambda of lambda

and unary_op = 
  | Not

and binary_op =
  | And
  | Or

and vpair = 
  {
    left : value;
    right : value;
  }

and vcon =
  {
    constructor : dcon;
    value : value
  }

and lambda =
  {
    params : pattern;
    body : expression
  }

and expression =
  | EVar of var
  | Value of value
  | Infix of infix
  | Sequential of sequential
  | Parallel of parallel
  | Case of case
  | If of if_then_else
  | App of fn_app
  | Bindings of let_binding

and infix =
  {
    op : operator;
    left : expression;
    right : expression;
  }

and sequential =
  {
    first : expression;
    second : expression;
  }

and parallel =
  {
    left : expression;
    right : expression
  }

and case =
  {
    sum : expression;
    branches : case_branch list
  }
and case_branch =
  {
    pattern : pattern;
    exp : expression
  }

and if_then_else = 
  {
    guard : expression;
    if_branch : expression;
    else_branch : expression;
  }

and fn_app =
  {
    func : expression;
    arg : expression;
  }

and let_binding =
  {
    bindings : binding list;
    exp : expression;
  }

and operator =
  | Plus
  | Minus
  | Times
  | Divide
  | Less
  | Greater
  | Equals
  | Or
  | And

and binding = 
  | FBind of func_binding
  | PBind of pattern_binding
  | TBind of type_binding
  | DBind of dtyp_binding

and func_binding =
  {
    name : id;
    args : pattern;
    body : expression;
  }

and pattern_binding =
  {
    pattern : pattern;
    exp : expression;
  }

and type_binding =
  {
    name : tycon;
    typ : typ;
  }

and dtyp_binding =
  {
    name : tycon;
    dty : dtyp;
  }
