(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_CR=caml_string_of_jsbytes("CR "),
     cst=caml_string_of_jsbytes(""),
     Stdlib_Printf=global_data.Stdlib__Printf,
     Expect_test_config_types=[0];
    caml_register_global
     (3,Expect_test_config_types,"Expect_test_config_types__");
    var
     Upon_unreleasable_issue=[0],
     Expect_test_config_types_Expec=[0,Upon_unreleasable_issue];
    caml_register_global
     (4,
      Expect_test_config_types_Expec,
      "Expect_test_config_types__Expect_test_config_types_intf");
    var
     _a_=
      [0,
       [11,
        caml_string_of_jsbytes("\n(* "),
        [2,
         0,
         [11,
          caml_string_of_jsbytes
           ("expect_test_collector: This test expectation appears to contain a backtrace.\n   This is strongly discouraged as backtraces are fragile.\n   Please change this test to not include a backtrace. *)\n\n"),
          0]]],
       caml_string_of_jsbytes
        ("\n(* %sexpect_test_collector: This test expectation appears to contain a backtrace.\n   This is strongly discouraged as backtraces are fragile.\n   Please change this test to not include a backtrace. *)\n\n")];
    function equal(t1,t2){return runtime.caml_equal(t1,t2)}
    function comment_prefix(param){return 15023 <= param?cst_CR:cst}
    function message_when_expectation_conta(t)
     {var _b_=comment_prefix(t);return caml_call2(Stdlib_Printf[4],_a_,_b_)}
    var
     Upon_unreleasable_issue$0=
      [0,equal,comment_prefix,message_when_expectation_conta],
     Expect_test_config_types$0=[0,Upon_unreleasable_issue$0];
    caml_register_global
     (6,Expect_test_config_types$0,"Expect_test_config_types");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJleHBlY3RfdGVzdF9jb25maWdfdHlwZXMuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlc0NvbnRlbnQiOltdfQ==
