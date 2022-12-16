(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_register_global=runtime.caml_register_global,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
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
    var
     global_data=runtime.caml_get_global_data(),
     cst_Free_type_variable_Vid=
      caml_string_of_jsbytes("Free type variable: '%{Vid}"),
     cst_Free_type_variable=caml_string_of_jsbytes("Free type variable: '"),
     cst_apply_incorrect_type_appli=
      caml_string_of_jsbytes("apply, incorrect type application arity"),
     cst_top_level=caml_string_of_jsbytes("top-level"),
     cst_impossible_lookup_group_un=
      caml_string_of_jsbytes
       ("impossible: lookup_group, unbound type-identifier: %{Tid}"),
     cst_impossible_lookup_group_un$0=
      caml_string_of_jsbytes
       ("impossible: lookup_group, unbound type-identifier: "),
     cst_Exp=caml_string_of_jsbytes("Exp"),
     cst_exp=caml_string_of_jsbytes("exp"),
     cst_Exp$0=caml_string_of_jsbytes("Exp"),
     cst_exp$0=caml_string_of_jsbytes("exp"),
     cst_annotate$1=caml_string_of_jsbytes("annotate"),
     cst_base$1=caml_string_of_jsbytes("base"),
     cst_tuple$1=caml_string_of_jsbytes("tuple"),
     cst_record$1=caml_string_of_jsbytes("record"),
     cst_variant$1=caml_string_of_jsbytes("variant"),
     cst_poly_variant$1=caml_string_of_jsbytes("poly_variant"),
     cst_application$1=caml_string_of_jsbytes("application"),
     cst_rec_app$1=caml_string_of_jsbytes("rec_app"),
     cst_var$1=caml_string_of_jsbytes("var"),
     cst_annotate=caml_string_of_jsbytes("annotate"),
     cst_Annotate=caml_string_of_jsbytes("Annotate"),
     cst_Application=caml_string_of_jsbytes("Application"),
     cst_Base=caml_string_of_jsbytes("Base"),
     cst_Poly_variant=caml_string_of_jsbytes("Poly_variant"),
     cst_Rec_app=caml_string_of_jsbytes("Rec_app"),
     cst_Record=caml_string_of_jsbytes("Record"),
     cst_Tuple=caml_string_of_jsbytes("Tuple"),
     cst_Var=caml_string_of_jsbytes("Var"),
     cst_Variant=caml_string_of_jsbytes("Variant"),
     cst_application=caml_string_of_jsbytes("application"),
     cst_base=caml_string_of_jsbytes("base"),
     cst_poly_variant=caml_string_of_jsbytes("poly_variant"),
     cst_rec_app=caml_string_of_jsbytes("rec_app"),
     cst_record=caml_string_of_jsbytes("record"),
     cst_tuple=caml_string_of_jsbytes("tuple"),
     cst_var=caml_string_of_jsbytes("var"),
     cst_variant=caml_string_of_jsbytes("variant"),
     cst_annotate$0=caml_string_of_jsbytes("annotate"),
     cst_Annotate$0=caml_string_of_jsbytes("Annotate"),
     cst_Application$0=caml_string_of_jsbytes("Application"),
     cst_Base$0=caml_string_of_jsbytes("Base"),
     cst_Poly_variant$0=caml_string_of_jsbytes("Poly_variant"),
     cst_Rec_app$0=caml_string_of_jsbytes("Rec_app"),
     cst_Record$0=caml_string_of_jsbytes("Record"),
     cst_Tuple$0=caml_string_of_jsbytes("Tuple"),
     cst_Var$0=caml_string_of_jsbytes("Var"),
     cst_Variant$0=caml_string_of_jsbytes("Variant"),
     cst_application$0=caml_string_of_jsbytes("application"),
     cst_base$0=caml_string_of_jsbytes("base"),
     cst_poly_variant$0=caml_string_of_jsbytes("poly_variant"),
     cst_rec_app$0=caml_string_of_jsbytes("rec_app"),
     cst_record$0=caml_string_of_jsbytes("record"),
     cst_tuple$0=caml_string_of_jsbytes("tuple"),
     cst_var$0=caml_string_of_jsbytes("var"),
     cst_variant$0=caml_string_of_jsbytes("variant"),
     cst_some=caml_string_of_jsbytes("some"),
     cst_none=caml_string_of_jsbytes("none"),
     cst_sorted=caml_string_of_jsbytes("sorted"),
     cst_sorted$0=caml_string_of_jsbytes("sorted"),
     cst_Location_s=caml_string_of_jsbytes("%{Location}: %s"),
     error_source_026=
      caml_string_of_jsbytes("shape/src/bin_shape.ml.Sorted_table.t"),
     error_source_042=
      caml_string_of_jsbytes
       ("shape/src/bin_shape.ml.Canonical_exp_constructor.t"),
     error_source_206=
      caml_string_of_jsbytes("shape/src/bin_shape.ml.Canonical_full.Exp1.t0"),
     cst_Bin_shape_lib_Bin_shape_Fo=
      caml_string_of_jsbytes
       ("Bin_shape_lib.Bin_shape.For_typerep.Not_a_tuple"),
     Assert_failure=global_data.Assert_failure,
     Base_List=global_data.Base__List,
     Base=global_data.Base,
     Base_Option=global_data.Base__Option,
     Base_Map=global_data.Base__Map,
     Base_Comparator=global_data.Base__Comparator,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Base_String=global_data.Base__String,
     Base_Int=global_data.Base__Int,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base_Printf=global_data.Base__Printf,
     Md5_lib=global_data.Md5_lib,
     Bin_shape_lib=[0];
    caml_register_global(120,Bin_shape_lib,"Bin_shape_lib");
    var
     sexp_of_t=Base_String[28],
     of_string=Base_String[29],
     to_string=Base_String[30],
     t_of_sexp=Base_String[27],
     sexp_of_t$0=Base_String[28],
     of_string$0=Base_String[29],
     to_string$0=Base_String[30],
     compare=Base_String[37],
     _N_=
      [0,
       caml_string_of_jsbytes
        ("shape/src/bin_shape.ml.For_typerep.Not_a_tuple")],
     _O_=[0,caml_string_of_jsbytes("_none_"),0,-1],
     _J_=[0,0],
     _K_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("The shape for an inherited type is not described as a polymorphic-variant: "),
        [2,0,0]],
       caml_string_of_jsbytes
        ("The shape for an inherited type is not described as a polymorphic-variant: %s")],
     _y_=[0,caml_string_of_jsbytes("Annotate")],
     _z_=[0,caml_string_of_jsbytes("Base")],
     _A_=[0,caml_string_of_jsbytes("Record")],
     _B_=[0,caml_string_of_jsbytes("Variant")],
     _C_=[0,caml_string_of_jsbytes("Tuple")],
     _D_=[0,caml_string_of_jsbytes("Poly_variant")],
     _E_=[0,caml_string_of_jsbytes("Var")],
     _F_=[0,caml_string_of_jsbytes("Rec_app")],
     _G_=[0,caml_string_of_jsbytes("Top_app")],
     _x_=[0,0],
     _u_=[0,caml_string_of_jsbytes("members")],
     _v_=[0,caml_string_of_jsbytes("loc")],
     _w_=[0,caml_string_of_jsbytes("gid")],
     _s_=[0,caml_string_of_jsbytes("Constr")],
     _t_=[0,caml_string_of_jsbytes("Inherit")],
     _r_=[0,caml_string_of_jsbytes("Exp")],
     _q_=[0,caml_string_of_jsbytes("...")],
     _h_=[0,caml_string_of_jsbytes("Annotate")],
     _i_=[0,caml_string_of_jsbytes("Base")],
     _j_=[0,caml_string_of_jsbytes("Tuple")],
     _k_=[0,caml_string_of_jsbytes("Record")],
     _l_=[0,caml_string_of_jsbytes("Variant")],
     _m_=[0,caml_string_of_jsbytes("Poly_variant")],
     _n_=[0,caml_string_of_jsbytes("Application")],
     _o_=[0,caml_string_of_jsbytes("Rec_app")],
     _p_=[0,caml_string_of_jsbytes("Var")],
     _g_=[0,caml_string_of_jsbytes("")],
     _f_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("Different shapes for duplicated polymorphic constructor: `"),
        [2,0,0]],
       caml_string_of_jsbytes
        ("Different shapes for duplicated polymorphic constructor: `%s")],
     _e_=[0,17724,0],
     _d_=[0,caml_string_of_jsbytes("sorted")],
     _c_=[0,caml_string_of_jsbytes("shape/src/bin_shape.ml"),33,2],
     _a_=[11,caml_string_of_jsbytes(": "),[2,0,0]],
     _b_=[0,0];
    function eval_fail(loc,fmt)
     {function _b9_(s)
       {var
         _b__=
          [0,
           [24,
            _b_,
            function(param,custom_printf_001)
             {return caml_call1(to_string,custom_printf_001)},
            _a_],
           cst_Location_s],
         _b$_=caml_call3(Base_Printf[2],_b__,loc,s);
        return caml_call1(Base[200],_b$_)}
      return caml_call2(Base_Printf[4],_b9_,fmt)}
    function equal_option(equal,a,b)
     {if(a)
       {if(b){var y=b[1],x=a[1];return caml_call2(equal,x,y)}}
      else
       if(! b)return 1;
      return 0}
    function create(loc,eq,xs$1)
     {function _b7_(param,_b8_)
       {var s2=_b8_[1],s1=param[1];return caml_call2(Base_String[37],s1,s2)}
      var param$0=caml_call2(Base_List[62],xs$1,_b7_);
      if(param$0)
       {var
         xs$0=param$0[2],
         match$0=param$0[1],
         value$0=match$0[2],
         key$0=match$0[1],
         acc$1=[0,[0,key$0,value$0],0],
         acc=acc$1,
         last_key=key$0,
         last_value=value$0,
         param=xs$0;
        for(;;)
         {if(param)
           {var xs=param[2],match=param[1],value=match[2],key=match[1];
            if(! caml_call2(Base_String[33],last_key,key))
             {var
               acc$0=[0,[0,key,value],acc],
               acc=acc$0,
               last_key=key,
               last_value=value,
               param=xs;
              continue}
            if(caml_call2(eq,last_value,value)){var param=xs;continue}
            var match$1=[0,-1062743954,key]}
          else
           var match$1=[0,17724,caml_call1(Base_List[38],acc)];
          break}}
      else
       var match$1=_e_;
      if(17724 <= match$1[1]){var sorted=match$1[2];return [0,sorted]}
      var s=match$1[2];
      return caml_call2(eval_fail(loc,_f_),s,0)}
    function map(t,f)
     {function _b6_(param)
       {var v=param[2],k=param[1];return [0,k,caml_call1(f,v)]}
      return [0,caml_call2(Base_List[76],t[1],_b6_)]}
    var
     compare$0=Md5_lib[1],
     to_binary=Md5_lib[3],
     to_hex=Md5_lib[6],
     of_hex_exn=Md5_lib[7],
     string=Md5_lib[8];
    function to_md5(t){return t}
    function of_md5(t){return t}
    function sexp_of_t$1(t)
     {var _b5_=caml_call1(to_hex,t);return caml_call1(Base[164],_b5_)}
    function t_of_sexp$0(s)
     {return caml_call1(of_hex_exn,caml_call1(Base[163],s))}
    function uuid(u){return caml_call1(string,caml_call1(to_string$0,u))}
    function int$0(x){return caml_call1(string,caml_call1(Base_Int[11],x))}
    function pair(x,y)
     {var _b3_=caml_call1(to_binary,y),_b4_=caml_call1(to_binary,x);
      return caml_call1(string,caml_call2(Base[197],_b4_,_b3_))}
    function list(l)
     {var _b2_=caml_call2(Base_List[76],l,to_binary);
      return caml_call1(string,caml_call2(Base_String[54],_g_,_b2_))}
    function constructor(s,l)
     {var _b1_=caml_call1(to_binary,list(l));
      return caml_call1(string,caml_call2(Base[197],s,_b1_))}
    function t_of_sexp$1(of_a_039,sexp_044)
     {if(0 === sexp_044[0])
       {var
         _bJ_=sexp_044[1],
         _bK_=caml_string_compare(_bJ_,cst_annotate),
         switch$0=0;
        if(0 <= _bK_)
         if(0 < _bK_)
          if(caml_string_notequal(_bJ_,cst_application))
           if(caml_string_notequal(_bJ_,cst_base))
            if(caml_string_notequal(_bJ_,cst_poly_variant))
             if(caml_string_notequal(_bJ_,cst_rec_app))
              if(caml_string_notequal(_bJ_,cst_record))
               if(caml_string_notequal(_bJ_,cst_tuple))
                if(caml_string_notequal(_bJ_,cst_var))
                 {if(! caml_string_notequal(_bJ_,cst_variant))switch$0 = 5}
                else
                 switch$0 = 9;
               else
                switch$0 = 3;
              else
               switch$0 = 4;
             else
              switch$0 = 8;
            else
             switch$0 = 6;
           else
            switch$0 = 2;
          else
           switch$0 = 7;
         else
          switch$0 = 1;
        else
         if(caml_string_notequal(_bJ_,cst_Annotate))
          if(caml_string_notequal(_bJ_,cst_Application))
           if(caml_string_notequal(_bJ_,cst_Base))
            if(caml_string_notequal(_bJ_,cst_Poly_variant))
             if(caml_string_notequal(_bJ_,cst_Rec_app))
              if(caml_string_notequal(_bJ_,cst_Record))
               if(caml_string_notequal(_bJ_,cst_Tuple))
                if(caml_string_notequal(_bJ_,cst_Var))
                 {if(! caml_string_notequal(_bJ_,cst_Variant))switch$0 = 5}
                else
                 switch$0 = 9;
               else
                switch$0 = 3;
              else
               switch$0 = 4;
             else
              switch$0 = 8;
            else
             switch$0 = 6;
           else
            switch$0 = 2;
          else
           switch$0 = 7;
         else
          switch$0 = 1;
        switch(switch$0)
         {case 1:
           return caml_call2
                   (Sexplib0_Sexp_conv_error[5],error_source_042,sexp_044);
          case 2:
           return caml_call2
                   (Sexplib0_Sexp_conv_error[5],error_source_042,sexp_044);
          case 3:
           return caml_call2
                   (Sexplib0_Sexp_conv_error[5],error_source_042,sexp_044);
          case 4:
           return caml_call2
                   (Sexplib0_Sexp_conv_error[5],error_source_042,sexp_044);
          case 5:
           return caml_call2
                   (Sexplib0_Sexp_conv_error[5],error_source_042,sexp_044);
          case 6:
           return caml_call2
                   (Sexplib0_Sexp_conv_error[5],error_source_042,sexp_044);
          case 7:
           return caml_call2
                   (Sexplib0_Sexp_conv_error[5],error_source_042,sexp_044);
          case 8:
           return caml_call2
                   (Sexplib0_Sexp_conv_error[5],error_source_042,sexp_044);
          case 9:
           return caml_call2
                   (Sexplib0_Sexp_conv_error[5],error_source_042,sexp_044)
          }}
      else
       {var _bL_=sexp_044[1];
        if(! _bL_)
         return caml_call2
                 (Sexplib0_Sexp_conv_error[7],error_source_042,sexp_044);
        var _bM_=_bL_[1];
        if(0 !== _bM_[0])
         return caml_call2
                 (Sexplib0_Sexp_conv_error[6],error_source_042,sexp_044);
        var
         _bN_=_bM_[1],
         _bO_=caml_string_compare(_bN_,cst_annotate$0),
         switch$1=0;
        if(0 <= _bO_)
         if(0 < _bO_)
          if(caml_string_notequal(_bN_,cst_application$0))
           if(caml_string_notequal(_bN_,cst_base$0))
            if(caml_string_notequal(_bN_,cst_poly_variant$0))
             if(caml_string_notequal(_bN_,cst_rec_app$0))
              if(caml_string_notequal(_bN_,cst_record$0))
               if(caml_string_notequal(_bN_,cst_tuple$0))
                if(caml_string_notequal(_bN_,cst_var$0))
                 {if(! caml_string_notequal(_bN_,cst_variant$0))switch$1 = 5}
                else
                 switch$1 = 9;
               else
                switch$1 = 3;
              else
               switch$1 = 4;
             else
              switch$1 = 8;
            else
             switch$1 = 6;
           else
            switch$1 = 2;
          else
           switch$1 = 7;
         else
          switch$1 = 1;
        else
         if(caml_string_notequal(_bN_,cst_Annotate$0))
          if(caml_string_notequal(_bN_,cst_Application$0))
           if(caml_string_notequal(_bN_,cst_Base$0))
            if(caml_string_notequal(_bN_,cst_Poly_variant$0))
             if(caml_string_notequal(_bN_,cst_Rec_app$0))
              if(caml_string_notequal(_bN_,cst_Record$0))
               if(caml_string_notequal(_bN_,cst_Tuple$0))
                if(caml_string_notequal(_bN_,cst_Var$0))
                 {if(! caml_string_notequal(_bN_,cst_Variant$0))switch$1 = 5}
                else
                 switch$1 = 9;
               else
                switch$1 = 3;
              else
               switch$1 = 4;
             else
              switch$1 = 8;
            else
             switch$1 = 6;
           else
            switch$1 = 2;
          else
           switch$1 = 7;
         else
          switch$1 = 1;
        switch(switch$1)
         {case 1:
           var sexp_args_046=_bL_[2];
           if(sexp_args_046)
            {var _bU_=sexp_args_046[2];
             if(_bU_ && ! _bU_[2])
              {var
                arg1_048=_bU_[1],
                arg0_047=sexp_args_046[1],
                res0_049=caml_call1(t_of_sexp,arg0_047),
                res1_050=caml_call1(of_a_039,arg1_048);
               return [0,res0_049,res1_050]}}
           return caml_call3
                   (Sexplib0_Sexp_conv_error[4],error_source_042,_bN_,sexp_044);
          case 2:
           var sexp_args_053=_bL_[2];
           if(sexp_args_053)
            {var _bS_=sexp_args_053[2];
             if(_bS_ && ! _bS_[2])
              {var
                arg1_055=_bS_[1],
                arg0_054=sexp_args_053[1],
                res0_056=caml_call1(t_of_sexp,arg0_054),
                res1_057=caml_call2(Base[138],of_a_039,arg1_055);
               return [1,res0_056,res1_057]}}
           return caml_call3
                   (Sexplib0_Sexp_conv_error[4],error_source_042,_bN_,sexp_044);
          case 3:
           var sexp_args_060=_bL_[2];
           if(sexp_args_060 && ! sexp_args_060[2])
            {var
              arg0_061=sexp_args_060[1],
              res0_062=caml_call2(Base[138],of_a_039,arg0_061);
             return [2,res0_062]}
           return caml_call3
                   (Sexplib0_Sexp_conv_error[4],error_source_042,_bN_,sexp_044);
          case 4:
           var sexp_args_065=_bL_[2];
           if(sexp_args_065 && ! sexp_args_065[2])
            {var
              arg0_071=sexp_args_065[1],
              _bQ_=
               function(sexp_070)
                {if(1 === sexp_070[0])
                  {var _bZ_=sexp_070[1];
                   if(_bZ_)
                    {var _b0_=_bZ_[2];
                     if(_b0_ && ! _b0_[2])
                      {var
                        arg1_067=_b0_[1],
                        arg0_066=_bZ_[1],
                        res0_068=caml_call1(Base[163],arg0_066),
                        res1_069=caml_call1(of_a_039,arg1_067);
                       return [0,res0_068,res1_069]}}}
                 return caml_call3
                         (Sexplib0_Sexp_conv_error[2],error_source_042,2,sexp_070)},
              res0_072=caml_call2(Base[138],_bQ_,arg0_071);
             return [3,res0_072]}
           return caml_call3
                   (Sexplib0_Sexp_conv_error[4],error_source_042,_bN_,sexp_044);
          case 5:
           var sexp_args_075=_bL_[2];
           if(sexp_args_075 && ! sexp_args_075[2])
            {var
              arg0_081=sexp_args_075[1],
              _bP_=
               function(sexp_080)
                {if(1 === sexp_080[0])
                  {var _bX_=sexp_080[1];
                   if(_bX_)
                    {var _bY_=_bX_[2];
                     if(_bY_ && ! _bY_[2])
                      {var
                        arg1_077=_bY_[1],
                        arg0_076=_bX_[1],
                        res0_078=caml_call1(Base[163],arg0_076),
                        res1_079=caml_call2(Base[138],of_a_039,arg1_077);
                       return [0,res0_078,res1_079]}}}
                 return caml_call3
                         (Sexplib0_Sexp_conv_error[2],error_source_042,2,sexp_080)},
              res0_082=caml_call2(Base[138],_bP_,arg0_081);
             return [4,res0_082]}
           return caml_call3
                   (Sexplib0_Sexp_conv_error[4],error_source_042,_bN_,sexp_044);
          case 6:
           var sexp_args_085=_bL_[2];
           if(sexp_args_085 && ! sexp_args_085[2])
            {var
              arg0_086=sexp_args_085[1],
              of_a_010=caml_call1(Base[151],of_a_039);
             if(0 === arg0_086[0])
              var
               res0_087=
                caml_call2
                 (Sexplib0_Sexp_conv_error[16],error_source_026,arg0_086);
             else
              {var
                field_sexps_013=arg0_086[1],
                sorted_014=[0,0],
                duplicates_016=[0,0],
                extra_017=[0,0],
                param=field_sexps_013;
               for(;;)
                {if(param)
                  {var _bC_=param[1];
                   if(1 === _bC_[0])
                    {var _bD_=_bC_[1];
                     if(_bD_)
                      {var _bE_=_bD_[1];
                       if(0 === _bE_[0])
                        {var _bF_=_bD_[2],_bG_=_bE_[1],switch$2=0;
                         if(! _bF_ || ! _bF_[2])switch$2 = 1;
                         if(switch$2)
                          {var tail_029=param[2];
                           if(caml_string_notequal(_bG_,cst_sorted))
                            {if(Sexplib0_Sexp_conv[26][1])
                              extra_017[1] = [0,_bG_,extra_017[1]]}
                           else
                            if(sorted_014[1])
                             duplicates_016[1] = [0,_bG_,duplicates_016[1]];
                            else
                             {if(_bF_)
                               {if(_bF_[2])throw [0,Assert_failure,_c_];
                                var x_030=_bF_[1],field_sexp_019=x_030}
                              else
                               var
                                field_sexp_019=
                                 caml_call2
                                  (Sexplib0_Sexp_conv_error[10],error_source_026,arg0_086);
                              var
                               _bH_=
                                function(sexp_025)
                                 {if(1 === sexp_025[0])
                                   {var _bV_=sexp_025[1];
                                    if(_bV_)
                                     {var _bW_=_bV_[2];
                                      if(_bW_ && ! _bW_[2])
                                       {var
                                         arg1_022=_bW_[1],
                                         arg0_021=_bV_[1],
                                         res0_023=caml_call1(Base[163],arg0_021),
                                         res1_024=caml_call1(of_a_010,arg1_022);
                                        return [0,res0_023,res1_024]}}}
                                  return caml_call3
                                          (Sexplib0_Sexp_conv_error[2],error_source_026,2,sexp_025)},
                               fvalue_027=caml_call2(Base[138],_bH_,field_sexp_019);
                              sorted_014[1] = [0,fvalue_027]}
                           var param=tail_029;
                           continue}}}}
                   caml_call2
                    (Sexplib0_Sexp_conv_error[10],error_source_026,_bC_)}
                 if(duplicates_016[1])
                  var
                   res0_087=
                    caml_call3
                     (Sexplib0_Sexp_conv_error[12],
                      error_source_026,
                      duplicates_016[1],
                      arg0_086);
                 else
                  if(extra_017[1])
                   var
                    res0_087=
                     caml_call3
                      (Sexplib0_Sexp_conv_error[13],
                       error_source_026,
                       extra_017[1],
                       arg0_086);
                  else
                   {var _bI_=sorted_014[1];
                    if(_bI_)
                     var sorted_015=_bI_[1],res0_087=[0,sorted_015];
                    else
                     var
                      res0_087=
                       caml_call3
                        (Sexplib0_Sexp_conv_error[15],
                         error_source_026,
                         arg0_086,
                         [0,[0,0 === sorted_014[1]?1:0,cst_sorted$0],0])}
                 break}}
             return [5,res0_087]}
           return caml_call3
                   (Sexplib0_Sexp_conv_error[4],error_source_042,_bN_,sexp_044);
          case 7:
           var sexp_args_090=_bL_[2];
           if(sexp_args_090)
            {var _bT_=sexp_args_090[2];
             if(_bT_ && ! _bT_[2])
              {var
                arg1_092=_bT_[1],
                arg0_091=sexp_args_090[1],
                res0_093=caml_call1(of_a_039,arg0_091),
                res1_094=caml_call2(Base[138],of_a_039,arg1_092);
               return [6,res0_093,res1_094]}}
           return caml_call3
                   (Sexplib0_Sexp_conv_error[4],error_source_042,_bN_,sexp_044);
          case 8:
           var sexp_args_097=_bL_[2];
           if(sexp_args_097)
            {var _bR_=sexp_args_097[2];
             if(_bR_ && ! _bR_[2])
              {var
                arg1_099=_bR_[1],
                arg0_098=sexp_args_097[1],
                res0_100=caml_call1(Base[118],arg0_098),
                res1_101=caml_call2(Base[138],of_a_039,arg1_099);
               return [7,res0_100,res1_101]}}
           return caml_call3
                   (Sexplib0_Sexp_conv_error[4],error_source_042,_bN_,sexp_044);
          case 9:
           var sexp_args_104=_bL_[2];
           if(sexp_args_104 && ! sexp_args_104[2])
            {var
              arg0_105=sexp_args_104[1],
              res0_106=caml_call1(Base[118],arg0_105);
             return [8,res0_106]}
           return caml_call3
                   (Sexplib0_Sexp_conv_error[4],error_source_042,_bN_,sexp_044)
          }}
      return caml_call2(Sexplib0_Sexp_conv_error[8],error_source_042,sexp_044)}
    function sexp_of_t$2(of_a_108,param)
     {switch(param[0])
       {case 0:
         var
          arg1_110=param[2],
          arg0_109=param[1],
          res0_111=caml_call1(sexp_of_t$0,arg0_109),
          res1_112=caml_call1(of_a_108,arg1_110);
         return [1,[0,_h_,[0,res0_111,[0,res1_112,0]]]];
        case 1:
         var
          arg1_114=param[2],
          arg0_113=param[1],
          res0_115=caml_call1(sexp_of_t$0,arg0_113),
          res1_116=caml_call2(Base[139],of_a_108,arg1_114);
         return [1,[0,_i_,[0,res0_115,[0,res1_116,0]]]];
        case 2:
         var
          arg0_117=param[1],
          res0_118=caml_call2(Base[139],of_a_108,arg0_117);
         return [1,[0,_j_,[0,res0_118,0]]];
        case 3:
         var
          arg0_123=param[1],
          _bA_=
           function(param)
            {var
              arg1_120=param[2],
              arg0_119=param[1],
              res0_121=caml_call1(Base[164],arg0_119),
              res1_122=caml_call1(of_a_108,arg1_120);
             return [1,[0,res0_121,[0,res1_122,0]]]},
          res0_124=caml_call2(Base[139],_bA_,arg0_123);
         return [1,[0,_k_,[0,res0_124,0]]];
        case 4:
         var
          arg0_129=param[1],
          _bB_=
           function(param)
            {var
              arg1_126=param[2],
              arg0_125=param[1],
              res0_127=caml_call1(Base[164],arg0_125),
              res1_128=caml_call2(Base[139],of_a_108,arg1_126);
             return [1,[0,res0_127,[0,res1_128,0]]]},
          res0_130=caml_call2(Base[139],_bB_,arg0_129);
         return [1,[0,_l_,[0,res0_130,0]]];
        case 5:
         var
          arg0_131=param[1],
          of_a_031=caml_call1(Base[152],of_a_108),
          sorted_033=arg0_131[1],
          bnds_032=0,
          _bz_=
           function(param)
            {var
              arg1_036=param[2],
              arg0_035=param[1],
              res0_037=caml_call1(Base[164],arg0_035),
              res1_038=caml_call1(of_a_031,arg1_036);
             return [1,[0,res0_037,[0,res1_038,0]]]},
          arg_034=caml_call2(Base[139],_bz_,sorted_033),
          bnds_032$0=[0,[1,[0,_d_,[0,arg_034,0]]],bnds_032],
          res0_132=[1,bnds_032$0];
         return [1,[0,_m_,[0,res0_132,0]]];
        case 6:
         var
          arg1_134=param[2],
          arg0_133=param[1],
          res0_135=caml_call1(of_a_108,arg0_133),
          res1_136=caml_call2(Base[139],of_a_108,arg1_134);
         return [1,[0,_n_,[0,res0_135,[0,res1_136,0]]]];
        case 7:
         var
          arg1_138=param[2],
          arg0_137=param[1],
          res0_139=caml_call1(Base[119],arg0_137),
          res1_140=caml_call2(Base[139],of_a_108,arg1_138);
         return [1,[0,_o_,[0,res0_139,[0,res1_140,0]]]];
        default:
         var arg0_141=param[1],res0_142=caml_call1(Base[119],arg0_141);
         return [1,[0,_p_,[0,res0_142,0]]]}}
    function map$0(x,f)
     {switch(x[0])
       {case 0:var x$0=x[2],u=x[1];return [0,u,caml_call1(f,x$0)];
        case 1:var xs=x[2],s=x[1];return [1,s,caml_call2(Base_List[76],xs,f)];
        case 2:var xs$0=x[1];return [2,caml_call2(Base_List[76],xs$0,f)];
        case 3:
         var
          l=x[1],
          _bu_=
           function(param)
            {var x=param[2],s=param[1];return [0,s,caml_call1(f,x)]};
         return [3,caml_call2(Base_List[76],l,_bu_)];
        case 4:
         var
          l$0=x[1],
          _bv_=
           function(param)
            {var xs=param[2],s=param[1];
             return [0,s,caml_call2(Base_List[76],xs,f)]};
         return [4,caml_call2(Base_List[76],l$0,_bv_)];
        case 5:
         var t=x[1],_bw_=Base_Option[21];
         return [5,map(t,function(_by_){return caml_call2(_bw_,_by_,f)})];
        case 6:
         var l$1=x[2],x$1=x[1],_bx_=caml_call2(Base_List[76],l$1,f);
         return [6,caml_call1(f,x$1),_bx_];
        case 7:
         var l$2=x[2],t$0=x[1];return [7,t$0,caml_call2(Base_List[76],l$2,f)];
        default:var v=x[1];return [8,v]}}
    function to_string$1(t)
     {var _bt_=sexp_of_t$2(function(param){return _q_},t);
      return caml_call1(Base[84][15],_bt_)}
    function digest_layer(param)
     {switch(param[0])
       {case 0:
         var x=param[2],u=param[1];
         return constructor(cst_annotate$1,[0,uuid(u),[0,x,0]]);
        case 1:
         var l=param[2],u$0=param[1],_bj_=[0,list(l),0];
         return constructor(cst_base$1,[0,uuid(u$0),_bj_]);
        case 2:
         var l$0=param[1];return constructor(cst_tuple$1,[0,list(l$0),0]);
        case 3:
         var
          l$1=param[1],
          _bk_=0,
          _bl_=
           function(param)
            {var t=param[2],s=param[1];return pair(caml_call1(string,s),t)};
         return constructor
                 (cst_record$1,
                  [0,list(caml_call2(Base_List[76],l$1,_bl_)),_bk_]);
        case 4:
         var
          l$2=param[1],
          _bm_=0,
          _bn_=
           function(param)
            {var l=param[2],s=param[1],_bs_=list(l);
             return pair(caml_call1(string,s),_bs_)};
         return constructor
                 (cst_variant$1,
                  [0,list(caml_call2(Base_List[76],l$2,_bn_)),_bm_]);
        case 5:
         var
          table=param[1],
          _bo_=0,
          _bp_=
           function(param)
            {var y=param[2],x$0=param[1];
             if(y)
              var x=y[1],_br_=constructor(cst_some,[0,x,0]);
             else
              var _br_=constructor(cst_none,0);
             return pair(caml_call1(string,x$0),_br_)};
         return constructor
                 (cst_poly_variant$1,
                  [0,list(caml_call2(Base_List[76],table[1],_bp_)),_bo_]);
        case 6:
         var l$3=param[2],x$0=param[1];
         return constructor(cst_application$1,[0,x$0,[0,list(l$3),0]]);
        case 7:
         var l$4=param[2],n=param[1],_bq_=[0,list(l$4),0];
         return constructor(cst_rec_app$1,[0,int$0(n),_bq_]);
        default:
         var n$0=param[1];return constructor(cst_var$1,[0,int$0(n$0),0])}}
    function to_digest(param){var x=param[1];return x}
    function to_digest$0(x)
     {switch(x[0])
       {case 0:var x$0=x[1];return digest_layer([5,x$0]);
        case 1:var match=x[1],x$1=match[2];return x$1;
        default:var x$2=x[1];return x$2}}
    function equal(x,y)
     {var _bi_=to_digest$0(y);
      return 0 === caml_call2(compare$0,to_digest$0(x),_bi_)?1:0}
    function opaque(x){return [2,to_digest$0(x)]}
    function create$0(x)
     {var x$0=map$0(x,to_digest$0),desc=to_string$1(x$0);
      switch(x$0[0])
       {case 0:return [1,[0,desc,digest_layer(x$0)]];
        case 1:return [1,[0,desc,digest_layer(x$0)]];
        case 5:var l=x$0[1];return [0,l];
        case 6:return [1,[0,desc,digest_layer(x$0)]];
        case 7:return [1,[0,desc,digest_layer(x$0)]];
        default:return [1,[0,desc,digest_layer(x$0)]]}}
    function var$0(x){return create$0([8,x])}
    function apply(def,l){return create$0([6,def,l])}
    function recurse(tid,l){return create$0([7,tid,l])}
    function get_poly_variant(x)
     {if(1 === x[0]){var match=x[1],desc=match[1];return [1,desc]}
      var l=x[1],_bf_=Base_Option[21];
      function _bg_(x){return [2,x]}
      return [0,map(l,function(_bh_){return caml_call2(_bf_,_bh_,_bg_)})]}
    var Def=[0];
    function annotate(u,x){return create$0([0,u,x])}
    function basetype(u,l){return create$0([1,u,l])}
    function tuple(l){return create$0([2,l])}
    function poly_variant(loc,l)
     {return create$0
              ([5,
                create
                 (loc,
                  function(_bd_,_be_){return equal_option(equal,_bd_,_be_)},
                  l)])}
    function var$1(x){return create$0([8,x])}
    function apply$0(x,l){return create$0([6,x,l])}
    function recurse$0(t,l){return create$0([7,t,l])}
    function define(x){return x}
    function record(l){return create$0([3,l])}
    function variant(l){return create$0([4,l])}
    function create$1(e){return [0,to_digest$0(e)]}
    var
     Canonical_digest=
      [0,
       to_digest,
       [0,var$0,recurse,apply,opaque,get_poly_variant],
       Def,
       [0,
        annotate,
        basetype,
        tuple,
        poly_variant,
        var$1,
        recurse$0,
        apply$0,
        define,
        record,
        variant,
        create$1]];
    function compare$1(a_198,b_199)
     {if(caml_call2(Ppx_compare_lib[1],a_198,b_199))return 0;
      var b_201=b_199[1],a_200=a_198[1];
      function cmp_a(a_202,b_203){return compare$1(a_202,b_203)}
      if(caml_call2(Ppx_compare_lib[1],a_200,b_201))return 0;
      var switch$0=0;
      switch(a_200[0])
       {case 0:
         var _aV_=a_200[1];
         if(0 === b_201[0])
          {var
            b_149=b_201[2],
            b_147=b_201[1],
            a_148=a_200[2],
            n=caml_call2(compare,_aV_,b_147);
           return 0 === n?cmp_a(a_148,b_149):n}
         return -1;
        case 1:
         var _aW_=a_200[2],_aX_=a_200[1];
         switch(b_201[0])
          {case 0:break;
           case 1:
            var
             b_153=b_201[2],
             b_151=b_201[1],
             n$0=caml_call2(compare,_aX_,b_151);
            if(0 === n$0)
             {var _aY_=function(a_154,b_155){return cmp_a(a_154,b_155)};
              return caml_call3(Base[135],_aY_,_aW_,b_153)}
            return n$0;
           default:return -1}
         break;
        case 2:
         var _aZ_=a_200[1];
         switch(b_201[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:
            var
             b_157=b_201[1],
             _a0_=function(a_158,b_159){return cmp_a(a_158,b_159)};
            return caml_call3(Base[135],_a0_,_aZ_,b_157);
           default:return -1}
         break;
        case 3:
         var _a1_=a_200[1];
         switch(b_201[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:switch$0 = 2;break;
           case 3:
            var
             b_161=b_201[1],
             _a2_=
              function(a_162,b_163)
               {var
                 t_165=a_162[2],
                 t_164=a_162[1],
                 t_167=b_163[2],
                 t_166=b_163[1],
                 n=caml_call2(Base[159],t_164,t_166);
                return 0 === n?cmp_a(t_165,t_167):n};
            return caml_call3(Base[135],_a2_,_a1_,b_161);
           default:return -1}
         break;
        case 4:
         var _a3_=a_200[1];
         switch(b_201[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:switch$0 = 2;break;
           case 3:switch$0 = 3;break;
           case 4:
            var
             b_169=b_201[1],
             _a4_=
              function(a_170,b_171)
               {var
                 t_173=a_170[2],
                 t_172=a_170[1],
                 t_175=b_171[2],
                 t_174=b_171[1],
                 n=caml_call2(Base[159],t_172,t_174);
                if(0 === n)
                 {var _bc_=function(a_176,b_177){return cmp_a(a_176,b_177)};
                  return caml_call3(Base[135],_bc_,t_173,t_175)}
                return n};
            return caml_call3(Base[135],_a4_,_a3_,b_169);
           default:return -1}
         break;
        case 5:
         var _a5_=a_200[1];
         switch(b_201[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:switch$0 = 2;break;
           case 3:switch$0 = 3;break;
           case 4:switch$0 = 4;break;
           case 5:
            var b_179=b_201[1];
            if(caml_call2(Ppx_compare_lib[1],_a5_,b_179))return 0;
            var
             _aS_=b_179[1],
             _aT_=_a5_[1],
             _aU_=
              function(a_004,b_005)
               {var
                 t_007=a_004[2],
                 t_006=a_004[1],
                 t_009=b_005[2],
                 t_008=b_005[1],
                 n=caml_call2(Base[159],t_006,t_008);
                if(0 === n)
                 {var _bb_=function(a_182,b_183){return cmp_a(a_182,b_183)};
                  return caml_call3(Base[148],_bb_,t_007,t_009)}
                return n};
            return caml_call3(Base[135],_aU_,_aT_,_aS_);
           default:return -1}
         break;
        case 6:
         var _a6_=a_200[2],_a7_=a_200[1];
         switch(b_201[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:switch$0 = 2;break;
           case 3:switch$0 = 3;break;
           case 4:switch$0 = 4;break;
           case 5:switch$0 = 5;break;
           case 6:
            var b_187=b_201[2],b_185=b_201[1],n$1=cmp_a(_a7_,b_185);
            if(0 === n$1)
             {var _a8_=function(a_188,b_189){return cmp_a(a_188,b_189)};
              return caml_call3(Base[135],_a8_,_a6_,b_187)}
            return n$1;
           default:return -1}
         break;
        case 7:
         var _a9_=a_200[2],_a__=a_200[1];
         switch(b_201[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:switch$0 = 2;break;
           case 3:switch$0 = 3;break;
           case 4:switch$0 = 4;break;
           case 5:switch$0 = 5;break;
           case 6:switch$0 = 6;break;
           case 7:
            var
             b_193=b_201[2],
             b_191=b_201[1],
             n$2=caml_call2(Base[114],_a__,b_191);
            if(0 === n$2)
             {var _a$_=function(a_194,b_195){return cmp_a(a_194,b_195)};
              return caml_call3(Base[135],_a$_,_a9_,b_193)}
            return n$2;
           default:return -1}
         break;
        default:
         var _ba_=a_200[1];
         switch(b_201[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:switch$0 = 2;break;
           case 3:switch$0 = 3;break;
           case 4:switch$0 = 4;break;
           case 5:switch$0 = 5;break;
           case 6:switch$0 = 6;break;
           case 7:return 1;
           default:var b_197=b_201[1];return caml_call2(Base[114],_ba_,b_197)}}
      switch(switch$0)
       {case 0:return 1;
        case 1:return 1;
        case 2:return 1;
        case 3:return 1;
        case 4:return 1;
        case 5:return 1;
        default:return 1}}
    var t_of_sexp$2=function _aR_(_aQ_){return _aR_.fun(_aQ_)};
    runtime.caml_update_dummy
     (t_of_sexp$2,
      function(sexp_208)
       {if(0 === sexp_208[0])
         {var _aM_=sexp_208[1],switch$0=0;
          if
           (caml_string_notequal(_aM_,cst_Exp)
            &&
            caml_string_notequal(_aM_,cst_exp))
           switch$0 = 1;
          if(! switch$0)
           return caml_call2
                   (Sexplib0_Sexp_conv_error[5],error_source_206,sexp_208)}
        else
         {var _aN_=sexp_208[1];
          if(! _aN_)
           return caml_call2
                   (Sexplib0_Sexp_conv_error[7],error_source_206,sexp_208);
          var _aO_=_aN_[1];
          if(0 !== _aO_[0])
           return caml_call2
                   (Sexplib0_Sexp_conv_error[6],error_source_206,sexp_208);
          var _aP_=_aO_[1],switch$1=0;
          if
           (caml_string_notequal(_aP_,cst_Exp$0)
            &&
            caml_string_notequal(_aP_,cst_exp$0))
           switch$1 = 1;
          if(! switch$1)
           {var sexp_args_210=_aN_[2];
            if(sexp_args_210 && ! sexp_args_210[2])
             {var
               arg0_211=sexp_args_210[1],
               res0_212=t_of_sexp$1(t_of_sexp$2,arg0_211);
              return [0,res0_212]}
            return caml_call3
                    (Sexplib0_Sexp_conv_error[4],error_source_206,_aP_,sexp_208)}}
        return caml_call2
                (Sexplib0_Sexp_conv_error[8],error_source_206,sexp_208)});
    function sexp_of_t$3(param)
     {var arg0_213=param[1],res0_214=sexp_of_t$2(sexp_of_t$3,arg0_213);
      return [1,[0,_r_,[0,res0_214,0]]]}
    function equal_t0(x,y){return 0 === compare$1(x,y)?1:0}
    function var$2(x){return [0,[8,x]]}
    function apply$1(d,xs){return [0,[6,d,xs]]}
    function recurse$1(r,xs){return [0,[7,r,xs]]}
    function get_poly_variant$0(param)
     {var _aL_=param[1];
      if(5 === _aL_[0]){var tab=_aL_[1];return [0,tab]}
      return [1,to_string$1(_aL_)]}
    function opaque$0(t){return t}
    function to_digest$1(param)
     {var e=param[1];return digest_layer(map$0(e,to_digest$1))}
    function to_digest$2(e){return to_digest$1(e)}
    function annotate$0(u,x){return [0,[0,u,x]]}
    function basetype$0(u,xs){return [0,[1,u,xs]]}
    function tuple$0(xs){return [0,[2,xs]]}
    function poly_variant$0(loc,xs)
     {return [0,
              [5,
               create
                (loc,
                 function(_aJ_,_aK_){return equal_option(equal_t0,_aJ_,_aK_)},
                 xs)]]}
    function var$3(n){return [0,[8,n]]}
    function recurse$2(r,xs){return recurse$1(r,xs)}
    function apply$2(d,xs){return apply$1(d,xs)}
    function define$0(x){return x}
    function record$0(xs){return [0,[3,xs]]}
    function variant$0(xs){return [0,[4,xs]]}
    function create$2(exp){return exp}
    var
     Create=
      [0,
       annotate$0,
       basetype$0,
       tuple$0,
       poly_variant$0,
       var$3,
       recurse$2,
       apply$2,
       define$0,
       record$0,
       variant$0,
       create$2];
    function to_string_hum(t)
     {var _aI_=sexp_of_t$3(t);return caml_call2(Base[84][13],0,_aI_)}
    var
     Def$0=[0],
     Exp1=[0,var$2,recurse$1,apply$1,opaque$0,get_poly_variant$0],
     sexp_of_t$4=Base_String[28],
     of_string$1=Base_String[29],
     to_string$2=Base_String[30],
     symbol=Base_String[33],
     compare$2=Base_String[37],
     equal$0=Base_String[121],
     sexp_of_t$5=Base_String[28],
     of_string$2=Base_String[29],
     to_string$3=Base_String[30],
     comparator=Base_String[45],
     compare$3=Base[114],
     sexp_of_t$6=Base[119],
     r=[0,0];
    function group(loc,trips)
     {var u=r[1];
      r[1] = 1 + u | 0;
      function _aH_(param)
       {var t=param[3],vs=param[2],x=param[1];return [0,x,[0,vs,t]]}
      var members=caml_call2(Base_List[76],trips,_aH_);
      return [0,u,loc,members]}
    function lookup(g,tid)
     {var match=caml_call3(Base_List[129][5],g[3],symbol,tid);
      if(match){var scheme=match[1];return scheme}
      var
       _aE_=0,
       _aF_=0,
       _aG_=
        [0,
         [11,
          cst_impossible_lookup_group_un$0,
          [24,
           _x_,
           function(param,custom_printf_285)
            {return caml_call1(to_string$2,custom_printf_285)},
           _aF_]],
         cst_impossible_lookup_group_un];
      return caml_call2(eval_fail(g[2],_aG_),tid,_aE_)}
    function annotate$1(v0,v1){return [0,v0,v1]}
    function basetype$1(v0,v1){return [1,v0,v1]}
    function record$1(v0){return [2,v0]}
    function variant$1(v0){return [3,v0]}
    function tuple$1(v0){return [4,v0]}
    function rec_app(v0,v1){return [7,v0,v1]}
    function top_app(v0,v1,v2){return [8,v0,v1,v2]}
    function of_a_269(param)
     {switch(param[0])
       {case 0:
         var
          arg1_287=param[2],
          arg0_286=param[1],
          res0_288=caml_call1(sexp_of_t$0,arg0_286),
          res1_289=of_a_269(arg1_287);
         return [1,[0,_y_,[0,res0_288,[0,res1_289,0]]]];
        case 1:
         var
          arg1_291=param[2],
          arg0_290=param[1],
          res0_292=caml_call1(sexp_of_t$0,arg0_290),
          res1_293=caml_call2(Base[139],of_a_269,arg1_291);
         return [1,[0,_z_,[0,res0_292,[0,res1_293,0]]]];
        case 2:
         var
          arg0_298=param[1],
          _aB_=
           function(param)
            {var
              arg1_295=param[2],
              arg0_294=param[1],
              res0_296=caml_call1(Base[164],arg0_294),
              res1_297=of_a_269(arg1_295);
             return [1,[0,res0_296,[0,res1_297,0]]]},
          res0_299=caml_call2(Base[139],_aB_,arg0_298);
         return [1,[0,_A_,[0,res0_299,0]]];
        case 3:
         var
          arg0_304=param[1],
          _aC_=
           function(param)
            {var
              arg1_301=param[2],
              arg0_300=param[1],
              res0_302=caml_call1(Base[164],arg0_300),
              res1_303=caml_call2(Base[139],of_a_269,arg1_301);
             return [1,[0,res0_302,[0,res1_303,0]]]},
          res0_305=caml_call2(Base[139],_aC_,arg0_304);
         return [1,[0,_B_,[0,res0_305,0]]];
        case 4:
         var
          arg0_306=param[1],
          res0_307=caml_call2(Base[139],of_a_269,arg0_306);
         return [1,[0,_C_,[0,res0_307,0]]];
        case 5:
         var
          arg0_312=param[1],
          arg1_309=arg0_312[2],
          arg0_308=arg0_312[1],
          res0_310=caml_call1(sexp_of_t,arg0_308),
          _aD_=
           function(param)
            {if(-59723313 <= param[1])
              {var
                v_245=param[2],
                arg1_247=v_245[2],
                arg0_246=v_245[1],
                res0_248=caml_call1(Base[164],arg0_246),
                res1_249=caml_call2(Base[152],of_a_269,arg1_247);
               return [1,[0,_s_,[0,[1,[0,res0_248,[0,res1_249,0]]],0]]]}
             var
              v_250=param[2],
              arg1_252=v_250[2],
              arg0_251=v_250[1],
              res0_253=caml_call1(sexp_of_t,arg0_251),
              res1_254=of_a_269(arg1_252);
             return [1,[0,_t_,[0,[1,[0,res0_253,[0,res1_254,0]]],0]]]},
          res1_311=caml_call2(Base[139],_aD_,arg1_309),
          res0_313=[1,[0,res0_310,[0,res1_311,0]]];
         return [1,[0,_D_,[0,res0_313,0]]];
        case 6:
         var
          arg0_318=param[1],
          arg1_315=arg0_318[2],
          arg0_314=arg0_318[1],
          res0_316=caml_call1(sexp_of_t,arg0_314),
          res1_317=caml_call1(sexp_of_t$5,arg1_315),
          res0_319=[1,[0,res0_316,[0,res1_317,0]]];
         return [1,[0,_E_,[0,res0_319,0]]];
        case 7:
         var
          arg1_321=param[2],
          arg0_320=param[1],
          res0_322=caml_call1(sexp_of_t$4,arg0_320),
          res1_323=caml_call2(Base[139],of_a_269,arg1_321);
         return [1,[0,_F_,[0,res0_322,[0,res1_323,0]]]];
        default:
         var
          arg2_326=param[3],
          arg1_325=param[2],
          arg0_324=param[1],
          members_275=arg0_324[3],
          loc_273=arg0_324[2],
          gid_271=arg0_324[1],
          bnds_270=0,
          _aA_=
           function(param)
            {var
              arg1_282=param[2],
              arg0_281=param[1],
              res0_283=caml_call1(sexp_of_t$4,arg0_281),
              arg1_278=arg1_282[2],
              arg0_277=arg1_282[1],
              res0_279=caml_call2(Base[139],sexp_of_t$5,arg0_277),
              res1_280=of_a_269(arg1_278),
              res1_284=[1,[0,res0_279,[0,res1_280,0]]];
             return [1,[0,res0_283,[0,res1_284,0]]]},
          arg_276=caml_call2(Base[139],_aA_,members_275),
          bnds_270$0=[0,[1,[0,_u_,[0,arg_276,0]]],bnds_270],
          arg_274=caml_call1(sexp_of_t,loc_273),
          bnds_270$1=[0,[1,[0,_v_,[0,arg_274,0]]],bnds_270$0],
          arg_272=caml_call1(sexp_of_t$6,gid_271),
          bnds_270$2=[0,[1,[0,_w_,[0,arg_272,0]]],bnds_270$1],
          res0_327=[1,bnds_270$2],
          res1_328=caml_call1(sexp_of_t$4,arg1_325),
          res2_329=caml_call2(Base[139],of_a_269,arg2_326);
         return [1,[0,_G_,[0,res0_327,[0,res1_328,[0,res2_329,0]]]]]}}
    function constr(s,t){return [0,-59723313,[0,s,t]]}
    function inherit(loc,t){return [0,-72987685,[0,loc,t]]}
    function var$4(loc,t){return [6,[0,loc,t]]}
    function poly_variant$1(loc,xs){return [5,[0,loc,xs]]}
    function is_cyclic_0(via_VR,group,tid)
     {var set=[0,0];
      function visited(tid)
       {return caml_call3(Base_List[6],set[1],tid,equal$0)}
      function trav_tid(tid)
       {var match=lookup(group,tid),body=match[2];return trav(body)}
      function trav(param)
       {var param$0=param;
        for(;;)
         {switch(param$0[0])
           {case 0:var param$1=param$0[2],param$0=param$1;continue;
            case 1:var ts=param$0[2];break;
            case 2:
             var xs=param$0[1];
             if(via_VR)
              {var _aw_=function(param){var t=param[2];return trav(t)};
               return caml_call2(Base_List[9],xs,_aw_)}
             return 0;
            case 3:
             var xs$0=param$0[1];
             if(via_VR)
              {var
                _ax_=
                 function(param)
                  {var ts=param[2];return caml_call2(Base_List[9],ts,trav)};
               return caml_call2(Base_List[9],xs$0,_ax_)}
             return 0;
            case 4:var ts=param$0[1];break;
            case 5:
             var
              match=param$0[1],
              cs=match[2],
              _ay_=
               function(param)
                {if(-59723313 <= param[1])
                  {var _az_=param[2][2];
                   if(_az_){var t=_az_[1];return trav(t)}
                   return 0}
                 var match=param[2],t$0=match[2];
                 return trav(t$0)};
             return caml_call2(Base_List[9],cs,_ay_);
            case 6:return 0;
            case 7:
             var ts$0=param$0[2],tid=param$0[1];
             if(! visited(tid)){set[1] = [0,tid,set[1]];trav_tid(tid)}
             return caml_call2(Base_List[9],ts$0,trav);
            default:var ts=param$0[3]}
          return caml_call2(Base_List[9],ts,trav)}}
      trav_tid(tid);
      var res=visited(tid);
      return res}
    var _H_=1,_I_=0;
    function Evaluation(Canonical)
     {var _Q_=Base_List[10],_R_=caml_call1(Base_Map[6],[0,comparator]);
      function _S_(t,param)
       {var v=param[2],k=param[1];return caml_call3(Base_Map[28],t,k,v)}
      function create(_av_){return caml_call3(_Q_,_av_,_R_,_S_)}
      function lookup$0(t,k){return caml_call2(Base_Map[36],t,k)}
      var Venv=[0,lookup$0,create],Applicand=[0];
      function compare(a_330,b_331)
       {var
         t_333=a_330[2],
         t_332=a_330[1],
         t_335=b_331[2],
         t_334=b_331[1],
         n=caml_call2(compare$3,t_332,t_334);
        return 0 === n?caml_call2(compare$2,t_333,t_335):n}
      function sexp_of_t(param)
       {var
         arg1_337=param[2],
         arg0_336=param[1],
         res0_338=caml_call1(sexp_of_t$6,arg0_336),
         res1_339=caml_call1(sexp_of_t$4,arg1_337);
        return [1,[0,res0_338,[0,res1_339,0]]]}
      var
       T=[0,compare,sexp_of_t],
       include=caml_call1(Base_Comparator[5],T),
       comparator$0=include[1];
      function find(t,k){return caml_call2(Base_Map[36],t,k)}
      var empty=caml_call1(Base_Map[6],[0,comparator$0]);
      function extend(t,k,v){return caml_call3(Base_Map[28],t,k,v)}
      var Tenv=[0,find,empty,extend];
      function return$0(x,param,tenv){return x}
      function bind(t,f,depth,tenv)
       {var x=caml_call2(t,depth,tenv);
        return caml_call2(caml_call1(f,x),depth,tenv)}
      function look_env(key,param,tenv)
       {var result=caml_call2(Tenv[1],tenv,key);
        function _au_(param){var x=param[2];return [0,x]}
        return caml_call2(Base_Option[21],result,_au_)}
      function extend_new_tid(key,def_t,depth,tenv)
       {var
         value=[0,-271630457,depth],
         tenv$0=caml_call3(Tenv[3],tenv,key,value);
        return [1,caml_call2(def_t,depth + 1 | 0,tenv$0)]}
      function exec(t){return caml_call2(t,0,Tenv[2])}
      var
       Defining=[0,return$0,bind,look_env,extend_new_tid,exec],
       symbol_bind=Defining[2],
       return$1=Defining[1];
      function sequence_defining(xs,f)
       {function loop(acc_ys,param)
         {if(param)
           {var
             xs=param[2],
             x=param[1],
             _at_=function(y){return loop([0,y,acc_ys],xs)};
            return caml_call2(symbol_bind,caml_call1(f,x),_at_)}
          return caml_call1(return$1,caml_call1(Base_List[38],acc_ys))}
        return loop(0,xs)}
      function eval_app(group,tid,args)
       {var
         gid=group[1],
         match=lookup(group,tid),
         body=match[2],
         formals=match[1];
        switch(body[0])
         {case 2:
          case 3:var record_or_normal_variant=1;break;
          default:var record_or_normal_variant=0}
        var
         cyclic=is_cyclic_0(_H_,group,tid),
         cyclic_no_VR=is_cyclic_0(_I_,group,tid),
         switch$0=0;
        if(record_or_normal_variant && cyclic)switch$0 = 1;
        if(! switch$0 && ! cyclic_no_VR)
         {var match$0=caml_call2(Base_List[94],formals,args);
          if(match$0)
           var x=match$0[1],venv=caml_call1(Venv[2],x);
          else
           var venv=caml_call1(Base[200],cst_apply_incorrect_type_appli);
          return _T_(group,venv,body)}
        function _aq_(param)
         {if(0 === param[0])
           {var r=param[1];
            return caml_call1(return$1,caml_call2(Canonical[2][2],r,args))}
          var def=param[1];
          return caml_call1(return$1,caml_call2(Canonical[2][3],def,args))}
        function _ar_(param)
         {if(param){var recurse=param[1];return caml_call1(return$1,recurse)}
          var _as_=eval_definition(group,formals,body);
          return caml_call2(Defining[4],[0,gid,tid],_as_)}
        return caml_call2
                (symbol_bind,
                 caml_call2
                  (symbol_bind,caml_call1(Defining[3],[0,gid,tid]),_ar_),
                 _aq_)}
      function eval_definition(group,formals,body)
       {function _an_(i,x){return [0,x,caml_call1(Canonical[2][1],i)]}
        var
         _ao_=caml_call2(Base_List[96],formals,_an_),
         venv=caml_call1(Venv[2],_ao_);
        function _ap_(v)
         {return caml_call1(return$1,caml_call1(Canonical[4][8],v))}
        return caml_call2(symbol_bind,_T_(group,venv,body),_ap_)}
      function eval_poly_constr(group,venv,c)
       {if(-59723313 <= c[1])
         {var _ai_=c[2],_aj_=_ai_[2],_ak_=_ai_[1];
          if(_aj_)
           {var
             t=_aj_[1],
             _al_=
              function(v)
               {return caml_call1
                        (return$1,[0,[0,_ak_,[0,caml_call1(Canonical[2][4],v)]],0])};
            return caml_call2(symbol_bind,_T_(group,venv,t),_al_)}
          return caml_call1(return$1,[0,[0,_ak_,0],0])}
        var match=c[2],t$0=match[2],loc=match[1];
        function _am_(v)
         {var match=caml_call1(Canonical[2][5],v);
          if(0 === match[0])
           {var tab=match[1];return caml_call1(return$1,tab[1])}
          var desc=match[1];
          return caml_call2(eval_fail(loc,_K_),desc,0)}
        return caml_call2(symbol_bind,_T_(group,venv,t$0),_am_)}
      function eval_list(group,venv,ts)
       {return sequence_defining
                (ts,function(_ah_){return _T_(group,venv,_ah_)})}
      function _T_(group,venv,t)
       {switch(t[0])
         {case 0:
           var
            t$0=t[2],
            s=t[1],
            _V_=
             function(v)
              {return caml_call1(return$1,caml_call2(Canonical[4][1],s,v))};
           return caml_call2(symbol_bind,_T_(group,venv,t$0),_V_);
          case 1:
           var
            ts=t[2],
            s$0=t[1],
            _W_=
             function(vs)
              {return caml_call1(return$1,caml_call2(Canonical[4][2],s$0,vs))};
           return caml_call2(symbol_bind,eval_list(group,venv,ts),_W_);
          case 2:
           var
            binds=t[1],
            _X_=
             function(binds)
              {return caml_call1(return$1,caml_call1(Canonical[4][9],binds))};
           return caml_call2
                   (symbol_bind,
                    sequence_defining
                     (binds,
                      function(param)
                       {var x=param[2],s=param[1];
                        function _ag_(y){return caml_call1(return$1,[0,s,y])}
                        return caml_call2(symbol_bind,_T_(group,venv,x),_ag_)}),
                    _X_);
          case 3:
           var
            alts=t[1],
            _Y_=
             function(alts)
              {return caml_call1(return$1,caml_call1(Canonical[4][10],alts))};
           return caml_call2
                   (symbol_bind,
                    sequence_defining
                     (alts,
                      function(param)
                       {var xs=param[2],s=param[1];
                        function _af_(ys){return caml_call1(return$1,[0,s,ys])}
                        return caml_call2(symbol_bind,eval_list(group,venv,xs),_af_)}),
                    _Y_);
          case 4:
           var
            ts$0=t[1],
            _Z_=
             function(vs)
              {return caml_call1(return$1,caml_call1(Canonical[4][3],vs))};
           return caml_call2(symbol_bind,eval_list(group,venv,ts$0),_Z_);
          case 5:
           var
            match=t[1],
            cs=match[2],
            loc=match[1],
            ___=
             function(xss)
              {var _ae_=caml_call1(Base_List[138],xss);
               return caml_call1
                       (return$1,caml_call2(Canonical[4][4],loc,_ae_))};
           return caml_call2
                   (symbol_bind,
                    sequence_defining
                     (cs,
                      function(_ad_){return eval_poly_constr(group,venv,_ad_)}),
                    ___);
          case 6:
           var
            match$0=t[1],
            vid=match$0[2],
            loc$0=match$0[1],
            match$1=caml_call2(Venv[1],venv,vid);
           if(match$1){var x=match$1[1];return caml_call1(return$1,x)}
           var _$_=0,_aa_=0;
           return caml_call2
                   (eval_fail
                     (loc$0,
                      [0,
                       [11,
                        cst_Free_type_variable,
                        [24,
                         _J_,
                         function(param,custom_printf_340)
                          {return caml_call1(to_string$3,custom_printf_340)},
                         _aa_]],
                       cst_Free_type_variable_Vid]),
                    vid,
                    _$_);
          case 7:
           var
            args=t[2],
            tid=t[1],
            _ab_=function(args){return eval_app(group,tid,args)};
           return caml_call2(symbol_bind,eval_list(group,venv,args),_ab_);
          default:
           var
            args$0=t[3],
            tid$0=t[2],
            in_group=t[1],
            _ac_=function(args){return eval_app(in_group,tid$0,args)};
           return caml_call2(symbol_bind,eval_list(group,venv,args$0),_ac_)}}
      function eval$0(t)
       {var
         group$0=group(caml_call1(of_string,cst_top_level),0),
         venv=caml_call1(Venv[2],0),
         _U_=_T_(group$0,venv,t),
         v=caml_call1(Defining[5],_U_);
        return caml_call1(Canonical[4][11],v)}
      return [0,
              Venv,
              Applicand,
              Tenv,
              Defining,
              symbol_bind,
              return$1,
              sequence_defining,
              eval_list,
              eval_poly_constr,
              eval_definition,
              eval_app,
              eval$0]}
    var
     Exp=[0],
     include=Evaluation([0,to_digest$2,Exp1,Def$0,Create]),
     _L_=include[12],
     Evaluation_to_digest=Evaluation(Canonical_digest);
    function eval_to_digest(exp)
     {var _P_=caml_call1(Evaluation_to_digest[12],exp);
      return caml_call1(Canonical_digest[1],_P_)}
    function eval_to_digest_string(exp)
     {return caml_call1(to_hex,eval_to_digest(exp))}
    var
     Not_a_tuple=
      [248,cst_Bin_shape_lib_Bin_shape_Fo,runtime.caml_fresh_oo_id(0)];
    function _M_(param)
     {if(param[1] === Not_a_tuple)
       {var arg0_341=param[2],res0_342=of_a_269(arg0_341);
        return [1,[0,_N_,[0,res0_342,0]]]}
      throw [0,Assert_failure,_O_]}
    caml_call4(Sexplib0_Sexp_conv[70][1],0,0,Not_a_tuple,_M_);
    function deconstruct_tuple_exn(t)
     {if(4 === t[0]){var ts=t[1];return ts}throw [0,Not_a_tuple,t]}
    var
     Bin_shape_lib_Bin_shape=
      [0,
       of_a_269,
       [0,of_string$1],
       [0,of_string$2],
       [0,of_string],
       [0,of_string$0],
       group,
       tuple$1,
       record$1,
       variant$1,
       constr,
       inherit,
       poly_variant$1,
       rec_app,
       top_app,
       var$4,
       basetype$1,
       annotate$1,
       [0,compare$0,t_of_sexp$0,sexp_of_t$1,to_hex,to_md5,of_md5],
       [0,
        compare$1,
        sexp_of_t$3,
        to_string_hum,
        to_digest$2,
        Exp,
        Def$0,
        [0,
         Create[1],
         Create[2],
         Create[3],
         Create[4],
         Create[5],
         Create[7],
         Create[6],
         Create[8],
         Create[9],
         Create[10],
         Create[11]]],
       _L_,
       eval_to_digest,
       eval_to_digest_string,
       [0,deconstruct_tuple_exn]];
    caml_register_global
     (134,Bin_shape_lib_Bin_shape,"Bin_shape_lib__Bin_shape");
    var Bin_shape_lib_Std=[0];
    caml_register_global(135,Bin_shape_lib_Std,"Bin_shape_lib__Std");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiaW5fc2hhcGVfbGliLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6WyJzZXhwX29mX3QiLCJvZl9zdHJpbmciLCJ0b19zdHJpbmciLCJ0X29mX3NleHAiLCJzZXhwX29mX3QkMCIsIm9mX3N0cmluZyQwIiwidG9fc3RyaW5nJDAiLCJjb21wYXJlIiwic2V4cF9vZl90JDQiLCJvZl9zdHJpbmckMSIsInRvX3N0cmluZyQyIiwic3ltYm9sIiwiY29tcGFyZSQyIiwiZXF1YWwkMCIsInNleHBfb2ZfdCQ1Iiwib2Zfc3RyaW5nJDIiLCJ0b19zdHJpbmckMyIsImNvbXBhcmF0b3IiXSwic291cmNlcyI6WyIvaG9tZS9hbm5hcS8ub3BhbS9kZWZhdWx0L2xpYi9vY2FtbC9zdHJpbmcubWxpIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWlCUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNOzs7Ozs7O2dDQUFBRSw0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5REFBQUksZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBQUg7Z0I7Ozs7Ozs7Ozs7OztvQ0FBQUE7Z0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFBQUM7VTs7Ozs7OzhCQUFBQTtVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBQUFHO1c7Ozs7Ozs7Ozs7NEJBQUFBO1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBQUFDOzs7OztLQTJYUks7S0EzWFFDOzs7Ozs7OztNOzs7Ozs7O2tEQUFBSDtNOzs7Ozs7Ozs7OzsrQkFBQUQsOEI7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUFBTjtVOzs7Ozs7OEJBQUFBO1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUFBSjs7O2E7Ozs7Ozs7Ozs7OztrQ0FBQUE7Ozs7Ozs7Uzs7Ozs4QkFBQUE7Ozs7O1M7Ozs4QkFBQVE7VTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FBQUE7Ozs7Ozs7VTs7NkJBQUFSO1U7Ozs7OEJBQUFRO1U7Ozs7Ozs7OztrREEyWFJLLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBEQTNYUUk7TTs7Ozs7Ozs7Ozs7O2tDQUFBTCx3Qjs7Ozs7OzZCQUFBSjs4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2Q0FBQVEsOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUFBZjtTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1UiLCJzb3VyY2VzQ29udGVudCI6WyIoKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9DYW1sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICBYYXZpZXIgTGVyb3ksIHByb2pldCBDcmlzdGFsLCBJTlJJQSBSb2NxdWVuY291cnQgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgIENvcHlyaWdodCAxOTk2IEluc3RpdHV0IE5hdGlvbmFsIGRlIFJlY2hlcmNoZSBlbiBJbmZvcm1hdGlxdWUgZXQgICAgICopXG4oKiAgICAgZW4gQXV0b21hdGlxdWUuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgIEFsbCByaWdodHMgcmVzZXJ2ZWQuICBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mICAgICopXG4oKiAgIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAyLjEsIHdpdGggdGhlICAgICAgICAgICopXG4oKiAgIHNwZWNpYWwgZXhjZXB0aW9uIG9uIGxpbmtpbmcgZGVzY3JpYmVkIGluIHRoZSBmaWxlIExJQ0VOU0UuICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiopXG5cbigqIE5PVEU6XG4gICBJZiB0aGlzIGZpbGUgaXMgc3RyaW5nTGFiZWxzLm1saSwgcnVuIHRvb2xzL3N5bmNfc3RkbGliX2RvY3MgYWZ0ZXIgZWRpdGluZ1xuICAgaXQgdG8gZ2VuZXJhdGUgc3RyaW5nLm1saS5cblxuICAgSWYgdGhpcyBmaWxlIGlzIHN0cmluZy5tbGksIGRvIG5vdCBlZGl0IGl0IGRpcmVjdGx5IC0tIGVkaXRcbiAgIHN0cmluZ0xhYmVscy5tbGkgaW5zdGVhZC5cbiAqKVxuXG4oKiogU3RyaW5ncy5cblxuICAgIEEgc3RyaW5nIFtzXSBvZiBsZW5ndGggW25dIGlzIGFuIGluZGV4YWJsZSBhbmQgaW1tdXRhYmxlIHNlcXVlbmNlXG4gICAgb2YgW25dIGJ5dGVzLiBGb3IgaGlzdG9yaWNhbCByZWFzb25zIHRoZXNlIGJ5dGVzIGFyZSByZWZlcnJlZCB0b1xuICAgIGFzIGNoYXJhY3RlcnMuXG5cbiAgICBUaGUgc2VtYW50aWNzIG9mIHN0cmluZyBmdW5jdGlvbnMgaXMgZGVmaW5lZCBpbiB0ZXJtcyBvZlxuICAgIGluZGljZXMgYW5kIHBvc2l0aW9ucy4gVGhlc2UgYXJlIGRlcGljdGVkIGFuZCBkZXNjcmliZWRcbiAgICBhcyBmb2xsb3dzLlxuXG57dlxucG9zaXRpb25zICAwICAgMSAgIDIgICAzICAgNCAgICBuLTEgICAgblxuICAgICAgICAgICArLS0tKy0tLSstLS0rLS0tKyAgICAgKy0tLS0tK1xuICBpbmRpY2VzICB8IDAgfCAxIHwgMiB8IDMgfCAuLi4gfCBuLTEgfFxuICAgICAgICAgICArLS0tKy0tLSstLS0rLS0tKyAgICAgKy0tLS0tK1xudn1cbiAgICB7dWxcbiAgICB7LSBBbiB7ZSBpbmRleH0gW2ldIG9mIFtzXSBpcyBhbiBpbnRlZ2VyIGluIHRoZSByYW5nZSBcXFtbMF07W24tMV1cXF0uXG4gICAgICAgSXQgcmVwcmVzZW50cyB0aGUgW2lddGggYnl0ZSAoY2hhcmFjdGVyKSBvZiBbc10gd2hpY2ggY2FuIGJlXG4gICAgICAgYWNjZXNzZWQgdXNpbmcgdGhlIGNvbnN0YW50IHRpbWUgc3RyaW5nIGluZGV4aW5nIG9wZXJhdG9yXG4gICAgICAgW3MuW2ldXS59XG4gICAgey0gQSB7ZSBwb3NpdGlvbn0gW2ldIG9mIFtzXSBpcyBhbiBpbnRlZ2VyIGluIHRoZSByYW5nZVxuICAgICAgIFxcW1swXTtbbl1cXF0uIEl0IHJlcHJlc2VudHMgZWl0aGVyIHRoZSBwb2ludCBhdCB0aGUgYmVnaW5uaW5nIG9mXG4gICAgICAgdGhlIHN0cmluZywgb3IgdGhlIHBvaW50IGJldHdlZW4gdHdvIGluZGljZXMsIG9yIHRoZSBwb2ludCBhdFxuICAgICAgIHRoZSBlbmQgb2YgdGhlIHN0cmluZy4gVGhlIFtpXXRoIGJ5dGUgaW5kZXggaXMgYmV0d2VlbiBwb3NpdGlvblxuICAgICAgIFtpXSBhbmQgW2krMV0ufX1cblxuICAgIFR3byBpbnRlZ2VycyBbc3RhcnRdIGFuZCBbbGVuXSBhcmUgc2FpZCB0byBkZWZpbmUgYSB7ZSB2YWxpZFxuICAgIHN1YnN0cmluZ30gb2YgW3NdIGlmIFtsZW4gPj0gMF0gYW5kIFtzdGFydF0sIFtzdGFydCtsZW5dIGFyZVxuICAgIHBvc2l0aW9ucyBvZiBbc10uXG5cbiAgICB7YiBVbmljb2RlIHRleHQufSBTdHJpbmdzIGJlaW5nIGFyYml0cmFyeSBzZXF1ZW5jZXMgb2YgYnl0ZXMsIHRoZXlcbiAgICBjYW4gaG9sZCBhbnkga2luZCBvZiB0ZXh0dWFsIGVuY29kaW5nLiBIb3dldmVyIHRoZSByZWNvbW1lbmRlZFxuICAgIGVuY29kaW5nIGZvciBzdG9yaW5nIFVuaWNvZGUgdGV4dCBpbiBPQ2FtbCBzdHJpbmdzIGlzIFVURi04LiBUaGlzXG4gICAgaXMgdGhlIGVuY29kaW5nIHVzZWQgYnkgVW5pY29kZSBlc2NhcGVzIGluIHN0cmluZyBsaXRlcmFscy4gRm9yXG4gICAgZXhhbXBsZSB0aGUgc3RyaW5nIFtcIlxcdXsxRjQyQn1cIl0gaXMgdGhlIFVURi04IGVuY29kaW5nIG9mIHRoZVxuICAgIFVuaWNvZGUgY2hhcmFjdGVyIFUrMUY0MkIuXG5cbiAgICB7YiBQYXN0IG11dGFiaWxpdHkufSBPQ2FtbCBzdHJpbmdzIHVzZWQgdG8gYmUgbW9kaWZpYWJsZSBpbiBwbGFjZSxcbiAgICBmb3IgaW5zdGFuY2UgdmlhIHRoZSB7IVN0cmluZy5zZXR9IGFuZCB7IVN0cmluZy5ibGl0fVxuICAgIGZ1bmN0aW9ucy4gVGhpcyB1c2UgaXMgbm93YWRheXMgb25seSBwb3NzaWJsZSB3aGVuIHRoZSBjb21waWxlciBpc1xuICAgIHB1dCBpbiBcInVuc2FmZS1zdHJpbmdcIiBtb2RlIGJ5IGdpdmluZyB0aGUgWy11bnNhZmUtc3RyaW5nXVxuICAgIGNvbW1hbmQtbGluZSBvcHRpb24uIFRoaXMgY29tcGF0aWJpbGl0eSBtb2RlIG1ha2VzIHRoZSB0eXBlc1xuICAgIFtzdHJpbmddIGFuZCBbYnl0ZXNdIChzZWUgeyFCeXRlcy50fSkgaW50ZXJjaGFuZ2VhYmxlIHNvIHRoYXRcbiAgICBmdW5jdGlvbnMgZXhwZWN0aW5nIGJ5dGUgc2VxdWVuY2VzIGNhbiBhbHNvIGFjY2VwdCBzdHJpbmdzIGFzXG4gICAgYXJndW1lbnRzIGFuZCBtb2RpZnkgdGhlbS5cblxuICAgIFRoZSBkaXN0aW5jdGlvbiBiZXR3ZWVuIFtieXRlc10gYW5kIFtzdHJpbmddIHdhcyBpbnRyb2R1Y2VkIGluXG4gICAgT0NhbWwgNC4wMiwgYW5kIHRoZSBcInVuc2FmZS1zdHJpbmdcIiBjb21wYXRpYmlsaXR5IG1vZGUgd2FzIHRoZVxuICAgIGRlZmF1bHQgdW50aWwgT0NhbWwgNC4wNS4gU3RhcnRpbmcgd2l0aCA0LjA2LCB0aGUgY29tcGF0aWJpbGl0eVxuICAgIG1vZGUgaXMgb3B0LWluOyB3ZSBpbnRlbmQgdG8gcmVtb3ZlIHRoZSBvcHRpb24gaW4gdGhlIGZ1dHVyZS5cblxuICAgIFRoZSBsYWJlbGVkIHZlcnNpb24gb2YgdGhpcyBtb2R1bGUgY2FuIGJlIHVzZWQgYXMgZGVzY3JpYmVkIGluIHRoZVxuICAgIHshU3RkTGFiZWxzfSBtb2R1bGUuXG4qKVxuXG4oKiogezE6c3RyaW5ncyBTdHJpbmdzfSAqKVxuXG50eXBlIHQgPSBzdHJpbmdcbigqKiBUaGUgdHlwZSBmb3Igc3RyaW5ncy4gKilcblxudmFsIG1ha2UgOiBpbnQgLT4gY2hhciAtPiBzdHJpbmdcbigqKiBbbWFrZSBuIGNdIGlzIGEgc3RyaW5nIG9mIGxlbmd0aCBbbl0gd2l0aCBlYWNoIGluZGV4IGhvbGRpbmcgdGhlXG4gICAgY2hhcmFjdGVyIFtjXS5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtuIDwgMF0gb3IgW24gPiBdeyFTeXMubWF4X3N0cmluZ19sZW5ndGh9LiAqKVxuXG52YWwgaW5pdCA6IGludCAtPiAoaW50IC0+IGNoYXIpIC0+IHN0cmluZ1xuKCoqIFtpbml0IG4gZl0gaXMgYSBzdHJpbmcgb2YgbGVuZ3RoIFtuXSB3aXRoIGluZGV4XG4gICAgW2ldIGhvbGRpbmcgdGhlIGNoYXJhY3RlciBbZiBpXSAoY2FsbGVkIGluIGluY3JlYXNpbmcgaW5kZXggb3JkZXIpLlxuXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW24gPCAwXSBvciBbbiA+IF17IVN5cy5tYXhfc3RyaW5nX2xlbmd0aH0uXG4gICAgQHNpbmNlIDQuMDIuMCAqKVxuXG52YWwgZW1wdHkgOiBzdHJpbmdcbigqKiBUaGUgZW1wdHkgc3RyaW5nLlxuXG4gICAgQHNpbmNlIDQuMTMuMFxuKilcblxudmFsIG9mX2J5dGVzIDogYnl0ZXMgLT4gc3RyaW5nXG4oKiogUmV0dXJuIGEgbmV3IHN0cmluZyB0aGF0IGNvbnRhaW5zIHRoZSBzYW1lIGJ5dGVzIGFzIHRoZSBnaXZlbiBieXRlXG4gICAgc2VxdWVuY2UuXG5cbiAgICBAc2luY2UgNC4xMy4wXG4qKVxuXG52YWwgdG9fYnl0ZXMgOiBzdHJpbmcgLT4gYnl0ZXNcbigqKiBSZXR1cm4gYSBuZXcgYnl0ZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBzYW1lIGJ5dGVzIGFzIHRoZSBnaXZlblxuICAgIHN0cmluZy5cblxuICAgIEBzaW5jZSA0LjEzLjBcbiopXG5cbmV4dGVybmFsIGxlbmd0aCA6IHN0cmluZyAtPiBpbnQgPSBcIiVzdHJpbmdfbGVuZ3RoXCJcbigqKiBbbGVuZ3RoIHNdIGlzIHRoZSBsZW5ndGggKG51bWJlciBvZiBieXRlcy9jaGFyYWN0ZXJzKSBvZiBbc10uICopXG5cbmV4dGVybmFsIGdldCA6IHN0cmluZyAtPiBpbnQgLT4gY2hhciA9IFwiJXN0cmluZ19zYWZlX2dldFwiXG4oKiogW2dldCBzIGldIGlzIHRoZSBjaGFyYWN0ZXIgYXQgaW5kZXggW2ldIGluIFtzXS4gVGhpcyBpcyB0aGUgc2FtZVxuICAgIGFzIHdyaXRpbmcgW3MuW2ldXS5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtpXSBub3QgYW4gaW5kZXggb2YgW3NdLiAqKVxuXG4oKiogezE6Y29uY2F0IENvbmNhdGVuYXRpbmd9XG5cbiAgICB7YiBOb3RlLn0gVGhlIHshU3RkbGliLiggXiApfSBiaW5hcnkgb3BlcmF0b3IgY29uY2F0ZW5hdGVzIHR3b1xuICAgIHN0cmluZ3MuICopXG5cbnZhbCBjb25jYXQgOiBzdHJpbmcgLT4gc3RyaW5nIGxpc3QgLT4gc3RyaW5nXG4oKiogW2NvbmNhdCBzZXAgc3NdIGNvbmNhdGVuYXRlcyB0aGUgbGlzdCBvZiBzdHJpbmdzIFtzc10sIGluc2VydGluZ1xuICAgIHRoZSBzZXBhcmF0b3Igc3RyaW5nIFtzZXBdIGJldHdlZW4gZWFjaC5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIHRoZSByZXN1bHQgaXMgbG9uZ2VyIHRoYW5cbiAgICB7IVN5cy5tYXhfc3RyaW5nX2xlbmd0aH0gYnl0ZXMuICopXG5cbnZhbCBjYXQgOiBzdHJpbmcgLT4gc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFtjYXQgczEgczJdIGNvbmNhdGVuYXRlcyBzMSBhbmQgczIgKFtzMSBeIHMyXSkuXG5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiB0aGUgcmVzdWx0IGlzIGxvbmdlciB0aGVuXG4gICAgdGhhbiB7IVN5cy5tYXhfc3RyaW5nX2xlbmd0aH0gYnl0ZXMuXG5cbiAgICBAc2luY2UgNC4xMy4wXG4qKVxuXG4oKiogezE6cHJlZGljYXRlcyBQcmVkaWNhdGVzIGFuZCBjb21wYXJpc29uc30gKilcblxudmFsIGVxdWFsIDogdCAtPiB0IC0+IGJvb2xcbigqKiBbZXF1YWwgczAgczFdIGlzIFt0cnVlXSBpZiBhbmQgb25seSBpZiBbczBdIGFuZCBbczFdIGFyZSBjaGFyYWN0ZXItd2lzZVxuICAgIGVxdWFsLlxuICAgIEBzaW5jZSA0LjAzLjAgKDQuMDUuMCBpbiBTdHJpbmdMYWJlbHMpICopXG5cbnZhbCBjb21wYXJlIDogdCAtPiB0IC0+IGludFxuKCoqIFtjb21wYXJlIHMwIHMxXSBzb3J0cyBbczBdIGFuZCBbczFdIGluIGxleGljb2dyYXBoaWNhbCBvcmRlci4gW2NvbXBhcmVdXG4gICAgYmVoYXZlcyBsaWtlIHshU3RkbGliLmNvbXBhcmV9IG9uIHN0cmluZ3MgYnV0IG1heSBiZSBtb3JlIGVmZmljaWVudC4gKilcblxudmFsIHN0YXJ0c193aXRoIDpcbiAgcHJlZml4ICgqIGNvbW1lbnQgdGh3YXJ0cyB0b29scy9zeW5jX3N0ZGxpYl9kb2NzICopIDpzdHJpbmcgLT4gc3RyaW5nIC0+IGJvb2xcbigqKiBbc3RhcnRzX3dpdGggXVt+XVtwcmVmaXggc10gaXMgW3RydWVdIGlmIGFuZCBvbmx5IGlmIFtzXSBzdGFydHMgd2l0aFxuICAgIFtwcmVmaXhdLlxuXG4gICAgQHNpbmNlIDQuMTMuMCAqKVxuXG52YWwgZW5kc193aXRoIDpcbiAgc3VmZml4ICgqIGNvbW1lbnQgdGh3YXJ0cyB0b29scy9zeW5jX3N0ZGxpYl9kb2NzICopIDpzdHJpbmcgLT4gc3RyaW5nIC0+IGJvb2xcbigqKiBbZW5kc193aXRoIHN1ZmZpeCBzXSBpcyBbdHJ1ZV0gaWYgYW5kIG9ubHkgaWYgW3NdIGVuZHMgd2l0aCBbc3VmZml4XS5cblxuICAgIEBzaW5jZSA0LjEzLjAgKilcblxudmFsIGNvbnRhaW5zX2Zyb20gOiBzdHJpbmcgLT4gaW50IC0+IGNoYXIgLT4gYm9vbFxuKCoqIFtjb250YWluc19mcm9tIHMgc3RhcnQgY10gaXMgW3RydWVdIGlmIGFuZCBvbmx5IGlmIFtjXSBhcHBlYXJzIGluIFtzXVxuICAgIGFmdGVyIHBvc2l0aW9uIFtzdGFydF0uXG5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbc3RhcnRdIGlzIG5vdCBhIHZhbGlkIHBvc2l0aW9uIGluIFtzXS4gKilcblxudmFsIHJjb250YWluc19mcm9tIDogc3RyaW5nIC0+IGludCAtPiBjaGFyIC0+IGJvb2xcbigqKiBbcmNvbnRhaW5zX2Zyb20gcyBzdG9wIGNdIGlzIFt0cnVlXSBpZiBhbmQgb25seSBpZiBbY10gYXBwZWFycyBpbiBbc11cbiAgICBiZWZvcmUgcG9zaXRpb24gW3N0b3ArMV0uXG5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbc3RvcCA8IDBdIG9yIFtzdG9wKzFdIGlzIG5vdCBhIHZhbGlkXG4gICAgcG9zaXRpb24gaW4gW3NdLiAqKVxuXG52YWwgY29udGFpbnMgOiBzdHJpbmcgLT4gY2hhciAtPiBib29sXG4oKiogW2NvbnRhaW5zIHMgY10gaXMgeyFTdHJpbmcuY29udGFpbnNfZnJvbX1bIHMgMCBjXS4gKilcblxuKCoqIHsxOmV4dHJhY3QgRXh0cmFjdGluZyBzdWJzdHJpbmdzfSAqKVxuXG52YWwgc3ViIDogc3RyaW5nIC0+IGludCAtPiBpbnQgLT4gc3RyaW5nXG4oKiogW3N1YiBzIHBvcyBsZW5dIGlzIGEgc3RyaW5nIG9mIGxlbmd0aCBbbGVuXSwgY29udGFpbmluZyB0aGVcbiAgICBzdWJzdHJpbmcgb2YgW3NdIHRoYXQgc3RhcnRzIGF0IHBvc2l0aW9uIFtwb3NdIGFuZCBoYXMgbGVuZ3RoXG4gICAgW2xlbl0uXG5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbcG9zXSBhbmQgW2xlbl0gZG8gbm90IGRlc2lnbmF0ZSBhIHZhbGlkXG4gICAgc3Vic3RyaW5nIG9mIFtzXS4gKilcblxudmFsIHNwbGl0X29uX2NoYXIgOiBjaGFyIC0+IHN0cmluZyAtPiBzdHJpbmcgbGlzdFxuKCoqIFtzcGxpdF9vbl9jaGFyIHNlcCBzXSBpcyB0aGUgbGlzdCBvZiBhbGwgKHBvc3NpYmx5IGVtcHR5KVxuICAgIHN1YnN0cmluZ3Mgb2YgW3NdIHRoYXQgYXJlIGRlbGltaXRlZCBieSB0aGUgY2hhcmFjdGVyIFtzZXBdLlxuXG4gICAgVGhlIGZ1bmN0aW9uJ3MgcmVzdWx0IGlzIHNwZWNpZmllZCBieSB0aGUgZm9sbG93aW5nIGludmFyaWFudHM6XG4gICAge3VsXG4gICAgey0gVGhlIGxpc3QgaXMgbm90IGVtcHR5Ln1cbiAgICB7LSBDb25jYXRlbmF0aW5nIGl0cyBlbGVtZW50cyB1c2luZyBbc2VwXSBhcyBhIHNlcGFyYXRvciByZXR1cm5zIGFcbiAgICAgIHN0cmluZyBlcXVhbCB0byB0aGUgaW5wdXQgKFtjb25jYXQgKG1ha2UgMSBzZXApXG4gICAgICAoc3BsaXRfb25fY2hhciBzZXAgcykgPSBzXSkufVxuICAgIHstIE5vIHN0cmluZyBpbiB0aGUgcmVzdWx0IGNvbnRhaW5zIHRoZSBbc2VwXSBjaGFyYWN0ZXIufX1cblxuICAgIEBzaW5jZSA0LjA0LjAgKDQuMDUuMCBpbiBTdHJpbmdMYWJlbHMpICopXG5cbigqKiB7MTp0cmFuc2Zvcm1pbmcgVHJhbnNmb3JtaW5nfSAqKVxuXG52YWwgbWFwIDogKGNoYXIgLT4gY2hhcikgLT4gc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFttYXAgZiBzXSBpcyB0aGUgc3RyaW5nIHJlc3VsdGluZyBmcm9tIGFwcGx5aW5nIFtmXSB0byBhbGwgdGhlXG4gICAgY2hhcmFjdGVycyBvZiBbc10gaW4gaW5jcmVhc2luZyBvcmRlci5cblxuICAgIEBzaW5jZSA0LjAwLjAgKilcblxudmFsIG1hcGkgOiAoaW50IC0+IGNoYXIgLT4gY2hhcikgLT4gc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFttYXBpIGYgc10gaXMgbGlrZSB7IW1hcH0gYnV0IHRoZSBpbmRleCBvZiB0aGUgY2hhcmFjdGVyIGlzIGFsc29cbiAgICBwYXNzZWQgdG8gW2ZdLlxuXG4gICAgQHNpbmNlIDQuMDIuMCAqKVxuXG52YWwgZm9sZF9sZWZ0IDogKCdhIC0+IGNoYXIgLT4gJ2EpIC0+ICdhIC0+IHN0cmluZyAtPiAnYVxuKCoqIFtmb2xkX2xlZnQgZiB4IHNdIGNvbXB1dGVzIFtmICguLi4gKGYgKGYgeCBzLlswXSkgcy5bMV0pIC4uLikgcy5bbi0xXV0sXG4gICAgd2hlcmUgW25dIGlzIHRoZSBsZW5ndGggb2YgdGhlIHN0cmluZyBbc10uXG4gICAgQHNpbmNlIDQuMTMuMCAqKVxuXG52YWwgZm9sZF9yaWdodCA6IChjaGFyIC0+ICdhIC0+ICdhKSAtPiBzdHJpbmcgLT4gJ2EgLT4gJ2FcbigqKiBbZm9sZF9yaWdodCBmIHMgeF0gY29tcHV0ZXMgW2Ygcy5bMF0gKGYgcy5bMV0gKCAuLi4gKGYgcy5bbi0xXSB4KSAuLi4pKV0sXG4gICAgd2hlcmUgW25dIGlzIHRoZSBsZW5ndGggb2YgdGhlIHN0cmluZyBbc10uXG4gICAgQHNpbmNlIDQuMTMuMCAqKVxuXG52YWwgZm9yX2FsbCA6IChjaGFyIC0+IGJvb2wpIC0+IHN0cmluZyAtPiBib29sXG4oKiogW2Zvcl9hbGwgcCBzXSBjaGVja3MgaWYgYWxsIGNoYXJhY3RlcnMgaW4gW3NdIHNhdGlzZnkgdGhlIHByZWRpY2F0ZSBbcF0uXG4gICAgQHNpbmNlIDQuMTMuMCAqKVxuXG52YWwgZXhpc3RzIDogKGNoYXIgLT4gYm9vbCkgLT4gc3RyaW5nIC0+IGJvb2xcbigqKiBbZXhpc3RzIHAgc10gY2hlY2tzIGlmIGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXIgb2YgW3NdIHNhdGlzZmllcyB0aGUgcHJlZGljYXRlXG4gICAgW3BdLlxuICAgIEBzaW5jZSA0LjEzLjAgKilcblxudmFsIHRyaW0gOiBzdHJpbmcgLT4gc3RyaW5nXG4oKiogW3RyaW0gc10gaXMgW3NdIHdpdGhvdXQgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gV2hpdGVzcGFjZVxuICAgIGNoYXJhY3RlcnMgYXJlOiBbJyAnXSwgWydcXHgwQyddIChmb3JtIGZlZWQpLCBbJ1xcbiddLCBbJ1xcciddLCBhbmQgWydcXHQnXS5cblxuICAgIEBzaW5jZSA0LjAwLjAgKilcblxudmFsIGVzY2FwZWQgOiBzdHJpbmcgLT4gc3RyaW5nXG4oKiogW2VzY2FwZWQgc10gaXMgW3NdIHdpdGggc3BlY2lhbCBjaGFyYWN0ZXJzIHJlcHJlc2VudGVkIGJ5IGVzY2FwZVxuICAgIHNlcXVlbmNlcywgZm9sbG93aW5nIHRoZSBsZXhpY2FsIGNvbnZlbnRpb25zIG9mIE9DYW1sLlxuXG4gICAgQWxsIGNoYXJhY3RlcnMgb3V0c2lkZSB0aGUgVVMtQVNDSUkgcHJpbnRhYmxlIHJhbmdlIFxcWzB4MjA7MHg3RVxcXSBhcmVcbiAgICBlc2NhcGVkLCBhcyB3ZWxsIGFzIGJhY2tzbGFzaCAoMHgyRikgYW5kIGRvdWJsZS1xdW90ZSAoMHgyMikuXG5cbiAgICBUaGUgZnVuY3Rpb24geyFTY2FuZi51bmVzY2FwZWR9IGlzIGEgbGVmdCBpbnZlcnNlIG9mIFtlc2NhcGVkXSxcbiAgICBpLmUuIFtTY2FuZi51bmVzY2FwZWQgKGVzY2FwZWQgcykgPSBzXSBmb3IgYW55IHN0cmluZyBbc10gKHVubGVzc1xuICAgIFtlc2NhcGVkIHNdIGZhaWxzKS5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIHRoZSByZXN1bHQgaXMgbG9uZ2VyIHRoYW5cbiAgICB7IVN5cy5tYXhfc3RyaW5nX2xlbmd0aH0gYnl0ZXMuICopXG5cbnZhbCB1cHBlcmNhc2VfYXNjaWkgOiBzdHJpbmcgLT4gc3RyaW5nXG4oKiogW3VwcGVyY2FzZV9hc2NpaSBzXSBpcyBbc10gd2l0aCBhbGwgbG93ZXJjYXNlIGxldHRlcnNcbiAgICB0cmFuc2xhdGVkIHRvIHVwcGVyY2FzZSwgdXNpbmcgdGhlIFVTLUFTQ0lJIGNoYXJhY3RlciBzZXQuXG5cbiAgICBAc2luY2UgNC4wMy4wICg0LjA1LjAgaW4gU3RyaW5nTGFiZWxzKSAqKVxuXG52YWwgbG93ZXJjYXNlX2FzY2lpIDogc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFtsb3dlcmNhc2VfYXNjaWkgc10gaXMgW3NdIHdpdGggYWxsIHVwcGVyY2FzZSBsZXR0ZXJzIHRyYW5zbGF0ZWRcbiAgICB0byBsb3dlcmNhc2UsIHVzaW5nIHRoZSBVUy1BU0NJSSBjaGFyYWN0ZXIgc2V0LlxuXG4gICAgQHNpbmNlIDQuMDMuMCAoNC4wNS4wIGluIFN0cmluZ0xhYmVscykgKilcblxudmFsIGNhcGl0YWxpemVfYXNjaWkgOiBzdHJpbmcgLT4gc3RyaW5nXG4oKiogW2NhcGl0YWxpemVfYXNjaWkgc10gaXMgW3NdIHdpdGggdGhlIGZpcnN0IGNoYXJhY3RlciBzZXQgdG9cbiAgICB1cHBlcmNhc2UsIHVzaW5nIHRoZSBVUy1BU0NJSSBjaGFyYWN0ZXIgc2V0LlxuXG4gICAgQHNpbmNlIDQuMDMuMCAoNC4wNS4wIGluIFN0cmluZ0xhYmVscykgKilcblxudmFsIHVuY2FwaXRhbGl6ZV9hc2NpaSA6IHN0cmluZyAtPiBzdHJpbmdcbigqKiBbdW5jYXBpdGFsaXplX2FzY2lpIHNdIGlzIFtzXSB3aXRoIHRoZSBmaXJzdCBjaGFyYWN0ZXIgc2V0IHRvIGxvd2VyY2FzZSxcbiAgICB1c2luZyB0aGUgVVMtQVNDSUkgY2hhcmFjdGVyIHNldC5cblxuICAgIEBzaW5jZSA0LjAzLjAgKDQuMDUuMCBpbiBTdHJpbmdMYWJlbHMpICopXG5cbigqKiB7MTp0cmF2ZXJzaW5nIFRyYXZlcnNpbmd9ICopXG5cbnZhbCBpdGVyIDogKGNoYXIgLT4gdW5pdCkgLT4gc3RyaW5nIC0+IHVuaXRcbigqKiBbaXRlciBmIHNdIGFwcGxpZXMgZnVuY3Rpb24gW2ZdIGluIHR1cm4gdG8gYWxsIHRoZSBjaGFyYWN0ZXJzIG9mIFtzXS5cbiAgICBJdCBpcyBlcXVpdmFsZW50IHRvIFtmIHMuWzBdOyBmIHMuWzFdOyAuLi47IGYgcy5bbGVuZ3RoIHMgLSAxXTsgKCldLiAqKVxuXG52YWwgaXRlcmkgOiAoaW50IC0+IGNoYXIgLT4gdW5pdCkgLT4gc3RyaW5nIC0+IHVuaXRcbigqKiBbaXRlcmldIGlzIGxpa2UgeyFpdGVyfSwgYnV0IHRoZSBmdW5jdGlvbiBpcyBhbHNvIGdpdmVuIHRoZVxuICAgIGNvcnJlc3BvbmRpbmcgY2hhcmFjdGVyIGluZGV4LlxuXG4gICAgQHNpbmNlIDQuMDAuMCAqKVxuXG4oKiogezE6c2VhcmNoaW5nIFNlYXJjaGluZ30gKilcblxudmFsIGluZGV4X2Zyb20gOiBzdHJpbmcgLT4gaW50IC0+IGNoYXIgLT4gaW50XG4oKiogW2luZGV4X2Zyb20gcyBpIGNdIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBbY10gaW5cbiAgICBbc10gYWZ0ZXIgcG9zaXRpb24gW2ldLlxuXG4gICAgQHJhaXNlIE5vdF9mb3VuZCBpZiBbY10gZG9lcyBub3Qgb2NjdXIgaW4gW3NdIGFmdGVyIHBvc2l0aW9uIFtpXS5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbaV0gaXMgbm90IGEgdmFsaWQgcG9zaXRpb24gaW4gW3NdLiAqKVxuXG5cbnZhbCBpbmRleF9mcm9tX29wdCA6IHN0cmluZyAtPiBpbnQgLT4gY2hhciAtPiBpbnQgb3B0aW9uXG4oKiogW2luZGV4X2Zyb21fb3B0IHMgaSBjXSBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgW2NdXG4gICAgaW4gW3NdIGFmdGVyIHBvc2l0aW9uIFtpXSAoaWYgYW55KS5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtpXSBpcyBub3QgYSB2YWxpZCBwb3NpdGlvbiBpbiBbc10uXG4gICAgQHNpbmNlIDQuMDUgKilcblxudmFsIHJpbmRleF9mcm9tIDogc3RyaW5nIC0+IGludCAtPiBjaGFyIC0+IGludFxuKCoqIFtyaW5kZXhfZnJvbSBzIGkgY10gaXMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG9jY3VycmVuY2Ugb2YgW2NdIGluXG4gICAgW3NdIGJlZm9yZSBwb3NpdGlvbiBbaSsxXS5cblxuICAgIEByYWlzZSBOb3RfZm91bmQgaWYgW2NdIGRvZXMgbm90IG9jY3VyIGluIFtzXSBiZWZvcmUgcG9zaXRpb24gW2krMV0uXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW2krMV0gaXMgbm90IGEgdmFsaWQgcG9zaXRpb24gaW4gW3NdLiAqKVxuXG52YWwgcmluZGV4X2Zyb21fb3B0IDogc3RyaW5nIC0+IGludCAtPiBjaGFyIC0+IGludCBvcHRpb25cbigqKiBbcmluZGV4X2Zyb21fb3B0IHMgaSBjXSBpcyB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgb2NjdXJyZW5jZSBvZiBbY11cbiAgICBpbiBbc10gYmVmb3JlIHBvc2l0aW9uIFtpKzFdIChpZiBhbnkpLlxuXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW2krMV0gaXMgbm90IGEgdmFsaWQgcG9zaXRpb24gaW4gW3NdLlxuICAgIEBzaW5jZSA0LjA1ICopXG5cbnZhbCBpbmRleCA6IHN0cmluZyAtPiBjaGFyIC0+IGludFxuKCoqIFtpbmRleCBzIGNdIGlzIHshU3RyaW5nLmluZGV4X2Zyb219WyBzIDAgY10uICopXG5cbnZhbCBpbmRleF9vcHQgOiBzdHJpbmcgLT4gY2hhciAtPiBpbnQgb3B0aW9uXG4oKiogW2luZGV4X29wdCBzIGNdIGlzIHshU3RyaW5nLmluZGV4X2Zyb21fb3B0fVsgcyAwIGNdLlxuXG4gICAgQHNpbmNlIDQuMDUgKilcblxudmFsIHJpbmRleCA6IHN0cmluZyAtPiBjaGFyIC0+IGludFxuKCoqIFtyaW5kZXggcyBjXSBpcyB7IVN0cmluZy5yaW5kZXhfZnJvbX1bIHMgKGxlbmd0aCBzIC0gMSkgY10uICopXG5cbnZhbCByaW5kZXhfb3B0IDogc3RyaW5nIC0+IGNoYXIgLT4gaW50IG9wdGlvblxuKCoqIFtyaW5kZXhfb3B0IHMgY10gaXMgeyFTdHJpbmcucmluZGV4X2Zyb21fb3B0fVsgcyAobGVuZ3RoIHMgLSAxKSBjXS5cblxuICAgIEBzaW5jZSA0LjA1ICopXG5cbigqKiB7MSBTdHJpbmdzIGFuZCBTZXF1ZW5jZXN9ICopXG5cbnZhbCB0b19zZXEgOiB0IC0+IGNoYXIgU2VxLnRcbigqKiBbdG9fc2VxIHNdIGlzIGEgc2VxdWVuY2UgbWFkZSBvZiB0aGUgc3RyaW5nJ3MgY2hhcmFjdGVycyBpblxuICAgIGluY3JlYXNpbmcgb3JkZXIuIEluIFtcInVuc2FmZS1zdHJpbmdcIl0gbW9kZSwgbW9kaWZpY2F0aW9ucyBvZiB0aGUgc3RyaW5nXG4gICAgZHVyaW5nIGl0ZXJhdGlvbiB3aWxsIGJlIHJlZmxlY3RlZCBpbiB0aGUgc2VxdWVuY2UuXG5cbiAgICBAc2luY2UgNC4wNyAqKVxuXG52YWwgdG9fc2VxaSA6IHQgLT4gKGludCAqIGNoYXIpIFNlcS50XG4oKiogW3RvX3NlcWkgc10gaXMgbGlrZSB7IXRvX3NlcX0gYnV0IGFsc28gdHVwbGVzIHRoZSBjb3JyZXNwb25kaW5nIGluZGV4LlxuXG4gICAgQHNpbmNlIDQuMDcgKilcblxudmFsIG9mX3NlcSA6IGNoYXIgU2VxLnQgLT4gdFxuKCoqIFtvZl9zZXEgc10gaXMgYSBzdHJpbmcgbWFkZSBvZiB0aGUgc2VxdWVuY2UncyBjaGFyYWN0ZXJzLlxuXG4gICAgQHNpbmNlIDQuMDcgKilcblxuKCoqIHsxOnV0ZiBVVEYgZGVjb2RpbmcgYW5kIHZhbGlkYXRpb25zfVxuXG4gICAgQHNpbmNlIDQuMTQgKilcblxuKCoqIHsyOnV0Zl84IFVURi04fSAqKVxuXG52YWwgZ2V0X3V0Zl84X3VjaGFyIDogdCAtPiBpbnQgLT4gVWNoYXIudXRmX2RlY29kZVxuKCoqIFtnZXRfdXRmXzhfdWNoYXIgYiBpXSBkZWNvZGVzIGFuIFVURi04IGNoYXJhY3RlciBhdCBpbmRleCBbaV0gaW5cbiAgICBbYl0uICopXG5cbnZhbCBpc192YWxpZF91dGZfOCA6IHQgLT4gYm9vbFxuKCoqIFtpc192YWxpZF91dGZfOCBiXSBpcyBbdHJ1ZV0gaWYgYW5kIG9ubHkgaWYgW2JdIGNvbnRhaW5zIHZhbGlkXG4gICAgVVRGLTggZGF0YS4gKilcblxuKCoqIHsyOnV0Zl8xNmJlIFVURi0xNkJFfSAqKVxuXG52YWwgZ2V0X3V0Zl8xNmJlX3VjaGFyIDogdCAtPiBpbnQgLT4gVWNoYXIudXRmX2RlY29kZVxuKCoqIFtnZXRfdXRmXzE2YmVfdWNoYXIgYiBpXSBkZWNvZGVzIGFuIFVURi0xNkJFIGNoYXJhY3RlciBhdCBpbmRleFxuICAgIFtpXSBpbiBbYl0uICopXG5cbnZhbCBpc192YWxpZF91dGZfMTZiZSA6IHQgLT4gYm9vbFxuKCoqIFtpc192YWxpZF91dGZfMTZiZSBiXSBpcyBbdHJ1ZV0gaWYgYW5kIG9ubHkgaWYgW2JdIGNvbnRhaW5zIHZhbGlkXG4gICAgVVRGLTE2QkUgZGF0YS4gKilcblxuKCoqIHsyOnV0Zl8xNmxlIFVURi0xNkxFfSAqKVxuXG52YWwgZ2V0X3V0Zl8xNmxlX3VjaGFyIDogdCAtPiBpbnQgLT4gVWNoYXIudXRmX2RlY29kZVxuKCoqIFtnZXRfdXRmXzE2bGVfdWNoYXIgYiBpXSBkZWNvZGVzIGFuIFVURi0xNkxFIGNoYXJhY3RlciBhdCBpbmRleFxuICAgIFtpXSBpbiBbYl0uICopXG5cbnZhbCBpc192YWxpZF91dGZfMTZsZSA6IHQgLT4gYm9vbFxuKCoqIFtpc192YWxpZF91dGZfMTZsZSBiXSBpcyBbdHJ1ZV0gaWYgYW5kIG9ubHkgaWYgW2JdIGNvbnRhaW5zIHZhbGlkXG4gICAgVVRGLTE2TEUgZGF0YS4gKilcblxuKCoqIHsxOmRlcHJlY2F0ZWQgRGVwcmVjYXRlZCBmdW5jdGlvbnN9ICopXG5cbmV4dGVybmFsIGNyZWF0ZSA6IGludCAtPiBieXRlcyA9IFwiY2FtbF9jcmVhdGVfc3RyaW5nXCJcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZCBcIlVzZSBCeXRlcy5jcmVhdGUvQnl0ZXNMYWJlbHMuY3JlYXRlIGluc3RlYWQuXCJdXG4oKiogW2NyZWF0ZSBuXSByZXR1cm5zIGEgZnJlc2ggYnl0ZSBzZXF1ZW5jZSBvZiBsZW5ndGggW25dLlxuICAgIFRoZSBzZXF1ZW5jZSBpcyB1bmluaXRpYWxpemVkIGFuZCBjb250YWlucyBhcmJpdHJhcnkgYnl0ZXMuXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW24gPCAwXSBvciBbbiA+IF17IVN5cy5tYXhfc3RyaW5nX2xlbmd0aH0uXG5cbiAgICBAZGVwcmVjYXRlZCBUaGlzIGlzIGEgZGVwcmVjYXRlZCBhbGlhcyBvZlxuICAgIHshQnl0ZXMuY3JlYXRlfS97IUJ5dGVzTGFiZWxzLmNyZWF0ZX0uICopXG5cbmV4dGVybmFsIHNldCA6IGJ5dGVzIC0+IGludCAtPiBjaGFyIC0+IHVuaXQgPSBcIiVzdHJpbmdfc2FmZV9zZXRcIlxuICBbQEBvY2FtbC5kZXByZWNhdGVkIFwiVXNlIEJ5dGVzLnNldC9CeXRlc0xhYmVscy5zZXQgaW5zdGVhZC5cIl1cbigqKiBbc2V0IHMgbiBjXSBtb2RpZmllcyBieXRlIHNlcXVlbmNlIFtzXSBpbiBwbGFjZSxcbiAgICByZXBsYWNpbmcgdGhlIGJ5dGUgYXQgaW5kZXggW25dIHdpdGggW2NdLlxuICAgIFlvdSBjYW4gYWxzbyB3cml0ZSBbcy5bbl0gPC0gY10gaW5zdGVhZCBvZiBbc2V0IHMgbiBjXS5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbbl0gaXMgbm90IGEgdmFsaWQgaW5kZXggaW4gW3NdLlxuXG4gICAgQGRlcHJlY2F0ZWQgVGhpcyBpcyBhIGRlcHJlY2F0ZWQgYWxpYXMgb2ZcbiAgICB7IUJ5dGVzLnNldH0veyFCeXRlc0xhYmVscy5zZXR9LiAqKVxuXG52YWwgYmxpdCA6XG4gIHN0cmluZyAtPiBpbnQgLT4gYnl0ZXMgLT4gaW50IC0+IGludCAtPiB1bml0XG4oKiogW2JsaXQgc3JjIHNyY19wb3MgZHN0IGRzdF9wb3MgbGVuXSBjb3BpZXMgW2xlbl0gYnl0ZXNcbiAgICBmcm9tIHRoZSBzdHJpbmcgW3NyY10sIHN0YXJ0aW5nIGF0IGluZGV4IFtzcmNfcG9zXSxcbiAgICB0byBieXRlIHNlcXVlbmNlIFtkc3RdLCBzdGFydGluZyBhdCBjaGFyYWN0ZXIgbnVtYmVyIFtkc3RfcG9zXS5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtzcmNfcG9zXSBhbmQgW2xlbl0gZG8gbm90XG4gICAgZGVzaWduYXRlIGEgdmFsaWQgcmFuZ2Ugb2YgW3NyY10sIG9yIGlmIFtkc3RfcG9zXSBhbmQgW2xlbl1cbiAgICBkbyBub3QgZGVzaWduYXRlIGEgdmFsaWQgcmFuZ2Ugb2YgW2RzdF0uICopXG5cbnZhbCBjb3B5IDogc3RyaW5nIC0+IHN0cmluZ1xuICBbQEBvY2FtbC5kZXByZWNhdGVkIFwiU3RyaW5ncyBub3cgaW1tdXRhYmxlOiBubyBuZWVkIHRvIGNvcHlcIl1cbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBnaXZlbiBzdHJpbmcuXG5cbiAgICBAZGVwcmVjYXRlZCBCZWNhdXNlIHN0cmluZ3MgYXJlIGltbXV0YWJsZSwgaXQgZG9lc24ndCBtYWtlIG11Y2hcbiAgICBzZW5zZSB0byBtYWtlIGlkZW50aWNhbCBjb3BpZXMgb2YgdGhlbS4gKilcblxudmFsIGZpbGwgOiBieXRlcyAtPiBpbnQgLT4gaW50IC0+IGNoYXIgLT4gdW5pdFxuICBbQEBvY2FtbC5kZXByZWNhdGVkIFwiVXNlIEJ5dGVzLmZpbGwvQnl0ZXNMYWJlbHMuZmlsbCBpbnN0ZWFkLlwiXVxuKCoqIFtmaWxsIHMgcG9zIGxlbiBjXSBtb2RpZmllcyBieXRlIHNlcXVlbmNlIFtzXSBpbiBwbGFjZSxcbiAgICByZXBsYWNpbmcgW2xlbl0gYnl0ZXMgYnkgW2NdLCBzdGFydGluZyBhdCBbcG9zXS5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbcG9zXSBhbmQgW2xlbl0gZG8gbm90XG4gICAgZGVzaWduYXRlIGEgdmFsaWQgc3Vic3RyaW5nIG9mIFtzXS5cblxuICAgIEBkZXByZWNhdGVkIFRoaXMgaXMgYSBkZXByZWNhdGVkIGFsaWFzIG9mXG4gICAgeyFCeXRlcy5maWxsfS97IUJ5dGVzTGFiZWxzLmZpbGx9LiAqKVxuXG52YWwgdXBwZXJjYXNlIDogc3RyaW5nIC0+IHN0cmluZ1xuICBbQEBvY2FtbC5kZXByZWNhdGVkXG4gICAgXCJVc2UgU3RyaW5nLnVwcGVyY2FzZV9hc2NpaS9TdHJpbmdMYWJlbHMudXBwZXJjYXNlX2FzY2lpIGluc3RlYWQuXCJdXG4oKiogUmV0dXJuIGEgY29weSBvZiB0aGUgYXJndW1lbnQsIHdpdGggYWxsIGxvd2VyY2FzZSBsZXR0ZXJzXG4gICAgdHJhbnNsYXRlZCB0byB1cHBlcmNhc2UsIGluY2x1ZGluZyBhY2NlbnRlZCBsZXR0ZXJzIG9mIHRoZSBJU09cbiAgICBMYXRpbi0xICg4ODU5LTEpIGNoYXJhY3RlciBzZXQuXG5cbiAgICBAZGVwcmVjYXRlZCBGdW5jdGlvbnMgb3BlcmF0aW5nIG9uIExhdGluLTEgY2hhcmFjdGVyIHNldCBhcmUgZGVwcmVjYXRlZC4gKilcblxudmFsIGxvd2VyY2FzZSA6IHN0cmluZyAtPiBzdHJpbmdcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZFxuICAgIFwiVXNlIFN0cmluZy5sb3dlcmNhc2VfYXNjaWkvU3RyaW5nTGFiZWxzLmxvd2VyY2FzZV9hc2NpaSBpbnN0ZWFkLlwiXVxuKCoqIFJldHVybiBhIGNvcHkgb2YgdGhlIGFyZ3VtZW50LCB3aXRoIGFsbCB1cHBlcmNhc2UgbGV0dGVyc1xuICAgIHRyYW5zbGF0ZWQgdG8gbG93ZXJjYXNlLCBpbmNsdWRpbmcgYWNjZW50ZWQgbGV0dGVycyBvZiB0aGUgSVNPXG4gICAgTGF0aW4tMSAoODg1OS0xKSBjaGFyYWN0ZXIgc2V0LlxuXG4gICAgQGRlcHJlY2F0ZWQgRnVuY3Rpb25zIG9wZXJhdGluZyBvbiBMYXRpbi0xIGNoYXJhY3RlciBzZXQgYXJlIGRlcHJlY2F0ZWQuICopXG5cbnZhbCBjYXBpdGFsaXplIDogc3RyaW5nIC0+IHN0cmluZ1xuICBbQEBvY2FtbC5kZXByZWNhdGVkXG4gICAgXCJVc2UgU3RyaW5nLmNhcGl0YWxpemVfYXNjaWkvU3RyaW5nTGFiZWxzLmNhcGl0YWxpemVfYXNjaWkgaW5zdGVhZC5cIl1cbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBhcmd1bWVudCwgd2l0aCB0aGUgZmlyc3QgY2hhcmFjdGVyIHNldCB0byB1cHBlcmNhc2UsXG4gICAgdXNpbmcgdGhlIElTTyBMYXRpbi0xICg4ODU5LTEpIGNoYXJhY3RlciBzZXQuLlxuXG4gICAgQGRlcHJlY2F0ZWQgRnVuY3Rpb25zIG9wZXJhdGluZyBvbiBMYXRpbi0xIGNoYXJhY3RlciBzZXQgYXJlIGRlcHJlY2F0ZWQuICopXG5cbnZhbCB1bmNhcGl0YWxpemUgOiBzdHJpbmcgLT4gc3RyaW5nXG4gIFtAQG9jYW1sLmRlcHJlY2F0ZWRcbiAgICBcIlVzZSBTdHJpbmcudW5jYXBpdGFsaXplX2FzY2lpL1N0cmluZ0xhYmVscy51bmNhcGl0YWxpemVfYXNjaWkgaW5zdGVhZC5cIl1cbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBhcmd1bWVudCwgd2l0aCB0aGUgZmlyc3QgY2hhcmFjdGVyIHNldCB0byBsb3dlcmNhc2UsXG4gICAgdXNpbmcgdGhlIElTTyBMYXRpbi0xICg4ODU5LTEpIGNoYXJhY3RlciBzZXQuXG5cbiAgICBAZGVwcmVjYXRlZCBGdW5jdGlvbnMgb3BlcmF0aW5nIG9uIExhdGluLTEgY2hhcmFjdGVyIHNldCBhcmUgZGVwcmVjYXRlZC4gKilcblxuKCoqIHsxIEJpbmFyeSBkZWNvZGluZyBvZiBpbnRlZ2Vyc30gKilcblxuKCoqIFRoZSBmdW5jdGlvbnMgaW4gdGhpcyBzZWN0aW9uIGJpbmFyeSBkZWNvZGUgaW50ZWdlcnMgZnJvbSBzdHJpbmdzLlxuXG4gICAgQWxsIGZvbGxvd2luZyBmdW5jdGlvbnMgcmFpc2UgW0ludmFsaWRfYXJndW1lbnRdIGlmIHRoZSBjaGFyYWN0ZXJzXG4gICAgbmVlZGVkIGF0IGluZGV4IFtpXSB0byBkZWNvZGUgdGhlIGludGVnZXIgYXJlIG5vdCBhdmFpbGFibGUuXG5cbiAgICBMaXR0bGUtZW5kaWFuIChyZXNwLiBiaWctZW5kaWFuKSBlbmNvZGluZyBtZWFucyB0aGF0IGxlYXN0XG4gICAgKHJlc3AuIG1vc3QpIHNpZ25pZmljYW50IGJ5dGVzIGFyZSBzdG9yZWQgZmlyc3QuICBCaWctZW5kaWFuIGlzXG4gICAgYWxzbyBrbm93biBhcyBuZXR3b3JrIGJ5dGUgb3JkZXIuICBOYXRpdmUtZW5kaWFuIGVuY29kaW5nIGlzXG4gICAgZWl0aGVyIGxpdHRsZS1lbmRpYW4gb3IgYmlnLWVuZGlhbiBkZXBlbmRpbmcgb24geyFTeXMuYmlnX2VuZGlhbn0uXG5cbiAgICAzMi1iaXQgYW5kIDY0LWJpdCBpbnRlZ2VycyBhcmUgcmVwcmVzZW50ZWQgYnkgdGhlIFtpbnQzMl0gYW5kXG4gICAgW2ludDY0XSB0eXBlcywgd2hpY2ggY2FuIGJlIGludGVycHJldGVkIGVpdGhlciBhcyBzaWduZWQgb3JcbiAgICB1bnNpZ25lZCBudW1iZXJzLlxuXG4gICAgOC1iaXQgYW5kIDE2LWJpdCBpbnRlZ2VycyBhcmUgcmVwcmVzZW50ZWQgYnkgdGhlIFtpbnRdIHR5cGUsXG4gICAgd2hpY2ggaGFzIG1vcmUgYml0cyB0aGFuIHRoZSBiaW5hcnkgZW5jb2RpbmcuICBUaGVzZSBleHRyYSBiaXRzXG4gICAgYXJlIHNpZ24tZXh0ZW5kZWQgKG9yIHplcm8tZXh0ZW5kZWQpIGZvciBmdW5jdGlvbnMgd2hpY2ggZGVjb2RlIDgtYml0XG4gICAgb3IgMTYtYml0IGludGVnZXJzIGFuZCByZXByZXNlbnRlZCB0aGVtIHdpdGggW2ludF0gdmFsdWVzLlxuKilcblxudmFsIGdldF91aW50OCA6IHN0cmluZyAtPiBpbnQgLT4gaW50XG4oKiogW2dldF91aW50OCBiIGldIGlzIFtiXSdzIHVuc2lnbmVkIDgtYml0IGludGVnZXIgc3RhcnRpbmcgYXQgY2hhcmFjdGVyXG4gICAgaW5kZXggW2ldLlxuXG4gICAgQHNpbmNlIDQuMTMuMFxuKilcblxudmFsIGdldF9pbnQ4IDogc3RyaW5nIC0+IGludCAtPiBpbnRcbigqKiBbZ2V0X2ludDggYiBpXSBpcyBbYl0ncyBzaWduZWQgOC1iaXQgaW50ZWdlciBzdGFydGluZyBhdCBjaGFyYWN0ZXJcbiAgICBpbmRleCBbaV0uXG5cbiAgICBAc2luY2UgNC4xMy4wXG4qKVxuXG52YWwgZ2V0X3VpbnQxNl9uZSA6IHN0cmluZyAtPiBpbnQgLT4gaW50XG4oKiogW2dldF91aW50MTZfbmUgYiBpXSBpcyBbYl0ncyBuYXRpdmUtZW5kaWFuIHVuc2lnbmVkIDE2LWJpdCBpbnRlZ2VyXG4gICAgc3RhcnRpbmcgYXQgY2hhcmFjdGVyIGluZGV4IFtpXS5cblxuICAgIEBzaW5jZSA0LjEzLjBcbiopXG5cbnZhbCBnZXRfdWludDE2X2JlIDogc3RyaW5nIC0+IGludCAtPiBpbnRcbigqKiBbZ2V0X3VpbnQxNl9iZSBiIGldIGlzIFtiXSdzIGJpZy1lbmRpYW4gdW5zaWduZWQgMTYtYml0IGludGVnZXJcbiAgICBzdGFydGluZyBhdCBjaGFyYWN0ZXIgaW5kZXggW2ldLlxuXG4gICAgQHNpbmNlIDQuMTMuMFxuKilcblxudmFsIGdldF91aW50MTZfbGUgOiBzdHJpbmcgLT4gaW50IC0+IGludFxuKCoqIFtnZXRfdWludDE2X2xlIGIgaV0gaXMgW2JdJ3MgbGl0dGxlLWVuZGlhbiB1bnNpZ25lZCAxNi1iaXQgaW50ZWdlclxuICAgIHN0YXJ0aW5nIGF0IGNoYXJhY3RlciBpbmRleCBbaV0uXG5cbiAgICBAc2luY2UgNC4xMy4wXG4qKVxuXG52YWwgZ2V0X2ludDE2X25lIDogc3RyaW5nIC0+IGludCAtPiBpbnRcbigqKiBbZ2V0X2ludDE2X25lIGIgaV0gaXMgW2JdJ3MgbmF0aXZlLWVuZGlhbiBzaWduZWQgMTYtYml0IGludGVnZXJcbiAgICBzdGFydGluZyBhdCBjaGFyYWN0ZXIgaW5kZXggW2ldLlxuXG4gICAgQHNpbmNlIDQuMTMuMFxuKilcblxudmFsIGdldF9pbnQxNl9iZSA6IHN0cmluZyAtPiBpbnQgLT4gaW50XG4oKiogW2dldF9pbnQxNl9iZSBiIGldIGlzIFtiXSdzIGJpZy1lbmRpYW4gc2lnbmVkIDE2LWJpdCBpbnRlZ2VyXG4gICAgc3RhcnRpbmcgYXQgY2hhcmFjdGVyIGluZGV4IFtpXS5cblxuICAgIEBzaW5jZSA0LjEzLjBcbiopXG5cbnZhbCBnZXRfaW50MTZfbGUgOiBzdHJpbmcgLT4gaW50IC0+IGludFxuKCoqIFtnZXRfaW50MTZfbGUgYiBpXSBpcyBbYl0ncyBsaXR0bGUtZW5kaWFuIHNpZ25lZCAxNi1iaXQgaW50ZWdlclxuICAgIHN0YXJ0aW5nIGF0IGNoYXJhY3RlciBpbmRleCBbaV0uXG5cbiAgICBAc2luY2UgNC4xMy4wXG4qKVxuXG52YWwgZ2V0X2ludDMyX25lIDogc3RyaW5nIC0+IGludCAtPiBpbnQzMlxuKCoqIFtnZXRfaW50MzJfbmUgYiBpXSBpcyBbYl0ncyBuYXRpdmUtZW5kaWFuIDMyLWJpdCBpbnRlZ2VyXG4gICAgc3RhcnRpbmcgYXQgY2hhcmFjdGVyIGluZGV4IFtpXS5cblxuICAgIEBzaW5jZSA0LjEzLjBcbiopXG5cbnZhbCBnZXRfaW50MzJfYmUgOiBzdHJpbmcgLT4gaW50IC0+IGludDMyXG4oKiogW2dldF9pbnQzMl9iZSBiIGldIGlzIFtiXSdzIGJpZy1lbmRpYW4gMzItYml0IGludGVnZXJcbiAgICBzdGFydGluZyBhdCBjaGFyYWN0ZXIgaW5kZXggW2ldLlxuXG4gICAgQHNpbmNlIDQuMTMuMFxuKilcblxudmFsIGdldF9pbnQzMl9sZSA6IHN0cmluZyAtPiBpbnQgLT4gaW50MzJcbigqKiBbZ2V0X2ludDMyX2xlIGIgaV0gaXMgW2JdJ3MgbGl0dGxlLWVuZGlhbiAzMi1iaXQgaW50ZWdlclxuICAgIHN0YXJ0aW5nIGF0IGNoYXJhY3RlciBpbmRleCBbaV0uXG5cbiAgICBAc2luY2UgNC4xMy4wXG4qKVxuXG52YWwgZ2V0X2ludDY0X25lIDogc3RyaW5nIC0+IGludCAtPiBpbnQ2NFxuKCoqIFtnZXRfaW50NjRfbmUgYiBpXSBpcyBbYl0ncyBuYXRpdmUtZW5kaWFuIDY0LWJpdCBpbnRlZ2VyXG4gICAgc3RhcnRpbmcgYXQgY2hhcmFjdGVyIGluZGV4IFtpXS5cblxuICAgIEBzaW5jZSA0LjEzLjBcbiopXG5cbnZhbCBnZXRfaW50NjRfYmUgOiBzdHJpbmcgLT4gaW50IC0+IGludDY0XG4oKiogW2dldF9pbnQ2NF9iZSBiIGldIGlzIFtiXSdzIGJpZy1lbmRpYW4gNjQtYml0IGludGVnZXJcbiAgICBzdGFydGluZyBhdCBjaGFyYWN0ZXIgaW5kZXggW2ldLlxuXG4gICAgQHNpbmNlIDQuMTMuMFxuKilcblxudmFsIGdldF9pbnQ2NF9sZSA6IHN0cmluZyAtPiBpbnQgLT4gaW50NjRcbigqKiBbZ2V0X2ludDY0X2xlIGIgaV0gaXMgW2JdJ3MgbGl0dGxlLWVuZGlhbiA2NC1iaXQgaW50ZWdlclxuICAgIHN0YXJ0aW5nIGF0IGNoYXJhY3RlciBpbmRleCBbaV0uXG5cbiAgICBAc2luY2UgNC4xMy4wXG4qKVxuXG4oKiovKiopXG5cbigqIFRoZSBmb2xsb3dpbmcgaXMgZm9yIHN5c3RlbSB1c2Ugb25seS4gRG8gbm90IGNhbGwgZGlyZWN0bHkuICopXG5cbmV4dGVybmFsIHVuc2FmZV9nZXQgOiBzdHJpbmcgLT4gaW50IC0+IGNoYXIgPSBcIiVzdHJpbmdfdW5zYWZlX2dldFwiXG5leHRlcm5hbCB1bnNhZmVfc2V0IDogYnl0ZXMgLT4gaW50IC0+IGNoYXIgLT4gdW5pdCA9IFwiJXN0cmluZ191bnNhZmVfc2V0XCJcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZF1cbmV4dGVybmFsIHVuc2FmZV9ibGl0IDpcbiAgc3RyaW5nIC0+IGludCAtPiBieXRlcyAtPiBpbnQgLT4gaW50IC0+XG4gICAgdW5pdCA9IFwiY2FtbF9ibGl0X3N0cmluZ1wiIFtAQG5vYWxsb2NdXG5leHRlcm5hbCB1bnNhZmVfZmlsbCA6XG4gIGJ5dGVzIC0+IGludCAtPiBpbnQgLT4gY2hhciAtPiB1bml0ID0gXCJjYW1sX2ZpbGxfc3RyaW5nXCIgW0BAbm9hbGxvY11cbiAgW0BAb2NhbWwuZGVwcmVjYXRlZF1cbiJdfQ==
