# builds the transpiler and copies over the js into the ui folder
dune build
cp _build/default/transpile.bc.js ui/transpile.js