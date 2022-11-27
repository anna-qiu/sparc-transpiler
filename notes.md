# usage notes
- variable names can not be `B`, `N`, or `Z` since those represent boolean, natural, and integer types

# implementation notes
- might need to modify function/value binding to be prefixed with `fun` and `val`, or make whitespace matter (since idt we can differentiate between function application and value binding in with only one lookahead token)