open! Syntax
open! Core

let character_limit = ref 80
let tab_size = ref 2

(* redefine list.append as infix @ *)
let (@) l1 l2 = List.append l1 l2

(* indent a list of code strings *)
let rec indent ?(skip_first = true) ?(depth = 1) = function
  | [] -> []
  | hd :: tl ->
      if skip_first
      then hd :: (indent ~skip_first:false ~depth tl)
      else 
        (String.make (depth * !tab_size) ' ' ^ hd) :: (indent ~skip_first:false ~depth tl)
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

let parenthesize code = code |> prefix ~prefix:"(" |> suffix ~suffix:")"

let gen_var { name : string } : string = name
let gen_dcon { name : string } : string = name
let gen_tycon { name : string } : string = name
let gen_un_op (op : un_op) : string = String.lowercase (show_un_op op)
let gen_bin_op (op : bin_op) : string = String.lowercase (show_bin_op op)
let gen_infix_op : bin_op -> string = function
  | Plus -> "+"
  | Minus -> "-"
  | Times -> "*"
  | Divide -> "div"
  | Mod -> "mod"
  | Less -> "<"
  | Greater -> ">"
  | Equals -> "="
  | Or -> "orelse"
  | And -> "andalso"

let rec gen_typ : typ -> string list = function
  | TParen typ -> gen_typ typ |> parenthesize
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
          then lst |> parenthesize
          else lst
  | PCon { pconstructor ; pattern } -> 
      let con = gen_dcon pconstructor in
      let pats = match pattern with
                 | Some p -> gen_pattern ~add_parens:false p |> parenthesize 
                 | None -> []
      in
      (match List.length pats with
      | 0 -> [ con ]
      | _ -> combine con pats)
  | PParen p -> gen_pattern ~add_parens:false p |> parenthesize
  | PUnit -> [ "()" ]

and gen_value ?(add_parens = true) : value -> string list = function
  | VParen v -> gen_value ~add_parens:false v |> parenthesize
  | VVar { name } -> [ name ]
  | Lit (Str s) -> [ s ]
  | Lit (Bool b) -> [ Bool.to_string b ]
  | Lit (Num n) -> 
      if Float.is_integer n
      then 
        let n = Float.to_int n in
        let abs = Int.abs n |> Int.to_string in
        if Int.is_negative n then [ "~" ^ abs ] else [ abs ]
      else
        let abs = Float.abs n |> Float.to_string in
        if Float.is_negative n then [ "~" ^ abs ] else [ abs ]
  | UnOp op -> [ gen_un_op op ]
  | BinOp op -> [ gen_bin_op op ]
  | VPair { v1 ; v2 } -> 
      (match gen_value ~add_parens:false v1, gen_value ~add_parens:false v2 with
      | ([], _ | _, []) -> failwith "vpair: should never have empty value lists"
      | v1', v2' -> join ~joiner:", " ~with_space:false v1' v2')
      |> fun lst -> 
          if add_parens
          then lst |> parenthesize
          else lst
  | VCon { vconstructor ; value } -> 
      let con = gen_dcon vconstructor in
      let vals = match value with
                 | Some v -> gen_value ~add_parens:false v |> parenthesize 
                 | None -> []
      in
      (match List.length vals with
      | 0 -> [ con ]
      | _ -> combine con vals)
  | Lambda { params ; body } -> 
      let header = gen_pattern ~add_parens:false params 
                   |> prefix ~prefix:"fn " 
                   |> suffix ~suffix:" =>" 
      in
      (match header with
      | [] -> failwith "lambda: should never have an empty header list"
      | _ -> join ~joiner:" " ~with_space:false header (gen_expression body))
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
      let name = "datatype " ^ gen_tycon dtyp_name ^ " =" in
      let dtyp = gen_dtyp bind_dty in
      combine name dtyp

