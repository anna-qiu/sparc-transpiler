(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst=caml_string_of_jsbytes(""),
     Stdlib_Digest=global_data.Stdlib__Digest,
     Assert_failure=global_data.Assert_failure,
     empty=caml_call1(Stdlib_Digest[3],cst),
     _a_=[0,caml_string_of_jsbytes("md5/src/md5_lib.ml"),16,22];
    function make(s){return runtime.caml_string_equal(s,empty)?empty:s}
    var compare=runtime.caml_compare,length=16;
    function to_binary(s){return s}
    function of_binary_exn(s)
     {if(runtime.caml_ml_string_length(s) === 16)return make(s);
      throw [0,Assert_failure,_a_]}
    var to_hex=Stdlib_Digest[10];
    function of_hex_exn(s){return make(caml_call1(Stdlib_Digest[11],s))}
    function string(s){return make(caml_call1(Stdlib_Digest[3],s))}
    function bytes(s){return make(caml_call1(Stdlib_Digest[4],s))}
    function subbytes(bytes,pos,len)
     {return make(caml_call3(Stdlib_Digest[6],bytes,pos,len))}
    var
     Md5_lib=
      [0,
       compare,
       length,
       to_binary,
       of_binary_exn,
       make,
       to_hex,
       of_hex_exn,
       string,
       bytes,
       subbytes];
    runtime.caml_register_global(4,Md5_lib,"Md5_lib");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJtZDVfbGliLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
