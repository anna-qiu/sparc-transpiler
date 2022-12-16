(function(globalThis)
   {"use strict";
    var runtime=globalThis.jsoo_runtime;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function return$0(x){return x}
    function bind(t,f){return caml_call1(f,t)}
    function to_run(t){return t}
    var IO_flush=[0,return$0,bind,to_run];
    function sanitize(s){return s}
    function run(f){return caml_call1(f,0)}
    function flushed(param){return 1}
    var Expect_test_config=[0,[0],IO_flush,run,flushed,sanitize,15023];
    runtime.caml_register_global(0,Expect_test_config,"Expect_test_config");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJleHBlY3RfdGVzdF9jb25maWcuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlc0NvbnRlbnQiOltdfQ==