and gen_seqop : seq_op -> string list = function
  | Length es -> gen_expression es |> parenthesize |> prefix ~prefix:"Seq.length "
  | Empty -> [ "Seq.empty ()" ]
  | Singleton es -> gen_expression es |> parenthesize |> prefix ~prefix:"Seq.singleton "
  | Nth { nth_seq ; nth_idx } -> 
      join ~joiner:" " ~with_space:false
      (gen_expression nth_seq |> parenthesize)
      (gen_expression nth_idx |> parenthesize)
      |> prefix ~prefix:"Seq.nth "
  | Subseq { sub_seq ; start_idx ; end_idx } ->
      (* end - start + 1 *)
      join ~joiner:"-"
      (gen_expression end_idx |> parenthesize)
      (gen_expression start_idx |> parenthesize)
      |> suffix ~suffix:" + 1"
      (* (start, end - start + 1) *)
      |> join ~joiner:", " ~with_space:false
          (gen_expression start_idx)
      |> parenthesize
      (* Seq.subseq s (start, end - start + 1) *)
      |> join ~joiner:" " ~with_space:false
          (gen_expression sub_seq |> parenthesize)
      |> prefix ~prefix:"Seq.subseq "
  | Tabulate { tab_fn ; tab_len } ->
      let fn = 
        let { params ; body } = tab_fn in
        let header = gen_pattern ~add_parens:false params 
                     |> prefix ~prefix:"fn " 
                     |> suffix ~suffix:" =>" 
        in
        match header with
        | [] -> failwith "tab fn: should never have an empty header list"
        | _ -> join ~joiner:" " ~with_space:false header (gen_expression body)
                |> parenthesize
      in
      let len = gen_expression tab_len |> parenthesize in
      join ~joiner:" " ~with_space:false fn len
      |> prefix ~prefix:"Seq.tabulate "
  | Map { map_fn ; map_seq } ->
      let fn = 
        let { params ; body } = map_fn in
        let header = gen_pattern ~add_parens:false params 
                     |> prefix ~prefix:"fn " 
                     |> suffix ~suffix:" =>" 
        in
        match header with
        | [] -> failwith "map fn: should never have an empty header list"
        | _ -> join ~joiner:" " ~with_space:false header (gen_expression body)
                |> parenthesize
      in
      let seq = gen_expression map_seq |> parenthesize in
      join ~joiner:" " ~with_space:false fn seq
      |> prefix ~prefix:"Seq.map "
  | Filter { filter_fn ; filter_seq } ->
      let fn = 
        let { params ; body } = filter_fn in
        let header = gen_pattern ~add_parens:false params 
                     |> prefix ~prefix:"fn " 
                     |> suffix ~suffix:" =>" 
        in
        match header with
        | [] -> failwith "filter fn: should never have an empty header list"
        | _ -> join ~joiner:" " ~with_space:false header (gen_expression body)
                |> parenthesize
      in
      let seq = gen_expression filter_seq |> parenthesize in
      join ~joiner:" " ~with_space:false fn seq
      |> prefix ~prefix:"Seq.filter "
  | Append { append_left ; append_right } ->
      join ~joiner:", " ~with_space:false
      (gen_expression append_left)
      (gen_expression append_right)
      |> parenthesize
      |> prefix ~prefix:"Seq.append "

