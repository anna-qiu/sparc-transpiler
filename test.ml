open Core
open Lexing

(*
  print_position and parse_with_error from here:
  https://dev.realworldocaml.org/parsing-with-ocamllex-and-menhir.html
*)

let print_position outx lexbuf =
  let pos = lexbuf.lex_curr_p in
  fprintf outx "%s:%d:%d" pos.pos_fname
    pos.pos_lnum (pos.pos_cnum - pos.pos_bol + 1)

(* let parse_with_error lexbuf =
  try Parser.main Lexer.token lexbuf with
  | Parser.Error ->
    fprintf stderr "%a: syntax error\n" print_position lexbuf;
    exit (-1) *)

(* takes in a file name and gets all the tokens for it *)
let gen_tokens (file : string) : Parser.token list =
  let lexbuf = Lexing.from_string (In_channel.read_all file) in
  Lexing.set_filename lexbuf file ;
  let rec construct (buf : Lexing.lexbuf) : Parser.token list =
    match Lexer.token buf with
    | EOF -> [Parser.EOF]
    | tok -> tok :: (construct buf)
  in construct lexbuf

(* dune build && diff -u sparc/outputs/xxx.out <(dune exec ./test.exe sparc/tests/xxx.sparc) *)
let () =
  let fname = (Sys.get_argv ()).(1) in
  let tokens = gen_tokens fname in
  (* i think this is how you call the parser? i'm not sure what the type of the functions are *)
  print_endline (Syntax.show_main (Parser.parse tokens));
