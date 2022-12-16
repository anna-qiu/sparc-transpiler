(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_register_global=runtime.caml_register_global,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_sys_getenv=runtime.caml_sys_getenv,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_ml=caml_string_of_jsbytes(".ml."),
     cst=caml_string_of_jsbytes("."),
     null$0=caml_string_of_jsbytes("<unknown>"),
     cst_BENCHMARKS_RUNNER=caml_string_of_jsbytes("BENCHMARKS_RUNNER"),
     cst$0=caml_string_of_jsbytes(""),
     cst_TRUE=caml_string_of_jsbytes("TRUE"),
     cst_FORCE_DROP_BENCH=caml_string_of_jsbytes("FORCE_DROP_BENCH"),
     Stdlib_Hashtbl=global_data.Stdlib__Hashtbl,
     Stdlib_List=global_data.Stdlib__List,
     Stdlib=global_data.Stdlib,
     Stdlib_String=global_data.Stdlib__String,
     Ppx_bench_lib=[0];
    caml_register_global(7,Ppx_bench_lib,"Ppx_bench_lib");
    var Ppx_bench_lib_Export=[0];
    caml_register_global(8,Ppx_bench_lib_Export,"Ppx_bench_lib__Export");
    var r=[0,0],libname_ref=[0,null$0];
    function set(str){libname_ref[1] = str;return 0}
    function unset(param){libname_ref[1] = null$0;return 0}
    var t=[0,0];
    function push(s){t[1] = [0,s,t[1]];return 0}
    function pop_exn(param){t[1] = caml_call1(Stdlib_List[6],t[1]);return 0}
    function compare(t1,t2){return runtime.caml_int_compare(t1[1],t2[1])}
    function get_module_name_opt(t)
     {var str=t[3],len=runtime.caml_ml_string_length(str),i=0;
      for(;;)
       {if((i + 4 | 0) <= len)
         {if(caml_string_equal(caml_call3(Stdlib_String[15],str,i,4),cst_ml))
           return [0,
                   caml_call3
                    (Stdlib_String[15],str,i + 4 | 0,(len - i | 0) - 4 | 0)];
          var i$0=i + 1 | 0,i=i$0;
          continue}
        return 0}}
    function with_test_spec(t,test_spec)
     {return [0,t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],test_spec,t[10]]}
    try
     {var _b_=caml_sys_getenv(cst_BENCHMARKS_RUNNER),v=_b_}
    catch(_r_)
     {_r_ = caml_wrap_exception(_r_);
      if(_r_ !== Stdlib[8])throw _r_;
      var v=cst$0}
    var
     add_environment_var=caml_string_equal(v,cst_TRUE),
     libs_to_entries=caml_call2(Stdlib_Hashtbl[1],0,10);
    function lookup_rev_lib(libname)
     {try
       {var _p_=caml_call2(Stdlib_Hashtbl[6],libs_to_entries,libname);
        return _p_}
      catch(_q_)
       {_q_ = caml_wrap_exception(_q_);
        if(_q_ === Stdlib[8])return 0;
        throw _q_}}
    function lookup_lib(libname)
     {var _o_=lookup_rev_lib(libname);return caml_call1(Stdlib_List[9],_o_)}
    try
     {caml_sys_getenv(cst_FORCE_DROP_BENCH);var _a_=1,force_drop=_a_}
    catch(_n_)
     {_n_ = caml_wrap_exception(_n_);
      if(_n_ !== Stdlib[8])throw _n_;
      var force_drop=0}
    function get_mode(param){return force_drop?-950194894:984731018}
    function add_bench
     (name,code,filename,type_conv_path,line,startpos,endpos,test_spec)
     {var match=get_mode(0);
      if(984731018 <= match)
       {var _i_=libname_ref[1],_j_=t[1];
        if(_j_)
         var
          _k_=caml_call1(Stdlib_List[9],_j_),
          _l_=[0,caml_call2(Stdlib_String[6],cst,_k_)];
        else
         var _l_=0;
        r[1]++;
        var
         entry=
          [0,
           r[1],
           code,
           type_conv_path,
           name,
           filename,
           line,
           startpos,
           endpos,
           test_spec,
           _l_],
         _m_=[0,entry,lookup_rev_lib(_i_)];
        return caml_call3(Stdlib_Hashtbl[5],libs_to_entries,_i_,_m_)}
      return 0}
    function add_bench_module(name,param,_g_,_f_,_e_,_d_,_c_,f)
     {var match=get_mode(0);
      if(984731018 <= match)
       {push(name);
        try
         {caml_call1(f,0);var _h_=pop_exn(0);return _h_}
        catch(ex){ex = caml_wrap_exception(ex);pop_exn(0);throw ex}}
      return 0}
    var
     Ppx_bench_lib_Benchmark_accumu=
      [0,
       [0,set,unset],
       [0,with_test_spec,compare,get_module_name_opt],
       add_environment_var,
       lookup_lib,
       add_bench,
       add_bench_module];
    caml_register_global
     (13,
      Ppx_bench_lib_Benchmark_accumu,
      "Ppx_bench_lib__Benchmark_accumulator");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJwcHhfYmVuY2hfbGliLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
