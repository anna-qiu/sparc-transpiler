open! Core
open! Parser

type tlist = token list
[@@deriving show { with_path = false }]

(* takes in a file name and gets all the tokens for it *)
let gen_tokens (file : string) : token list =
  let lexbuf = Lexing.from_string (In_channel.read_all file) in
  Lexing.set_filename lexbuf file ;
  let rec construct (buf : Lexing.lexbuf) : token list =
    match Lexer.token buf with
    | EOF -> [EOF]
    | tok -> tok :: (construct buf)
  in construct lexbuf

let () =
  let fname = "sparc/test.sparc" in
  let tokens = gen_tokens fname in
  print_endline ( show_tlist tokens )