(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call8(f,a0,a1,a2,a3,a4,a5,a6,a7)
     {return f.length == 8
              ?f(a0,a1,a2,a3,a4,a5,a6,a7)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7])}
    var
     global_data=runtime.caml_get_global_data(),
     ocaml_lex_tables=
      [0,
       caml_string_of_jsbytes
        ("\0\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\0\0\x01\0\xff\xff\x02\0\0\0\0\0\x01\0\0\0\x02\0\x01\0\x03\0\0\0\x03\0\x03\0\0\0\x01\0\t\0\x05\0\x02\0\x04\0\x11\0\f\0\x0e\0\x04\0\x11\0\x12\0\x1a\0\x1c\0\x05\0\x1b\0\x10\0\x14\0\x17\0\x06\0U\0\xfd\xff\xfe\xff\x01\0.\0/\0(\0\x1f\0.\x000\0\x07\0O\0\x1c\0>\0\b\0\xff\xff\t\0C\0C\0g\0d\0i\0_\0k\0_\0q\0\n\0h\0h\0t\0h\0z\0h\0t\0o\0q\0\x0b\0t\0u\0}\0\x7f\0\f\0~\0s\0w\0z\0\r\0"),
       caml_string_of_jsbytes
        ("\x01\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"),
       caml_string_of_jsbytes
        ("\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff/\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"),
       caml_string_of_jsbytes
        ("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\f\0\x0e\0\x18\0\f\0'\0\f\x007\0;\0=\0G\0;\0V\0;\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\x000\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x02\x001\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\"\0\x03\0\x1d\0\x07\0\x06\0\n\0\t\0\x17\0\x04\0\x11\0\x13\0\x15\0\x12\0\x1b\0\x19\0\x0f\0\x1a\0\x10\0\x05\0\x0b\0\x14\0\x16\0\x1c\0\x1e\0\r\0\x1f\0 \0!\0#\0$\0%\0&\0(\0)\0*\0+\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0Q\x002\x003\x004\x005\x006\0<\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\x009\x008\0:\0>\0.\0?\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0@\0A\0B\0C\0D\0E\0F\0H\0I\0J\0K\0L\0M\0N\0O\0P\0R\0S\0T\0U\0W\0X\0Y\0Z\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0-\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"),
       caml_string_of_jsbytes
        ("\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x07\0\x0b\0\r\0\x17\0!\0&\0+\x006\0:\0<\0F\0P\0U\0Z\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0/\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0/\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\0\x02\0\x1c\0\x06\0\x05\0\b\0\b\0\x16\0\x03\0\x10\0\x12\0\x14\0\x11\0\x1a\0\x18\0\x0e\0\x19\0\x0f\0\x04\0\n\0\x13\0\x15\0\x1b\0\x1d\0\t\0\x1e\0\x1f\0 \0\"\0#\0$\0%\0'\0(\0)\0*\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\x000\x001\x002\x003\x004\x005\x008\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\x007\x007\x009\0=\0,\0>\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0?\0@\0A\0B\0C\0D\0E\0G\0H\0I\0J\0K\0L\0M\0N\0O\0Q\0R\0S\0T\0V\0W\0X\0Y\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff,\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"),
       caml_string_of_jsbytes(""),
       caml_string_of_jsbytes(""),
       caml_string_of_jsbytes(""),
       caml_string_of_jsbytes(""),
       caml_string_of_jsbytes(""),
       caml_string_of_jsbytes("")],
     cst$0=caml_string_of_jsbytes(""),
     cst=caml_string_of_jsbytes(""),
     cst_Expect_test_collector_Inst=
      caml_string_of_jsbytes
       ("Expect_test_collector.Instance.get_current called outside a test."),
     cst_output=caml_string_of_jsbytes("output"),
     cst_expect_test=caml_string_of_jsbytes("expect-test"),
     cst_Expect_test_collector_get_=
      caml_string_of_jsbytes("Expect_test_collector.get: not set"),
     cst_Expect_test_collector_unse=
      caml_string_of_jsbytes("Expect_test_collector.unset: not set"),
     cst_Expect_test_collector_set_=
      caml_string_of_jsbytes("Expect_test_collector.set: already set"),
     Stdlib_Lexing=global_data.Stdlib__Lexing,
     Stdlib_ListLabels=global_data.Stdlib__ListLabels,
     Stdlib=global_data.Stdlib,
     Stdlib_Printf=global_data.Stdlib__Printf,
     Expect_test_common_File=global_data.Expect_test_common__File,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Stdlib_Printexc=global_data.Stdlib__Printexc,
     Expect_test_config_types=global_data.Expect_test_config_types,
     Stdlib_Format=global_data.Stdlib__Format,
     Stdlib_Filename=global_data.Stdlib__Filename,
     Expect_test_collector=[0];
    caml_register_global(15,Expect_test_collector,"Expect_test_collector__");
    var
     _f_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("Trying to run an expect test from the wrong file.\n- test declared at "),
        [2,
         0,
         [12,
          58,
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes("\n- trying to run it from "),
            [2,0,[12,10,0]]]]]]],
       caml_string_of_jsbytes
        ("Trying to run an expect test from the wrong file.\n- test declared at %s:%d\n- trying to run it from %s\n")],
     _e_=
      [0,
       [11,
        caml_string_of_jsbytes("\nSTOPPED COLLECTING OUTPUT AFTER "),
        [4,
         0,
         0,
         0,
         [11,
          caml_string_of_jsbytes
           (" FLUSHING ATTEMPS\nTHERE MUST BE A BACKGROUND JOB PRINTING TO STDOUT\n"),
          0]]],
       caml_string_of_jsbytes
        ("\nSTOPPED COLLECTING OUTPUT AFTER %d FLUSHING ATTEMPS\nTHERE MUST BE A BACKGROUND JOB PRINTING TO STDOUT\n")],
     _c_=[0,[2,0,[10,0]],caml_string_of_jsbytes("%s%!")],
     _b_=
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
            [4,
             0,
             0,
             0,
             [12,
              45,
              [4,
               0,
               0,
               0,
               [11,
                caml_string_of_jsbytes
                 (":\nError: program exited while expect test was running!\nOutput captured so far:\n"),
                [10,0]]]]]]]]]],
       caml_string_of_jsbytes
        ("File %S, line %d, characters %d-%d:\nError: program exited while expect test was running!\nOutput captured so far:\n%!")],
     _d_=[0,[2,0,[10,0]],caml_string_of_jsbytes("%s%!")],
     _a_=[0,0,0];
    function contains_backtraces(s)
     {var lexbuf=caml_call2(Stdlib_Lexing[3],0,s),ocaml_lex_state=0;
      for(;;)
       {var
         ocaml_lex_state$0=
          caml_call3
           (Stdlib_Lexing[20],ocaml_lex_tables,ocaml_lex_state,lexbuf);
        if(0 === ocaml_lex_state$0)return 1;
        if(1 === ocaml_lex_state$0)
         a:
         for(;;)
          {var ocaml_lex_state$1=44;
           for(;;)
            {var
              ocaml_lex_state$2=
               caml_call3
                (Stdlib_Lexing[20],ocaml_lex_tables,ocaml_lex_state$1,lexbuf);
             if(2 < ocaml_lex_state$2 >>> 0)
              {caml_call1(lexbuf[1],lexbuf);
               var ocaml_lex_state$1=ocaml_lex_state$2;
               continue}
             switch(ocaml_lex_state$2)
              {case 0:return 1;case 1:continue a;default:return 0}}}
        caml_call1(lexbuf[1],lexbuf);
        var ocaml_lex_state=ocaml_lex_state$0;
        continue}}
    var Expect_test_collector_Check_ba=[0,contains_backtraces];
    caml_register_global
     (17,
      Expect_test_collector_Check_ba,
      "Expect_test_collector__Check_backtraces");
    var Test_outcome=[0],tests_run=[0,0];
    function protect(finally$0,f)
     {try
       {var x=caml_call1(f,0)}
      catch(e){e = caml_wrap_exception(e);caml_call1(finally$0,0);throw e}
      caml_call1(finally$0,0);
      return x}
    var current=[0,0];
    function set(absolute_filename)
     {return current[1]
              ?caml_call1(Stdlib[2],cst_Expect_test_collector_set_)
              :(current[1] = [0,absolute_filename],0)}
    function unset(param)
     {return current[1]
              ?(current[1] = 0,0)
              :caml_call1(Stdlib[2],cst_Expect_test_collector_unse)}
    function get_position(param)
     {return runtime.caml_out_channel_pos_fd(Stdlib[39])}
    function create(param)
     {var
       filename=caml_call3(Stdlib_Filename[16],0,cst_expect_test,cst_output),
       chan=caml_call1(Stdlib[61],filename);
      runtime.expect_test_collector_before_test(chan,Stdlib[39],Stdlib[40]);
      return [0,0,chan,caml_call1(Expect_test_common_File[1][6],filename)]}
    function relative_filename(t)
     {var _L_=t[3],_M_=caml_call1(Expect_test_common_File[2],0);
      return caml_call2(Expect_test_common_File[1][1],_M_,_L_)}
    function with_ic(fname,f)
     {var ic=caml_call1(Stdlib[80],fname);
      function _K_(param){return caml_call1(f,ic)}
      return protect(function(param){return caml_call1(Stdlib[93],ic)},_K_)}
    var current_test=[0,0];
    function get_current(param)
     {var _J_=current_test[1];
      if(_J_){var match=_J_[1],t=match[2];return t}
      return caml_call1(Stdlib[2],cst_Expect_test_collector_Inst)}
    function save_and_return_output_without(t,location)
     {var pos=get_position(0),_H_=t[1];
      if(_H_)
       var match=_H_[1],prev_pos=match[2],prev_pos$0=prev_pos;
      else
       var prev_pos$0=0;
      t[1] = [0,[0,location,pos],t[1]];
      caml_call1(Stdlib[63],t[2]);
      var len=pos - prev_pos$0 | 0;
      function _I_(ic)
       {caml_call2(Stdlib[90],ic,prev_pos$0);
        return caml_call2(Stdlib[86],ic,len)}
      return with_ic(relative_filename(t),_I_)}
    function basic_flush(param)
     {caml_call2(Stdlib_Format[38],Stdlib_Format[109],0);
      caml_call2(Stdlib_Format[38],Stdlib_Format[110],0);
      caml_call1(Stdlib[63],Stdlib[39]);
      return caml_call1(Stdlib[63],Stdlib[40])}
    function save_and_return_output(location)
     {var instance=get_current(0);
      basic_flush(0);
      return save_and_return_output_without(instance,location)}
    function tests_run$0(param)
     {return caml_call1(Stdlib_ListLabels[9],tests_run[1])}
    var
     _g_=[0,set,unset],
     Expect_test_collector$0=
      [0,
       Test_outcome,
       function(C)
        {function symbol_bind(t,f){return caml_call2(C[2][2],t,f)}
         var
          return$0=C[2][1],
          IO_flush=C[2],
          run=C[3],
          flushed=C[4],
          sanitize=C[5],
          upon_unreleasable_issue=C[6];
         function flush(param){basic_flush(0);return caml_call1(C[2][1],0)}
         function extract_output_and_sanitize(ic,len)
          {var s=caml_call1(sanitize,caml_call2(Stdlib[86],ic,len));
           if(contains_backtraces(s))
            {var
              _G_=
               caml_call1
                (Expect_test_config_types[1][3],upon_unreleasable_issue);
             return caml_call2(Stdlib[28],_G_,s)}
           return s}
         function get_outputs_and_cleanup(t)
          {var last_ofs=get_position(0);
           runtime.expect_test_collector_after_test(Stdlib[39],Stdlib[40]);
           caml_call1(Stdlib[76],t[2]);
           var fname=relative_filename(t);
           function _C_(param)
            {return with_ic
                     (fname,
                      function(ic)
                       {var _D_=caml_call1(Stdlib_ListLabels[9],t[1]);
                        function _E_(param,_F_)
                         {var
                           next_ofs=_F_[2],
                           loc=_F_[1],
                           acc=param[2],
                           ofs=param[1],
                           s=extract_output_and_sanitize(ic,next_ofs - ofs | 0);
                          return [0,next_ofs,[0,[0,loc,s],acc]]}
                        var
                         match=caml_call3(Stdlib_ListLabels[25],_E_,_a_,_D_),
                         outputs=match[2],
                         ofs=match[1],
                         trailing_output=
                          extract_output_and_sanitize(ic,last_ofs - ofs | 0);
                        return [0,
                                caml_call1(Stdlib_ListLabels[9],outputs),
                                trailing_output]})}
           return protect
                   (function(param){return runtime.caml_sys_remove(fname)},_C_)}
         function save_output(location)
          {var t=get_current(0);
           function _B_(param)
            {var pos=get_position(0);
             t[1] = [0,[0,location,pos],t[1]];
             return caml_call1(return$0,0)}
           return symbol_bind(flush(0),_B_)}
         function save_and_return_output(location)
          {var t=get_current(0);
           function _A_(param)
            {return caml_call1
                     (return$0,save_and_return_output_without(t,location))}
           return symbol_bind(flush(0),_A_)}
         function _h_(param)
          {var _u_=current_test[1];
           if(_u_)
            {var
              match=_u_[1],
              t=match[2],
              loc=match[1],
              match$0=get_outputs_and_cleanup(t),
              trailing=match$0[2],
              blocks=match$0[1],
              _v_=loc[5] - loc[3] | 0,
              _w_=loc[4] - loc[3] | 0,
              _x_=loc[2],
              _y_=caml_call1(Expect_test_common_File[1][7],loc[1]);
             caml_call5(Stdlib_Printf[3],_b_,_y_,_x_,_w_,_v_);
             var
              _z_=
               function(param)
                {var s=param[2];return caml_call2(Stdlib_Printf[3],_c_,s)};
             caml_call2(Stdlib_ListLabels[17],_z_,blocks);
             return caml_call2(Stdlib_Printf[3],_d_,trailing)}
           return 0}
         caml_call1(Stdlib[100],_h_);
         function final_flush(opt,k)
          {if(opt)var sth=opt[1],count=sth;else var count=0;
           var max_attempts=10;
           function _t_(param)
            {return caml_call1(flushed,0)
                     ?caml_call1(k,cst)
                     :count === 10
                       ?caml_call1(k,caml_call2(Stdlib_Printf[4],_e_,max_attempts))
                       :final_flush([0,count + 1 | 0],k)}
           return symbol_bind(flush(0),_t_)}
         function exec
          (file_digest,location,expectations,uncaught_exn_expectation,f)
          {var t=create(0);
           current_test[1] = [0,[0,location,t]];
           function finally$0(uncaught_exn)
            {return caml_call1
                     (run,
                      function(param)
                       {var
                         _r_=
                          final_flush
                           (0,
                            function(append)
                             {current_test[1] = 0;
                              var
                               match=get_outputs_and_cleanup(t),
                               trailing_output=match[2],
                               saved_output=match[1],
                               _s_=tests_run[1];
                              tests_run[1]
                              =
                              [0,
                               [0,
                                file_digest,
                                location,
                                expectations,
                                uncaught_exn_expectation,
                                saved_output,
                                caml_call2(Stdlib[28],trailing_output,append),
                                upon_unreleasable_issue,
                                uncaught_exn],
                               _s_];
                              return caml_call1(return$0,0)});
                        return caml_call1(IO_flush[3],_r_)})}
           try
            {caml_call1(run,f)}
           catch(exn)
            {exn = caml_wrap_exception(exn);
             var bt=caml_call1(Stdlib_Printexc[12],0);
             return finally$0([0,[0,exn,bt]])}
           return finally$0(0)}
         function run$0
          (file_digest,
           location,
           defined_in,
           description,
           tags,
           expectations,
           uncaught_exn_expectation,
           inline_test_config,
           f)
          {function _i_(param)
            {var _p_=current[1];
             if(_p_)
              var fn=_p_[1],registering_tests_for=fn;
             else
              var
               registering_tests_for=
                caml_call1(Stdlib[2],cst_Expect_test_collector_get_);
             return runtime.caml_string_notequal
                      (defined_in,registering_tests_for)
                     ?caml_call5
                       (Stdlib_Printf[10],
                        Stdlib[2],
                        _f_,
                        defined_in,
                        location[2],
                        registering_tests_for)
                     :(caml_call1
                        (run,
                         function(param)
                          {var _q_=flush(0);return caml_call1(IO_flush[3],_q_)}),
                       exec
                        (file_digest,
                         location,
                         expectations,
                         uncaught_exn_expectation,
                         f),
                       1)}
           var
            _j_=location[5] - location[3] | 0,
            _k_=location[4] - location[3] | 0,
            _l_=location[2],
            _m_=caml_call1(Expect_test_common_File[1][7],location[1]),
            _n_=
             [246,
              function(_o_)
               {if(description){var s=description[1];return s}return cst$0}];
           return caml_call8
                   (Ppx_inline_test_lib_Runtime[4],
                    inline_test_config,
                    _n_,
                    tags,
                    _m_,
                    _l_,
                    _k_,
                    _j_,
                    _i_)}
         return [0,save_output,save_and_return_output,run$0]},
       save_and_return_output,
       tests_run$0,
       _g_];
    caml_register_global(27,Expect_test_collector$0,"Expect_test_collector");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJleHBlY3RfdGVzdF9jb2xsZWN0b3IuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlc0NvbnRlbnQiOltdfQ==
