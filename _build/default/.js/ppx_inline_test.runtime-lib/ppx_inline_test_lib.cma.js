(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_equal=runtime.caml_equal,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_register_global=runtime.caml_register_global,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_sys_argv=runtime.caml_sys_argv,
     caml_sys_getenv=runtime.caml_sys_getenv,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_inline_tests_runner_exe=
      caml_string_of_jsbytes("inline_tests_runner.exe"),
     cst$14=caml_string_of_jsbytes(""),
     cst$12=caml_string_of_jsbytes("\n"),
     cst$13=caml_string_of_jsbytes(" "),
     cst$11=caml_string_of_jsbytes(""),
     cst_ppx_inline_test_cannot_use=
      caml_string_of_jsbytes
       ("ppx_inline_test: cannot use -list-partition or -partition without specifying a partition at preprocessing time"),
     cst$9=caml_string_of_jsbytes("\n"),
     cst$10=caml_string_of_jsbytes(" "),
     cst$7=caml_string_of_jsbytes("\n"),
     cst$8=caml_string_of_jsbytes("  "),
     cst$5=caml_string_of_jsbytes("\n"),
     cst_T_MODULE_at=caml_string_of_jsbytes("T_MODULE at "),
     cst_in_TES=caml_string_of_jsbytes("  in TES"),
     cst$6=caml_string_of_jsbytes(""),
     cst_time_without_resetting_ran=
      caml_string_of_jsbytes("time_without_resetting_random_seeds"),
     cst$4=caml_string_of_jsbytes("."),
     cst_Ppx_inline_test_lib_Runtim=
      caml_string_of_jsbytes("Ppx_inline_test_lib__Runtime"),
     cst_inline_tests_log$0=caml_string_of_jsbytes("inline_tests.log"),
     cst_inline_tests_log=caml_string_of_jsbytes("inline_tests.log"),
     cst$1=caml_string_of_jsbytes(""),
     cst$2=caml_string_of_jsbytes(""),
     cst$3=caml_string_of_jsbytes(": "),
     cst$0=caml_string_of_jsbytes(""),
     cst_success=caml_string_of_jsbytes("success"),
     cst_failure=caml_string_of_jsbytes("failure"),
     cst_error=caml_string_of_jsbytes("error"),
     enable_everything=[0,0,0],
     cst_FORCE_DROP_INLINE_TEST=
      caml_string_of_jsbytes("FORCE_DROP_INLINE_TEST"),
     cst=caml_string_of_jsbytes(""),
     cst_inline_test_runner=caml_string_of_jsbytes("inline-test-runner"),
     cst_inline_test_runner$0=caml_string_of_jsbytes("inline-test-runner"),
     cst_Path_to_the_root_of_the_so=
      caml_string_of_jsbytes(" Path to the root of the source tree"),
     cst_source_tree_root=caml_string_of_jsbytes("-source-tree-root"),
     cst_Allow_output_patterns_in_t=
      caml_string_of_jsbytes(" Allow output patterns in tests expectations"),
     cst_allow_output_patterns=
      caml_string_of_jsbytes("-allow-output-patterns"),
     cst_Diff_command_for_tests_tha=
      caml_string_of_jsbytes
       (" Diff command for tests that require diffing (use - to disable diffing)"),
     cst_diff_cmd=caml_string_of_jsbytes("-diff-cmd"),
     cst_Update_expect_tests_in_pla=
      caml_string_of_jsbytes(" Update expect tests in place"),
     cst_in_place=caml_string_of_jsbytes("-in-place"),
     cst_Summarize_tests_without_us=
      caml_string_of_jsbytes(" Summarize tests without using color"),
     cst_no_color=caml_string_of_jsbytes("-no-color"),
     cst_location_Run_only_the_test=
      caml_string_of_jsbytes
       ('location Run only the tests specified by all the -only-test options.\n                      Locations can be one of these forms:\n                      - file.ml\n                      - file.ml:line_number\n                      - File "file.ml"\n                      - File "file.ml", line 23\n                      - File "file.ml", line 23, characters 2-3'),
     cst_only_test=caml_string_of_jsbytes("-only-test"),
     cst_substring_Only_run_tests_w=
      caml_string_of_jsbytes
       ("substring Only run tests whose names contain the given substring"),
     cst_matching=caml_string_of_jsbytes("-matching"),
     cst_tag_Only_run_tests_tagged_=
      caml_string_of_jsbytes
       ("tag Only run tests tagged with [tag] (overrides previous -drop-tag)"),
     cst_require_tag=caml_string_of_jsbytes("-require-tag"),
     cst_tag_Only_run_tests_not_tag=
      caml_string_of_jsbytes
       ("tag Only run tests not tagged with [tag] (overrides previous -require-tag)"),
     cst_drop_tag=caml_string_of_jsbytes("-drop-tag"),
     cst_Log_the_tests_run_in_inlin=
      caml_string_of_jsbytes(" Log the tests run in inline_tests.log"),
     cst_log=caml_string_of_jsbytes("-log"),
     cst_Show_the_number_of_tests_r=
      caml_string_of_jsbytes(" Show the number of tests ran"),
     cst_show_counts=caml_string_of_jsbytes("-show-counts"),
     cst_End_with_an_error_if_no_te=
      caml_string_of_jsbytes(" End with an error if no tests were run"),
     cst_strict=caml_string_of_jsbytes("-strict"),
     cst_Run_tests_only_up_to_the_f=
      caml_string_of_jsbytes
       (" Run tests only up to the first error (doesn't work for expect tests)"),
     cst_stop_on_error=caml_string_of_jsbytes("-stop-on-error"),
     cst_Show_the_tests_as_they_run=
      caml_string_of_jsbytes(" Show the tests as they run"),
     cst_verbose=caml_string_of_jsbytes("-verbose"),
     cst_Only_run_the_tests_in_the_=
      caml_string_of_jsbytes(" Only run the tests in the given partition"),
     cst_partition=caml_string_of_jsbytes("-partition"),
     cst_Lists_all_the_partitions_t=
      caml_string_of_jsbytes
       (" Lists all the partitions that contain at least one test or test_module"),
     cst_list_partitions=caml_string_of_jsbytes("-list-partitions"),
     cst_Do_not_run_tests_but_show_=
      caml_string_of_jsbytes
       (" Do not run tests but show what would have been run"),
     cst_list_test_names=caml_string_of_jsbytes("-list-test-names"),
     am_running_inline_test_env_var=
      caml_string_of_jsbytes("TESTING_FRAMEWORK"),
     cst_PPX_INLINE_TEST_LIB_AM_RUN=
      caml_string_of_jsbytes("PPX_INLINE_TEST_LIB_AM_RUNNING_INLINE_TEST"),
     cst_inline_test=caml_string_of_jsbytes("inline-test"),
     Stdlib_List=global_data.Stdlib__List,
     Stdlib=global_data.Stdlib,
     Stdlib_Printf=global_data.Stdlib__Printf,
     Stdlib_Filename=global_data.Stdlib__Filename,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Stdlib_String=global_data.Stdlib__String,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Stdlib_Result=global_data.Stdlib__Result,
     Base=global_data.Base,
     Base_String=global_data.Base__String,
     Base_List=global_data.Base__List,
     Stdlib_Random=global_data.Stdlib__Random,
     Base_Random=global_data.Base__Random,
     Stdlib_Printexc=global_data.Stdlib__Printexc,
     Base_Int63=global_data.Base__Int63,
     Time_now=global_data.Time_now,
     Stdlib_Scanf=global_data.Stdlib__Scanf,
     Stdlib_Hashtbl=global_data.Stdlib__Hashtbl,
     Stdlib_Arg=global_data.Stdlib__Arg,
     Stdlib_Array=global_data.Stdlib__Array,
     Ppx_inline_test_lib=[0];
    caml_register_global(104,Ppx_inline_test_lib,"Ppx_inline_test_lib");
    var
     _E_=
      [0,[12,32,[2,0,[12,58,[4,0,0,0,0]]]],caml_string_of_jsbytes(" %s:%d")],
     _F_=[0,[12,32,[2,0,0]],caml_string_of_jsbytes(" %s")],
     _z_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("inline_tests_runner.exe is not supposed to be run by hand, you \nshould run the inline_tests_runner script instead.\n"),
        [10,0]],
       caml_string_of_jsbytes
        ("inline_tests_runner.exe is not supposed to be run by hand, you \nshould run the inline_tests_runner script instead.\n%!")],
     _A_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("You are doing something unexpected with the tests. No tests have \nbeen run. You should use the inline_tests_runner script to run \ntests.\n"),
        [10,0]],
       caml_string_of_jsbytes
        ("You are doing something unexpected with the tests. No tests have \nbeen run. You should use the inline_tests_runner script to run \ntests.\n%!")],
     _B_=[0,[2,0,[12,10,0]],caml_string_of_jsbytes("%s\n")],
     _C_=
      [0,
       [4,
        0,
        0,
        0,
        [11,
         caml_string_of_jsbytes(" tests ran, "),
         [4,0,0,0,[11,caml_string_of_jsbytes(" test_modules ran\n"),[10,0]]]]],
       caml_string_of_jsbytes("%d tests ran, %d test_modules ran\n%!")],
     _D_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("ppx_inline_test error: the following -only-test flags matched nothing:"),
        0],
       caml_string_of_jsbytes
        ("ppx_inline_test error: the following -only-test flags matched nothing:")],
     _G_=
      [0,
       [11,caml_string_of_jsbytes(".\n"),[10,0]],
       caml_string_of_jsbytes(".\n%!")],
     _H_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("ppx_inline_test error: no tests have been run.\n"),
        [10,0]],
       caml_string_of_jsbytes
        ("ppx_inline_test error: no tests have been run.\n%!")],
     _J_=
      [0,
       [11,caml_string_of_jsbytes("T_MODULES"),0],
       caml_string_of_jsbytes("T_MODULES")],
     _K_=
      [0,
       [11,
        caml_string_of_jsbytes(", "),
        [4,0,0,0,[11,caml_string_of_jsbytes(" TES"),0]]],
       caml_string_of_jsbytes(", %d TES")],
     _I_=
      [0,
       [11,
        caml_string_of_jsbytes("FAILED "),
        [4,
         0,
         0,
         0,
         [11,
          caml_string_of_jsbytes(" / "),
          [4,0,0,0,[11,caml_string_of_jsbytes(" tests"),[2,0,[12,10,[10,0]]]]]]]],
       caml_string_of_jsbytes("FAILED %d / %d tests%s\n%!")],
     _x_=
      [0,
       [11,
        caml_string_of_jsbytes("T_MODULE at "),
        [2,
         0,
         [11,
          caml_string_of_jsbytes(" threw"),
          [2,
           0,
           [2,0,[11,caml_string_of_jsbytes(".\n"),[2,0,[2,0,[12,10,[10,0]]]]]]]]]],
       caml_string_of_jsbytes("T_MODULE at %s threw%s%s.\n%s%s\n%!")],
     _y_=
      [0,[11,caml_string_of_jsbytes("TES"),0],caml_string_of_jsbytes("TES")],
     _r_=[0,[2,0,[12,10,[2,0,0]]],caml_string_of_jsbytes("%s\n%s")],
     _s_=[0,[2,0,[10,0]],caml_string_of_jsbytes("%s%!")],
     _t_=[0,1],
     _u_=
      [0,
       [11,
        caml_string_of_jsbytes(" ("),
        [8,[0,0,0],0,[0,3],[11,caml_string_of_jsbytes(" sec)\n"),[10,0]]]],
       caml_string_of_jsbytes(" (%.3f sec)\n%!")],
     _v_=
      [0,
       [2,0,[11,caml_string_of_jsbytes(" is false.\n"),[2,0,[12,10,[10,0]]]]],
       caml_string_of_jsbytes("%s is false.\n%s\n%!")],
     _w_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(" threw"),
         [2,
          0,
          [2,0,[11,caml_string_of_jsbytes(".\n"),[2,0,[2,0,[12,10,[10,0]]]]]]]]],
       caml_string_of_jsbytes("%s threw%s%s.\n%s%s\n%!")],
     _q_=[0,[2,0,[10,0]],caml_string_of_jsbytes("%s%!")],
     _p_=[0,[2,0,[10,0]],caml_string_of_jsbytes("%s%!")],
     _o_=[0,[12,10,[2,0,[12,10,[10,0]]]],caml_string_of_jsbytes("\n%s\n%!")],
     _T_=
      [0,
       [11,
        caml_string_of_jsbytes("Argument "),
        [2,
         0,
         [11,
          caml_string_of_jsbytes
           (" doesn't fit the format filename[:line_number]\n"),
          [10,0]]]],
       caml_string_of_jsbytes
        ("Argument %s doesn't fit the format filename[:line_number]\n%!")],
     _P_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": unexpected anonymous argument "),
         [2,0,[12,10,[10,0]]]]],
       caml_string_of_jsbytes("%s: unexpected anonymous argument %s\n%!")],
     _g_=
      [0,
       [11,
        caml_string_of_jsbytes(" File "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(" , line "),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(" , characters "),
            [4,
             0,
             0,
             0,
             [11,caml_string_of_jsbytes(" - "),[4,0,0,0,[12,32,[10,0]]]]]]]]]],
       caml_string_of_jsbytes(" File %S , line %d , characters %d - %d %!")],
     _f_=
      [0,
       [11,
        caml_string_of_jsbytes(" File "),
        [3,0,[11,caml_string_of_jsbytes(" , line "),[4,0,0,0,[12,32,[10,0]]]]]],
       caml_string_of_jsbytes(" File %S , line %d %!")],
     _e_=
      [0,
       [11,caml_string_of_jsbytes(" File "),[3,0,[12,32,[10,0]]]],
       caml_string_of_jsbytes(" File %S %!")],
     _d_=
      [0,
       [11,
        caml_string_of_jsbytes("File "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(", line "),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(", characters "),
            [4,0,0,0,[12,45,[4,0,0,0,[2,0,0]]]]]]]]],
       caml_string_of_jsbytes("File %S, line %d, characters %d-%d%s")],
     _a_=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _b_=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _O_=
      [0,
       [2,
        0,
        [12,32,[2,0,[12,32,[2,0,[11,caml_string_of_jsbytes(" [args]"),0]]]]]],
       caml_string_of_jsbytes("%s %s %s [args]")],
     _n_=[0,187165616,545942154],
     _L_=[0,187165616,-863538453];
    function to_string(param)
     {switch(param)
       {case 0:return cst_success;
        case 1:return cst_failure;
        default:return cst_error}}
    function combine(t1,t2)
     {var switch$0=0;
      switch(t1)
       {case 0:if(! t2)return 0;break;case 1:break;default:switch$0 = 1}
      if(! switch$0 && 2 !== t2)return 1;
      return 2}
    function combine_all(ts){return caml_call3(Stdlib_List[25],combine,0,ts)}
    var
     test_modules_ran=[0,0],
     test_modules_failed=[0,0],
     tests_ran=[0,0],
     tests_failed=[0,0],
     dynamic_lib=[0,0],
     action=[0,-950194894];
    try
     {caml_sys_getenv(cst_FORCE_DROP_INLINE_TEST);var _ab_=1,force_drop=_ab_}
    catch(_b__)
     {_b__ = caml_wrap_exception(_b__);
      if(_b__ !== Stdlib[8])throw _b__;
      var force_drop=0}
    function get(param){return force_drop?-950194894:action[1]}
    function set(v){action[1] = v;return 0}
    var _c_=caml_call2(Stdlib_Hashtbl[1],0,23),current=[0,cst];
    function found_test(param)
     {var
       _b8_=caml_string_notequal(current[1],cst$0),
       _b9_=_b8_?1 - caml_call2(Stdlib_Hashtbl[9],_c_,current[1]):_b8_;
      return _b9_?caml_call3(Stdlib_Hashtbl[5],_c_,current[1],0):_b9_}
    function is_current(param)
     {if(param){var p=param[1];return caml_string_equal(p,current[1])}
      return 1}
    var current$0=[0,0];
    function with$0(descr,tags,f)
     {var prev=current$0[1];
      current$0[1] = [0,[0,descr,tags],prev];
      try
       {var x=caml_call1(f,0);current$0[1] = prev;return x}
      catch(e){e = caml_wrap_exception(e);current$0[1] = prev;throw e}}
    function current_tags(param)
     {var _b7_=current$0[1];
      function _b5_(m){return m[2]}
      var _b6_=caml_call2(Stdlib_List[19],_b5_,_b7_);
      return caml_call1(Stdlib_List[13],_b6_)}
    var
     verbose=[0,0],
     strict=[0,0],
     show_counts=[0,0],
     list_test_names=[0,0],
     delayed_errors=[0,0],
     stop_on_error=[0,0],
     log=[0,0],
     time_sec=[0,0.],
     use_color=[0,1],
     in_place=[0,0],
     diff_command=[0,0],
     source_tree_root=[0,0],
     allow_output_patterns=[0,0];
    function displayed_descr(param)
     {var
       _b3_=caml_obj_tag(param),
       descr=
        250 === _b3_
         ?param[1]
         :246 === _b3_?caml_call1(CamlinternalLazy[2],param):param;
      return function(filename,line,start_pos,end_pos)
       {var
         _b4_=
          caml_string_equal(descr,cst$1)
           ?cst$2
           :caml_call2(Stdlib[28],cst$3,descr);
        return caml_call6
                (Stdlib_Printf[4],_d_,filename,line,start_pos,end_pos,_b4_)}}
    var
     _h_=caml_sys_argv(0),
     match=caml_call1(Stdlib_Array[11],_h_),
     switch$0=0;
    if(match)
     {var _i_=match[2];
      if(_i_)
       {var _j_=match[1];
        if(! caml_string_notequal(_i_[1],cst_inline_test_runner))
         {var _N_=_i_[2];
          if(_N_)
           {var rest=_N_[2],lib=_N_[1];
            if(Base[85][1])
             {var
               tests=[0,0],
               list_partitions=[0,0],
               partition=[0,0],
               tag_predicate=[0,enable_everything],
               name_filter=[0,0],
               msg$1=
                caml_call4
                 (Stdlib_Printf[4],_O_,_j_,cst_inline_test_runner$0,lib),
               f=
                function(anon)
                 {caml_call3(Stdlib_Printf[3],_P_,_j_,anon);
                  return caml_call1(Stdlib[99],1)},
               _Q_=0,
               _R_=
                [0,
                 [0,
                  cst_allow_output_patterns,
                  [2,allow_output_patterns],
                  cst_Allow_output_patterns_in_t],
                 [0,
                  [0,
                   cst_source_tree_root,
                   [4,function(s){source_tree_root[1] = [0,s];return 0}],
                   cst_Path_to_the_root_of_the_so],
                  _Q_]],
               _S_=
                [0,
                 [0,cst_no_color,[3,use_color],cst_Summarize_tests_without_us],
                 [0,
                  [0,cst_in_place,[2,in_place],cst_Update_expect_tests_in_pla],
                  [0,
                   [0,
                    cst_diff_cmd,
                    [4,function(s){diff_command[1] = [0,s];return 0}],
                    cst_Diff_command_for_tests_tha],
                   _R_]]],
               _U_=
                [0,
                 [0,
                  cst_only_test,
                  [4,
                   function(filename)
                    {try
                      {var
                        _bW_=
                         function(file,line,start_pos,end_pos)
                          {return [0,file,[0,line]]},
                        _bX_=[0,caml_call3(Stdlib_Scanf[4],filename,_g_,_bW_)],
                        match=_bX_}
                     catch(_b0_)
                      {try
                        {var
                          _bU_=function(file,line){return [0,file,[0,line]]},
                          _bV_=[0,caml_call3(Stdlib_Scanf[4],filename,_f_,_bU_)],
                          match=_bV_}
                       catch(_b1_)
                        {try
                          {var
                            _bS_=function(file){return [0,file,0]},
                            _bT_=[0,caml_call3(Stdlib_Scanf[4],filename,_e_,_bS_)],
                            match=_bT_}
                         catch(_b2_){var match=0}}}
                     if(match)
                      var
                       match$0=match[1],
                       index=match$0[2],
                       file=match$0[1],
                       index$0=index,
                       filename$0=file;
                     else
                      if(caml_call2(Stdlib_String[14],filename,58))
                       {var
                         i=caml_call2(Stdlib_String[35],filename,58),
                         filename$1=caml_call3(Stdlib_String[15],filename,0,i),
                         index_string=
                          caml_call3
                           (Stdlib_String[15],
                            filename,
                            i + 1 | 0,
                            (caml_ml_string_length(filename) - i | 0) - 1 | 0);
                        try
                         {var
                           _bY_=runtime.caml_int_of_string(index_string),
                           index$1=_bY_}
                        catch(_bZ_)
                         {_bZ_ = caml_wrap_exception(_bZ_);
                          if(_bZ_[1] !== Stdlib[7])throw _bZ_;
                          caml_call2(Stdlib_Printf[3],_T_,filename);
                          var index$1=caml_call1(Stdlib[99],1)}
                        var index$0=[0,index$1],filename$0=filename$1}
                      else
                       var index$0=0,filename$0=filename;
                     tests[1] = [0,[0,filename$0,index$0,[0,0]],tests[1]];
                     return 0}],
                  cst_location_Run_only_the_test],
                 _S_],
               _V_=
                [0,
                 [0,
                  cst_matching,
                  [4,
                   function(s){name_filter[1] = [0,s,name_filter[1]];return 0}],
                  cst_substring_Only_run_tests_w],
                 _U_],
               _W_=
                [0,
                 [0,
                  cst_require_tag,
                  [4,
                   function(s)
                    {var _bQ_=tag_predicate[1],_bN_=_bQ_[2];
                     function _bO_(_bR_){return caml_string_notequal(s,_bR_)}
                     var _bP_=caml_call2(Stdlib_List[41],_bO_,_bN_);
                     tag_predicate[1] = [0,[0,s,_bQ_[1]],_bP_];
                     return 0}],
                  cst_tag_Only_run_tests_tagged_],
                 _V_],
               _X_=
                [0,
                 [0,
                  cst_drop_tag,
                  [4,
                   function(s)
                    {var _bL_=tag_predicate[1],_bI_=[0,s,_bL_[2]],_bJ_=_bL_[1];
                     function _bK_(_bM_){return caml_string_notequal(s,_bM_)}
                     tag_predicate[1]
                     =
                     [0,caml_call2(Stdlib_List[41],_bK_,_bJ_),_bI_];
                     return 0}],
                  cst_tag_Only_run_tests_not_tag],
                 _W_],
               _Y_=
                [0,
                 [0,cst_verbose,[2,verbose],cst_Show_the_tests_as_they_run],
                 [0,
                  [0,
                   cst_stop_on_error,
                   [2,stop_on_error],
                   cst_Run_tests_only_up_to_the_f],
                  [0,
                   [0,cst_strict,[2,strict],cst_End_with_an_error_if_no_te],
                   [0,
                    [0,
                     cst_show_counts,
                     [2,show_counts],
                     cst_Show_the_number_of_tests_r],
                    [0,
                     [0,
                      cst_log,
                      [0,
                       function(param)
                        {try
                          {runtime.caml_sys_remove(cst_inline_tests_log$0)}
                         catch(_bH_){}
                         log[1] = [0,caml_call1(Stdlib[60],cst_inline_tests_log)];
                         return 0}],
                      cst_Log_the_tests_run_in_inlin],
                     _X_]]]]],
               _Z_=
                [0,
                 [0,
                  cst_partition,
                  [4,function(i){partition[1] = [0,i];return 0}],
                  cst_Only_run_the_tests_in_the_],
                 _Y_],
               ___=
                [0,
                 [0,
                  cst_list_partitions,
                  [0,function(param){list_partitions[1] = 1;return 0}],
                  cst_Lists_all_the_partitions_t],
                 _Z_],
               _$_=
                [0,
                 [0,
                  cst_list_test_names,
                  [0,
                   function(param)
                    {list_test_names[1] = 1;verbose[1] = 1;return 0}],
                  cst_Do_not_run_tests_but_show_],
                 ___],
               l=caml_call2(Stdlib_Arg[11],0,_$_),
               argv=caml_call1(Stdlib_Array[12],[0,_j_,rest]);
              try
               {caml_call5(Stdlib_Arg[3],0,argv,l,f,msg$1)}
              catch(exn)
               {exn = caml_wrap_exception(exn);
                if(exn[1] === Stdlib_Arg[8])
                 {var msg=exn[2];
                  caml_call2(Stdlib_Printf[3],_a_,msg);
                  caml_call1(Stdlib[99],1)}
                else
                 {if(exn[1] !== Stdlib_Arg[7])throw exn;
                  var msg$0=exn[2];
                  caml_call2(Stdlib_Printf[2],_b_,msg$0);
                  caml_call1(Stdlib[99],0)}}
              var
               _aa_=
                list_partitions[1]?-260537174:[0,1025081494,partition[1]];
              set
               ([0,
                 -753295984,
                 [0,[0,lib,tests[1],name_filter[1],tag_predicate[1]],_aa_]]);
              switch$0 = 1}}}}}
    var match$0=get(0),_k_=typeof match$0 === "number"?0:1;
    try
     {var switch$1=0;
      caml_sys_getenv(cst_PPX_INLINE_TEST_LIB_AM_RUN);
      switch$1 = 1}
    catch(_bF_)
     {_bF_ = caml_wrap_exception(_bF_);
      if(_bF_ !== Stdlib[8])throw _bF_;
      try
       {var switch$2=0,val=caml_sys_getenv(am_running_inline_test_env_var);
        switch$2 = 1}
      catch(_bG_)
       {_bG_ = caml_wrap_exception(_bG_);
        if(_bG_ !== Stdlib[8])throw _bG_;
        var _l_=0}
      if(switch$2)
       var _M_=caml_string_notequal(val,cst_inline_test)?0:1,_l_=_M_;
      var _m_=_l_}
    if(switch$1)var _m_=1;
    var testing=_k_?_n_:_m_?_L_:822171972;
    function wall_time_clock_ns(param){return caml_call1(Time_now[1],0)}
    var
     where_to_cut_backtrace=
      [246,
       function(_bC_)
        {var
          _bD_=caml_call2(Stdlib[28],cst$4,cst_time_without_resetting_ran),
          _bE_=caml_call2(Stdlib[28],cst_Ppx_inline_test_lib_Runtim,_bD_);
         return caml_call2(Base_String[70][2],0,_bE_)}];
    function time_without_resetting_random_(f)
     {var before_ns=wall_time_clock_ns(0);
      try
       {var _bB_=[0,caml_call1(f,0)],res=_bB_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        var res=[1,[0,exn,caml_call1(Stdlib_Printexc[6],0)]]}
      var
       _bz_=wall_time_clock_ns(0),
       _bA_=caml_call2(Base_Int63[42],_bz_,before_ns);
      time_sec[1] = caml_call1(Base_Int63[3],_bA_) / 1000000000.;
      return res}
    var
     saved_caml_random_state=
      [246,
       function(_by_){return caml_call1(Stdlib_Random[15][1],[0,100,200,300])}],
     saved_base_random_state=
      [246,
       function(_bx_){return caml_call1(Base_Random[18][2],[0,111,222,333])}];
    function string_of_module_descr(param)
     {var _br_=current$0[1];
      function _bp_(m){return m[1]}
      var _bq_=caml_call2(Stdlib_List[19],_bp_,_br_);
      function _bs_(s)
       {var
         _bu_=caml_call1(Stdlib_String[28],s),
         _bv_=caml_call2(Stdlib[28],_bu_,cst$5),
         _bw_=caml_call2(Stdlib[28],cst_T_MODULE_at,_bv_);
        return caml_call2(Stdlib[28],cst_in_TES,_bw_)}
      var _bt_=caml_call2(Stdlib_List[19],_bs_,_bq_);
      return caml_call2(Stdlib_String[6],cst$6,_bt_)}
    function print_delayed_errors(param)
     {var delayed_errors$0=caml_call1(Stdlib_List[9],delayed_errors[1]);
      if(delayed_errors$0)
       {var _bn_=caml_call2(Stdlib_String[1],70,61);
        caml_call2(Stdlib_Printf[3],_o_,_bn_);
        var
         _bo_=
          function(message){return caml_call2(Stdlib_Printf[3],_p_,message)};
        return caml_call2(Stdlib_List[17],_bo_,delayed_errors$0)}
      return 0}
    function eprintf_or_delay(fmt)
     {function _bl_(s)
       {if(verbose[1])
         delayed_errors[1] = [0,s,delayed_errors[1]];
        else
         caml_call2(Stdlib_Printf[3],_q_,s);
        var _bm_=stop_on_error[1];
        return _bm_?(print_delayed_errors(0),caml_call1(Stdlib[99],2)):_bm_}
      return caml_call2(Stdlib_Printf[10],_bl_,fmt)}
    function add_hooks(C)
     {return function(f,param){caml_call1(C[1],0);return caml_call1(f,0)}}
    function hum_backtrace(backtrace)
     {var
       _bd_=caml_call1(Base_String[88],backtrace),
       _be_=Base_List[133],
       _bf_=
        caml_call2
         (_be_,
          _bd_,
          function(str)
           {var
             _bj_=caml_obj_tag(where_to_cut_backtrace),
             _bk_=
              250 === _bj_
               ?where_to_cut_backtrace[1]
               :246 === _bj_
                 ?caml_call1(CamlinternalLazy[2],where_to_cut_backtrace)
                 :where_to_cut_backtrace;
            return 1 - caml_call2(Base_String[70][5],_bk_,str)}),
       _bg_=Base_List[76],
       _bh_=
        caml_call2
         (_bg_,
          _bf_,
          function(str)
           {var _bi_=caml_call2(Base[197],str,cst$7);
            return caml_call2(Base[197],cst$8,_bi_)});
      return caml_call2(Base_String[54],0,_bh_)}
    function test_inner
     (config,
      descr,
      tags,
      def_filename,
      def_line_number,
      start_pos,
      end_pos,
      f,
      bool_of_f)
     {var match=get(0);
      if(typeof match === "number")return 0;
      var
       _aT_=match[2],
       what_to_do=_aT_[2],
       match$0=_aT_[1],
       which_tags=match$0[4],
       name_filter=match$0[3],
       only_test_location=match$0[2],
       libname=match$0[1],
       f$0=caml_call1(add_hooks(config),f),
       descr$0=
        [246,
         function(_bc_)
          {return caml_call4
                   (displayed_descr(descr),
                    def_filename,
                    def_line_number,
                    start_pos,
                    end_pos)}],
       _aU_=current_tags(0),
       tags$0=caml_call2(Stdlib[37],tags,_aU_),
       _aV_=caml_equal([0,libname],dynamic_lib[1]);
      if(_aV_)
       {if(only_test_location)
         var
          _aR_=
           function(param)
            {var
              used=param[3],
              line_number_opt=param[2],
              filename=param[1],
              position_start=
               caml_ml_string_length(def_filename)
               -
               caml_ml_string_length(filename)
               |
               0,
              _a9_=0 <= position_start?1:0;
             if(_a9_)
              {var
                end_of_def_filename=
                 caml_call3
                  (Stdlib_String[15],
                   def_filename,
                   position_start,
                   caml_ml_string_length(filename)),
                _a__=caml_string_equal(end_of_def_filename,filename);
               if(_a__)
                {var
                  _a$_=0 === position_start?1:0,
                  _ba_=
                   _a$_
                   ||
                   (47
                     ===
                     runtime.caml_string_get(def_filename,position_start - 1 | 0)
                     ?1
                     :0);
                 if(_ba_)
                  if(line_number_opt)
                   var
                    line_number=line_number_opt[1],
                    _bb_=caml_equal(def_line_number,line_number);
                  else
                   var _bb_=1;
                 else
                  var _bb_=_ba_}
               else
                var _bb_=_a__;
               var found=_bb_}
             else
              var found=_a9_;
             if(found)used[1] = 1;
             return found},
          _aW_=caml_call2(Stdlib_List[33],_aR_,only_test_location);
        else
         var _aW_=1;
        if(_aW_)
         {var
           _aI_=which_tags[1],
           _aJ_=
            function(req){return 1 - caml_call2(Stdlib_List[36],req,tags$0)},
           _aK_=caml_call2(Stdlib_List[33],_aJ_,_aI_);
          if(_aK_)
           var _aX_=_aK_;
          else
           var
            _aL_=which_tags[2],
            _aM_=
             function(dropped)
              {return caml_call2(Stdlib_List[36],dropped,tags$0)},
            _aX_=caml_call2(Stdlib_List[33],_aM_,_aL_);
          var _aY_=1 - _aX_;
          if(_aY_)
           {var
             _aZ_=caml_obj_tag(descr$0),
             _a0_=
              250 === _aZ_
               ?descr$0[1]
               :246 === _aZ_?caml_call1(CamlinternalLazy[2],descr$0):descr$0;
            if(name_filter)
             var
              _aS_=
               function(substring)
                {return caml_call2(Base_String[76],_a0_,substring)},
              _a1_=caml_call2(Stdlib_List[33],_aS_,name_filter);
            else
             var _a1_=1;
            var should_run=_a1_}
          else
           var should_run=_aY_}
        else
         var should_run=_aW_}
      else
       var should_run=_aV_;
      if(should_run)
       {if(typeof what_to_do === "number")return found_test(0);
        var partition=what_to_do[2],_a2_=is_current(partition);
        if(_a2_)
         {var
           _a3_=caml_obj_tag(descr$0),
           descr$1=
            250 === _a3_
             ?descr$0[1]
             :246 === _a3_?caml_call1(CamlinternalLazy[2],descr$0):descr$0;
          tests_ran[1]++;
          var _a4_=log[1];
          if(_a4_)
           {var ch=_a4_[1],_a5_=string_of_module_descr(0);
            caml_call4(Stdlib_Printf[1],ch,_r_,descr$1,_a5_)}
          if(verbose[1])caml_call2(Stdlib_Printf[2],_s_,descr$1);
          if(list_test_names[1])
           var result$0=_t_;
          else
           {var
             caml_random_state=caml_call1(Stdlib_Random[16],0),
             base_random_state=
              caml_call1(Base_Random[18][4],Base_Random[18][1]),
             _aN_=caml_obj_tag(saved_caml_random_state),
             _aO_=
              250 === _aN_
               ?saved_caml_random_state[1]
               :246 === _aN_
                 ?caml_call1(CamlinternalLazy[2],saved_caml_random_state)
                 :saved_caml_random_state;
            caml_call1(Stdlib_Random[17],_aO_);
            var
             _aP_=caml_obj_tag(saved_base_random_state),
             _aQ_=
              250 === _aP_
               ?saved_base_random_state[1]
               :246 === _aP_
                 ?caml_call1(CamlinternalLazy[2],saved_base_random_state)
                 :saved_base_random_state;
            caml_call1(Base_Random[19],_aQ_);
            var result=time_without_resetting_random_(f$0);
            caml_call1(Stdlib_Random[17],caml_random_state);
            caml_call1(Base_Random[19],base_random_state);
            var result$0=caml_call2(Stdlib_Result[8],bool_of_f,result)}
          if(verbose[1])caml_call2(Stdlib_Printf[2],_u_,time_sec[1]);
          if(0 === result$0[0])
           {if(result$0[1])return 0;
            tests_failed[1]++;
            var _a6_=string_of_module_descr(0);
            return caml_call2(eprintf_or_delay(_v_),descr$1,_a6_)}
          var match$1=result$0[1],backtrace=match$1[2],exn=match$1[1];
          tests_failed[1]++;
          var
           backtrace$0=hum_backtrace(backtrace),
           exn_str=caml_call1(Sexplib0_Sexp_conv[68],exn),
           sep=caml_call2(Stdlib_String[14],exn_str,10)?cst$9:cst$10,
           _a7_=string_of_module_descr(0);
          return caml_call5
                  (eprintf_or_delay(_w_),descr$1,sep,exn_str,backtrace$0,_a7_)}
        var _a8_=_a2_}
      else
       var _a8_=should_run;
      return _a8_}
    function set_lib_and_partition(static_lib,partition)
     {if(dynamic_lib[1])return 0;
      dynamic_lib[1] = [0,static_lib];
      var match=get(0);
      if(typeof match === "number")return 0;
      var
       match$0=match[2],
       what_to_do=match$0[2],
       which_tests=match$0[1],
       _aH_=caml_string_equal(which_tests[1],static_lib);
      if(_aH_)
       {var switch$0=0;
        if(typeof what_to_do !== "number" && ! what_to_do[2])
         {var requires_partition=0;switch$0 = 1}
        if(! switch$0)var requires_partition=1;
        if(caml_string_equal(partition,cst$11) && requires_partition)
         return caml_call1(Stdlib[2],cst_ppx_inline_test_cannot_use);
        current[1] = partition;
        return 0}
      return _aH_}
    function unset_lib(static_lib)
     {var _aE_=dynamic_lib[1];
      if(_aE_)
       {var
         lib=_aE_[1],
         _aF_=caml_string_equal(lib,static_lib),
         _aG_=_aF_?(dynamic_lib[1] = 0,0):_aF_;
        return _aG_}
      return 0}
    function test(config,descr,tags,filename,line_number,start_pos,end_pos,f)
     {return test_inner
              (config,
               descr,
               tags,
               filename,
               line_number,
               start_pos,
               end_pos,
               f,
               function(b){return b})}
    function test_unit
     (config,descr,tags,filename,line_number,start_pos,end_pos,f)
     {return test_inner
              (config,
               descr,
               tags,
               filename,
               line_number,
               start_pos,
               end_pos,
               f,
               function(param){return 1})}
    function test_module
     (config,descr,tags,def_filename,def_line_number,start_pos,end_pos,f)
     {var match=get(0);
      if(typeof match === "number")return 0;
      var
       _ax_=match[2],
       what_to_do=_ax_[2],
       match$0=_ax_[1],
       which_tags=match$0[4],
       libname=match$0[1],
       f$0=caml_call1(add_hooks(config),f),
       _ay_=current_tags(0),
       tags$0=caml_call2(Stdlib[37],tags,_ay_),
       _az_=caml_equal([0,libname],dynamic_lib[1]);
      if(_az_)
       var
        _av_=which_tags[2],
        _aw_=
         function(dropped){return caml_call2(Stdlib_List[36],dropped,tags$0)},
        should_run=1 - caml_call2(Stdlib_List[33],_aw_,_av_);
      else
       var should_run=_az_;
      if(should_run)
       {if(typeof what_to_do === "number")return found_test(0);
        var partition=what_to_do[2],_aA_=is_current(partition);
        if(_aA_)
         {test_modules_ran[1]++;
          var
           descr$0=
            caml_call4
             (displayed_descr(descr),
              def_filename,
              def_line_number,
              start_pos,
              end_pos),
           match$1=
            with$0
             (descr$0,
              tags,
              function(param){return time_without_resetting_random_(f$0)});
          if(0 === match$1[0])return 0;
          var match$2=match$1[1],backtrace=match$2[2],exn=match$2[1];
          test_modules_failed[1]++;
          var
           backtrace$0=hum_backtrace(backtrace),
           exn_str=caml_call1(Sexplib0_Sexp_conv[68],exn),
           sep=caml_call2(Stdlib_String[14],exn_str,10)?cst$12:cst$13,
           _aB_=string_of_module_descr(0),
           _aC_=caml_call1(Stdlib_String[28],descr$0);
          return caml_call5
                  (eprintf_or_delay(caml_call2(Stdlib[98],_y_,_x_)),
                   _aC_,
                   sep,
                   exn_str,
                   backtrace$0,
                   _aB_)}
        var _aD_=_aA_}
      else
       var _aD_=should_run;
      return _aD_}
    function summarize(param)
     {var match=get(0);
      if(typeof match === "number")
       {var switch$0=0;
        if(runtime.caml_notequal(caml_sys_argv(0),[0]))
         {var _aj_=runtime.caml_check_bound(caml_sys_argv(0),0)[1];
          if
           (caml_string_equal
             (caml_call1(Stdlib_Filename[13],_aj_),
              cst_inline_tests_runner_exe))
           {caml_call1(Stdlib_Printf[3],_z_);switch$0 = 1}}
        if(! switch$0)caml_call1(Stdlib_Printf[3],_A_);
        return 2}
      var _ak_=match[2],_al_=_ak_[1];
      if(typeof _ak_[2] === "number")
       {var
         _af_=0,
         _ag_=function(k,param,acc){return [0,k,acc]},
         _ah_=caml_call3(Stdlib_Hashtbl[14],_ag_,_c_,_af_),
         _ai_=caml_call2(Stdlib_List[56],Stdlib_String[9],_ah_),
         _am_=caml_call1(Stdlib_Printf[2],_B_);
        caml_call2(Stdlib_List[17],_am_,_ai_);
        return 0}
      var _an_=log[1];
      if(_an_){var ch=_an_[1];caml_call1(Stdlib[76],ch)}
      print_delayed_errors(0);
      var _ao_=tests_failed[1],_ap_=test_modules_failed[1];
      if(0 === _ao_ && 0 === _ap_)
       {if(show_counts[1])
         caml_call3(Stdlib_Printf[3],_C_,tests_ran[1],test_modules_ran[1]);
        var
         _aq_=_al_[2],
         _ar_=function(param){var used=param[3];return 1 - used[1]},
         unused_tests=caml_call2(Stdlib_List[41],_ar_,_aq_),
         errors=unused_tests?[0,unused_tests]:0;
        if(errors)
         {var tests=errors[1];
          caml_call1(Stdlib_Printf[3],_D_);
          var
           _as_=
            function(param)
             {var line_number_opt=param[2],filename=param[1];
              if(line_number_opt)
               {var line_number=line_number_opt[1];
                return caml_call3(Stdlib_Printf[3],_E_,filename,line_number)}
              return caml_call2(Stdlib_Printf[3],_F_,filename)};
          caml_call2(Stdlib_List[17],_as_,tests);
          caml_call1(Stdlib_Printf[3],_G_);
          return 2}
        if(0 === tests_ran[1] && strict[1])
         {caml_call1(Stdlib_Printf[3],_H_);return 2}
        return 0}
      if(0 === _ap_)
       var _at_=cst$14;
      else
       var
        _au_=caml_call2(Stdlib[98],_K_,_J_),
        _at_=caml_call2(Stdlib_Printf[4],_au_,_ap_);
      caml_call4(Stdlib_Printf[3],_I_,_ao_,tests_ran[1],_at_);
      return 1}
    var
     use_color$0=use_color[1],
     in_place$0=in_place[1],
     diff_command$0=diff_command[1],
     source_tree_root$0=source_tree_root[1],
     allow_output_patterns$0=allow_output_patterns[1],
     evaluators=[0,[0,summarize,0]];
    function add_evaluator(f){evaluators[1] = [0,f,evaluators[1]];return 0}
    function exit(param)
     {var _ac_=caml_call1(Stdlib_List[9],evaluators[1]);
      function _ad_(f){return caml_call1(f,0)}
      var param$0=combine_all(caml_call2(Stdlib_List[19],_ad_,_ac_));
      switch(param$0)
       {case 0:var _ae_=0;break;case 1:var _ae_=2;break;default:var _ae_=1}
      return caml_call1(Stdlib[99],_ae_)}
    var
     Ppx_inline_test_lib_Runtime=
      [0,
       [0,combine,combine_all,to_string],
       set_lib_and_partition,
       unset_lib,
       test,
       test_unit,
       test_module,
       testing,
       use_color$0,
       in_place$0,
       diff_command$0,
       source_tree_root$0,
       allow_output_patterns$0,
       _m_,
       am_running_inline_test_env_var,
       add_evaluator,
       exit];
    caml_register_global
     (125,Ppx_inline_test_lib_Runtime,"Ppx_inline_test_lib__Runtime");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJwcHhfaW5saW5lX3Rlc3RfbGliLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
