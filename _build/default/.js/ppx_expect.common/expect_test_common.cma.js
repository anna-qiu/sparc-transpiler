(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_register_global=runtime.caml_register_global,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Expect_test_collector_File=
      caml_string_of_jsbytes
       ("Expect_test_collector.File.Digest.of_string, unexpected length"),
     cst_Expect_test_collector_File$0=
      caml_string_of_jsbytes("Expect_test_collector.File.Digest.of_string"),
     cst_end_pos=caml_string_of_jsbytes("end_pos"),
     cst_filename=caml_string_of_jsbytes("filename"),
     cst_line_number=caml_string_of_jsbytes("line_number"),
     cst_line_start=caml_string_of_jsbytes("line_start"),
     cst_start_pos=caml_string_of_jsbytes("start_pos"),
     cst_end_pos$0=caml_string_of_jsbytes("end_pos"),
     cst_start_pos$0=caml_string_of_jsbytes("start_pos"),
     cst_line_start$0=caml_string_of_jsbytes("line_start"),
     cst_line_number$0=caml_string_of_jsbytes("line_number"),
     cst_filename$0=caml_string_of_jsbytes("filename"),
     error_source_024=caml_string_of_jsbytes("file.ml.Location.T.t"),
     Base=global_data.Base,
     Stdlib_Filename=global_data.Stdlib__Filename,
     Base_Ppx_compare_lib=global_data.Base__Ppx_compare_lib,
     Assert_failure=global_data.Assert_failure,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base_String=global_data.Base__String,
     Base_Comparable=global_data.Base__Comparable,
     Expect_test_common=[0];
    caml_register_global(27,Expect_test_common,"Expect_test_common__");
    var Expect_test_common_Import=[0];
    caml_register_global
     (28,Expect_test_common_Import,"Expect_test_common__Import");
    var
     hash_fold_t=Base_String[26],
     t_of_sexp=Base_String[27],
     sexp_of_t=Base_String[28],
     of_string=Base_String[29],
     to_string=Base_String[30],
     symbol=Base_String[31],
     symbol$0=Base_String[32],
     symbol$1=Base_String[33],
     symbol$2=Base_String[34],
     symbol$3=Base_String[35],
     symbol$4=Base_String[36],
     compare=Base_String[37],
     min=Base_String[38],
     max=Base_String[39],
     ascending=Base_String[40],
     descending=Base_String[41],
     between=Base_String[42],
     clamp_exn=Base_String[43],
     clamp=Base_String[44],
     comparator=Base_String[45],
     pp=Base_String[46],
     hashable=Base_String[47],
     equal=Base_String[121],
     _b_=[0,caml_string_of_jsbytes("end_pos")],
     _c_=[0,caml_string_of_jsbytes("start_pos")],
     _d_=[0,caml_string_of_jsbytes("line_start")],
     _e_=[0,caml_string_of_jsbytes("line_number")],
     _f_=[0,caml_string_of_jsbytes("filename")],
     _a_=[0,caml_string_of_jsbytes("common/file.ml"),76,22],
     _l_=[0,caml_string_of_jsbytes("body_location")],
     _m_=[0,caml_string_of_jsbytes("extid_location")],
     _n_=[0,caml_string_of_jsbytes("body")],
     _o_=[0,caml_string_of_jsbytes("tag")],
     _h_=[0,caml_string_of_jsbytes("Output")],
     _i_=[0,caml_string_of_jsbytes("Unreachable")],
     _j_=[0,caml_string_of_jsbytes("Exact")],
     _k_=[0,caml_string_of_jsbytes("Pretty")];
    function relative_to(dir,t)
     {return caml_call1(Stdlib_Filename[5],t)
              ?caml_call2(Stdlib_Filename[4],dir,t)
              :t}
    var
     Name=
      [0,
       relative_to,
       hash_fold_t,
       function(_R_){return runtime.Base_hash_string(_R_)},
       t_of_sexp,
       sexp_of_t,
       of_string,
       to_string,
       symbol,
       symbol$0,
       symbol$1,
       symbol$2,
       symbol$3,
       symbol$4,
       equal,
       compare,
       min,
       max,
       ascending,
       descending,
       between,
       clamp_exn,
       clamp,
       comparator,
       pp,
       hashable];
    try
     {var switch$0=0,v=runtime.caml_sys_getcwd(0);switch$0 = 1}
    catch(exn)
     {exn = caml_wrap_exception(exn);var dir_or_error=[0,3458171,exn]}
    if(switch$0)var dir_or_error=[0,17724,v];
    function initial_dir(param)
     {if(3458171 <= dir_or_error[1]){var exn=dir_or_error[2];throw exn}
      var v=dir_or_error[2];
      return v}
    function t_of_sexp$0(sexp_002)
     {if(0 === sexp_002[0])
       return caml_call2
               (Sexplib0_Sexp_conv_error[16],error_source_024,sexp_002);
      var
       field_sexps_003=sexp_002[1],
       filename_004=[0,0],
       line_number_006=[0,0],
       line_start_008=[0,0],
       start_pos_010=[0,0],
       end_pos_012=[0,0],
       duplicates_014=[0,0],
       extra_015=[0,0],
       param=field_sexps_003;
      for(;;)
       {if(param)
         {var _G_=param[1];
          if(1 === _G_[0])
           {var _H_=_G_[1];
            if(_H_)
             {var _I_=_H_[1];
              if(0 === _I_[0])
               {var _J_=_H_[2],_K_=_I_[1],switch$0=0;
                if(! _J_ || ! _J_[2])switch$0 = 1;
                if(switch$0)
                 {var
                   tail_026=param[2],
                   field_sexp_017$5=
                    function(_Q_)
                     {function field_sexp_017(param)
                       {if(_Q_)
                         {if(_Q_[2])throw [0,Assert_failure,_a_];
                          var x_027=_Q_[1];
                          return x_027}
                        return caml_call2
                                (Sexplib0_Sexp_conv_error[10],error_source_024,sexp_002)}
                      return field_sexp_017},
                   field_sexp_017=field_sexp_017$5(_J_);
                  if(caml_string_notequal(_K_,cst_end_pos))
                   if(caml_string_notequal(_K_,cst_filename))
                    if(caml_string_notequal(_K_,cst_line_number))
                     if(caml_string_notequal(_K_,cst_line_start))
                      if(caml_string_notequal(_K_,cst_start_pos))
                       {if(Sexplib0_Sexp_conv[26][1])
                         extra_015[1] = [0,_K_,extra_015[1]]}
                      else
                       if(start_pos_010[1])
                        duplicates_014[1] = [0,_K_,duplicates_014[1]];
                       else
                        {var
                          field_sexp_017$0=field_sexp_017(0),
                          fvalue_020=caml_call1(Base[118],field_sexp_017$0);
                         start_pos_010[1] = [0,fvalue_020]}
                     else
                      if(line_start_008[1])
                       duplicates_014[1] = [0,_K_,duplicates_014[1]];
                      else
                       {var
                         field_sexp_017$1=field_sexp_017(0),
                         fvalue_021=caml_call1(Base[118],field_sexp_017$1);
                        line_start_008[1] = [0,fvalue_021]}
                    else
                     if(line_number_006[1])
                      duplicates_014[1] = [0,_K_,duplicates_014[1]];
                     else
                      {var
                        field_sexp_017$2=field_sexp_017(0),
                        fvalue_022=caml_call1(Base[118],field_sexp_017$2);
                       line_number_006[1] = [0,fvalue_022]}
                   else
                    if(filename_004[1])
                     duplicates_014[1] = [0,_K_,duplicates_014[1]];
                    else
                     {var
                       field_sexp_017$3=field_sexp_017(0),
                       fvalue_023=caml_call1(Name[4],field_sexp_017$3);
                      filename_004[1] = [0,fvalue_023]}
                  else
                   if(end_pos_012[1])
                    duplicates_014[1] = [0,_K_,duplicates_014[1]];
                   else
                    {var
                      field_sexp_017$4=field_sexp_017(0),
                      fvalue_019=caml_call1(Base[118],field_sexp_017$4);
                     end_pos_012[1] = [0,fvalue_019]}
                  var param=tail_026;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[10],error_source_024,_G_)}
        if(duplicates_014[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],
                  error_source_024,
                  duplicates_014[1],
                  sexp_002);
        if(extra_015[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[13],
                  error_source_024,
                  extra_015[1],
                  sexp_002);
        var
         _L_=filename_004[1],
         _M_=line_number_006[1],
         _N_=line_start_008[1],
         _O_=start_pos_010[1],
         _P_=end_pos_012[1];
        if(_L_ && _M_ && _N_ && _O_ && _P_)
         {var
           end_pos_013=_P_[1],
           start_pos_011=_O_[1],
           line_start_009=_N_[1],
           line_number_007=_M_[1],
           filename_005=_L_[1];
          return [0,
                  filename_005,
                  line_number_007,
                  line_start_009,
                  start_pos_011,
                  end_pos_013]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[15],
                 error_source_024,
                 sexp_002,
                 [0,
                  [0,0 === filename_004[1]?1:0,cst_filename$0],
                  [0,
                   [0,0 === line_number_006[1]?1:0,cst_line_number$0],
                   [0,
                    [0,0 === line_start_008[1]?1:0,cst_line_start$0],
                    [0,
                     [0,0 === start_pos_010[1]?1:0,cst_start_pos$0],
                     [0,[0,0 === end_pos_012[1]?1:0,cst_end_pos$0],0]]]]])}}
    function sexp_of_t$0(param)
     {var
       end_pos_037=param[5],
       start_pos_035=param[4],
       line_start_033=param[3],
       line_number_031=param[2],
       filename_029=param[1],
       arg_038=caml_call1(Base[119],end_pos_037),
       bnds_028=[0,[1,[0,_b_,[0,arg_038,0]]],0],
       arg_036=caml_call1(Base[119],start_pos_035),
       bnds_028$0=[0,[1,[0,_c_,[0,arg_036,0]]],bnds_028],
       arg_034=caml_call1(Base[119],line_start_033),
       bnds_028$1=[0,[1,[0,_d_,[0,arg_034,0]]],bnds_028$0],
       arg_032=caml_call1(Base[119],line_number_031),
       bnds_028$2=[0,[1,[0,_e_,[0,arg_032,0]]],bnds_028$1],
       arg_030=caml_call1(Name[5],filename_029),
       bnds_028$3=[0,[1,[0,_f_,[0,arg_030,0]]],bnds_028$2];
      return [1,bnds_028$3]}
    function compare$0(a_039,b_040)
     {if(caml_call2(Base_Ppx_compare_lib[1],a_039,b_040))return 0;
      var n=caml_call2(Name[15],a_039[1],b_040[1]);
      if(0 === n)
       {var n$0=caml_call2(Base[114],a_039[2],b_040[2]);
        if(0 === n$0)
         {var n$1=caml_call2(Base[114],a_039[3],b_040[3]);
          if(0 === n$1)
           {var n$2=caml_call2(Base[114],a_039[4],b_040[4]);
            return 0 === n$2?caml_call2(Base[114],a_039[5],b_040[5]):n$2}
          return n$1}
        return n$0}
      return n}
    var
     include=caml_call1(Base_Comparable[10],[0,compare$0,sexp_of_t$0]),
     symbol$5=include[1],
     symbol$6=include[2],
     symbol$7=include[3],
     symbol$8=include[4],
     symbol$9=include[5],
     symbol$10=include[6],
     equal$0=include[7],
     compare$1=include[8],
     min$0=include[9],
     max$0=include[10],
     ascending$0=include[11],
     descending$0=include[12],
     between$0=include[13],
     clamp_exn$0=include[14],
     clamp$0=include[15],
     comparator$0=include[16];
    function beginning_of_file(filename){return [0,filename,1,0,0,0]}
    function of_source_code_position(pos)
     {var
       _B_=pos[4],
       _C_=pos[4],
       _D_=pos[3],
       _E_=pos[2],
       _F_=caml_call1(Stdlib_Filename[13],pos[1]);
      return [0,caml_call1(Name[6],_F_),_E_,_D_,_C_,_B_]}
    var sexp_of_t$1=Base[164],compare$2=Base[159];
    function to_string$0(t){return t}
    function of_string$0(s)
     {if(runtime.caml_ml_string_length(s) !== 32)
       caml_call1(Base[201],cst_Expect_test_collector_File);
      var i=0;
      for(;;)
       {var match=runtime.caml_string_get(s,i),switch$0=0;
        if(58 <= match)
         {if(! (5 < match - 97 >>> 0))switch$0 = 1}
        else
         if(48 <= match)switch$0 = 1;
        if(! switch$0)caml_call1(Base[201],cst_Expect_test_collector_File$0);
        var _A_=i + 1 | 0;
        if(31 !== i){var i=_A_;continue}
        return s}}
    var
     _g_=
      [0,
       t_of_sexp$0,
       sexp_of_t$0,
       beginning_of_file,
       of_source_code_position,
       symbol$5,
       symbol$6,
       symbol$7,
       symbol$8,
       symbol$9,
       symbol$10,
       equal$0,
       compare$1,
       min$0,
       max$0,
       ascending$0,
       descending$0,
       between$0,
       clamp_exn$0,
       clamp$0,
       comparator$0],
     Expect_test_common_File=
      [0,
       Name,
       initial_dir,
       _g_,
       [0,sexp_of_t$1,compare$2,of_string$0,to_string$0]];
    caml_register_global
     (37,Expect_test_common_File,"Expect_test_common__File");
    function sexp_of_t$2(of_a_001,param)
     {if(typeof param === "number")
       return 0 === param?_h_:_i_;
      else
       {if(0 === param[0])
         {var
           arg0_002=param[1],
           res0_003=caml_call1(Sexplib0_Sexp_conv[7],arg0_002);
          return [1,[0,_j_,[0,res0_003,0]]]}
        var arg0_004=param[1],res0_005=caml_call1(of_a_001,arg0_004);
        return [1,[0,_k_,[0,res0_005,0]]]}}
    function compare$3(cmp_a,a_007,b_008)
     {if(caml_call2(Base_Ppx_compare_lib[1],a_007,b_008))return 0;
      var switch$0=0;
      if(typeof a_007 === "number")
       {if(0 === a_007)
         {var switch$1=0;
          if(typeof b_008 === "number")
           {if(0 === b_008)return 0}
          else
           if(0 === b_008[0])switch$1 = 1;
          if(! switch$1)return -1}
        else
         if(typeof b_008 === "number")
          {if(1 === b_008)return 0;switch$0 = 1}
         else
          if(1 === b_008[0])return 1}
      else
       {if(0 === a_007[0])
         {var _y_=a_007[1];
          if(typeof b_008 !== "number" && 0 === b_008[0])
           {var b_010=b_008[1];
            return caml_call2(Base_Ppx_compare_lib[6][8],_y_,b_010)}
          return -1}
        var _z_=a_007[1];
        if(typeof b_008 === "number")
         {if(0 !== b_008)return -1;switch$0 = 1}
        else
         if(0 !== b_008[0])
          {var b_012=b_008[1];return caml_call2(cmp_a,_z_,b_012)}}
      return switch$0?1:1}
    function equal$1(cmp_a,a_013,b_014)
     {if(caml_call2(Base_Ppx_compare_lib[1],a_013,b_014))return 1;
      var switch$0=0;
      if(typeof a_013 === "number")
       {if(0 === a_013)
         {var switch$1=0;
          if(typeof b_014 === "number")
           {if(0 === b_014)return 1}
          else
           if(0 === b_014[0])switch$1 = 1;
          if(! switch$1)return 0}
        else
         if(typeof b_014 === "number")
          {if(1 === b_014)return 1;switch$0 = 1}
         else
          if(1 === b_014[0])return 0}
      else
       {if(0 === a_013[0])
         {var _w_=a_013[1];
          if(typeof b_014 !== "number" && 0 === b_014[0])
           {var b_016=b_014[1];
            return caml_call2(Base_Ppx_compare_lib[6][21],_w_,b_016)}
          return 0}
        var _x_=a_013[1];
        if(typeof b_014 === "number")
         {if(0 !== b_014)return 0;switch$0 = 1}
        else
         if(0 !== b_014[0])
          {var b_018=b_014[1];return caml_call2(cmp_a,_x_,b_018)}}
      return switch$0?0:0}
    function map_pretty(t,f)
     {if(typeof t !== "number" && 1 === t[0])
       {var x=t[1];return [1,caml_call1(f,x)]}
      return t}
    var Body=[0,sexp_of_t$2,compare$3,equal$1,map_pretty];
    function sexp_of_t$3(of_a_019,param)
     {var
       body_location_027=param[4],
       extid_location_025=param[3],
       body_023=param[2],
       tag_021=param[1],
       arg_028=caml_call1(_g_[2],body_location_027),
       bnds_020=[0,[1,[0,_l_,[0,arg_028,0]]],0],
       arg_026=caml_call1(_g_[2],extid_location_025),
       bnds_020$0=[0,[1,[0,_m_,[0,arg_026,0]]],bnds_020],
       arg_024=caml_call2(Body[1],of_a_019,body_023),
       bnds_020$1=[0,[1,[0,_n_,[0,arg_024,0]]],bnds_020$0],
       arg_022=
        caml_call2(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7],tag_021),
       bnds_020$2=[0,[1,[0,_o_,[0,arg_022,0]]],bnds_020$1];
      return [1,bnds_020$2]}
    function compare$4(cmp_a,a_029,b_030)
     {if(caml_call2(Base_Ppx_compare_lib[1],a_029,b_030))return 0;
      var
       n=
        caml_call3
         (Base_Ppx_compare_lib[6][12],
          Base_Ppx_compare_lib[6][8],
          a_029[1],
          b_030[1]);
      if(0 === n)
       {var n$0=caml_call3(Body[2],cmp_a,a_029[2],b_030[2]);
        if(0 === n$0)
         {var n$1=caml_call2(_g_[12],a_029[3],b_030[3]);
          return 0 === n$1?caml_call2(_g_[12],a_029[4],b_030[4]):n$1}
        return n$0}
      return n}
    function equal$2(cmp_a,a_035,b_036)
     {if(caml_call2(Base_Ppx_compare_lib[1],a_035,b_036))return 1;
      var
       _s_=
        caml_call3
         (Base_Ppx_compare_lib[6][25],
          Base_Ppx_compare_lib[6][21],
          a_035[1],
          b_036[1]);
      if(_s_)
       {var _t_=caml_call3(Body[3],cmp_a,a_035[2],b_036[2]);
        if(_t_)
         {var _u_=caml_call2(_g_[11],a_035[3],b_036[3]);
          if(_u_)return caml_call2(_g_[11],a_035[4],b_036[4]);
          var _v_=_u_}
        else
         var _v_=_t_}
      else
       var _v_=_s_;
      return _v_}
    function sexp_of_t$4(x_041)
     {return sexp_of_t$3(Sexplib0_Sexp_conv[7],x_041)}
    function compare$5(a_042,b_043)
     {return compare$4(Base_Ppx_compare_lib[6][8],a_042,b_043)}
    var Raw=[0,sexp_of_t$4,compare$5];
    function map_pretty$0(init,f)
     {var _p_=init[4],_q_=init[3],_r_=caml_call2(Body[4],init[2],f);
      return [0,init[1],_r_,_q_,_p_]}
    var
     Expect_test_common_Expectation=
      [0,Body,sexp_of_t$3,compare$4,equal$2,Raw,map_pretty$0];
    caml_register_global
     (38,Expect_test_common_Expectation,"Expect_test_common__Expectation");
    var Std=[0],Expect_test_common$0=[0,Std];
    caml_register_global(39,Expect_test_common$0,"Expect_test_common");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJleHBlY3RfdGVzdF9jb21tb24uY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbImhhc2hfZm9sZF90IiwidF9vZl9zZXhwIiwic2V4cF9vZl90Iiwib2Zfc3RyaW5nIiwidG9fc3RyaW5nIiwic3ltYm9sIiwic3ltYm9sJDAiLCJzeW1ib2wkMSIsInN5bWJvbCQyIiwic3ltYm9sJDMiLCJzeW1ib2wkNCIsImNvbXBhcmUiLCJtaW4iLCJtYXgiLCJhc2NlbmRpbmciLCJkZXNjZW5kaW5nIiwiYmV0d2VlbiIsImNsYW1wX2V4biIsImNsYW1wIiwiY29tcGFyYXRvciIsInBwIiwiaGFzaGFibGUiLCJlcXVhbCJdLCJzb3VyY2VzIjpbIi9ob21lL2FubmFxLy5vcGFtL2RlZmF1bHQvbGliL29jYW1sL3N0cmluZy5tbGkiXSwibWFwcGluZ3MiOiI7O0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaUJRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTJYUnNCOzs7Ozs7Ozs7Ozs7Ozs7O007Ozs7Ozs7T0EzWFF0QjtxQjtPQUFBQzs7Ozs7Ozs7OztPQTJYUnFCO09BM1hRWDs7Ozs7Ozs7Ozs7O00iLCJzb3VyY2VzQ29udGVudCI6WyIoKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9DYW1sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICBYYXZpZXIgTGVyb3ksIHByb2pldCBDcmlzdGFsLCBJTlJJQSBSb2NxdWVuY291cnQgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgIENvcHlyaWdodCAxOTk2IEluc3RpdHV0IE5hdGlvbmFsIGRlIFJlY2hlcmNoZSBlbiBJbmZvcm1hdGlxdWUgZXQgICAgICopXG4oKiAgICAgZW4gQXV0b21hdGlxdWUuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgIEFsbCByaWdodHMgcmVzZXJ2ZWQuICBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mICAgICopXG4oKiAgIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAyLjEsIHdpdGggdGhlICAgICAgICAgICopXG4oKiAgIHNwZWNpYWwgZXhjZXB0aW9uIG9uIGxpbmtpbmcgZGVzY3JpYmVkIGluIHRoZSBmaWxlIExJQ0VOU0UuICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiopXG5cbigqIE5PVEU6XG4gICBJZiB0aGlzIGZpbGUgaXMgc3RyaW5nTGFiZWxzLm1saSwgcnVuIHRvb2xzL3N5bmNfc3RkbGliX2RvY3MgYWZ0ZXIgZWRpdGluZ1xuICAgaXQgdG8gZ2VuZXJhdGUgc3RyaW5nLm1saS5cblxuICAgSWYgdGhpcyBmaWxlIGlzIHN0cmluZy5tbGksIGRvIG5vdCBlZGl0IGl0IGRpcmVjdGx5IC0tIGVkaXRcbiAgIHN0cmluZ0xhYmVscy5tbGkgaW5zdGVhZC5cbiAqKVxuXG4oKiogU3RyaW5ncy5cblxuICAgIEEgc3RyaW5nIFtzXSBvZiBsZW5ndGggW25dIGlzIGFuIGluZGV4YWJsZSBhbmQgaW1tdXRhYmxlIHNlcXVlbmNlXG4gICAgb2YgW25dIGJ5dGVzLiBGb3IgaGlzdG9yaWNhbCByZWFzb25zIHRoZXNlIGJ5dGVzIGFyZSByZWZlcnJlZCB0b1xuICAgIGFzIGNoYXJhY3RlcnMuXG5cbiAgICBUaGUgc2VtYW50aWNzIG9mIHN0cmluZyBmdW5jdGlvbnMgaXMgZGVmaW5lZCBpbiB0ZXJtcyBvZlxuICAgIGluZGljZXMgYW5kIHBvc2l0aW9ucy4gVGhlc2UgYXJlIGRlcGljdGVkIGFuZCBkZXNjcmliZWRcbiAgICBhcyBmb2xsb3dzLlxuXG57dlxucG9zaXRpb25zICAwICAgMSAgIDIgICAzICAgNCAgICBuLTEgICAgblxuICAgICAgICAgICArLS0tKy0tLSstLS0rLS0tKyAgICAgKy0tLS0tK1xuICBpbmRpY2VzICB8IDAgfCAxIHwgMiB8IDMgfCAuLi4gfCBuLTEgfFxuICAgICAgICAgICArLS0tKy0tLSstLS0rLS0tKyAgICAgKy0tLS0tK1xudn1cbiAgICB7dWxcbiAgICB7LSBBbiB7ZSBpbmRleH0gW2ldIG9mIFtzXSBpcyBhbiBpbnRlZ2VyIGluIHRoZSByYW5nZSBcXFtbMF07W24tMV1cXF0uXG4gICAgICAgSXQgcmVwcmVzZW50cyB0aGUgW2lddGggYnl0ZSAoY2hhcmFjdGVyKSBvZiBbc10gd2hpY2ggY2FuIGJlXG4gICAgICAgYWNjZXNzZWQgdXNpbmcgdGhlIGNvbnN0YW50IHRpbWUgc3RyaW5nIGluZGV4aW5nIG9wZXJhdG9yXG4gICAgICAgW3MuW2ldXS59XG4gICAgey0gQSB7ZSBwb3NpdGlvbn0gW2ldIG9mIFtzXSBpcyBhbiBpbnRlZ2VyIGluIHRoZSByYW5nZVxuICAgICAgIFxcW1swXTtbbl1cXF0uIEl0IHJlcHJlc2VudHMgZWl0aGVyIHRoZSBwb2ludCBhdCB0aGUgYmVnaW5uaW5nIG9mXG4gICAgICAgdGhlIHN0cmluZywgb3IgdGhlIHBvaW50IGJldHdlZW4gdHdvIGluZGljZXMsIG9yIHRoZSBwb2ludCBhdFxuICAgICAgIHRoZSBlbmQgb2YgdGhlIHN0cmluZy4gVGhlIFtpXXRoIGJ5dGUgaW5kZXggaXMgYmV0d2VlbiBwb3NpdGlvblxuICAgICAgIFtpXSBhbmQgW2krMV0ufX1cblxuICAgIFR3byBpbnRlZ2VycyBbc3RhcnRdIGFuZCBbbGVuXSBhcmUgc2FpZCB0byBkZWZpbmUgYSB7ZSB2YWxpZFxuICAgIHN1YnN0cmluZ30gb2YgW3NdIGlmIFtsZW4gPj0gMF0gYW5kIFtzdGFydF0sIFtzdGFydCtsZW5dIGFyZVxuICAgIHBvc2l0aW9ucyBvZiBbc10uXG5cbiAgICB7YiBVbmljb2RlIHRleHQufSBTdHJpbmdzIGJlaW5nIGFyYml0cmFyeSBzZXF1ZW5jZXMgb2YgYnl0ZXMsIHRoZXlcbiAgICBjYW4gaG9sZCBhbnkga2luZCBvZiB0ZXh0dWFsIGVuY29kaW5nLiBIb3dldmVyIHRoZSByZWNvbW1lbmRlZFxuICAgIGVuY29kaW5nIGZvciBzdG9yaW5nIFVuaWNvZGUgdGV4dCBpbiBPQ2FtbCBzdHJpbmdzIGlzIFVURi04LiBUaGlzXG4gICAgaXMgdGhlIGVuY29kaW5nIHVzZWQgYnkgVW5pY29kZSBlc2NhcGVzIGluIHN0cmluZyBsaXRlcmFscy4gRm9yXG4gICAgZXhhbXBsZSB0aGUgc3RyaW5nIFtcIlxcdXsxRjQyQn1cIl0gaXMgdGhlIFVURi04IGVuY29kaW5nIG9mIHRoZVxuICAgIFVuaWNvZGUgY2hhcmFjdGVyIFUrMUY0MkIuXG5cbiAgICB7YiBQYXN0IG11dGFiaWxpdHkufSBPQ2FtbCBzdHJpbmdzIHVzZWQgdG8gYmUgbW9kaWZpYWJsZSBpbiBwbGFjZSxcbiAgICBmb3IgaW5zdGFuY2UgdmlhIHRoZSB7IVN0cmluZy5zZXR9IGFuZCB7IVN0cmluZy5ibGl0fVxuICAgIGZ1bmN0aW9ucy4gVGhpcyB1c2UgaXMgbm93YWRheXMgb25seSBwb3NzaWJsZSB3aGVuIHRoZSBjb21waWxlciBpc1xuICAgIHB1dCBpbiBcInVuc2FmZS1zdHJpbmdcIiBtb2RlIGJ5IGdpdmluZyB0aGUgWy11bnNhZmUtc3RyaW5nXVxuICAgIGNvbW1hbmQtbGluZSBvcHRpb24uIFRoaXMgY29tcGF0aWJpbGl0eSBtb2RlIG1ha2VzIHRoZSB0eXBlc1xuICAgIFtzdHJpbmddIGFuZCBbYnl0ZXNdIChzZWUgeyFCeXRlcy50fSkgaW50ZXJjaGFuZ2VhYmxlIHNvIHRoYXRcbiAgICBmdW5jdGlvbnMgZXhwZWN0aW5nIGJ5dGUgc2VxdWVuY2VzIGNhbiBhbHNvIGFjY2VwdCBzdHJpbmdzIGFzXG4gICAgYXJndW1lbnRzIGFuZCBtb2RpZnkgdGhlbS5cblxuICAgIFRoZSBkaXN0aW5jdGlvbiBiZXR3ZWVuIFtieXRlc10gYW5kIFtzdHJpbmddIHdhcyBpbnRyb2R1Y2VkIGluXG4gICAgT0NhbWwgNC4wMiwgYW5kIHRoZSBcInVuc2FmZS1zdHJpbmdcIiBjb21wYXRpYmlsaXR5IG1vZGUgd2FzIHRoZVxuICAgIGRlZmF1bHQgdW50aWwgT0NhbWwgNC4wNS4gU3RhcnRpbmcgd2l0aCA0LjA2LCB0aGUgY29tcGF0aWJpbGl0eVxuICAgIG1vZGUgaXMgb3B0LWluOyB3ZSBpbnRlbmQgdG8gcmVtb3ZlIHRoZSBvcHRpb24gaW4gdGhlIGZ1dHVyZS5cblxuICAgIFRoZSBsYWJlbGVkIHZlcnNpb24gb2YgdGhpcyBtb2R1bGUgY2FuIGJlIHVzZWQgYXMgZGVzY3JpYmVkIGluIHRoZVxuICAgIHshU3RkTGFiZWxzfSBtb2R1bGUuXG4qKVxuXG4oKiogezE6c3RyaW5ncyBTdHJpbmdzfSAqKVxuXG50eXBlIHQgPSBzdHJpbmdcbigqKiBUaGUgdHlwZSBmb3Igc3RyaW5ncy4gKilcblxudmFsIG1ha2UgOiBpbnQgLT4gY2hhciAtPiBzdHJpbmdcbigqKiBbbWFrZSBuIGNdIGlzIGEgc3RyaW5nIG9mIGxlbmd0aCBbbl0gd2l0aCBlYWNoIGluZGV4IGhvbGRpbmcgdGhlXG4gICAgY2hhcmFjdGVyIFtjXS5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtuIDwgMF0gb3IgW24gPiBdeyFTeXMubWF4X3N0cmluZ19sZW5ndGh9LiAqKVxuXG52YWwgaW5pdCA6IGludCAtPiAoaW50IC0+IGNoYXIpIC0+IHN0cmluZ1xuKCoqIFtpbml0IG4gZl0gaXMgYSBzdHJpbmcgb2YgbGVuZ3RoIFtuXSB3aXRoIGluZGV4XG4gICAgW2ldIGhvbGRpbmcgdGhlIGNoYXJhY3RlciBbZiBpXSAoY2FsbGVkIGluIGluY3JlYXNpbmcgaW5kZXggb3JkZXIpLlxuXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW24gPCAwXSBvciBbbiA+IF17IVN5cy5tYXhfc3RyaW5nX2xlbmd0aH0uXG4gICAgQHNpbmNlIDQuMDIuMCAqKVxuXG52YWwgZW1wdHkgOiBzdHJpbmdcbigqKiBUaGUgZW1wdHkgc3RyaW5nLlxuXG4gICAgQHNpbmNlIDQuMTMuMFxuKilcblxudmFsIG9mX2J5dGVzIDogYnl0ZXMgLT4gc3RyaW5nXG4oKiogUmV0dXJuIGEgbmV3IHN0cmluZyB0aGF0IGNvbnRhaW5zIHRoZSBzYW1lIGJ5dGVzIGFzIHRoZSBnaXZlbiBieXRlXG4gICAgc2VxdWVuY2UuXG5cbiAgICBAc2luY2UgNC4xMy4wXG4qKVxuXG52YWwgdG9fYnl0ZXMgOiBzdHJpbmcgLT4gYnl0ZXNcbigqKiBSZXR1cm4gYSBuZXcgYnl0ZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBzYW1lIGJ5dGVzIGFzIHRoZSBnaXZlblxuICAgIHN0cmluZy5cblxuICAgIEBzaW5jZSA0LjEzLjBcbiopXG5cbmV4dGVybmFsIGxlbmd0aCA6IHN0cmluZyAtPiBpbnQgPSBcIiVzdHJpbmdfbGVuZ3RoXCJcbigqKiBbbGVuZ3RoIHNdIGlzIHRoZSBsZW5ndGggKG51bWJlciBvZiBieXRlcy9jaGFyYWN0ZXJzKSBvZiBbc10uICopXG5cbmV4dGVybmFsIGdldCA6IHN0cmluZyAtPiBpbnQgLT4gY2hhciA9IFwiJXN0cmluZ19zYWZlX2dldFwiXG4oKiogW2dldCBzIGldIGlzIHRoZSBjaGFyYWN0ZXIgYXQgaW5kZXggW2ldIGluIFtzXS4gVGhpcyBpcyB0aGUgc2FtZVxuICAgIGFzIHdyaXRpbmcgW3MuW2ldXS5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtpXSBub3QgYW4gaW5kZXggb2YgW3NdLiAqKVxuXG4oKiogezE6Y29uY2F0IENvbmNhdGVuYXRpbmd9XG5cbiAgICB7YiBOb3RlLn0gVGhlIHshU3RkbGliLiggXiApfSBiaW5hcnkgb3BlcmF0b3IgY29uY2F0ZW5hdGVzIHR3b1xuICAgIHN0cmluZ3MuICopXG5cbnZhbCBjb25jYXQgOiBzdHJpbmcgLT4gc3RyaW5nIGxpc3QgLT4gc3RyaW5nXG4oKiogW2NvbmNhdCBzZXAgc3NdIGNvbmNhdGVuYXRlcyB0aGUgbGlzdCBvZiBzdHJpbmdzIFtzc10sIGluc2VydGluZ1xuICAgIHRoZSBzZXBhcmF0b3Igc3RyaW5nIFtzZXBdIGJldHdlZW4gZWFjaC5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIHRoZSByZXN1bHQgaXMgbG9uZ2VyIHRoYW5cbiAgICB7IVN5cy5tYXhfc3RyaW5nX2xlbmd0aH0gYnl0ZXMuICopXG5cbnZhbCBjYXQgOiBzdHJpbmcgLT4gc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFtjYXQgczEgczJdIGNvbmNhdGVuYXRlcyBzMSBhbmQgczIgKFtzMSBeIHMyXSkuXG5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiB0aGUgcmVzdWx0IGlzIGxvbmdlciB0aGVuXG4gICAgdGhhbiB7IVN5cy5tYXhfc3RyaW5nX2xlbmd0aH0gYnl0ZXMuXG5cbiAgICBAc2luY2UgNC4xMy4wXG4qKVxuXG4oKiogezE6cHJlZGljYXRlcyBQcmVkaWNhdGVzIGFuZCBjb21wYXJpc29uc30gKilcblxudmFsIGVxdWFsIDogdCAtPiB0IC0+IGJvb2xcbigqKiBbZXF1YWwgczAgczFdIGlzIFt0cnVlXSBpZiBhbmQgb25seSBpZiBbczBdIGFuZCBbczFdIGFyZSBjaGFyYWN0ZXItd2lzZVxuICAgIGVxdWFsLlxuICAgIEBzaW5jZSA0LjAzLjAgKDQuMDUuMCBpbiBTdHJpbmdMYWJlbHMpICopXG5cbnZhbCBjb21wYXJlIDogdCAtPiB0IC0+IGludFxuKCoqIFtjb21wYXJlIHMwIHMxXSBzb3J0cyBbczBdIGFuZCBbczFdIGluIGxleGljb2dyYXBoaWNhbCBvcmRlci4gW2NvbXBhcmVdXG4gICAgYmVoYXZlcyBsaWtlIHshU3RkbGliLmNvbXBhcmV9IG9uIHN0cmluZ3MgYnV0IG1heSBiZSBtb3JlIGVmZmljaWVudC4gKilcblxudmFsIHN0YXJ0c193aXRoIDpcbiAgcHJlZml4ICgqIGNvbW1lbnQgdGh3YXJ0cyB0b29scy9zeW5jX3N0ZGxpYl9kb2NzICopIDpzdHJpbmcgLT4gc3RyaW5nIC0+IGJvb2xcbigqKiBbc3RhcnRzX3dpdGggXVt+XVtwcmVmaXggc10gaXMgW3RydWVdIGlmIGFuZCBvbmx5IGlmIFtzXSBzdGFydHMgd2l0aFxuICAgIFtwcmVmaXhdLlxuXG4gICAgQHNpbmNlIDQuMTMuMCAqKVxuXG52YWwgZW5kc193aXRoIDpcbiAgc3VmZml4ICgqIGNvbW1lbnQgdGh3YXJ0cyB0b29scy9zeW5jX3N0ZGxpYl9kb2NzICopIDpzdHJpbmcgLT4gc3RyaW5nIC0+IGJvb2xcbigqKiBbZW5kc193aXRoIHN1ZmZpeCBzXSBpcyBbdHJ1ZV0gaWYgYW5kIG9ubHkgaWYgW3NdIGVuZHMgd2l0aCBbc3VmZml4XS5cblxuICAgIEBzaW5jZSA0LjEzLjAgKilcblxudmFsIGNvbnRhaW5zX2Zyb20gOiBzdHJpbmcgLT4gaW50IC0+IGNoYXIgLT4gYm9vbFxuKCoqIFtjb250YWluc19mcm9tIHMgc3RhcnQgY10gaXMgW3RydWVdIGlmIGFuZCBvbmx5IGlmIFtjXSBhcHBlYXJzIGluIFtzXVxuICAgIGFmdGVyIHBvc2l0aW9uIFtzdGFydF0uXG5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbc3RhcnRdIGlzIG5vdCBhIHZhbGlkIHBvc2l0aW9uIGluIFtzXS4gKilcblxudmFsIHJjb250YWluc19mcm9tIDogc3RyaW5nIC0+IGludCAtPiBjaGFyIC0+IGJvb2xcbigqKiBbcmNvbnRhaW5zX2Zyb20gcyBzdG9wIGNdIGlzIFt0cnVlXSBpZiBhbmQgb25seSBpZiBbY10gYXBwZWFycyBpbiBbc11cbiAgICBiZWZvcmUgcG9zaXRpb24gW3N0b3ArMV0uXG5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbc3RvcCA8IDBdIG9yIFtzdG9wKzFdIGlzIG5vdCBhIHZhbGlkXG4gICAgcG9zaXRpb24gaW4gW3NdLiAqKVxuXG52YWwgY29udGFpbnMgOiBzdHJpbmcgLT4gY2hhciAtPiBib29sXG4oKiogW2NvbnRhaW5zIHMgY10gaXMgeyFTdHJpbmcuY29udGFpbnNfZnJvbX1bIHMgMCBjXS4gKilcblxuKCoqIHsxOmV4dHJhY3QgRXh0cmFjdGluZyBzdWJzdHJpbmdzfSAqKVxuXG52YWwgc3ViIDogc3RyaW5nIC0+IGludCAtPiBpbnQgLT4gc3RyaW5nXG4oKiogW3N1YiBzIHBvcyBsZW5dIGlzIGEgc3RyaW5nIG9mIGxlbmd0aCBbbGVuXSwgY29udGFpbmluZyB0aGVcbiAgICBzdWJzdHJpbmcgb2YgW3NdIHRoYXQgc3RhcnRzIGF0IHBvc2l0aW9uIFtwb3NdIGFuZCBoYXMgbGVuZ3RoXG4gICAgW2xlbl0uXG5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbcG9zXSBhbmQgW2xlbl0gZG8gbm90IGRlc2lnbmF0ZSBhIHZhbGlkXG4gICAgc3Vic3RyaW5nIG9mIFtzXS4gKilcblxudmFsIHNwbGl0X29uX2NoYXIgOiBjaGFyIC0+IHN0cmluZyAtPiBzdHJpbmcgbGlzdFxuKCoqIFtzcGxpdF9vbl9jaGFyIHNlcCBzXSBpcyB0aGUgbGlzdCBvZiBhbGwgKHBvc3NpYmx5IGVtcHR5KVxuICAgIHN1YnN0cmluZ3Mgb2YgW3NdIHRoYXQgYXJlIGRlbGltaXRlZCBieSB0aGUgY2hhcmFjdGVyIFtzZXBdLlxuXG4gICAgVGhlIGZ1bmN0aW9uJ3MgcmVzdWx0IGlzIHNwZWNpZmllZCBieSB0aGUgZm9sbG93aW5nIGludmFyaWFudHM6XG4gICAge3VsXG4gICAgey0gVGhlIGxpc3QgaXMgbm90IGVtcHR5Ln1cbiAgICB7LSBDb25jYXRlbmF0aW5nIGl0cyBlbGVtZW50cyB1c2luZyBbc2VwXSBhcyBhIHNlcGFyYXRvciByZXR1cm5zIGFcbiAgICAgIHN0cmluZyBlcXVhbCB0byB0aGUgaW5wdXQgKFtjb25jYXQgKG1ha2UgMSBzZXApXG4gICAgICAoc3BsaXRfb25fY2hhciBzZXAgcykgPSBzXSkufVxuICAgIHstIE5vIHN0cmluZyBpbiB0aGUgcmVzdWx0IGNvbnRhaW5zIHRoZSBbc2VwXSBjaGFyYWN0ZXIufX1cblxuICAgIEBzaW5jZSA0LjA0LjAgKDQuMDUuMCBpbiBTdHJpbmdMYWJlbHMpICopXG5cbigqKiB7MTp0cmFuc2Zvcm1pbmcgVHJhbnNmb3JtaW5nfSAqKVxuXG52YWwgbWFwIDogKGNoYXIgLT4gY2hhcikgLT4gc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFttYXAgZiBzXSBpcyB0aGUgc3RyaW5nIHJlc3VsdGluZyBmcm9tIGFwcGx5aW5nIFtmXSB0byBhbGwgdGhlXG4gICAgY2hhcmFjdGVycyBvZiBbc10gaW4gaW5jcmVhc2luZyBvcmRlci5cblxuICAgIEBzaW5jZSA0LjAwLjAgKilcblxudmFsIG1hcGkgOiAoaW50IC0+IGNoYXIgLT4gY2hhcikgLT4gc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFttYXBpIGYgc10gaXMgbGlrZSB7IW1hcH0gYnV0IHRoZSBpbmRleCBvZiB0aGUgY2hhcmFjdGVyIGlzIGFsc29cbiAgICBwYXNzZWQgdG8gW2ZdLlxuXG4gICAgQHNpbmNlIDQuMDIuMCAqKVxuXG52YWwgZm9sZF9sZWZ0IDogKCdhIC0+IGNoYXIgLT4gJ2EpIC0+ICdhIC0+IHN0cmluZyAtPiAnYVxuKCoqIFtmb2xkX2xlZnQgZiB4IHNdIGNvbXB1dGVzIFtmICguLi4gKGYgKGYgeCBzLlswXSkgcy5bMV0pIC4uLikgcy5bbi0xXV0sXG4gICAgd2hlcmUgW25dIGlzIHRoZSBsZW5ndGggb2YgdGhlIHN0cmluZyBbc10uXG4gICAgQHNpbmNlIDQuMTMuMCAqKVxuXG52YWwgZm9sZF9yaWdodCA6IChjaGFyIC0+ICdhIC0+ICdhKSAtPiBzdHJpbmcgLT4gJ2EgLT4gJ2FcbigqKiBbZm9sZF9yaWdodCBmIHMgeF0gY29tcHV0ZXMgW2Ygcy5bMF0gKGYgcy5bMV0gKCAuLi4gKGYgcy5bbi0xXSB4KSAuLi4pKV0sXG4gICAgd2hlcmUgW25dIGlzIHRoZSBsZW5ndGggb2YgdGhlIHN0cmluZyBbc10uXG4gICAgQHNpbmNlIDQuMTMuMCAqKVxuXG52YWwgZm9yX2FsbCA6IChjaGFyIC0+IGJvb2wpIC0+IHN0cmluZyAtPiBib29sXG4oKiogW2Zvcl9hbGwgcCBzXSBjaGVja3MgaWYgYWxsIGNoYXJhY3RlcnMgaW4gW3NdIHNhdGlzZnkgdGhlIHByZWRpY2F0ZSBbcF0uXG4gICAgQHNpbmNlIDQuMTMuMCAqKVxuXG52YWwgZXhpc3RzIDogKGNoYXIgLT4gYm9vbCkgLT4gc3RyaW5nIC0+IGJvb2xcbigqKiBbZXhpc3RzIHAgc10gY2hlY2tzIGlmIGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXIgb2YgW3NdIHNhdGlzZmllcyB0aGUgcHJlZGljYXRlXG4gICAgW3BdLlxuICAgIEBzaW5jZSA0LjEzLjAgKilcblxudmFsIHRyaW0gOiBzdHJpbmcgLT4gc3RyaW5nXG4oKiogW3RyaW0gc10gaXMgW3NdIHdpdGhvdXQgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gV2hpdGVzcGFjZVxuICAgIGNoYXJhY3RlcnMgYXJlOiBbJyAnXSwgWydcXHgwQyddIChmb3JtIGZlZWQpLCBbJ1xcbiddLCBbJ1xcciddLCBhbmQgWydcXHQnXS5cblxuICAgIEBzaW5jZSA0LjAwLjAgKilcblxudmFsIGVzY2FwZWQgOiBzdHJpbmcgLT4gc3RyaW5nXG4oKiogW2VzY2FwZWQgc10gaXMgW3NdIHdpdGggc3BlY2lhbCBjaGFyYWN0ZXJzIHJlcHJlc2VudGVkIGJ5IGVzY2FwZVxuICAgIHNlcXVlbmNlcywgZm9sbG93aW5nIHRoZSBsZXhpY2FsIGNvbnZlbnRpb25zIG9mIE9DYW1sLlxuXG4gICAgQWxsIGNoYXJhY3RlcnMgb3V0c2lkZSB0aGUgVVMtQVNDSUkgcHJpbnRhYmxlIHJhbmdlIFxcWzB4MjA7MHg3RVxcXSBhcmVcbiAgICBlc2NhcGVkLCBhcyB3ZWxsIGFzIGJhY2tzbGFzaCAoMHgyRikgYW5kIGRvdWJsZS1xdW90ZSAoMHgyMikuXG5cbiAgICBUaGUgZnVuY3Rpb24geyFTY2FuZi51bmVzY2FwZWR9IGlzIGEgbGVmdCBpbnZlcnNlIG9mIFtlc2NhcGVkXSxcbiAgICBpLmUuIFtTY2FuZi51bmVzY2FwZWQgKGVzY2FwZWQgcykgPSBzXSBmb3IgYW55IHN0cmluZyBbc10gKHVubGVzc1xuICAgIFtlc2NhcGVkIHNdIGZhaWxzKS5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIHRoZSByZXN1bHQgaXMgbG9uZ2VyIHRoYW5cbiAgICB7IVN5cy5tYXhfc3RyaW5nX2xlbmd0aH0gYnl0ZXMuICopXG5cbnZhbCB1cHBlcmNhc2VfYXNjaWkgOiBzdHJpbmcgLT4gc3RyaW5nXG4oKiogW3VwcGVyY2FzZV9hc2NpaSBzXSBpcyBbc10gd2l0aCBhbGwgbG93ZXJjYXNlIGxldHRlcnNcbiAgICB0cmFuc2xhdGVkIHRvIHVwcGVyY2FzZSwgdXNpbmcgdGhlIFVTLUFTQ0lJIGNoYXJhY3RlciBzZXQuXG5cbiAgICBAc2luY2UgNC4wMy4wICg0LjA1LjAgaW4gU3RyaW5nTGFiZWxzKSAqKVxuXG52YWwgbG93ZXJjYXNlX2FzY2lpIDogc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFtsb3dlcmNhc2VfYXNjaWkgc10gaXMgW3NdIHdpdGggYWxsIHVwcGVyY2FzZSBsZXR0ZXJzIHRyYW5zbGF0ZWRcbiAgICB0byBsb3dlcmNhc2UsIHVzaW5nIHRoZSBVUy1BU0NJSSBjaGFyYWN0ZXIgc2V0LlxuXG4gICAgQHNpbmNlIDQuMDMuMCAoNC4wNS4wIGluIFN0cmluZ0xhYmVscykgKilcblxudmFsIGNhcGl0YWxpemVfYXNjaWkgOiBzdHJpbmcgLT4gc3RyaW5nXG4oKiogW2NhcGl0YWxpemVfYXNjaWkgc10gaXMgW3NdIHdpdGggdGhlIGZpcnN0IGNoYXJhY3RlciBzZXQgdG9cbiAgICB1cHBlcmNhc2UsIHVzaW5nIHRoZSBVUy1BU0NJSSBjaGFyYWN0ZXIgc2V0LlxuXG4gICAgQHNpbmNlIDQuMDMuMCAoNC4wNS4wIGluIFN0cmluZ0xhYmVscykgKilcblxudmFsIHVuY2FwaXRhbGl6ZV9hc2NpaSA6IHN0cmluZyAtPiBzdHJpbmdcbigqKiBbdW5jYXBpdGFsaXplX2FzY2lpIHNdIGlzIFtzXSB3aXRoIHRoZSBmaXJzdCBjaGFyYWN0ZXIgc2V0IHRvIGxvd2VyY2FzZSxcbiAgICB1c2luZyB0aGUgVVMtQVNDSUkgY2hhcmFjdGVyIHNldC5cblxuICAgIEBzaW5jZSA0LjAzLjAgKDQuMDUuMCBpbiBTdHJpbmdMYWJlbHMpICopXG5cbigqKiB7MTp0cmF2ZXJzaW5nIFRyYXZlcnNpbmd9ICopXG5cbnZhbCBpdGVyIDogKGNoYXIgLT4gdW5pdCkgLT4gc3RyaW5nIC0+IHVuaXRcbigqKiBbaXRlciBmIHNdIGFwcGxpZXMgZnVuY3Rpb24gW2ZdIGluIHR1cm4gdG8gYWxsIHRoZSBjaGFyYWN0ZXJzIG9mIFtzXS5cbiAgICBJdCBpcyBlcXVpdmFsZW50IHRvIFtmIHMuWzBdOyBmIHMuWzFdOyAuLi47IGYgcy5bbGVuZ3RoIHMgLSAxXTsgKCldLiAqKVxuXG52YWwgaXRlcmkgOiAoaW50IC0+IGNoYXIgLT4gdW5pdCkgLT4gc3RyaW5nIC0+IHVuaXRcbigqKiBbaXRlcmldIGlzIGxpa2UgeyFpdGVyfSwgYnV0IHRoZSBmdW5jdGlvbiBpcyBhbHNvIGdpdmVuIHRoZVxuICAgIGNvcnJlc3BvbmRpbmcgY2hhcmFjdGVyIGluZGV4LlxuXG4gICAgQHNpbmNlIDQuMDAuMCAqKVxuXG4oKiogezE6c2VhcmNoaW5nIFNlYXJjaGluZ30gKilcblxudmFsIGluZGV4X2Zyb20gOiBzdHJpbmcgLT4gaW50IC0+IGNoYXIgLT4gaW50XG4oKiogW2luZGV4X2Zyb20gcyBpIGNdIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBbY10gaW5cbiAgICBbc10gYWZ0ZXIgcG9zaXRpb24gW2ldLlxuXG4gICAgQHJhaXNlIE5vdF9mb3VuZCBpZiBbY10gZG9lcyBub3Qgb2NjdXIgaW4gW3NdIGFmdGVyIHBvc2l0aW9uIFtpXS5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbaV0gaXMgbm90IGEgdmFsaWQgcG9zaXRpb24gaW4gW3NdLiAqKVxuXG5cbnZhbCBpbmRleF9mcm9tX29wdCA6IHN0cmluZyAtPiBpbnQgLT4gY2hhciAtPiBpbnQgb3B0aW9uXG4oKiogW2luZGV4X2Zyb21fb3B0IHMgaSBjXSBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgW2NdXG4gICAgaW4gW3NdIGFmdGVyIHBvc2l0aW9uIFtpXSAoaWYgYW55KS5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtpXSBpcyBub3QgYSB2YWxpZCBwb3NpdGlvbiBpbiBbc10uXG4gICAgQHNpbmNlIDQuMDUgKilcblxudmFsIHJpbmRleF9mcm9tIDogc3RyaW5nIC0+IGludCAtPiBjaGFyIC0+IGludFxuKCoqIFtyaW5kZXhfZnJvbSBzIGkgY10gaXMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG9jY3VycmVuY2Ugb2YgW2NdIGluXG4gICAgW3NdIGJlZm9yZSBwb3NpdGlvbiBbaSsxXS5cblxuICAgIEByYWlzZSBOb3RfZm91bmQgaWYgW2NdIGRvZXMgbm90IG9jY3VyIGluIFtzXSBiZWZvcmUgcG9zaXRpb24gW2krMV0uXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW2krMV0gaXMgbm90IGEgdmFsaWQgcG9zaXRpb24gaW4gW3NdLiAqKVxuXG52YWwgcmluZGV4X2Zyb21fb3B0IDogc3RyaW5nIC0+IGludCAtPiBjaGFyIC0+IGludCBvcHRpb25cbigqKiBbcmluZGV4X2Zyb21fb3B0IHMgaSBjXSBpcyB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgb2NjdXJyZW5jZSBvZiBbY11cbiAgICBpbiBbc10gYmVmb3JlIHBvc2l0aW9uIFtpKzFdIChpZiBhbnkpLlxuXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW2krMV0gaXMgbm90IGEgdmFsaWQgcG9zaXRpb24gaW4gW3NdLlxuICAgIEBzaW5jZSA0LjA1ICopXG5cbnZhbCBpbmRleCA6IHN0cmluZyAtPiBjaGFyIC0+IGludFxuKCoqIFtpbmRleCBzIGNdIGlzIHshU3RyaW5nLmluZGV4X2Zyb219WyBzIDAgY10uICopXG5cbnZhbCBpbmRleF9vcHQgOiBzdHJpbmcgLT4gY2hhciAtPiBpbnQgb3B0aW9uXG4oKiogW2luZGV4X29wdCBzIGNdIGlzIHshU3RyaW5nLmluZGV4X2Zyb21fb3B0fVsgcyAwIGNdLlxuXG4gICAgQHNpbmNlIDQuMDUgKilcblxudmFsIHJpbmRleCA6IHN0cmluZyAtPiBjaGFyIC0+IGludFxuKCoqIFtyaW5kZXggcyBjXSBpcyB7IVN0cmluZy5yaW5kZXhfZnJvbX1bIHMgKGxlbmd0aCBzIC0gMSkgY10uICopXG5cbnZhbCByaW5kZXhfb3B0IDogc3RyaW5nIC0+IGNoYXIgLT4gaW50IG9wdGlvblxuKCoqIFtyaW5kZXhfb3B0IHMgY10gaXMgeyFTdHJpbmcucmluZGV4X2Zyb21fb3B0fVsgcyAobGVuZ3RoIHMgLSAxKSBjXS5cblxuICAgIEBzaW5jZSA0LjA1ICopXG5cbigqKiB7MSBTdHJpbmdzIGFuZCBTZXF1ZW5jZXN9ICopXG5cbnZhbCB0b19zZXEgOiB0IC0+IGNoYXIgU2VxLnRcbigqKiBbdG9fc2VxIHNdIGlzIGEgc2VxdWVuY2UgbWFkZSBvZiB0aGUgc3RyaW5nJ3MgY2hhcmFjdGVycyBpblxuICAgIGluY3JlYXNpbmcgb3JkZXIuIEluIFtcInVuc2FmZS1zdHJpbmdcIl0gbW9kZSwgbW9kaWZpY2F0aW9ucyBvZiB0aGUgc3RyaW5nXG4gICAgZHVyaW5nIGl0ZXJhdGlvbiB3aWxsIGJlIHJlZmxlY3RlZCBpbiB0aGUgc2VxdWVuY2UuXG5cbiAgICBAc2luY2UgNC4wNyAqKVxuXG52YWwgdG9fc2VxaSA6IHQgLT4gKGludCAqIGNoYXIpIFNlcS50XG4oKiogW3RvX3NlcWkgc10gaXMgbGlrZSB7IXRvX3NlcX0gYnV0IGFsc28gdHVwbGVzIHRoZSBjb3JyZXNwb25kaW5nIGluZGV4LlxuXG4gICAgQHNpbmNlIDQuMDcgKilcblxudmFsIG9mX3NlcSA6IGNoYXIgU2VxLnQgLT4gdFxuKCoqIFtvZl9zZXEgc10gaXMgYSBzdHJpbmcgbWFkZSBvZiB0aGUgc2VxdWVuY2UncyBjaGFyYWN0ZXJzLlxuXG4gICAgQHNpbmNlIDQuMDcgKilcblxuKCoqIHsxOnV0ZiBVVEYgZGVjb2RpbmcgYW5kIHZhbGlkYXRpb25zfVxuXG4gICAgQHNpbmNlIDQuMTQgKilcblxuKCoqIHsyOnV0Zl84IFVURi04fSAqKVxuXG52YWwgZ2V0X3V0Zl84X3VjaGFyIDogdCAtPiBpbnQgLT4gVWNoYXIudXRmX2RlY29kZVxuKCoqIFtnZXRfdXRmXzhfdWNoYXIgYiBpXSBkZWNvZGVzIGFuIFVURi04IGNoYXJhY3RlciBhdCBpbmRleCBbaV0gaW5cbiAgICBbYl0uICopXG5cbnZhbCBpc192YWxpZF91dGZfOCA6IHQgLT4gYm9vbFxuKCoqIFtpc192YWxpZF91dGZfOCBiXSBpcyBbdHJ1ZV0gaWYgYW5kIG9ubHkgaWYgW2JdIGNvbnRhaW5zIHZhbGlkXG4gICAgVVRGLTggZGF0YS4gKilcblxuKCoqIHsyOnV0Zl8xNmJlIFVURi0xNkJFfSAqKVxuXG52YWwgZ2V0X3V0Zl8xNmJlX3VjaGFyIDogdCAtPiBpbnQgLT4gVWNoYXIudXRmX2RlY29kZVxuKCoqIFtnZXRfdXRmXzE2YmVfdWNoYXIgYiBpXSBkZWNvZGVzIGFuIFVURi0xNkJFIGNoYXJhY3RlciBhdCBpbmRleFxuICAgIFtpXSBpbiBbYl0uICopXG5cbnZhbCBpc192YWxpZF91dGZfMTZiZSA6IHQgLT4gYm9vbFxuKCoqIFtpc192YWxpZF91dGZfMTZiZSBiXSBpcyBbdHJ1ZV0gaWYgYW5kIG9ubHkgaWYgW2JdIGNvbnRhaW5zIHZhbGlkXG4gICAgVVRGLTE2QkUgZGF0YS4gKilcblxuKCoqIHsyOnV0Zl8xNmxlIFVURi0xNkxFfSAqKVxuXG52YWwgZ2V0X3V0Zl8xNmxlX3VjaGFyIDogdCAtPiBpbnQgLT4gVWNoYXIudXRmX2RlY29kZVxuKCoqIFtnZXRfdXRmXzE2bGVfdWNoYXIgYiBpXSBkZWNvZGVzIGFuIFVURi0xNkxFIGNoYXJhY3RlciBhdCBpbmRleFxuICAgIFtpXSBpbiBbYl0uICopXG5cbnZhbCBpc192YWxpZF91dGZfMTZsZSA6IHQgLT4gYm9vbFxuKCoqIFtpc192YWxpZF91dGZfMTZsZSBiXSBpcyBbdHJ1ZV0gaWYgYW5kIG9ubHkgaWYgW2JdIGNvbnRhaW5zIHZhbGlkXG4gICAgVVRGLTE2TEUgZGF0YS4gKilcblxuKCoqIHsxOmRlcHJlY2F0ZWQgRGVwcmVjYXRlZCBmdW5jdGlvbnN9ICopXG5cbmV4dGVybmFsIGNyZWF0ZSA6IGludCAtPiBieXRlcyA9IFwiY2FtbF9jcmVhdGVfc3RyaW5nXCJcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZCBcIlVzZSBCeXRlcy5jcmVhdGUvQnl0ZXNMYWJlbHMuY3JlYXRlIGluc3RlYWQuXCJdXG4oKiogW2NyZWF0ZSBuXSByZXR1cm5zIGEgZnJlc2ggYnl0ZSBzZXF1ZW5jZSBvZiBsZW5ndGggW25dLlxuICAgIFRoZSBzZXF1ZW5jZSBpcyB1bmluaXRpYWxpemVkIGFuZCBjb250YWlucyBhcmJpdHJhcnkgYnl0ZXMuXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW24gPCAwXSBvciBbbiA+IF17IVN5cy5tYXhfc3RyaW5nX2xlbmd0aH0uXG5cbiAgICBAZGVwcmVjYXRlZCBUaGlzIGlzIGEgZGVwcmVjYXRlZCBhbGlhcyBvZlxuICAgIHshQnl0ZXMuY3JlYXRlfS97IUJ5dGVzTGFiZWxzLmNyZWF0ZX0uICopXG5cbmV4dGVybmFsIHNldCA6IGJ5dGVzIC0+IGludCAtPiBjaGFyIC0+IHVuaXQgPSBcIiVzdHJpbmdfc2FmZV9zZXRcIlxuICBbQEBvY2FtbC5kZXByZWNhdGVkIFwiVXNlIEJ5dGVzLnNldC9CeXRlc0xhYmVscy5zZXQgaW5zdGVhZC5cIl1cbigqKiBbc2V0IHMgbiBjXSBtb2RpZmllcyBieXRlIHNlcXVlbmNlIFtzXSBpbiBwbGFjZSxcbiAgICByZXBsYWNpbmcgdGhlIGJ5dGUgYXQgaW5kZXggW25dIHdpdGggW2NdLlxuICAgIFlvdSBjYW4gYWxzbyB3cml0ZSBbcy5bbl0gPC0gY10gaW5zdGVhZCBvZiBbc2V0IHMgbiBjXS5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbbl0gaXMgbm90IGEgdmFsaWQgaW5kZXggaW4gW3NdLlxuXG4gICAgQGRlcHJlY2F0ZWQgVGhpcyBpcyBhIGRlcHJlY2F0ZWQgYWxpYXMgb2ZcbiAgICB7IUJ5dGVzLnNldH0veyFCeXRlc0xhYmVscy5zZXR9LiAqKVxuXG52YWwgYmxpdCA6XG4gIHN0cmluZyAtPiBpbnQgLT4gYnl0ZXMgLT4gaW50IC0+IGludCAtPiB1bml0XG4oKiogW2JsaXQgc3JjIHNyY19wb3MgZHN0IGRzdF9wb3MgbGVuXSBjb3BpZXMgW2xlbl0gYnl0ZXNcbiAgICBmcm9tIHRoZSBzdHJpbmcgW3NyY10sIHN0YXJ0aW5nIGF0IGluZGV4IFtzcmNfcG9zXSxcbiAgICB0byBieXRlIHNlcXVlbmNlIFtkc3RdLCBzdGFydGluZyBhdCBjaGFyYWN0ZXIgbnVtYmVyIFtkc3RfcG9zXS5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtzcmNfcG9zXSBhbmQgW2xlbl0gZG8gbm90XG4gICAgZGVzaWduYXRlIGEgdmFsaWQgcmFuZ2Ugb2YgW3NyY10sIG9yIGlmIFtkc3RfcG9zXSBhbmQgW2xlbl1cbiAgICBkbyBub3QgZGVzaWduYXRlIGEgdmFsaWQgcmFuZ2Ugb2YgW2RzdF0uICopXG5cbnZhbCBjb3B5IDogc3RyaW5nIC0+IHN0cmluZ1xuICBbQEBvY2FtbC5kZXByZWNhdGVkIFwiU3RyaW5ncyBub3cgaW1tdXRhYmxlOiBubyBuZWVkIHRvIGNvcHlcIl1cbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBnaXZlbiBzdHJpbmcuXG5cbiAgICBAZGVwcmVjYXRlZCBCZWNhdXNlIHN0cmluZ3MgYXJlIGltbXV0YWJsZSwgaXQgZG9lc24ndCBtYWtlIG11Y2hcbiAgICBzZW5zZSB0byBtYWtlIGlkZW50aWNhbCBjb3BpZXMgb2YgdGhlbS4gKilcblxudmFsIGZpbGwgOiBieXRlcyAtPiBpbnQgLT4gaW50IC0+IGNoYXIgLT4gdW5pdFxuICBbQEBvY2FtbC5kZXByZWNhdGVkIFwiVXNlIEJ5dGVzLmZpbGwvQnl0ZXNMYWJlbHMuZmlsbCBpbnN0ZWFkLlwiXVxuKCoqIFtmaWxsIHMgcG9zIGxlbiBjXSBtb2RpZmllcyBieXRlIHNlcXVlbmNlIFtzXSBpbiBwbGFjZSxcbiAgICByZXBsYWNpbmcgW2xlbl0gYnl0ZXMgYnkgW2NdLCBzdGFydGluZyBhdCBbcG9zXS5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbcG9zXSBhbmQgW2xlbl0gZG8gbm90XG4gICAgZGVzaWduYXRlIGEgdmFsaWQgc3Vic3RyaW5nIG9mIFtzXS5cblxuICAgIEBkZXByZWNhdGVkIFRoaXMgaXMgYSBkZXByZWNhdGVkIGFsaWFzIG9mXG4gICAgeyFCeXRlcy5maWxsfS97IUJ5dGVzTGFiZWxzLmZpbGx9LiAqKVxuXG52YWwgdXBwZXJjYXNlIDogc3RyaW5nIC0+IHN0cmluZ1xuICBbQEBvY2FtbC5kZXByZWNhdGVkXG4gICAgXCJVc2UgU3RyaW5nLnVwcGVyY2FzZV9hc2NpaS9TdHJpbmdMYWJlbHMudXBwZXJjYXNlX2FzY2lpIGluc3RlYWQuXCJdXG4oKiogUmV0dXJuIGEgY29weSBvZiB0aGUgYXJndW1lbnQsIHdpdGggYWxsIGxvd2VyY2FzZSBsZXR0ZXJzXG4gICAgdHJhbnNsYXRlZCB0byB1cHBlcmNhc2UsIGluY2x1ZGluZyBhY2NlbnRlZCBsZXR0ZXJzIG9mIHRoZSBJU09cbiAgICBMYXRpbi0xICg4ODU5LTEpIGNoYXJhY3RlciBzZXQuXG5cbiAgICBAZGVwcmVjYXRlZCBGdW5jdGlvbnMgb3BlcmF0aW5nIG9uIExhdGluLTEgY2hhcmFjdGVyIHNldCBhcmUgZGVwcmVjYXRlZC4gKilcblxudmFsIGxvd2VyY2FzZSA6IHN0cmluZyAtPiBzdHJpbmdcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZFxuICAgIFwiVXNlIFN0cmluZy5sb3dlcmNhc2VfYXNjaWkvU3RyaW5nTGFiZWxzLmxvd2VyY2FzZV9hc2NpaSBpbnN0ZWFkLlwiXVxuKCoqIFJldHVybiBhIGNvcHkgb2YgdGhlIGFyZ3VtZW50LCB3aXRoIGFsbCB1cHBlcmNhc2UgbGV0dGVyc1xuICAgIHRyYW5zbGF0ZWQgdG8gbG93ZXJjYXNlLCBpbmNsdWRpbmcgYWNjZW50ZWQgbGV0dGVycyBvZiB0aGUgSVNPXG4gICAgTGF0aW4tMSAoODg1OS0xKSBjaGFyYWN0ZXIgc2V0LlxuXG4gICAgQGRlcHJlY2F0ZWQgRnVuY3Rpb25zIG9wZXJhdGluZyBvbiBMYXRpbi0xIGNoYXJhY3RlciBzZXQgYXJlIGRlcHJlY2F0ZWQuICopXG5cbnZhbCBjYXBpdGFsaXplIDogc3RyaW5nIC0+IHN0cmluZ1xuICBbQEBvY2FtbC5kZXByZWNhdGVkXG4gICAgXCJVc2UgU3RyaW5nLmNhcGl0YWxpemVfYXNjaWkvU3RyaW5nTGFiZWxzLmNhcGl0YWxpemVfYXNjaWkgaW5zdGVhZC5cIl1cbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBhcmd1bWVudCwgd2l0aCB0aGUgZmlyc3QgY2hhcmFjdGVyIHNldCB0byB1cHBlcmNhc2UsXG4gICAgdXNpbmcgdGhlIElTTyBMYXRpbi0xICg4ODU5LTEpIGNoYXJhY3RlciBzZXQuLlxuXG4gICAgQGRlcHJlY2F0ZWQgRnVuY3Rpb25zIG9wZXJhdGluZyBvbiBMYXRpbi0xIGNoYXJhY3RlciBzZXQgYXJlIGRlcHJlY2F0ZWQuICopXG5cbnZhbCB1bmNhcGl0YWxpemUgOiBzdHJpbmcgLT4gc3RyaW5nXG4gIFtAQG9jYW1sLmRlcHJlY2F0ZWRcbiAgICBcIlVzZSBTdHJpbmcudW5jYXBpdGFsaXplX2FzY2lpL1N0cmluZ0xhYmVscy51bmNhcGl0YWxpemVfYXNjaWkgaW5zdGVhZC5cIl1cbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBhcmd1bWVudCwgd2l0aCB0aGUgZmlyc3QgY2hhcmFjdGVyIHNldCB0byBsb3dlcmNhc2UsXG4gICAgdXNpbmcgdGhlIElTTyBMYXRpbi0xICg4ODU5LTEpIGNoYXJhY3RlciBzZXQuXG5cbiAgICBAZGVwcmVjYXRlZCBGdW5jdGlvbnMgb3BlcmF0aW5nIG9uIExhdGluLTEgY2hhcmFjdGVyIHNldCBhcmUgZGVwcmVjYXRlZC4gKilcblxuKCoqIHsxIEJpbmFyeSBkZWNvZGluZyBvZiBpbnRlZ2Vyc30gKilcblxuKCoqIFRoZSBmdW5jdGlvbnMgaW4gdGhpcyBzZWN0aW9uIGJpbmFyeSBkZWNvZGUgaW50ZWdlcnMgZnJvbSBzdHJpbmdzLlxuXG4gICAgQWxsIGZvbGxvd2luZyBmdW5jdGlvbnMgcmFpc2UgW0ludmFsaWRfYXJndW1lbnRdIGlmIHRoZSBjaGFyYWN0ZXJzXG4gICAgbmVlZGVkIGF0IGluZGV4IFtpXSB0byBkZWNvZGUgdGhlIGludGVnZXIgYXJlIG5vdCBhdmFpbGFibGUuXG5cbiAgICBMaXR0bGUtZW5kaWFuIChyZXNwLiBiaWctZW5kaWFuKSBlbmNvZGluZyBtZWFucyB0aGF0IGxlYXN0XG4gICAgKHJlc3AuIG1vc3QpIHNpZ25pZmljYW50IGJ5dGVzIGFyZSBzdG9yZWQgZmlyc3QuICBCaWctZW5kaWFuIGlzXG4gICAgYWxzbyBrbm93biBhcyBuZXR3b3JrIGJ5dGUgb3JkZXIuICBOYXRpdmUtZW5kaWFuIGVuY29kaW5nIGlzXG4gICAgZWl0aGVyIGxpdHRsZS1lbmRpYW4gb3IgYmlnLWVuZGlhbiBkZXBlbmRpbmcgb24geyFTeXMuYmlnX2VuZGlhbn0uXG5cbiAgICAzMi1iaXQgYW5kIDY0LWJpdCBpbnRlZ2VycyBhcmUgcmVwcmVzZW50ZWQgYnkgdGhlIFtpbnQzMl0gYW5kXG4gICAgW2ludDY0XSB0eXBlcywgd2hpY2ggY2FuIGJlIGludGVycHJldGVkIGVpdGhlciBhcyBzaWduZWQgb3JcbiAgICB1bnNpZ25lZCBudW1iZXJzLlxuXG4gICAgOC1iaXQgYW5kIDE2LWJpdCBpbnRlZ2VycyBhcmUgcmVwcmVzZW50ZWQgYnkgdGhlIFtpbnRdIHR5cGUsXG4gICAgd2hpY2ggaGFzIG1vcmUgYml0cyB0aGFuIHRoZSBiaW5hcnkgZW5jb2RpbmcuICBUaGVzZSBleHRyYSBiaXRzXG4gICAgYXJlIHNpZ24tZXh0ZW5kZWQgKG9yIHplcm8tZXh0ZW5kZWQpIGZvciBmdW5jdGlvbnMgd2hpY2ggZGVjb2RlIDgtYml0XG4gICAgb3IgMTYtYml0IGludGVnZXJzIGFuZCByZXByZXNlbnRlZCB0aGVtIHdpdGggW2ludF0gdmFsdWVzLlxuKilcblxudmFsIGdldF91aW50OCA6IHN0cmluZyAtPiBpbnQgLT4gaW50XG4oKiogW2dldF91aW50OCBiIGldIGlzIFtiXSdzIHVuc2lnbmVkIDgtYml0IGludGVnZXIgc3RhcnRpbmcgYXQgY2hhcmFjdGVyXG4gICAgaW5kZXggW2ldLlxuXG4gICAgQHNpbmNlIDQuMTMuMFxuKilcblxudmFsIGdldF9pbnQ4IDogc3RyaW5nIC0+IGludCAtPiBpbnRcbigqKiBbZ2V0X2ludDggYiBpXSBpcyBbYl0ncyBzaWduZWQgOC1iaXQgaW50ZWdlciBzdGFydGluZyBhdCBjaGFyYWN0ZXJcbiAgICBpbmRleCBbaV0uXG5cbiAgICBAc2luY2UgNC4xMy4wXG4qKVxuXG52YWwgZ2V0X3VpbnQxNl9uZSA6IHN0cmluZyAtPiBpbnQgLT4gaW50XG4oKiogW2dldF91aW50MTZfbmUgYiBpXSBpcyBbYl0ncyBuYXRpdmUtZW5kaWFuIHVuc2lnbmVkIDE2LWJpdCBpbnRlZ2VyXG4gICAgc3RhcnRpbmcgYXQgY2hhcmFjdGVyIGluZGV4IFtpXS5cblxuICAgIEBzaW5jZSA0LjEzLjBcbiopXG5cbnZhbCBnZXRfdWludDE2X2JlIDogc3RyaW5nIC0+IGludCAtPiBpbnRcbigqKiBbZ2V0X3VpbnQxNl9iZSBiIGldIGlzIFtiXSdzIGJpZy1lbmRpYW4gdW5zaWduZWQgMTYtYml0IGludGVnZXJcbiAgICBzdGFydGluZyBhdCBjaGFyYWN0ZXIgaW5kZXggW2ldLlxuXG4gICAgQHNpbmNlIDQuMTMuMFxuKilcblxudmFsIGdldF91aW50MTZfbGUgOiBzdHJpbmcgLT4gaW50IC0+IGludFxuKCoqIFtnZXRfdWludDE2X2xlIGIgaV0gaXMgW2JdJ3MgbGl0dGxlLWVuZGlhbiB1bnNpZ25lZCAxNi1iaXQgaW50ZWdlclxuICAgIHN0YXJ0aW5nIGF0IGNoYXJhY3RlciBpbmRleCBbaV0uXG5cbiAgICBAc2luY2UgNC4xMy4wXG4qKVxuXG52YWwgZ2V0X2ludDE2X25lIDogc3RyaW5nIC0+IGludCAtPiBpbnRcbigqKiBbZ2V0X2ludDE2X25lIGIgaV0gaXMgW2JdJ3MgbmF0aXZlLWVuZGlhbiBzaWduZWQgMTYtYml0IGludGVnZXJcbiAgICBzdGFydGluZyBhdCBjaGFyYWN0ZXIgaW5kZXggW2ldLlxuXG4gICAgQHNpbmNlIDQuMTMuMFxuKilcblxudmFsIGdldF9pbnQxNl9iZSA6IHN0cmluZyAtPiBpbnQgLT4gaW50XG4oKiogW2dldF9pbnQxNl9iZSBiIGldIGlzIFtiXSdzIGJpZy1lbmRpYW4gc2lnbmVkIDE2LWJpdCBpbnRlZ2VyXG4gICAgc3RhcnRpbmcgYXQgY2hhcmFjdGVyIGluZGV4IFtpXS5cblxuICAgIEBzaW5jZSA0LjEzLjBcbiopXG5cbnZhbCBnZXRfaW50MTZfbGUgOiBzdHJpbmcgLT4gaW50IC0+IGludFxuKCoqIFtnZXRfaW50MTZfbGUgYiBpXSBpcyBbYl0ncyBsaXR0bGUtZW5kaWFuIHNpZ25lZCAxNi1iaXQgaW50ZWdlclxuICAgIHN0YXJ0aW5nIGF0IGNoYXJhY3RlciBpbmRleCBbaV0uXG5cbiAgICBAc2luY2UgNC4xMy4wXG4qKVxuXG52YWwgZ2V0X2ludDMyX25lIDogc3RyaW5nIC0+IGludCAtPiBpbnQzMlxuKCoqIFtnZXRfaW50MzJfbmUgYiBpXSBpcyBbYl0ncyBuYXRpdmUtZW5kaWFuIDMyLWJpdCBpbnRlZ2VyXG4gICAgc3RhcnRpbmcgYXQgY2hhcmFjdGVyIGluZGV4IFtpXS5cblxuICAgIEBzaW5jZSA0LjEzLjBcbiopXG5cbnZhbCBnZXRfaW50MzJfYmUgOiBzdHJpbmcgLT4gaW50IC0+IGludDMyXG4oKiogW2dldF9pbnQzMl9iZSBiIGldIGlzIFtiXSdzIGJpZy1lbmRpYW4gMzItYml0IGludGVnZXJcbiAgICBzdGFydGluZyBhdCBjaGFyYWN0ZXIgaW5kZXggW2ldLlxuXG4gICAgQHNpbmNlIDQuMTMuMFxuKilcblxudmFsIGdldF9pbnQzMl9sZSA6IHN0cmluZyAtPiBpbnQgLT4gaW50MzJcbigqKiBbZ2V0X2ludDMyX2xlIGIgaV0gaXMgW2JdJ3MgbGl0dGxlLWVuZGlhbiAzMi1iaXQgaW50ZWdlclxuICAgIHN0YXJ0aW5nIGF0IGNoYXJhY3RlciBpbmRleCBbaV0uXG5cbiAgICBAc2luY2UgNC4xMy4wXG4qKVxuXG52YWwgZ2V0X2ludDY0X25lIDogc3RyaW5nIC0+IGludCAtPiBpbnQ2NFxuKCoqIFtnZXRfaW50NjRfbmUgYiBpXSBpcyBbYl0ncyBuYXRpdmUtZW5kaWFuIDY0LWJpdCBpbnRlZ2VyXG4gICAgc3RhcnRpbmcgYXQgY2hhcmFjdGVyIGluZGV4IFtpXS5cblxuICAgIEBzaW5jZSA0LjEzLjBcbiopXG5cbnZhbCBnZXRfaW50NjRfYmUgOiBzdHJpbmcgLT4gaW50IC0+IGludDY0XG4oKiogW2dldF9pbnQ2NF9iZSBiIGldIGlzIFtiXSdzIGJpZy1lbmRpYW4gNjQtYml0IGludGVnZXJcbiAgICBzdGFydGluZyBhdCBjaGFyYWN0ZXIgaW5kZXggW2ldLlxuXG4gICAgQHNpbmNlIDQuMTMuMFxuKilcblxudmFsIGdldF9pbnQ2NF9sZSA6IHN0cmluZyAtPiBpbnQgLT4gaW50NjRcbigqKiBbZ2V0X2ludDY0X2xlIGIgaV0gaXMgW2JdJ3MgbGl0dGxlLWVuZGlhbiA2NC1iaXQgaW50ZWdlclxuICAgIHN0YXJ0aW5nIGF0IGNoYXJhY3RlciBpbmRleCBbaV0uXG5cbiAgICBAc2luY2UgNC4xMy4wXG4qKVxuXG4oKiovKiopXG5cbigqIFRoZSBmb2xsb3dpbmcgaXMgZm9yIHN5c3RlbSB1c2Ugb25seS4gRG8gbm90IGNhbGwgZGlyZWN0bHkuICopXG5cbmV4dGVybmFsIHVuc2FmZV9nZXQgOiBzdHJpbmcgLT4gaW50IC0+IGNoYXIgPSBcIiVzdHJpbmdfdW5zYWZlX2dldFwiXG5leHRlcm5hbCB1bnNhZmVfc2V0IDogYnl0ZXMgLT4gaW50IC0+IGNoYXIgLT4gdW5pdCA9IFwiJXN0cmluZ191bnNhZmVfc2V0XCJcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZF1cbmV4dGVybmFsIHVuc2FmZV9ibGl0IDpcbiAgc3RyaW5nIC0+IGludCAtPiBieXRlcyAtPiBpbnQgLT4gaW50IC0+XG4gICAgdW5pdCA9IFwiY2FtbF9ibGl0X3N0cmluZ1wiIFtAQG5vYWxsb2NdXG5leHRlcm5hbCB1bnNhZmVfZmlsbCA6XG4gIGJ5dGVzIC0+IGludCAtPiBpbnQgLT4gY2hhciAtPiB1bml0ID0gXCJjYW1sX2ZpbGxfc3RyaW5nXCIgW0BAbm9hbGxvY11cbiAgW0BAb2NhbWwuZGVwcmVjYXRlZF1cbiJdfQ==
