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
  | Boolean
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
[@@deriving show { with_path = false }]

and tycon = id
[@@deriving show { with_path = false }]

and dcon = id
[@@deriving show { with_path = false }]

and pattern =
  | PVar of var
  | PPair of ppair
  | PCon of pcon
[@@deriving show { with_path = false }]

and ppair =
  {
    p1 : pattern;
    p2 : pattern;
  }
[@@deriving show { with_path = false }]

and pcon =
  {
    pconstructor : dcon;
    pattern : pattern;
  }
[@@deriving show { with_path = false }]

and value = 
  | Lit of lit
  | UnOp of un_op
  | BinOp of bin_op
  | VPair of vpair
  | VCon of vcon
  | Lambda of lambda
[@@deriving show { with_path = false }]

and un_op = 
  | Not
[@@deriving show { with_path = false }]

(* and binary_op =
  | And
  | Or
[@@deriving show { with_path = false }] *)

and vpair = 
  {
    v1 : value;
    v2 : value;
  }
[@@deriving show { with_path = false }]

and vcon =
  {
    vconstructor : dcon;
    value : value
  }
[@@deriving show { with_path = false }]

and lambda =
  {
    params : pattern;
    body : expression
  }
[@@deriving show { with_path = false }]

and expression =
  | EVar of var
  | Value of value
  | Infix of infix
  | Unary of unary
  | Sequential of sequential
  | Parallel of parallel
  | Case of case
  | If of if_then_else
  | App of fn_app
  | Bindings of let_binding
  | TopLevelBinding of binding
[@@deriving show { with_path = false }]

and infix =
  {
    op : bin_op;
    e1 : expression;
    e2 : expression;
  }
[@@deriving show { with_path = false }]

and unary =
  {
    unary_op : un_op;
    e : expression;
  }
[@@deriving show { with_path = false }]

and sequential =
  {
    first : expression;
    second : expression;
  }
[@@deriving show { with_path = false }]

and parallel =
  {
    left : expression;
    right : expression
  }
[@@deriving show { with_path = false }]

and case =
  {
    sum : expression;
    branches : case_branch list
  }
[@@deriving show { with_path = false }]
and case_branch =
  {
    matchp : pattern;
    exp : expression
  }
[@@deriving show { with_path = false }]

and if_then_else = 
  {
    guard : expression;
    then_branch : expression;
    else_branch : expression;
  }
[@@deriving show { with_path = false }]

and fn_app =
  {
    func : expression;
    arg : expression;
  }
[@@deriving show { with_path = false }]

and let_binding =
  {
    bindings : binding list;
    usage : expression;
  }
[@@deriving show { with_path = false }]

and bin_op =
  | Plus
  | Minus
  | Times
  | Divide
  | Less
  | Greater
  | Equals
  | Or
  | And
[@@deriving show { with_path = false }]

and binding = 
  | FBind of func_binding
  | PBind of pattern_binding
  | TBind of type_binding
  | DBind of dtyp_binding
[@@deriving show { with_path = false }]

and func_binding =
  {
    func_name : id;
    func_args : pattern;
    func_body : expression;
  }
[@@deriving show { with_path = false }]

and pattern_binding =
  {
    bind_pattern : pattern;
    bind_exp : expression;
  }
[@@deriving show { with_path = false }]

and type_binding =
  {
    typ_name : tycon;
    bind_typ : typ;
  }
[@@deriving show { with_path = false }]

and dtyp_binding =
  {
    dtyp_name : tycon;
    bind_dty : dtyp;
  }
[@@deriving show { with_path = false }]

and main = expression list
[@@deriving show { with_path = false }]
