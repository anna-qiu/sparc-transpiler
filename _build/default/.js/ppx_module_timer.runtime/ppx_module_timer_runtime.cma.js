(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_gc_quick_stat=runtime.caml_gc_quick_stat,
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
     cst$3=caml_string_of_jsbytes("\n"),
     cst_ppx_module_timer_overridin=
      caml_string_of_jsbytes
       ("ppx_module_timer: overriding time measurements for testing"),
     cst_FAKE_MODULES=caml_string_of_jsbytes("FAKE_MODULES"),
     cst$1=caml_string_of_jsbytes(" "),
     cst_compactions=caml_string_of_jsbytes("compactions"),
     cst_major_collections=caml_string_of_jsbytes("major collections"),
     cst_minor_collections=caml_string_of_jsbytes("minor collections"),
     cst$2=caml_string_of_jsbytes(""),
     cst_GC=caml_string_of_jsbytes("; GC: "),
     cst$0=caml_string_of_jsbytes(""),
     cst=caml_string_of_jsbytes(""),
     cst_ns$0=caml_string_of_jsbytes("ns"),
     cst_ns=caml_string_of_jsbytes("ns"),
     am_recording_environment_varia=caml_string_of_jsbytes("PPX_MODULE_TIMER"),
     Base=global_data.Base,
     Base_List=global_data.Base__List,
     Base_String=global_data.Base__String,
     Base_Int63=global_data.Base__Int63,
     Stdio=global_data.Stdio,
     Base_Option=global_data.Base__Option,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Base_Printf=global_data.Base__Printf,
     Base_Int=global_data.Base__Int,
     Time_now=global_data.Time_now,
     Assert_failure=global_data.Assert_failure,
     Stdlib=global_data.Stdlib,
     _e_=
      [0,
       [11,caml_string_of_jsbytes("Line "),[4,0,0,0,0]],
       caml_string_of_jsbytes("Line %d")],
     _f_=
      [0,
       [11,caml_string_of_jsbytes("Fake__Dependency_"),[4,0,0,0,0]],
       caml_string_of_jsbytes("Fake__Dependency_%d")],
     _d_=[0,[2,[1,1],[12,32,[2,0,0]]],caml_string_of_jsbytes("%*s %s")],
     _c_=[0,caml_string_of_jsbytes(", ")],
     _b_=
      [0,caml_string_of_jsbytes("runtime/ppx_module_timer_runtime.ml"),110,6],
     _a_=
      [0,caml_string_of_jsbytes("runtime/ppx_module_timer_runtime.ml"),94,6];
    function get_am_recording_environment_v(param)
     {try
       {var value=runtime.caml_sys_getenv(am_recording_environment_varia)}
      catch(_ab_){return 0}
      return [0,value]}
    var
     am_recording_value=get_am_recording_environment_v(0),
     am_recording=caml_call1(Base_Option[50],am_recording_value);
    function to_nanoseconds(t){return t}
    function of_nanoseconds(t){return t}
    function of_string(string)
     {var _aa_=caml_call2(Base_String[102],string,cst_ns);
      return caml_call1(Base_Int63[10],_aa_)}
    function to_string(nanos)
     {var _$_=caml_call1(Base_Int63[11],nanos);
      return caml_call2(Base[197],_$_,cst_ns$0)}
    function to_string_with_same_unit(list)
     {return caml_call2(Base_List[76],list,to_string)}
    var format=[0,[0,of_string,to_string_with_same_unit]];
    function of_string$0(string)
     {var Format=format[1];return caml_call1(Format[1],string)}
    function create(nested_timer,param)
     {var ___=caml_gc_quick_stat(0);
      return [0,cst,Base_Int63[38],___,nested_timer,0]}
    function record_start(t,description)
     {if(am_recording)
       {if(! caml_call1(Base_String[5],t[1]))throw [0,Assert_failure,_a_];
        t[1] = description;
        t[3] = caml_gc_quick_stat(0);
        t[2] = caml_call1(Time_now[1],0);
        var _Z_=0}
      else
       var _Z_=am_recording;
      return _Z_}
    function record_until(t,description)
     {if(am_recording)
       {var
         until=caml_call1(Time_now[1],0),
         start=t[2],
         gc_stats_after=caml_gc_quick_stat(0),
         gc_stats_before=t[3],
         runtime=caml_call2(Base_Int63[42],until,start);
        if(caml_call2(Base_String[121],t[1],description))
         {var
           gc_events=
            [0,
             gc_stats_after[4] - gc_stats_before[4] | 0,
             gc_stats_after[5] - gc_stats_before[5] | 0,
             gc_stats_after[14] - gc_stats_before[14] | 0],
           _Y_=t[4];
          if(_Y_)
           var
            nested$0=_Y_[1],
            nested_timing_events=caml_call1(Base_List[38],nested$0[5]);
          else
           var nested_timing_events=0;
          var
           timing_event=
            [0,description,runtime,gc_events,nested_timing_events];
          t[5] = [0,timing_event,t[5]];
          t[1] = cst$0;
          t[2] = Base_Int63[38];
          var _X_=t[4];
          if(_X_){var nested=_X_[1];nested[5] = 0;return 0}
          return 0}
        throw [0,Assert_failure,_b_]}
      return am_recording}
    var
     definition_timer=create(0,0),
     module_timer=create([0,definition_timer],0);
    function record_start$0(module_name)
     {return record_start(module_timer,module_name)}
    function record_until$0(module_name)
     {return record_until(module_timer,module_name)}
    function record_definition_start(loc)
     {return record_start(definition_timer,loc)}
    function record_definition_until(loc)
     {return record_until(definition_timer,loc)}
    function timing_events_to_strings(list,indent)
     {function _H_(timing_event){return timing_event[2]}
      var
       string=caml_call2(Base_List[76],list,_H_),
       Format=format[1],
       duration_strings=caml_call1(Format[2],string),
       prefix=caml_call2(Base_String[50],indent,32);
      function _I_(duration_string,param)
       {var
         nested_timing_events=param[4],
         gc_events=param[3],
         description=param[1];
        function _P_(line){return caml_call2(Base[197],cst$3,line)}
        var
         _Q_=timing_events_to_strings(nested_timing_events,indent + 4 | 0),
         _R_=caml_call2(Base_List[76],_Q_,_P_),
         _S_=caml_call2(Base_String[54],0,_R_),
         compactions=gc_events[3],
         major_collections=gc_events[2],
         minor_collections=gc_events[1];
        function to_list(description,count)
         {if(0 === count)return 0;
          var
           _V_=caml_call2(Base[197],cst$1,description),
           _W_=caml_call1(Base_Int[11],count);
          return [0,caml_call2(Base[197],_W_,_V_),0]}
        var
         _K_=to_list(cst_compactions,compactions),
         _L_=to_list(cst_major_collections,major_collections),
         _M_=caml_call2(Base[178],_L_,_K_),
         _N_=to_list(cst_minor_collections,minor_collections),
         strings=caml_call2(Base[178],_N_,_M_);
        if(caml_call1(Base_List[8],strings))
         var _T_=cst$2;
        else
         var
          _O_=caml_call2(Base_String[54],_c_,strings),
          _T_=caml_call2(Base[197],cst_GC,_O_);
        var _U_=caml_call2(Base[197],_T_,_S_);
        return [0,duration_string,caml_call2(Base[197],description,_U_)]}
      var list$0=caml_call3(Base_List[83],duration_strings,list,_I_);
      function _E_(width,param)
       {var left=param[1];
        return caml_call2
                (Base_Int[15],width,runtime.caml_ml_string_length(left))}
      var left_column_width=caml_call3(Base_List[10],list$0,0,_E_);
      function _F_(param)
       {var right=param[2],left=param[1];
        return caml_call4(Base_Printf[2],_d_,left_column_width,left,right)}
      var _G_=caml_call2(Base_List[76],list$0,_F_),_J_=Base_List[76];
      return caml_call2
              (_J_,
               _G_,
               function(line){return caml_call2(Base[197],prefix,line)})}
    function gc_events(i)
     {var
       _B_=7 === caml_call2(Base[183],i,8)?1:0,
       _C_=3 === caml_call2(Base[183],i,4)?1:0,
       _D_=1 === caml_call2(Base[183],i,2)?1:0;
      return [0,_D_,_C_,_B_]}
    var
     fake_timing_events=
      [246,
       function(_t_)
        {function _u_(i)
          {if(0 === caml_call2(Base[183],i + 1 | 0,4))
            var
             _v_=
              function(j)
               {var
                 _z_=gc_events(j),
                 _A_=caml_call1(Base_Int63[96],900 * (j + 1 | 0) | 0);
                return [0,caml_call2(Base_Printf[2],_e_,j + 1 | 0),_A_,_z_,0]},
             _w_=caml_call2(Base_List[123],i + 1 | 0,_v_);
           else
            var _w_=0;
           var
            _x_=gc_events(i),
            _y_=caml_call1(Base_Int63[96],900 * (i + 1 | 0) | 0);
           return [0,caml_call2(Base_Printf[2],_f_,i + 1 | 0),_y_,_x_,_w_]}
         return caml_call2(Base_List[123],12,_u_)}];
    function print_recorded_timing_events(timing_events)
     {function notify_of_overriding(param)
       {return caml_call1(Stdio[9],cst_ppx_module_timer_overridin)}
      var string=caml_call4(Base_Option[28],0,0,0,am_recording_value);
      if(runtime.caml_string_notequal(string,cst_FAKE_MODULES))
       {try
         {var switch$0=0,override=of_string$0(string);switch$0 = 1}
        catch(_s_){var timing_events$0=timing_events}
        if(switch$0)
         {notify_of_overriding(0);
          var
           _k_=
            function(index,timing_event)
             {var
               _p_=caml_call1(Base_Int63[96],index + 1 | 0),
               runtime=caml_call2(Base_Int63[43],override,_p_);
              function _q_(index,nested_timing_event)
               {var
                 _r_=caml_call1(Base_Int63[96],index + 1 | 0),
                 runtime=caml_call2(Base_Int63[43],override,_r_);
                return [0,
                        nested_timing_event[1],
                        runtime,
                        nested_timing_event[3],
                        nested_timing_event[4]]}
              var
               nested_timing_events=
                caml_call2(Base_List[96],timing_event[4],_q_);
              return [0,
                      timing_event[1],
                      runtime,
                      timing_event[3],
                      nested_timing_events]},
           timing_events$0=caml_call2(Base_List[96],timing_events,_k_)}}
      else
       {notify_of_overriding(0);
        var
         _l_=runtime.caml_obj_tag(fake_timing_events),
         _m_=
          250 === _l_
           ?fake_timing_events[1]
           :246 === _l_
             ?caml_call1(CamlinternalLazy[2],fake_timing_events)
             :fake_timing_events,
         timing_events$0=_m_}
      var
       _h_=
        function(_o_){return timing_events_to_strings(_o_,0)}(timing_events$0),
       _i_=Base_List[9],
       _j_=Stdio[9];
      return function(_n_){return caml_call2(_i_,_n_,_j_)}(_h_)}
    if(am_recording)
     {var
       _g_=
        function(param)
         {return print_recorded_timing_events
                  (caml_call1(Base_List[38],module_timer[5]))};
      caml_call1(Stdlib[100],_g_)}
    var
     Ppx_module_timer_runtime=
      [0,
       am_recording,
       am_recording_environment_varia,
       [0,to_nanoseconds,of_nanoseconds,format],
       record_start$0,
       record_until$0,
       record_definition_start,
       record_definition_until];
    runtime.caml_register_global
     (32,Ppx_module_timer_runtime,"Ppx_module_timer_runtime");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJwcHhfbW9kdWxlX3RpbWVyX3J1bnRpbWUuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlc0NvbnRlbnQiOltdfQ==
