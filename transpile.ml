open Js_of_ocaml

let gen_tokens (code_string : string) : Parser.token list =
  let lexbuf = Lexing.from_string code_string in
  let rec construct (buf : Lexing.lexbuf) : Parser.token list =
    match Lexer.token buf with
    | EOF -> [Parser.EOF]
    | tok -> tok :: (construct buf)
  in construct lexbuf

let transpile (code_string : string) ~(t : int) ~(l : int) : string =
  gen_tokens code_string
  |> Parser.parse
  |> Codegen.codegen ~t ~l

let _ = Js.export "transpile" 
  (fun s t l -> s |> Js.to_string |> transpile ~t ~l |> Js.string)