and gen_expression : expression -> string list = function
  | EParen e -> gen_expression e |> parenthesize
  | Value v -> gen_value v
  | Infix { op ; e1 ; e2 } -> 
      join ~joiner:(gen_infix_op op)
      (gen_expression e1 |> parenthesize)
      (gen_expression e2 |> parenthesize)
  | Unary { unary_op ; e } ->
      combine (gen_un_op unary_op) (gen_expression e |> parenthesize)
  | Sequential { first ; second } ->
      join ~joiner:", " ~with_space:false
      (gen_expression first |> parenthesize)
      (gen_expression second |> parenthesize)
      |> parenthesize
  | Parallel { left ; right } ->
      let left' = gen_expression left 
                  |> parenthesize
                  |> prefix ~prefix:"fn () => "
      in
      let right' = gen_expression right 
                   |> parenthesize
                   |> prefix ~prefix:"fn () => "
      in
      join ~joiner:", " ~with_space:false left' right'
      |> parenthesize
      |> prefix ~prefix:"Primitivies.par "
  | Case { sum ; branches } ->
      let gen_branch ({ matchp ; exp } : case_branch) : string list = 
        join ~joiner:"=>" 
        (gen_pattern matchp) 
        (gen_expression exp |> parenthesize)
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
      let then_branch' = gen_expression then_branch 
                         |> prefix ~prefix:"then " 
                         |> indent 
      in
      let else_branch' = gen_expression else_branch 
                         |> prefix ~prefix:"else " 
                         |> indent 
      in
      guard' @ then_branch' @ else_branch'
  | App { func ; arg } ->
      join ~joiner:" " ~with_space:false
      (gen_expression func |> parenthesize)
      (gen_expression arg |> parenthesize)
  | LocalBinding { bindings ; usage } ->
      let bindings' = List.map ~f:gen_binding bindings 
                      |> List.concat 
                      |> indent_all 
      in
      let usage' = gen_expression usage |> indent_all in
      ["let"] @ bindings' @ ["in"] @ usage' @ ["end"]
  | GlobalBinding binding -> gen_binding binding
  | SeqOp seq_op -> gen_seqop seq_op

(* parenmatch-ish thing to remove unnecessary parenthesis *)
(* suppress all the prints lmao *)
let print_endline _ = ()
let alpha : string = "abcdefghijklmnopqrstuvwxyz"
let gen_rand_str (seed : int) : string =
  Random.init seed;
  String.init ~f:(fun _ -> String.get alpha (Random.int 26)) 10
let scanincl ~f ~init = List.folding_map ~init ~f:(fun a e -> f a e, f a e)
let contains_breaks : string -> bool = 
  String.exists ~f:(List.mem ~equal:(Char.equal) [' '; ','; '('; ')'])
