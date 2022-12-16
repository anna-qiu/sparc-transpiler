(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
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
    var
     global_data=runtime.caml_get_global_data(),
     cst_snd=caml_string_of_jsbytes("snd"),
     cst_fst=caml_string_of_jsbytes("fst"),
     cst_validation_errors=caml_string_of_jsbytes("validation errors"),
     cst$0=caml_string_of_jsbytes(""),
     cst_Exception_raised_during_va=
      caml_string_of_jsbytes("Exception raised during validation"),
     cst_Validate=caml_string_of_jsbytes("Validate"),
     cst_validate=caml_string_of_jsbytes("validate"),
     cst_validate_src_validate_ml=
      caml_string_of_jsbytes("validate/src/validate.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_validate$0=caml_string_of_jsbytes("validate"),
     cst_validate$1=caml_string_of_jsbytes("validate"),
     cst_Validate$0=caml_string_of_jsbytes("Validate"),
     Base_Maybe_bound=global_data.Base__Maybe_bound,
     Assert_failure=global_data.Assert_failure,
     Base_Printf=global_data.Base__Printf,
     Base_List=global_data.Base__List,
     Base_Int=global_data.Base__Int,
     Base_Staged=global_data.Base__Staged,
     Base_Field=global_data.Base__Field,
     Base_Or_error=global_data.Base__Or_error,
     Base=global_data.Base,
     Base_Error=global_data.Base__Error,
     Base_String=global_data.Base__String,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime;
    caml_call1(Ppx_module_timer_runtime[4],cst_Validate);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_validate);
    caml_call1(Expect_test_collector[5][1],cst_validate_src_validate_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_validate$0,cst);
    var
     _c_=[0,caml_string_of_jsbytes("validate/src/validate.ml"),154,20],
     _d_=
      [0,
       [11,
        caml_string_of_jsbytes("value "),
        [2,0,[11,caml_string_of_jsbytes(" < bound "),[2,0,0]]]],
       caml_string_of_jsbytes("value %s < bound %s")],
     _e_=
      [0,
       [11,
        caml_string_of_jsbytes("value "),
        [2,0,[11,caml_string_of_jsbytes(" <= bound "),[2,0,0]]]],
       caml_string_of_jsbytes("value %s <= bound %s")],
     _f_=[0,caml_string_of_jsbytes("validate/src/validate.ml"),159,20],
     _g_=
      [0,
       [11,
        caml_string_of_jsbytes("value "),
        [2,0,[11,caml_string_of_jsbytes(" > bound "),[2,0,0]]]],
       caml_string_of_jsbytes("value %s > bound %s")],
     _h_=
      [0,
       [11,
        caml_string_of_jsbytes("value "),
        [2,0,[11,caml_string_of_jsbytes(" >= bound "),[2,0,0]]]],
       caml_string_of_jsbytes("value %s >= bound %s")],
     _b_=[0,0],
     _a_=[0,caml_string_of_jsbytes(".")],
     pass=0;
    function fails(message,a,sexp_of_a)
     {return [0,[0,0,caml_call5(Base_Error[17],0,0,message,a,sexp_of_a)],0]}
    function fail(message)
     {return [0,[0,0,caml_call1(Base_Error[12],message)],0]}
    function failf(format){return caml_call2(Base_Printf[4],fail,format)}
    function fail_s(sexp){return [0,[0,0,caml_call1(Base_Error[18],sexp)],0]}
    function combine(t1,t2){return caml_call2(Base[178],t1,t2)}
    var of_list=Base_List[138];
    function name(name,t)
     {if(t)
       {var
         _P_=
          function(param)
           {var error=param[2],path=param[1];return [0,[0,name,path],error]};
        return caml_call2(Base_List[76],t,_P_)}
      return 0}
    function name_list(n,l){return name(n,caml_call1(of_list,l))}
    function fail_fn(message,param){return fail(message)}
    function pass_bool(param){return pass}
    function pass_unit(param){return pass}
    function protect(f,v)
     {try
       {var _O_=caml_call1(f,v);return _O_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        var _N_=[0,[0,cst$0,caml_call1(Base[106],exn)],0];
        return fail_s
                (caml_call2(Base[84][7],cst_Exception_raised_during_va,_N_))}}
    function try_with(f)
     {var _M_=0;
      return protect(function(param){caml_call1(f,0);return pass},_M_)}
    function path_string(path){return caml_call2(Base_String[54],_a_,path)}
    function errors(t)
     {function _J_(param)
       {var
         error=param[2],
         path=param[1],
         _K_=path_string(path),
         _L_=caml_call2(Base_Error[20],error,_K_);
        return caml_call1(Base_Error[9],_L_)}
      return caml_call2(Base_List[76],t,_J_)}
    function result(t)
     {if(caml_call1(Base_List[8],t))return _b_;
      function _F_(x_005)
       {function _I_(param)
         {var
           arg1_002=param[2],
           arg0_001=param[1],
           res0_003=caml_call1(Base[164],arg0_001),
           res1_004=caml_call1(Base_Error[6],arg1_002);
          return [1,[0,res0_003,[0,res1_004,0]]]}
        return caml_call2(Base_List[4],_I_,x_005)}
      function _G_(param)
       {var error=param[2],path=param[1];return [0,path_string(path),error]}
      var _H_=caml_call2(Base_List[76],t,_G_);
      return caml_call5(Base_Or_error[34],0,0,cst_validation_errors,_H_,_F_)}
    function maybe_raise(t)
     {var _E_=result(t);return caml_call1(Base_Or_error[31],_E_)}
    function valid_or_error(check,x)
     {function _C_(param){return x}
      var _D_=result(protect(check,x));
      return caml_call2(Base_Or_error[43],_D_,_C_)}
    function field_direct(check,fld,record,v)
     {var result=protect(check,v);
      return name(caml_call1(Base_Field[2],fld),result)}
    function field(check,record,fld)
     {var v=caml_call2(Base_Field[3],fld,record);
      return field_direct(check,fld,record,v)}
    function field_folder(check,record)
     {return function(acc,fld){return [0,field(check,record,fld),acc]}}
    function field_direct_folder(check)
     {function _B_(acc,fld,record,v)
       {var result=field_direct(check,fld,record,v);
        return result?[0,result,acc]:acc}
      return caml_call1(Base_Staged[1],_B_)}
    function all(checks,v)
     {var checks$0=checks,errs=0;
      for(;;)
       {if(checks$0)
         {var checks$1=checks$0[2],check=checks$0[1],err=protect(check,v);
          if(err)
           {var errs$0=[0,err,errs],checks$0=checks$1,errs=errs$0;continue}
          var checks$0=checks$1;
          continue}
        return caml_call1(of_list,caml_call1(Base_List[38],errs))}}
    function of_result(f)
     {function _z_(v)
       {var match=caml_call1(f,v);
        if(0 === match[0])return pass;
        var error=match[1];
        return fail(error)}
      return function(_A_){return protect(_z_,_A_)}}
    function of_error(f)
     {function _x_(v)
       {var match=caml_call1(f,v);
        if(0 === match[0])return pass;
        var error=match[1];
        return [0,[0,0,error],0]}
      return function(_y_){return protect(_x_,_y_)}}
    function booltest(f,if_false)
     {function _v_(v){return caml_call1(f,v)?pass:fail(if_false)}
      return function(_w_){return protect(_v_,_w_)}}
    function pair(fst,snd,param)
     {var
       snd_value=param[2],
       fst_value=param[1],
       _u_=[0,name(cst_snd,protect(snd,snd_value)),0];
      return caml_call1(of_list,[0,name(cst_fst,protect(fst,fst_value)),_u_])}
    function list_indexed(check,list)
     {function _s_(i,el)
       {var _t_=protect(check,el);
        return name(caml_call1(Base_Int[11],i + 1 | 0),_t_)}
      return caml_call1(of_list,caml_call2(Base_List[96],list,_s_))}
    function list(extract_name,check,list)
     {function _r_(el)
       {var t=protect(check,el);
        return t
                ?protect
                  (function(t){return name(caml_call1(extract_name,el),t)},t)
                :0}
      return caml_call1(of_list,caml_call2(Base_List[76],list,_r_))}
    function alist(name,f,list$0)
     {function _q_(param){var x=param[2];return caml_call1(f,x)}
      return list
              (function(param){var key=param[1];return caml_call1(name,key)},
               _q_,
               list$0)}
    function first_failure(t1,t2){return caml_call1(Base_List[8],t1)?t2:t1}
    function of_error_opt(param)
     {if(param){var error=param[1];return fail(error)}return pass}
    function bounded(name,lower,upper,compare,x)
     {var match=caml_call4(Base_Maybe_bound[16],lower,upper,x,compare);
      switch(match)
       {case 0:
         if(typeof lower === "number")
          throw [0,Assert_failure,_c_];
         else
          {if(0 === lower[0])
            {var
              incl=lower[1],
              _i_=caml_call1(name,incl),
              _j_=caml_call1(name,x);
             return fail(caml_call3(Base_Printf[2],_d_,_j_,_i_))}
           var excl=lower[1],_k_=caml_call1(name,excl),_l_=caml_call1(name,x);
           return fail(caml_call3(Base_Printf[2],_e_,_l_,_k_))}
        case 1:return pass;
        default:
         if(typeof upper === "number")
          throw [0,Assert_failure,_f_];
         else
          {if(0 === upper[0])
            {var
              incl$0=upper[1],
              _m_=caml_call1(name,incl$0),
              _n_=caml_call1(name,x);
             return fail(caml_call3(Base_Printf[2],_g_,_n_,_m_))}
           var
            excl$0=upper[1],
            _o_=caml_call1(name,excl$0),
            _p_=caml_call1(name,x);
           return fail(caml_call3(Base_Printf[2],_h_,_p_,_o_))}}}
    function symbol(t1,t2){return combine(t1,t2)}
    var Infix=[0,symbol];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_validate$1);
    caml_call1(Expect_test_collector[5][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Validate$0);
    var
     Validate=
      [0,
       pass,
       fail,
       fails,
       fail_s,
       failf,
       combine,
       of_list,
       name,
       name_list,
       fail_fn,
       pass_bool,
       pass_unit,
       protect,
       try_with,
       result,
       errors,
       maybe_raise,
       valid_or_error,
       field,
       field_direct,
       field_folder,
       field_direct_folder,
       all,
       of_result,
       of_error,
       booltest,
       pair,
       list_indexed,
       list,
       first_failure,
       of_error_opt,
       alist,
       bounded,
       Infix];
    runtime.caml_register_global(35,Validate,"Validate");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ2YWxpZGF0ZS5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
