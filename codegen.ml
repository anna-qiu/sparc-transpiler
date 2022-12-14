open! Syntax
open! Core

let character_limit = 80
let tab_size = 2

(* redefine list.append as infix @ *)
let (@) l1 l2 = List.append l1 l2

(* indent a list of code strings *)
let rec indent ?(skip_first = true) ?(depth = 1) = function
  | [] -> []
  | hd :: tl ->
      if skip_first
      then hd :: (indent ~skip_first:false ~depth tl)
      else 
        (String.make (depth * tab_size) ' ' ^ hd) :: (indent ~skip_first:false ~depth tl)
let indent_all ?(depth = 1) = indent ~skip_first:false ~depth

let combine (first : string) = function
  | [] -> [ first ]
  | hd :: tl -> indent ((first ^ " " ^ hd) :: tl)
let combine' = function
  | [] -> []
  | hd :: tl -> combine hd tl

(* add a prefix to the first string in the list *)
let prefix ~(prefix : string) : string list -> string list = function 
  | [] -> [ prefix ]
  | hd :: tl -> (prefix ^ hd) :: tl
(* add a suffix to the last string in the list *)
let suffix ~(suffix : string) : string list -> string list = function
  | [] -> [ suffix ]
  | lst -> 
      (match List.rev lst with
      | [] -> failwith "can't be the empty list"
      | tl :: hd -> List.rev ((tl ^ suffix) :: hd))
let join ~(joiner : string) ?(with_space = true)
  : string list -> string list -> string list = function
  (* | [], [] -> [ joiner ] *)
  | [] -> failwith "join should not get empty halves (l1)"
  | l1 -> function 
    | [] -> failwith "join should not get empty halves (l2)"
    | hd2 :: tl2 -> 
        (match List.rev l1 with
        | [] -> 
            failwith "join should not get empty halves (should never get here)"
        | tl1 :: hd1 -> 
            if with_space
            then (List.rev hd1) @ [tl1 ^ " " ^ joiner ^ " " ^ hd2] @ tl2
            else (List.rev hd1) @ [tl1 ^ joiner ^ hd2] @ tl2)
let rec join_list ~(joiner : string) : string list list -> string list = function
  | [] -> []
  | [x] -> x
  | [x ; y] -> join ~joiner x y
  | hd :: tl -> join ~joiner hd (join_list ~joiner tl)

let gen_var { name : string } : string = name
let gen_dcon { name : string } : string = name
let gen_tycon { name : string } : string = name
let gen_un_op (op : un_op) : string = String.lowercase (show_un_op op)
let gen_bin_op (op : bin_op) : string = String.lowercase (show_bin_op op)

let rec gen_typ : typ -> string list = function
  | TParen typ -> gen_typ typ |> prefix ~prefix:"(" |> suffix ~suffix:")"
  | Func { domain ; codomain } ->
      join ~joiner:"->"
      (gen_typ domain)
      (gen_typ codomain)
  | Prod tl -> List.map ~f:gen_typ tl |> join_list ~joiner:"*"
  | Typ tycon -> [ gen_tycon tycon ]
  | DTyp dtyp -> gen_dtyp dtyp
  | Nat -> [ "int" ]
  | Int -> [ "int" ]
  | Boolean -> [ "bool" ]
  | TUnit -> [ "unit" ]

and gen_dtyp (dl : dtyp) : string list = 
  List.map ~f:(fun { id ; typ } -> 
    let { name } = id in
    match typ with
    | Some typ -> combine (name ^ " of") (gen_typ typ)
    | None -> [ name ]
  ) dl
  |> join_list ~joiner:"|"

and gen_pattern ?(add_parens = true) : pattern -> string list = function
  | PVar var -> [ gen_var var ]
  | PPair { p1 ; p2 } -> 
      (match 
        gen_pattern ~add_parens:false p1, gen_pattern ~add_parens:false p2 
      with
      | ([], _ | _, []) -> failwith "ppair: should never have empty pattern lists"
      | p1', p2' -> join ~joiner:", " ~with_space:false p1' p2')
      |> fun lst -> 
          if add_parens
          then lst |> prefix ~prefix:"(" |> suffix ~suffix:")"
          else lst
  | PCon { pconstructor ; pattern } -> 
      let con = gen_dcon pconstructor in
      let vals = gen_pattern ~add_parens:false pattern 
                 |> prefix ~prefix:"(" |> suffix ~suffix:")" 
      in
      (match List.length vals with
      | 0 -> failwith "pcon: should never have an empty value list"
      | _ -> combine con vals)
  | PParen p -> gen_pattern ~add_parens:false p 
                |> prefix ~prefix:"(" |> suffix ~suffix:")"
  | PUnit -> [ "()" ]