let parens (line : string) : (int * int) list =
  let n = String.length line in
  String.to_list line 
  |> List.foldi ~init:([], []) ~f:(fun i (stack, ps) -> function 
    | '(' -> i :: stack, ps 
    | ')' -> (match stack with
              | [] -> [], (-1, i) :: ps
              | j :: s' -> s', (j, i) :: ps)
    | _ -> (stack, ps)
    )
  |> fun (stack, ps) -> 
      List.fold ~init:ps ~f:(fun ps i -> (i, n) :: ps) stack
  |> List.sort ~compare:(fun (i,j) (i',j') -> 
      if i = i' then Int.compare j j' else Int.compare i i')
let print_parens ?(prefix = "") parens = 
  List.map ~f:(fun (a,b) -> Int.to_string a, Int.to_string b) parens 
  |> List.map ~f:(fun (i,j) -> "("^i^","^j^")") 
  |> String.concat ~sep:" " 
  |> fun s -> prefix ^ s
  |> print_endline
let rec clean_parens' ?(within_parens = false) (line : string) : string =
  let _ = print_endline ("line: " ^ line) in
  let n = String.length line in
  let line_parens = parens line in
  let _ = print_parens ~prefix:"parens: " line_parens in
  let matched_parens = 
    List.filter ~f:(fun (i,j) -> i > -1 && j < n) line_parens
  in
  let _ = print_parens ~prefix:"matched: " matched_parens in
  let filtered_parens = scanincl ~init:(-2, -2) ~f:(fun (s,e) (i,j) -> 
                          if e < i then i,j else s,e) matched_parens 
                        |> List.zip_exn matched_parens
                        |> List.filter ~f:(fun ((s,e), (i,j)) -> 
                            s = i && e = j)
                        |> List.map ~f:snd
                        |> List.map ~f:(fun (i,j) -> (i,j), String.sub ~pos:i ~len:(j-i+1) line)
  in
  let _ = List.map ~f:fst filtered_parens |> print_parens ~prefix:"filtered: " in
  let _ = within_parens in
  match filtered_parens with
  | [] -> line
  | [((i,j),_)] -> 
      if i = 0 && j = n - 1
      then
        let line' = clean_parens' ~within_parens:true (String.sub ~pos:1 ~len:(n-2) line) in
        if within_parens 
        then line' 
        else if contains_breaks line' 
             then "(" ^ line' ^ ")" 
             else line'
      else
        let line' = List.map ~f:(fun ((i,j),s) -> (i,j), clean_parens' s) 
                      filtered_parens 
                    |> List.fold_right ~init:line ~f:(fun ((i,j),s) line' -> 
                        String.substr_replace_first ~pos:i 
                          ~pattern:(String.sub ~pos:i ~len:(j-i+1) line') 
                          ~with_:s line') 
        in
        let _ = print_endline ("line': " ^ line') in
        line'
  | _ ->
      let line' = List.map ~f:(fun ((i,j),s) -> (i,j), clean_parens' s) 
                    filtered_parens 
                  |> List.fold_right ~init:line ~f:(fun ((i,j),s) line' -> 
                      String.substr_replace_first ~pos:i 
                        ~pattern:(String.sub ~pos:i ~len:(j-i+1) line') 
                        ~with_:s line') 
      in
      let _ = print_endline ("line': " ^ line') in
      if String.(line' = line)
      then line'
      else clean_parens' line'
let clean_parens (lines : string list) : string list = 
  let sep = "[[[" ^ gen_rand_str (List.length lines) ^ "]]]" in
  let sep_len = String.length sep in
  let cleaned = String.concat ~sep lines |> clean_parens' in
  String.substr_index_all ~may_overlap:false ~pattern:sep cleaned
  |> List.fold_right ~init:([], cleaned) ~f:(fun i (lines, rest) -> 
      (String.drop_prefix rest (i + sep_len)) :: lines, String.prefix rest i) 
  |> fun (tl, hd) -> hd :: tl

(* enfore the character limit *)
let rec count_spaces (line : string) : int = 
  match String.length line with
  | 0 -> 0
  | _ -> match String.get line 0 with
         | ' ' -> 1 + count_spaces (String.drop_prefix line 1)
         | _ -> 0
let find_indent (line : string) : int = (count_spaces line) / !tab_size
let rec split_with_delim ~(on : char) (line : string) : string list =
  match String.lsplit2 ~on line with
  | Some (s1, s2) -> s1 :: (String.of_char on) :: (split_with_delim ~on s2)
  | None -> [ line ]
let enforce_line (line : string) : string list = 
  let indent_depth = find_indent line in
  let character_limit = !character_limit in
  let splits = String.strip line |> split_with_delim ~on:' ' in
  let splits = 
    if List.exists ~f:(fun s -> String.length s > character_limit) splits
    then List.map ~f:(split_with_delim ~on:',') splits |> List.concat
    else splits
  in
  let rec create_lines (pieces : string list) (line_num : int) : string list = 
    let rec create_line ?(i = 0) (acc : string) (pieces : string list)
      : string * string list = 
      let indent_width = 
        (match line_num with | 0 -> indent_depth | _ -> (indent_depth + 1)) 
        * !tab_size
      in
      match pieces with
      | [] -> acc, []
      | hd :: tl -> 
          match i with
          | 0 -> create_line ~i:(i + 1) (String.make indent_width ' ' ^ hd) tl 
          | _ -> 
              if String.length acc + String.length hd > character_limit
              then if String.(hd = " ") then acc, tl else acc, pieces
              else create_line ~i:(i + 1) (acc ^ hd) tl 
    in
    let line, rest = create_line "" pieces in
    match rest with
    | [] -> [ line ]
    | _  -> line :: (create_lines rest (line_num + 1))
  in
  create_lines splits 0 |> List.filter ~f:(fun s -> String.length s > 0)
let enforce_lines (lines : string list) : string list = 
  List.map ~f:enforce_line lines
  |> List.concat

let prettify (lines : string list) : string list = 
  clean_parens lines 
  |> enforce_lines

let codegen ?(t = 2) ?(l = 80) (main : main) : string = 
  character_limit := l;
  tab_size := t;
  List.map ~f:gen_expression main 
  |> List.map ~f:prettify
  |> List.concat
  |> String.concat ~sep:"\n"