and gen_value ?(add_parens = true) : value -> string list = function
  | VParen v -> gen_value ~add_parens:false v 
                |> prefix ~prefix:"(" |> suffix ~suffix:")"
  | Lit (Str s) -> [ s ]
  | Lit (Bool b) -> [ Bool.to_string b ]
  | Lit (Num n) -> [ Float.to_string n ]
  | UnOp op -> [ gen_un_op op ]
  | BinOp op -> [ gen_bin_op op ]
  | VPair { v1 ; v2 } -> 
      (match gen_value v1, gen_value v2 with
      | ([], _ | _, []) -> failwith "vpair: should never have empty value lists"
      | v1', v2' -> join ~joiner:", " ~with_space:false v1' v2')
  | VCon { vconstructor ; value } -> 
      let con = gen_dcon vconstructor in
      let vals = gen_value ~add_parens:false value 
                 |> prefix ~prefix:"(" |> suffix ~suffix:")" 
      in
      combine con vals
  | Lambda { params ; body } -> 
      let header = gen_pattern ~add_parens:false params |> prefix ~prefix:"fn (" |> suffix ~suffix:") =>" in
      (match header with
      | [] -> failwith "lambda: should never have an empty header list"
      | lst -> 
          join ~joiner:" " ~with_space:false 
          header 
          (gen_expression body))
  | VUnit -> [ "()" ]

and gen_binding : binding -> string list = function
  | FBind { func_name ; func_args ; func_body } -> 
      let { name } = func_name in
      let header = gen_pattern ~add_parens:false func_args 
                    |> prefix ~prefix:("fun " ^ name ^ " (")
                    |> suffix ~suffix:") ="
      in
      let body = gen_expression func_body in
      join ~joiner:" " ~with_space:false header body
  | PBind { bind_pattern ; bind_exp } -> 
      let pat = gen_pattern bind_pattern 
                |> prefix ~prefix:"val "
                |> suffix ~suffix:" ="
      in
      let exp = gen_expression bind_exp in
      join ~joiner:" " ~with_space:false pat exp
  | TBind { typ_name ; bind_typ } -> 
      let name = "type " ^ gen_tycon typ_name ^ " =" in
      let typ = gen_typ bind_typ in
      combine name typ
  | DBind { dtyp_name ; bind_dty } -> 
      let name = "type " ^ gen_tycon dtyp_name ^ " =" in
      let dtyp = gen_dtyp bind_dty in
      combine name dtyp

and gen_expression : expression -> string list = function
  | EParen e -> gen_expression e |> prefix ~prefix:"(" |> suffix ~suffix:")"
  | EVar { name } -> [ name ]
  | Value v -> gen_value v
  | Infix { op ; e1 ; e2 } -> 
      join ~joiner:(gen_bin_op op)
      (gen_expression e1)
      (gen_expression e2)
  | Unary { unary_op ; e } ->
      combine (gen_un_op unary_op) (gen_expression e)
  | Sequential { first ; second } ->
      join ~joiner:", " ~with_space:false
      (gen_expression first)
      (gen_expression second)
  | Parallel { left ; right } ->
      let left' = gen_expression left 
                  |> prefix ~prefix:"fn () => "
      in
      let right' = gen_expression right 
                   |> prefix ~prefix:"fn () => "
      in
      join ~joiner:", " ~with_space:false left' right'
      |> prefix ~prefix:"Primitivies.par ("
      |> suffix ~suffix:")"
  | Case { sum ; branches } ->
      let gen_branch ({ matchp ; exp } : case_branch) : string list = 
        join ~joiner:"=>" 
        (gen_pattern matchp) 
        (gen_expression exp)
      in
      let header = gen_expression sum 
                 |> prefix ~prefix:"case "
                 |> suffix ~suffix:" of"
      in
      let branches = List.map ~f:gen_branch branches 
                     |> List.map ~f:(indent ~depth:2) 
      in
      let (first, rest) = List.split_n branches 1 in
      let first = List.hd_exn first in
      let first' = first |> indent_all |> indent in
      let rest' = List.map ~f:(prefix ~prefix:"| ") rest |> List.concat in
      let branches' = first' @ rest' in
      header @ branches'
  | If { guard ; then_branch ; else_branch } -> 
      let guard' = gen_expression guard |> prefix ~prefix:"if " in
      let then_branch' = gen_expression then_branch |> prefix ~prefix:"then " in
      let else_branch' = gen_expression else_branch |> prefix ~prefix:"else " in
      guard' @ then_branch' @ else_branch'
  | App { func ; arg } ->
      join ~joiner:" " ~with_space:false
      (gen_expression func)
      (gen_expression arg)
  | LocalBinding { bindings ; usage } ->
      let bindings' = List.map ~f:gen_binding bindings 
                      |> List.concat 
                      |> indent_all 
      in
      let usage' = gen_expression usage |> indent_all in
      ["let"] @ bindings' @ ["in"] @ usage' @ ["end"]
  | GlobalBinding binding -> gen_binding binding
  | Typ2 _ -> failwith "idk what this is (yet)"

let codegen (main : main) : string list = 
  List.map ~f:gen_expression main 
  |> List.concat