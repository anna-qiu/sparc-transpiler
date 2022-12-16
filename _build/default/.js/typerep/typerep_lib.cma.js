(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_register_global=runtime.caml_register_global,
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
     cst_Typename_same_witness_exn=
      caml_string_of_jsbytes("Typename.same_witness_exn"),
     cst_Typename_create=caml_string_of_jsbytes("Typename.create"),
     cst_static=caml_string_of_jsbytes("static"),
     name$1=caml_string_of_jsbytes("int"),
     name$2=caml_string_of_jsbytes("int32"),
     name$3=caml_string_of_jsbytes("int64"),
     name$4=caml_string_of_jsbytes("nativeint"),
     name$5=caml_string_of_jsbytes("char"),
     name$6=caml_string_of_jsbytes("float"),
     name$7=caml_string_of_jsbytes("string"),
     name$8=caml_string_of_jsbytes("bytes"),
     name$9=caml_string_of_jsbytes("bool"),
     name$10=caml_string_of_jsbytes("unit"),
     name$11=caml_string_of_jsbytes("option"),
     name$12=caml_string_of_jsbytes("list"),
     name$13=caml_string_of_jsbytes("array"),
     name$14=caml_string_of_jsbytes("lazy_t"),
     name$15=caml_string_of_jsbytes("ref"),
     name$16=caml_string_of_jsbytes("function"),
     name$17=caml_string_of_jsbytes("tuple0"),
     name$18=caml_string_of_jsbytes("tuple2"),
     name$19=caml_string_of_jsbytes("tuple3"),
     name$20=caml_string_of_jsbytes("tuple4"),
     name$21=caml_string_of_jsbytes("tuple5"),
     cst_Latency_stats=caml_string_of_jsbytes("Latency_stats"),
     cst_zero=caml_string_of_jsbytes("zero"),
     cst_Typerep_lib_Type_generic_M$0=
      caml_string_of_jsbytes
       ("Typerep_lib.Type_generic.Make_S_implementation(X).Not_implemented"),
     cst_Typerep_lib_Type_generic_M=
      caml_string_of_jsbytes
       ("Typerep_lib.Type_generic.Make_named_for_closure(X).Undefined"),
     cst_Typerep_lib_Type_generic_I=
      caml_string_of_jsbytes
       ("Typerep_lib.Type_generic.Ident.Broken_dependency"),
     Stdlib_Printf=global_data.Stdlib__Printf,
     Stdlib=global_data.Stdlib,
     Base=global_data.Base,
     Caml=global_data.Caml,
     Stdlib_Hashtbl=global_data.Stdlib__Hashtbl,
     Stdlib_List=global_data.Stdlib__List,
     Stdlib_Array=global_data.Stdlib__Array,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Assert_failure=global_data.Assert_failure,
     CamlinternalMod=global_data.CamlinternalMod,
     Base_Int63=global_data.Base__Int63,
     Stdlib_Obj=global_data.Stdlib__Obj,
     Stdlib_Lazy=global_data.Stdlib__Lazy,
     Typerep_lib=[0];
    caml_register_global(59,Typerep_lib,"Typerep_lib");
    var Typerep_lib_Named_intf=[0];
    caml_register_global(60,Typerep_lib_Named_intf,"Typerep_lib__Named_intf");
    var
     _a_=
      [0,
       [11,
        caml_string_of_jsbytes("Typename.Same_witness_exn "),
        [3,0,[12,32,[3,0,0]]]],
       caml_string_of_jsbytes("Typename.Same_witness_exn %S %S")],
     _l_=[0,0],
     _m_=[0,0],
     _n_=[0,0],
     _o_=[0,0],
     _p_=[0,0],
     _q_=[0,0],
     _r_=[0,0],
     _s_=[0,0],
     _t_=[0,0],
     _u_=[0,0],
     _v_=[0,0],
     _w_=[0,0],
     _x_=[0,0],
     _y_=[0,0],
     _z_=[0,0],
     _A_=[0,caml_string_of_jsbytes("lib/std_internal.ml"),802,14],
     _j_=
      [0,
       [0,
        [0,[0,0,0,0]],
        [0,[0,0,0]],
        [0,[0]],
        [0,[0,0,0,0,0,0,0,0,0,0]],
        [0,[0]],
        [0,[0,0,0,0,0,0,0,0]],
        [0,[0]],
        [0,[0,0,0,0,0,0,0,0]],
        [0,[0]],
        [0,[0,0,0,0,0,0,0,0]],
        0,
        0,
        0,
        0,
        0]],
     _k_=[0,caml_string_of_jsbytes("lib/std_internal.ml"),401,6],
     _B_=
      [0,
       [0,
        [0,[0,0,0,0]],
        [0,[0,0,0]],
        [0,[0]],
        [0,[0,0,0,0,0,0,0,0,0,0]],
        [0,[0]],
        [0,[0,0,0,0,0,0,0,0]],
        [0,[0]],
        [0,[0,0,0,0,0,0,0,0]],
        [0,[0]],
        [0,[0,0,0,0,0,0,0,0]],
        0,
        0,
        0,
        0,
        0]],
     _D_=[0,caml_string_of_jsbytes("lib/typerep_obj.ml"),9,4],
     _C_=[0,caml_string_of_jsbytes("lib/typerep_obj.ml"),11,4],
     _U_=[0,caml_string_of_jsbytes("lib/typerep_obj.ml"),28,9],
     _T_=[0,caml_string_of_jsbytes("lib/typerep_obj.ml"),29,9],
     _S_=[0,caml_string_of_jsbytes("lib/typerep_obj.ml"),49,2],
     _G_=[0,caml_string_of_jsbytes("lib/typerep_obj.ml"),50,2],
     _J_=
      [0,
       [11,
        caml_string_of_jsbytes("Type_generic "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(" requires "),
          [3,0,[11,caml_string_of_jsbytes(" for uid "),[3,0,[12,10,0]]]]]]],
       caml_string_of_jsbytes("Type_generic %S requires %S for uid %S\n")],
     _H_=[0,caml_string_of_jsbytes("lib/type_generic.ml"),185,16],
     _I_=[0,caml_string_of_jsbytes("lib/type_generic.ml"),187,69],
     witness=0;
    function conv(param,x){return x}
    function Lift(X){function lift(param){return 0}return [0,lift]}
    var Typerep_lib_Type_equal=[0,conv,witness,Lift];
    caml_register_global(61,Typerep_lib_Type_equal,"Typerep_lib__Type_equal");
    function compare(a,b){return runtime.caml_int_compare(a[1],b[1])}
    function equal(a,b){return a[1] === b[1]?1:0}
    var uid=[0,0];
    function next(name){var code=uid[1];uid[1]++;return [0,code,name]}
    function hash(a){return caml_call1(Stdlib_Hashtbl[28],a[1])}
    function name(a){return a[2]}
    var static$0=next(cst_static);
    function cmp(k1,k2)
     {if(k1 === k2)return 0;
      var cmp$0=compare(k1[1],k2[1]);
      if(0 === cmp$0)
       {var a=k1[2],b=k2[2];
        for(;;)
         {if(a)
           {if(b)
             {var ys=b[2],y=b[1],xs=a[2],x=a[1],n=cmp(x,y);
              if(0 === n){var a=xs,b=ys;continue}
              return n}
            return 1}
          return b?-1:0}}
      return cmp$0}
    function equal$0(a,b){return 0 === cmp(a,b)?1:0}
    var hash$0=Stdlib_Hashtbl[28],unit=[0,static$0,0];
    function key(t){return t}
    function uid$0(t){return t[1]}
    function name$0(t){return t[1][2]}
    function create(opt,param)
     {if(opt)var sth=opt[1],name=sth;else var name=cst_Typename_create;
      return [0,next(name),0]}
    function same(nm1,nm2){return 0 === cmp(nm1,nm2)?1:0}
    function same_witness(nm1,nm2){return 0 === cmp(nm1,nm2)?[0,witness]:0}
    function same_witness_exn(nm1,nm2)
     {return 0 === cmp(nm1,nm2)
              ?witness
              :caml_call1(Stdlib[2],cst_Typename_same_witness_exn)}
    var Key_table=caml_call1(Stdlib_Hashtbl[26],[0,equal$0,hash$0]);
    function Table(X)
     {function create(int$0){return caml_call1(Key_table[1],int$0)}
      function mem(table,name){return caml_call2(Key_table[11],table,name)}
      function set(table,name,data)
       {return caml_call3(Key_table[10],table,name,[0,name,data])}
      function find(table,name)
       {try
         {var _ci_=[0,caml_call2(Key_table[7],table,name)],data=_ci_}
        catch(_cj_)
         {_cj_ = caml_wrap_exception(_cj_);
          if(_cj_[1] !== Base[205] && _cj_ !== Caml[8])throw _cj_;
          var data=0}
        if(data)
         {var match=data[1],data$0=match[2],name$0=match[1];
          return function(name$0,data)
                   {same_witness_exn(name$0,name);return [0,data]}
                  (name$0,data$0)}
        return 0}
      return [0,create,mem,set,find]}
    function fail(uid_a,uid_b)
     {var msg=caml_call3(Stdlib_Printf[4],_a_,uid_a[2],uid_b[2]);
      return caml_call1(Stdlib[2],msg)}
    function Same_witness_exn_1(_ch_,B)
     {var
       uid_a=caml_call1(_ch_[1],unit)[1],
       uid_b=caml_call1(B[1],unit)[1],
       witness$0=equal(uid_a,uid_b)?[0,witness]:fail(uid_a,uid_b);
      return [0,witness$0]}
    function Same_witness_exn_2(_cg_,B)
     {var
       uid_a=caml_call2(_cg_[1],unit,unit)[1],
       uid_b=caml_call2(B[1],unit,unit)[1],
       witness$0=equal(uid_a,uid_b)?[0,witness]:fail(uid_a,uid_b);
      return [0,witness$0]}
    function Same_witness_exn_3(_cf_,B)
     {var
       uid_a=caml_call3(_cf_[1],unit,unit,unit)[1],
       uid_b=caml_call3(B[1],unit,unit,unit)[1],
       witness$0=equal(uid_a,uid_b)?[0,witness]:fail(uid_a,uid_b);
      return [0,witness$0]}
    function Same_witness_exn_4(_ce_,B)
     {var
       uid_a=caml_call4(_ce_[1],unit,unit,unit,unit)[1],
       uid_b=caml_call4(B[1],unit,unit,unit,unit)[1],
       witness$0=equal(uid_a,uid_b)?[0,witness]:fail(uid_a,uid_b);
      return [0,witness$0]}
    function Same_witness_exn_5(_cd_,B)
     {var
       uid_a=caml_call5(_cd_[1],unit,unit,unit,unit,unit)[1],
       uid_b=caml_call5(B[1],unit,unit,unit,unit,unit)[1],
       witness$0=equal(uid_a,uid_b)?[0,witness]:fail(uid_a,uid_b);
      return [0,witness$0]}
    function _b_(_cc_)
     {var uid=next(_cc_[1]);
      function typename_of_t(a,b,c,d,e)
       {return [0,uid,[0,a,[0,b,[0,c,[0,d,[0,e,0]]]]]]}
      return [0,typename_of_t]}
    function _c_(_cb_)
     {var uid=next(_cb_[1]);
      function typename_of_t(a,b,c,d)
       {return [0,uid,[0,a,[0,b,[0,c,[0,d,0]]]]]}
      return [0,typename_of_t]}
    function _d_(_ca_)
     {var uid=next(_ca_[1]);
      function typename_of_t(a,b,c){return [0,uid,[0,a,[0,b,[0,c,0]]]]}
      return [0,typename_of_t]}
    function _e_(_b$_)
     {var uid=next(_b$_[1]);
      function typename_of_t(a,b){return [0,uid,[0,a,[0,b,0]]]}
      return [0,typename_of_t]}
    function _f_(_b__)
     {var uid=next(_b__[1]);
      function typename_of_t(a){return [0,uid,[0,a,0]]}
      return [0,typename_of_t]}
    function _g_(_b9_)
     {var uid=next(_b9_[1]),typename_of_t=[0,uid,0];return [0,typename_of_t]}
    var
     _h_=[0,compare,equal,hash,name],
     _i_=[0,cmp,equal$0,hash$0],
     Typerep_lib_Typename=
      [0,
       create,
       unit,
       same,
       same_witness,
       same_witness_exn,
       _i_,
       key,
       _h_,
       uid$0,
       name$0,
       _g_,
       _f_,
       _e_,
       _d_,
       _c_,
       _b_,
       Table,
       Same_witness_exn_1,
       Same_witness_exn_2,
       Same_witness_exn_3,
       Same_witness_exn_4,
       Same_witness_exn_5];
    caml_register_global(68,Typerep_lib_Typename,"Typerep_lib__Typename");
    function M(X)
     {var Tag_internal=[0];
      function label(t){return t[1]}
      function arity(t){return t[3]}
      function args_labels(t){return t[4]}
      function index(t){return t[5]}
      function ocaml_repr(t){return t[6]}
      function create(t){return t[8]}
      function tyid(t){return t[7]}
      function traverse(t){return t[2]}
      function internal_use_only(t){return t}
      var
       Tag=
        [0,
         label,
         arity,
         args_labels,
         index,
         ocaml_repr,
         create,
         tyid,
         traverse,
         internal_use_only],
       Variant_internal=[0];
      function typename_of_t(t){return t[1]}
      function length(t){return t[2].length - 1}
      function tag(t,index){return caml_check_bound(t[2],index)[1 + index]}
      function is_polymorphic(t){return t[3]}
      function value(t){return t[4]}
      function fold(t,init,f){return caml_call3(Stdlib_Array[17],f,init,t[2])}
      function internal_use_only$0(t){return t}
      var
       Variant=
        [0,
         typename_of_t,
         length,
         tag,
         is_polymorphic,
         value,
         fold,
         internal_use_only$0],
       Field_internal=[0];
      function label$0(t){return t[1]}
      function index$0(t){return t[3]}
      function get(t){return t[5]}
      function is_mutable(t){return t[6]}
      function tyid$0(t){return t[4]}
      function traverse$0(t){return t[2]}
      function internal_use_only$1(t){return t}
      var
       Field=
        [0,
         label$0,
         index$0,
         get,
         is_mutable,
         tyid$0,
         traverse$0,
         internal_use_only$1],
       Record_internal=[0];
      function typename_of_t$0(t){return t[1]}
      function length$0(t){return t[2].length - 1}
      function field(t,index){return caml_check_bound(t[2],index)[1 + index]}
      function has_double_array_tag(t){return t[3]}
      function create$0(t){return t[4]}
      function fold$0(t,init,f)
       {return caml_call3(Stdlib_Array[17],f,init,t[2])}
      function internal_use_only$2(t){return t}
      var
       Record=
        [0,
         typename_of_t$0,
         length$0,
         field,
         has_double_array_tag,
         create$0,
         fold$0,
         internal_use_only$2];
      return [0,
              Tag_internal,
              Tag,
              Variant_internal,
              Variant,
              Field_internal,
              Field,
              Record_internal,
              Record]}
    var Typerep_lib_Variant_and_record=[0,M];
    caml_register_global
     (70,
      Typerep_lib_Variant_and_record,
      "Typerep_lib__Variant_and_record_intf");
    var
     typename_of_int=_g_([0,name$1])[1],
     typename_of_int32=_g_([0,name$2])[1],
     typename_of_int64=_g_([0,name$3])[1],
     typename_of_nativeint=_g_([0,name$4])[1],
     typename_of_char=_g_([0,name$5])[1],
     typename_of_float=_g_([0,name$6])[1],
     typename_of_string=_g_([0,name$7])[1],
     typename_of_bytes=_g_([0,name$8])[1],
     typename_of_bool=_g_([0,name$9])[1],
     typename_of_unit=_g_([0,name$10])[1],
     M_option=_f_([0,name$11]),
     typename_of_option=M_option[1],
     M_list=_f_([0,name$12]),
     typename_of_list=M_list[1],
     M_array=_f_([0,name$13]),
     typename_of_array=M_array[1],
     M_lazy_t=_f_([0,name$14]),
     typename_of_lazy_t=M_lazy_t[1],
     M_ref=_f_([0,name$15]),
     typename_of_ref=M_ref[1],
     M_function=_e_([0,name$16]),
     typename_of_function=M_function[1],
     M_tuple0=_g_([0,name$17]),
     typename_of_tuple0=M_tuple0[1],
     M_tuple2=_e_([0,name$18]),
     typename_of_tuple2=M_tuple2[1],
     M_tuple3=_d_([0,name$19]),
     typename_of_tuple3=M_tuple3[1],
     M_tuple4=_c_([0,name$20]),
     typename_of_tuple4=M_tuple4[1],
     M_tuple5=_b_([0,name$21]),
     typename_of_tuple5=M_tuple5[1],
     Typerep=caml_call2(CamlinternalMod[1],_k_,_j_);
    function arity(param)
     {switch(param[0])
       {case 0:return 0;
        case 1:return 1;
        case 2:return 2;
        case 3:return 3;
        case 4:return 4;
        default:return 5}}
    function typename_of_t(param)
     {switch(param[0])
       {case 0:var rep=param[1];return rep[2];
        case 1:var rep$0=param[1];return rep$0[3];
        case 2:var rep$1=param[1];return rep$1[4];
        case 3:var rep$2=param[1];return rep$2[5];
        case 4:var rep$3=param[1];return rep$3[6];
        default:var rep$4=param[1];return rep$4[7]}}
    function name$22(rep)
     {var _b8_=typename_of_t(rep)[1];return caml_call1(_h_[4],_b8_)}
    var Named=[0,arity,typename_of_t,name$22];
    function arity$0(param)
     {switch(param[0])
       {case 0:return 2;case 1:return 3;case 2:return 4;default:return 5}}
    function typename_of_t$0(param)
     {switch(param[0])
       {case 0:
         var
          match=param[1],
          b=match[2],
          a=match[1],
          _bY_=caml_call1(Typerep[14],b);
         return caml_call2(typename_of_tuple2,caml_call1(Typerep[14],a),_bY_);
        case 1:
         var
          match$0=param[1],
          c=match$0[3],
          b$0=match$0[2],
          a$0=match$0[1],
          _bZ_=caml_call1(Typerep[14],c),
          _b0_=caml_call1(Typerep[14],b$0);
         return caml_call3
                 (typename_of_tuple3,caml_call1(Typerep[14],a$0),_b0_,_bZ_);
        case 2:
         var
          match$1=param[1],
          d=match$1[4],
          c$0=match$1[3],
          b$1=match$1[2],
          a$1=match$1[1],
          _b1_=caml_call1(Typerep[14],d),
          _b2_=caml_call1(Typerep[14],c$0),
          _b3_=caml_call1(Typerep[14],b$1);
         return caml_call4
                 (typename_of_tuple4,
                  caml_call1(Typerep[14],a$1),
                  _b3_,
                  _b2_,
                  _b1_);
        default:
         var
          match$2=param[1],
          e=match$2[5],
          d$0=match$2[4],
          c$1=match$2[3],
          b$2=match$2[2],
          a$2=match$2[1],
          _b4_=caml_call1(Typerep[14],e),
          _b5_=caml_call1(Typerep[14],d$0),
          _b6_=caml_call1(Typerep[14],c$1),
          _b7_=caml_call1(Typerep[14],b$2);
         return caml_call5
                 (typename_of_tuple5,
                  caml_call1(Typerep[14],a$2),
                  _b7_,
                  _b6_,
                  _b5_,
                  _b4_)}}
    var
     Tuple=[0,arity$0,typename_of_t$0],
     include=caml_call1(Typerep_lib_Variant_and_record[1],[0]),
     Tag_internal=include[1],
     Tag=include[2],
     Variant_internal=include[3],
     Variant=include[4],
     Field_internal=include[5],
     Field=include[6],
     Record_internal=include[7],
     Record=include[8];
    function typename_of_t$1(param)
     {if(typeof param === "number")
       switch(param)
        {case 0:return typename_of_int;
         case 1:return typename_of_int32;
         case 2:return typename_of_int64;
         case 3:return typename_of_nativeint;
         case 4:return typename_of_char;
         case 5:return typename_of_float;
         case 6:return typename_of_string;
         case 7:return typename_of_bytes;
         case 8:return typename_of_bool;
         default:return typename_of_unit}
      else
       switch(param[0])
        {case 0:
          var rep=param[1];
          return caml_call1(typename_of_option,typename_of_t$1(rep));
         case 1:
          var rep$0=param[1];
          return caml_call1(typename_of_list,typename_of_t$1(rep$0));
         case 2:
          var rep$1=param[1];
          return caml_call1(typename_of_array,typename_of_t$1(rep$1));
         case 3:
          var rep$2=param[1];
          return caml_call1(typename_of_lazy_t,typename_of_t$1(rep$2));
         case 4:
          var rep$3=param[1];
          return caml_call1(typename_of_ref,typename_of_t$1(rep$3));
         case 5:
          var
           match=param[1],
           rng=match[2],
           dom=match[1],
           _bX_=typename_of_t$1(rng);
          return caml_call2(typename_of_function,typename_of_t$1(dom),_bX_);
         case 6:var rep$4=param[1];return caml_call1(Typerep[2][2],rep$4);
         case 7:var rep$5=param[1];return caml_call1(Typerep[10][1],rep$5);
         case 8:var rep$6=param[1];return caml_call1(Typerep[6][1],rep$6);
         default:
          var match$0=param[1],name=match$0[1];
          return caml_call1(Named[2],name)}}
    function same_witness$0(t1,t2)
     {var t1$0=t1,t2$0=t2;
      for(;;)
       {var switch$0=0;
        if(typeof t1$0 === "number")
         switch(t1$0)
          {case 0:
            if(typeof t2$0 === "number")
             {if(0 === t2$0)return _l_}
            else
             if(9 === t2$0[0])switch$0 = 1;
            break;
           case 1:
            if(typeof t2$0 === "number")
             {if(1 === t2$0)return _m_}
            else
             if(9 === t2$0[0])switch$0 = 1;
            break;
           case 2:
            if(typeof t2$0 === "number")
             {if(2 === t2$0)return _n_}
            else
             if(9 === t2$0[0])switch$0 = 1;
            break;
           case 3:
            if(typeof t2$0 === "number")
             {if(3 === t2$0)return _o_}
            else
             if(9 === t2$0[0])switch$0 = 1;
            break;
           case 4:
            if(typeof t2$0 === "number")
             {if(4 === t2$0)return _p_}
            else
             if(9 === t2$0[0])switch$0 = 1;
            break;
           case 5:
            if(typeof t2$0 === "number")
             {if(5 === t2$0)return _q_}
            else
             if(9 === t2$0[0])switch$0 = 1;
            break;
           case 6:
            if(typeof t2$0 === "number")
             {if(6 === t2$0)return _r_}
            else
             if(9 === t2$0[0])switch$0 = 1;
            break;
           case 7:
            if(typeof t2$0 === "number")
             {if(7 === t2$0)return _s_}
            else
             if(9 === t2$0[0])switch$0 = 1;
            break;
           case 8:
            if(typeof t2$0 === "number")
             {if(8 === t2$0)return _t_}
            else
             if(9 === t2$0[0])switch$0 = 1;
            break;
           default:
            if(typeof t2$0 === "number")
             {if(9 === t2$0)return _u_}
            else
             if(9 === t2$0[0])switch$0 = 1}
        else
         switch(t1$0[0])
          {case 0:
            var switch$1=0,_bu_=t1$0[1];
            if(typeof t2$0 !== "number")
             switch(t2$0[0])
              {case 0:
                var r2$0=t2$0[1],x=same_witness$0(_bu_,r2$0);return x?x:x;
               case 9:switch$0 = 1;switch$1 = 1;break
               }
            break;
           case 1:
            var switch$2=0,_bv_=t1$0[1];
            if(typeof t2$0 !== "number")
             switch(t2$0[0])
              {case 1:
                var r2$1=t2$0[1],x$0=same_witness$0(_bv_,r2$1);
                return x$0?x$0:x$0;
               case 9:switch$0 = 1;switch$2 = 1;break
               }
            break;
           case 2:
            var switch$3=0,_bw_=t1$0[1];
            if(typeof t2$0 === "number")
             switch$3 = 1;
            else
             switch(t2$0[0])
              {case 2:
                var r2$2=t2$0[1],x$1=same_witness$0(_bw_,r2$2);
                return x$1?x$1:x$1;
               case 9:switch$0 = 1;break;
               default:switch$3 = 1}
            break;
           case 3:
            var switch$4=0,_bx_=t1$0[1];
            if(typeof t2$0 === "number")
             switch$4 = 1;
            else
             switch(t2$0[0])
              {case 3:
                var r2$3=t2$0[1],x$2=same_witness$0(_bx_,r2$3);
                return x$2?x$2:x$2;
               case 9:switch$0 = 1;break;
               default:switch$4 = 1}
            break;
           case 4:
            var switch$5=0,_by_=t1$0[1];
            if(typeof t2$0 === "number")
             switch$5 = 1;
            else
             switch(t2$0[0])
              {case 4:
                var r2$4=t2$0[1],x$3=same_witness$0(_by_,r2$4);
                return x$3?x$3:x$3;
               case 9:switch$0 = 1;break;
               default:switch$5 = 1}
            break;
           case 5:
            var _bz_=t1$0[1],switch$6=0,_bA_=_bz_[2],_bB_=_bz_[1];
            if(typeof t2$0 === "number")
             switch$6 = 1;
            else
             switch(t2$0[0])
              {case 5:
                var
                 match$0=t2$0[1],
                 rng2=match$0[2],
                 dom2=match$0[1],
                 match$1=same_witness$0(_bB_,dom2),
                 match$2=same_witness$0(_bA_,rng2);
                if(match$1 && match$2)return _v_;
                return 0;
               case 9:switch$0 = 1;break;
               default:switch$6 = 1}
            break;
           case 6:
            var _bC_=t1$0[1],switch$7=0;
            if(typeof t2$0 === "number")
             switch$7 = 1;
            else
             switch(t2$0[0])
              {case 6:
                var t2$2=t2$0[1];
                switch(_bC_[0])
                 {case 0:
                   var _bD_=_bC_[1];
                   if(0 === t2$2[0])
                    {var
                      match$3=t2$2[1],
                      b2=match$3[2],
                      a2=match$3[1],
                      b1=_bD_[2],
                      a1=_bD_[1],
                      match$4=same_witness$0(a1,a2),
                      match$5=same_witness$0(b1,b2);
                     if(match$4 && match$5)return _w_;
                     return 0}
                   return 0;
                  case 1:
                   var _bE_=_bC_[1];
                   if(1 === t2$2[0])
                    {var
                      match$6=t2$2[1],
                      c2=match$6[3],
                      b2$0=match$6[2],
                      a2$0=match$6[1],
                      c1=_bE_[3],
                      b1$0=_bE_[2],
                      a1$0=_bE_[1],
                      match$7=same_witness$0(a1$0,a2$0),
                      match$8=same_witness$0(b1$0,b2$0),
                      match$9=same_witness$0(c1,c2);
                     if(match$7 && match$8 && match$9)return _x_;
                     return 0}
                   return 0;
                  case 2:
                   var _bF_=_bC_[1];
                   if(2 === t2$2[0])
                    {var
                      match$10=t2$2[1],
                      d2=match$10[4],
                      c2$0=match$10[3],
                      b2$1=match$10[2],
                      a2$1=match$10[1],
                      d1=_bF_[4],
                      c1$0=_bF_[3],
                      b1$1=_bF_[2],
                      a1$1=_bF_[1],
                      match$11=same_witness$0(a1$1,a2$1),
                      match$12=same_witness$0(b1$1,b2$1),
                      match$13=same_witness$0(c1$0,c2$0),
                      match$14=same_witness$0(d1,d2);
                     if(match$11 && match$12 && match$13 && match$14)return _y_;
                     return 0}
                   return 0;
                  default:
                   var _bG_=_bC_[1];
                   if(3 === t2$2[0])
                    {var
                      match$15=t2$2[1],
                      e2=match$15[5],
                      d2$0=match$15[4],
                      c2$1=match$15[3],
                      b2$2=match$15[2],
                      a2$2=match$15[1],
                      e1=_bG_[5],
                      d1$0=_bG_[4],
                      c1$1=_bG_[3],
                      b1$2=_bG_[2],
                      a1$2=_bG_[1],
                      match$16=same_witness$0(a1$2,a2$2),
                      match$17=same_witness$0(b1$2,b2$2),
                      match$18=same_witness$0(c1$1,c2$1),
                      match$19=same_witness$0(d1$0,d2$0),
                      match$20=same_witness$0(e1,e2);
                     if(match$16 && match$17 && match$18 && match$19 && match$20)
                      return _z_;
                     return 0}
                   return 0}
               case 9:switch$0 = 1;break;
               default:switch$7 = 1}
            break;
           case 7:
            var switch$8=0,_bH_=t1$0[1];
            if(typeof t2$0 === "number")
             switch$8 = 1;
            else
             switch(t2$0[0])
              {case 7:
                var r2$5=t2$0[1],_bI_=caml_call1(Typerep[10][1],r2$5);
                return same_witness(caml_call1(Typerep[10][1],_bH_),_bI_);
               case 9:switch$0 = 1;break;
               default:switch$8 = 1}
            break;
           case 8:
            var switch$9=0,_bJ_=t1$0[1];
            if(typeof t2$0 === "number")
             switch$9 = 1;
            else
             switch(t2$0[0])
              {case 8:
                var r2$6=t2$0[1],_bK_=caml_call1(Typerep[6][1],r2$6);
                return same_witness(caml_call1(Typerep[6][1],_bJ_),_bK_);
               case 9:switch$0 = 1;break;
               default:switch$9 = 1}
            break;
           default:
            var _bL_=t1$0[1],_bM_=_bL_[1];
            if(typeof t2$0 !== "number" && 9 === t2$0[0])
             {var
               match$21=t2$0[1],
               r2$7=match$21[2],
               name2=match$21[1],
               r1$0=_bL_[2],
               _bP_=caml_call1(Named[2],name2),
               x$4=same_witness(caml_call1(Named[2],_bM_),_bP_);
              if(x$4)return x$4;
              if(r1$0)
               {var
                 _bQ_=r1$0[1],
                 _bR_=caml_obj_tag(_bQ_),
                 _bS_=
                  250 === _bR_
                   ?_bQ_[1]
                   :246 === _bR_?caml_call1(CamlinternalLazy[2],_bQ_):_bQ_;
                if(r2$7)
                 {var
                   _bT_=r2$7[1],
                   _bU_=caml_obj_tag(_bT_),
                   t2$3=
                    250 === _bU_
                     ?_bT_[1]
                     :246 === _bU_?caml_call1(CamlinternalLazy[2],_bT_):_bT_,
                   t1$0=_bS_,
                   t2$0=t2$3;
                  continue}
                var t1$0=_bS_;
                continue}
              if(r2$7)
               {var
                 _bV_=r2$7[1],
                 _bW_=caml_obj_tag(_bV_),
                 t2$4=
                  250 === _bW_
                   ?_bV_[1]
                   :246 === _bW_?caml_call1(CamlinternalLazy[2],_bV_):_bV_,
                 t2$0=t2$4;
                continue}
              return 0}
            var r1=_bL_[2];
            if(r1)
             {var
               _bN_=r1[1],
               _bO_=caml_obj_tag(_bN_),
               t1$1=
                250 === _bO_
                 ?_bN_[1]
                 :246 === _bO_?caml_call1(CamlinternalLazy[2],_bN_):_bN_,
               t1$0=t1$1;
              continue}
            return 0}
        if(switch$0)
         {var match=t2$0[1],r2=match[2];
          if(r2)
           {var
             _bs_=r2[1],
             _bt_=caml_obj_tag(_bs_),
             t2$1=
              250 === _bt_
               ?_bs_[1]
               :246 === _bt_?caml_call1(CamlinternalLazy[2],_bs_):_bs_,
             t2$0=t2$1;
            continue}
          return 0}
        if(typeof t1$0 === "number")
         switch(t1$0)
          {case 0:break;
           case 1:return 0;
           case 2:return 0;
           case 3:return 0;
           case 4:return 0;
           case 5:return 0;
           case 6:return 0;
           case 7:return 0;
           case 8:return 0;
           default:return 0}
        else
         switch(t1$0[0])
          {case 9:break;
           case 0:return 0;
           case 1:return 0;
           case 2:return 0;
           case 3:return 0;
           case 4:return 0;
           case 5:return 0;
           case 6:return 0;
           case 7:return 0;
           default:return 0}
        return 0}}
    function same$0(a,b){return 0 !== same_witness$0(a,b)?1:0}
    function same_witness_exn$0(a,b)
     {var match=same_witness$0(a,b);
      if(match){var proof=match[1];return proof}
      throw [0,Assert_failure,_A_]}
    function head(t)
     {var t$0=t;
      for(;;)
       {if(typeof t$0 !== "number" && 9 === t$0[0])
         {var _bp_=t$0[1][2];
          if(_bp_)
           {var
             _bq_=_bp_[1],
             _br_=caml_obj_tag(_bq_),
             t$1=
              250 === _br_
               ?_bq_[1]
               :246 === _br_?caml_call1(CamlinternalLazy[2],_bq_):_bq_,
             t$0=t$1;
            continue}}
        return t$0}}
    caml_call3
     (CamlinternalMod[2],
      _B_,
      Typerep,
      [0,
       Named,
       Tuple,
       Tag_internal,
       Tag,
       Variant_internal,
       Variant,
       Field_internal,
       Field,
       Record_internal,
       Record,
       same$0,
       same_witness$0,
       same_witness_exn$0,
       typename_of_t$1,
       head]);
    var
     typerep_of_int=0,
     typerep_of_int32=1,
     typerep_of_int64=2,
     typerep_of_nativeint=3,
     typerep_of_char=4,
     typerep_of_float=5,
     typerep_of_string=6,
     typerep_of_bytes=7,
     typerep_of_bool=8,
     typerep_of_unit=9;
    function typerep_of_option(rep){return [0,rep]}
    function typerep_of_list(rep){return [1,rep]}
    function typerep_of_array(rep){return [2,rep]}
    function typerep_of_lazy_t(rep){return [3,rep]}
    function typerep_of_ref(rep){return [4,rep]}
    function typerep_of_function(dom,rng){return [5,[0,dom,rng]]}
    var typerep_of_tuple0=9;
    function typerep_of_tuple2(a,b){return [6,[0,[0,a,b]]]}
    function typerep_of_tuple3(a,b,c){return [6,[1,[0,a,b,c]]]}
    function typerep_of_tuple4(a,b,c,d){return [6,[2,[0,a,b,c,d]]]}
    function typerep_of_tuple5(a,b,c,d,e){return [6,[3,[0,a,b,c,d,e]]]}
    var
     value_tuple0=0,
     match=
      Base_Int63[114][2]
       ?[0,typerep_of_int64,typename_of_int64]
       :[0,typerep_of_int,typename_of_int],
     typename_of_int63=match[2],
     typerep_of_int63=match[1],
     include$0=
      [0,
       Typerep,
       typerep_of_int,
       typerep_of_int32,
       typerep_of_int64,
       typerep_of_nativeint,
       typerep_of_int63,
       typerep_of_char,
       typerep_of_float,
       typerep_of_string,
       typerep_of_bytes,
       typerep_of_bool,
       typerep_of_unit,
       value_tuple0,
       typerep_of_option,
       typerep_of_list,
       typerep_of_array,
       typerep_of_lazy_t,
       typerep_of_ref,
       typerep_of_function,
       typerep_of_tuple0,
       typerep_of_tuple2,
       typerep_of_tuple3,
       typerep_of_tuple4,
       typerep_of_tuple5,
       typename_of_int,
       typename_of_int32,
       typename_of_int64,
       typename_of_nativeint,
       typename_of_int63,
       typename_of_char,
       typename_of_float,
       typename_of_string,
       typename_of_bytes,
       typename_of_bool,
       typename_of_unit,
       typename_of_option,
       typename_of_list,
       typename_of_array,
       typename_of_lazy_t,
       typename_of_ref,
       typename_of_function,
       typename_of_tuple0,
       typename_of_tuple2,
       typename_of_tuple3,
       typename_of_tuple4,
       typename_of_tuple5];
    caml_register_global(75,include$0,"Typerep_lib__Std_internal");
    var Typerep_lib_Typerepable=[0];
    caml_register_global
     (76,Typerep_lib_Typerepable,"Typerep_lib__Typerepable");
    function repr_of_poly_variant(obj)
     {if(typeof obj === "number")return obj;
      var size=obj.length - 1;
      if(2 === size)
       {var repr=obj[1];
        if(typeof repr === "number")return repr;
        throw [0,Assert_failure,_C_]}
      throw [0,Assert_failure,_D_]}
    function hash_variant(s)
     {var accu=[0,0],_bm_=runtime.caml_ml_string_length(s) - 1 | 0,_bl_=0;
      if(! (_bm_ < 0))
       {var i=_bl_;
        for(;;)
         {var _bn_=runtime.caml_string_get(s,i);
          accu[1] = (223 * accu[1] | 0) + _bn_ | 0;
          var _bo_=i + 1 | 0;
          if(_bm_ !== i){var i=_bo_;continue}
          break}}
      accu[1] = accu[1] & 2147483647;
      return 1073741823 < accu[1]?accu[1] + 2147483648 | 0:accu[1]}
    var _E_=hash_variant(cst_Latency_stats);
    if(repr_of_poly_variant(-894644482) === _E_)
     {var _F_=hash_variant(cst_zero);
      if(repr_of_poly_variant(-789508312) === _F_)
       {var
         double_array_value=0.,
         has_double_array_tag=
          function(a)
           {var _bk_=caml_obj_tag(a);return Stdlib_Obj[15] === _bk_?1:0},
         double$0=[254,double_array_value,double_array_value],
         simple=[0,double_array_value,double_array_value];
        if(has_double_array_tag(double$0))
         {if(has_double_array_tag(simple))throw [0,Assert_failure,_G_];
          var
           Typerep_lib_Typerep_obj=
            [0,
             repr_of_poly_variant,
             hash_variant,
             double_array_value,
             has_double_array_tag];
          caml_register_global
           (78,Typerep_lib_Typerep_obj,"Typerep_lib__Typerep_obj");
          var
           M$0=function(X){return [0]},
           Typerep_lib_Type_generic_intf=[0,M$0];
          caml_register_global
           (79,Typerep_lib_Type_generic_intf,"Typerep_lib__Type_generic_intf");
          var
           Helper=
            function(A,B)
             {function map_variant(param,variant)
               {var
                 map=param[1],
                 typename=caml_call1(A[4][1],variant),
                 polymorphic=caml_call1(A[4][4],variant);
                function _bg_(index$0)
                 {var
                   tag$0=caml_call2(A[4][3],variant,index$0),
                   tag=tag$0[1],
                   label=caml_call1(A[2][1],tag),
                   rep=caml_call1(map,caml_call1(A[2][8],tag)),
                   arity=caml_call1(A[2][2],tag),
                   args_labels=caml_call1(A[2][3],tag),
                   index=caml_call1(A[2][4],tag),
                   ocaml_repr=caml_call1(A[2][5],tag),
                   tyid=caml_call1(A[2][7],tag),
                   param=caml_call1(A[2][6],tag);
                  if(0 === param[0])
                   var fct=param[1],create=[0,fct];
                  else
                   var k=param[1],create=[1,k];
                  return [0,
                          caml_call1
                           (B[2][9],
                            [0,label,rep,arity,args_labels,index,ocaml_repr,tyid,create])]}
                var
                 _bh_=caml_call1(A[4][2],variant),
                 tags=caml_call2(Stdlib_Array[2],_bh_,_bg_);
                function value(a)
                 {var
                   match=caml_call2(A[4][5],variant,a),
                   a$0=match[2],
                   atag=match[1],
                   _bi_=caml_call1(A[2][4],atag),
                   match$0=caml_check_bound(tags,_bi_)[1 + _bi_],
                   btag=match$0[1],
                   _bj_=caml_call1(B[2][7],btag);
                  same_witness_exn(caml_call1(A[2][7],atag),_bj_);
                  return [0,btag,a$0]}
                return caml_call1(B[4][7],[0,typename,tags,polymorphic,value])}
              function map_record(param,record)
               {var
                 map=param[1],
                 typename=caml_call1(A[8][1],record),
                 has_double_array_tag=caml_call1(A[8][4],record);
                function _bc_(index$0)
                 {var
                   field$0=caml_call2(A[8][3],record,index$0),
                   field=field$0[1],
                   label=caml_call1(A[6][1],field),
                   rep=caml_call1(map,caml_call1(A[6][6],field)),
                   index=caml_call1(A[6][2],field),
                   is_mutable=caml_call1(A[6][4],field),
                   tyid=caml_call1(A[6][5],field),
                   get=caml_call1(A[6][3],field);
                  return [0,
                          caml_call1(B[6][7],[0,label,rep,index,tyid,get,is_mutable])]}
                var
                 _bd_=caml_call1(A[8][2],record),
                 fields=caml_call2(Stdlib_Array[2],_bd_,_bc_);
                function create(param)
                 {var get=param[1];
                  function get$0(afield)
                   {var
                     _be_=caml_call1(A[6][2],afield),
                     match=caml_check_bound(fields,_be_)[1 + _be_],
                     bfield=match[1],
                     _bf_=caml_call1(B[6][5],bfield);
                    same_witness_exn(caml_call1(A[6][5],afield),_bf_);
                    return caml_call1(get,bfield)}
                  return caml_call2(A[8][5],record,[0,get$0])}
                return caml_call1
                        (B[8][7],[0,typename,fields,has_double_array_tag,create])}
              return [0,map_variant,map_record]},
           Broken_dependency=
            [248,cst_Typerep_lib_Type_generic_I,caml_fresh_oo_id(0)];
          caml_call1(Stdlib_Hashtbl[26],[0,_i_[2],_i_[3]]);
          var
           _K_=
            function(X)
             {var
               _aq_=X[2],
               _ar_=X[1],
               include=caml_call1(Stdlib_Hashtbl[26],[0,_h_[2],_h_[3]]),
               _am_=include[1],
               _an_=include[7],
               _ao_=include[10],
               _ap_=include[11];
              function find(table,key)
               {if(caml_call1(Stdlib_Lazy[3],table))
                 {var
                   _a$_=caml_obj_tag(table),
                   table$0=
                    250 === _a$_
                     ?table[1]
                     :246 === _a$_?caml_call1(CamlinternalLazy[2],table):table;
                  try
                   {var _ba_=[0,caml_call2(_an_,table$0,key)];return _ba_}
                  catch(_bb_)
                   {_bb_ = caml_wrap_exception(_bb_);
                    if(_bb_[1] !== Base[205] && _bb_ !== Caml[8])throw _bb_;
                    return 0}}
                return 0}
              var
               check_dependencies=
                _aq_
                 ?function(uid)
                   {function _a8_(param)
                     {var
                       implements$0=param[2],
                       name=param[1],
                       _a9_=1 - caml_call1(implements$0,uid);
                      if(_a9_)
                       {var
                         _a__=caml_call1(_h_[4],uid),
                         message=caml_call4(Stdlib_Printf[4],_J_,_ar_,name,_a__);
                        caml_call1(Stdlib[53],message);
                        throw [0,Broken_dependency,message]}
                      return _a9_}
                    return caml_call2(Stdlib_List[17],_a8_,_aq_)}
                 :function(param){return 0};
              function replace(table,key,value)
               {check_dependencies(key);
                var
                 _a6_=caml_obj_tag(table),
                 _a7_=
                  250 === _a6_
                   ?table[1]
                   :246 === _a6_?caml_call1(CamlinternalLazy[2],table):table;
                return caml_call3(_ao_,_a7_,key,value)}
              function mem(table,key)
               {if(caml_call1(Stdlib_Lazy[3],table))
                 {var
                   _a5_=caml_obj_tag(table),
                   table$0=
                    250 === _a5_
                     ?table[1]
                     :246 === _a5_?caml_call1(CamlinternalLazy[2],table):table;
                  return caml_call2(_ap_,table$0,key)}
                return 0}
              var
               size=256,
               table0=[246,function(_a4_){return caml_call1(_am_,size)}],
               table1=[246,function(_a3_){return caml_call1(_am_,size)}],
               table2=[246,function(_a2_){return caml_call1(_am_,size)}],
               table3=[246,function(_a1_){return caml_call1(_am_,size)}],
               table4=[246,function(_a0_){return caml_call1(_am_,size)}],
               table5=[246,function(_aZ_){return caml_call1(_am_,size)}];
              function is_registered(uid)
               {var _aT_=mem(table0,uid);
                if(_aT_)
                 var _aU_=_aT_;
                else
                 {var _aV_=mem(table1,uid);
                  if(_aV_)
                   var _aU_=_aV_;
                  else
                   {var _aW_=mem(table2,uid);
                    if(_aW_)
                     var _aU_=_aW_;
                    else
                     {var _aX_=mem(table3,uid);
                      if(_aX_)
                       var _aU_=_aX_;
                      else
                       {var _aY_=mem(table4,uid);
                        if(! _aY_)return mem(table5,uid);
                        var _aU_=_aY_}}}}
                return _aU_}
              var ident=[0,_ar_,is_registered];
              function register0(compute)
               {var uid=compute[2][1];return replace(table0,uid,compute)}
              function register1(compute)
               {var uid=caml_call1(compute[2],unit)[1];
                return replace(table1,uid,compute)}
              function register2(compute)
               {var uid=caml_call2(compute[2],unit,unit)[1];
                return replace(table2,uid,compute)}
              function register3(compute)
               {var uid=caml_call3(compute[2],unit,unit,unit)[1];
                return replace(table3,uid,compute)}
              function register4(compute)
               {var uid=caml_call4(compute[2],unit,unit,unit,unit)[1];
                return replace(table4,uid,compute)}
              function register5(compute)
               {var uid=caml_call5(compute[2],unit,unit,unit,unit,unit)[1];
                return replace(table5,uid,compute)}
              function register(typerep_of_a,compute)
               {var typename_of_t=caml_call1(Typerep[14],typerep_of_a);
                return register0([0,typerep_of_a,typename_of_t,compute])}
              var
               Not_implemented=
                [248,cst_Typerep_lib_Type_generic_M$0,caml_fresh_oo_id(0)],
               Memo=Table([0]),
               Helper$0=
                Helper
                 ([0,
                   Typerep[3],
                   Typerep[4],
                   Typerep[5],
                   Typerep[6],
                   Typerep[7],
                   Typerep[8],
                   Typerep[9],
                   Typerep[10]],
                  [0,X[3],X[4],X[5],X[6],X[7],X[8],X[9],X[10]]);
              function of_typerep(rep)
               {var
                 context=caml_call1(X[33][1][1],0),
                 memo_table=caml_call1(Memo[1],32);
                function of_typerep(param)
                 {var param$0=param;
                  for(;;)
                   if(typeof param$0 === "number")
                    switch(param$0)
                     {case 0:return X[11];
                      case 1:return X[12];
                      case 2:return X[13];
                      case 3:return X[14];
                      case 4:return X[15];
                      case 5:return X[16];
                      case 6:return X[17];
                      case 7:return X[18];
                      case 8:return X[19];
                      default:return X[20]}
                   else
                    switch(param$0[0])
                     {case 0:
                       var rep$11=param$0[1],_aI_=of_typerep(rep$11);
                       return caml_call1(X[21],_aI_);
                      case 1:
                       var rep$12=param$0[1],_aJ_=of_typerep(rep$12);
                       return caml_call1(X[22],_aJ_);
                      case 2:
                       var rep$13=param$0[1],_aK_=of_typerep(rep$13);
                       return caml_call1(X[23],_aK_);
                      case 3:
                       var rep$14=param$0[1],_aL_=of_typerep(rep$14);
                       return caml_call1(X[24],_aL_);
                      case 4:
                       var rep$15=param$0[1],_aM_=of_typerep(rep$15);
                       return caml_call1(X[25],_aM_);
                      case 5:
                       var
                        match$11=param$0[1],
                        rng=match$11[2],
                        dom=match$11[1],
                        _aN_=of_typerep(rng),
                        _aO_=of_typerep(dom);
                       return caml_call2(X[26],_aO_,_aN_);
                      case 6:
                       var tuple=param$0[1];
                       switch(tuple[0])
                        {case 0:
                          var
                           match$12=tuple[1],
                           b=match$12[2],
                           a=match$12[1],
                           ra=of_typerep(a),
                           rb=of_typerep(b);
                          return caml_call2(X[27],ra,rb);
                         case 1:
                          var
                           match$13=tuple[1],
                           c=match$13[3],
                           b$0=match$13[2],
                           a$0=match$13[1],
                           ra$0=of_typerep(a$0),
                           rb$0=of_typerep(b$0),
                           rc=of_typerep(c);
                          return caml_call3(X[28],ra$0,rb$0,rc);
                         case 2:
                          var
                           match$14=tuple[1],
                           d=match$14[4],
                           c$0=match$14[3],
                           b$1=match$14[2],
                           a$1=match$14[1],
                           ra$1=of_typerep(a$1),
                           rb$1=of_typerep(b$1),
                           rc$0=of_typerep(c$0),
                           rd=of_typerep(d);
                          return caml_call4(X[29],ra$1,rb$1,rc$0,rd);
                         default:
                          var
                           match$15=tuple[1],
                           e=match$15[5],
                           d$0=match$15[4],
                           c$1=match$15[3],
                           b$2=match$15[2],
                           a$2=match$15[1],
                           ra$2=of_typerep(a$2),
                           rb$2=of_typerep(b$2),
                           rc$1=of_typerep(c$1),
                           rd$0=of_typerep(d$0),
                           re=of_typerep(e);
                          return caml_call5(X[30],ra$2,rb$2,rc$1,rd$0,re)}
                      case 7:
                       var
                        record=param$0[1],
                        _aP_=caml_call2(Helper$0[2],[0,of_typerep],record);
                       return caml_call1(X[31],_aP_);
                      case 8:
                       var
                        variant=param$0[1],
                        _aQ_=caml_call2(Helper$0[1],[0,of_typerep],variant);
                       return caml_call1(X[32],_aQ_);
                      default:
                       var
                        match$16=param$0[1],
                        content=match$16[2],
                        named=match$16[1],
                        typename=caml_call1(Typerep[1][2],named),
                        match$17=caml_call2(Memo[4],memo_table,typename);
                       if(match$17)
                        {var shared=match$17[1];return caml_call1(X[33][3],shared)}
                       switch(named[0])
                        {case 0:
                          var rep$5=named[1],match=find(table0,rep$5[2][1]);
                          if(match)
                           {var
                             rep=match[1],
                             witness=same_witness_exn(rep[2],rep$5[1]),
                             L=Lift([0]),
                             _as_=rep[3];
                            caml_call1(L[1],witness);
                            var match$5=[0,_as_]}
                          else
                           var match$5=0;
                          if(match$5)
                           var custom=match$5[1],match$18=[0,custom];
                          else
                           var match$18=0;
                          break;
                         case 1:
                          var rep$6=named[1],match$0=find(table1,rep$6[3][1]);
                          if(match$0)
                           {var
                             rep$0=match$0[1],
                             typename_of_t=rep$6[2],
                             Conv$3=Same_witness_exn_1([0,rep$0[2]],[0,typename_of_t]),
                             L$0=Lift([0]),
                             _at_=rep$0[3];
                            caml_call1(L$0[1],Conv$3[1][1]);
                            var match$6=[0,_at_]}
                          else
                           var match$6=0;
                          if(match$6)
                           var
                            custom$0=match$6[1],
                            custom$1=caml_call1(custom$0,of_typerep(rep$6[1])),
                            match$18=[0,custom$1];
                          else
                           var match$18=0;
                          break;
                         case 2:
                          var rep$7=named[1],match$1=find(table2,rep$7[4][1]);
                          if(match$1)
                           {var
                             rep$1=match$1[1],
                             typename_of_t$0=rep$7[3],
                             Conv$2=Same_witness_exn_2([0,rep$1[2]],[0,typename_of_t$0]),
                             L$1=Lift([0]),
                             _au_=rep$1[3];
                            caml_call1(L$1[1],Conv$2[1][1]);
                            var match$7=[0,_au_]}
                          else
                           var match$7=0;
                          if(match$7)
                           var
                            custom$2=match$7[1],
                            _ay_=of_typerep(rep$7[2]),
                            custom$3=caml_call2(custom$2,of_typerep(rep$7[1]),_ay_),
                            match$18=[0,custom$3];
                          else
                           var match$18=0;
                          break;
                         case 3:
                          var rep$8=named[1],match$2=find(table3,rep$8[5][1]);
                          if(match$2)
                           {var
                             rep$2=match$2[1],
                             typename_of_t$1=rep$8[4],
                             Conv$1=Same_witness_exn_3([0,rep$2[2]],[0,typename_of_t$1]),
                             L$2=Lift([0]),
                             _av_=rep$2[3];
                            caml_call1(L$2[1],Conv$1[1][1]);
                            var match$8=[0,_av_]}
                          else
                           var match$8=0;
                          if(match$8)
                           var
                            custom$4=match$8[1],
                            _az_=of_typerep(rep$8[3]),
                            _aA_=of_typerep(rep$8[2]),
                            custom$5=caml_call3(custom$4,of_typerep(rep$8[1]),_aA_,_az_),
                            match$18=[0,custom$5];
                          else
                           var match$18=0;
                          break;
                         case 4:
                          var rep$9=named[1],match$3=find(table4,rep$9[6][1]);
                          if(match$3)
                           {var
                             rep$3=match$3[1],
                             typename_of_t$2=rep$9[5],
                             Conv$0=Same_witness_exn_4([0,rep$3[2]],[0,typename_of_t$2]),
                             L$3=Lift([0]),
                             _aw_=rep$3[3];
                            caml_call1(L$3[1],Conv$0[1][1]);
                            var match$9=[0,_aw_]}
                          else
                           var match$9=0;
                          if(match$9)
                           var
                            custom$6=match$9[1],
                            _aB_=of_typerep(rep$9[4]),
                            _aC_=of_typerep(rep$9[3]),
                            _aD_=of_typerep(rep$9[2]),
                            custom$7=
                             caml_call4(custom$6,of_typerep(rep$9[1]),_aD_,_aC_,_aB_),
                            match$18=[0,custom$7];
                          else
                           var match$18=0;
                          break;
                         default:
                          var rep$10=named[1],match$4=find(table5,rep$10[7][1]);
                          if(match$4)
                           {var
                             rep$4=match$4[1],
                             typename_of_t$3=rep$10[6],
                             Conv=Same_witness_exn_5([0,rep$4[2]],[0,typename_of_t$3]),
                             L$4=Lift([0]),
                             _ax_=rep$4[3];
                            caml_call1(L$4[1],Conv[1][1]);
                            var match$10=[0,_ax_]}
                          else
                           var match$10=0;
                          if(match$10)
                           var
                            custom$8=match$10[1],
                            _aE_=of_typerep(rep$10[5]),
                            _aF_=of_typerep(rep$10[4]),
                            _aG_=of_typerep(rep$10[3]),
                            _aH_=of_typerep(rep$10[2]),
                            custom$9=
                             caml_call5
                              (custom$8,of_typerep(rep$10[1]),_aH_,_aG_,_aF_,_aE_),
                            match$18=[0,custom$9];
                          else
                           var match$18=0}
                       if(match$18){var computation=match$18[1];return computation}
                       if(content)
                        {var
                          _aR_=content[1],
                          _aS_=caml_obj_tag(_aR_),
                          content$0=
                           250 === _aS_
                            ?_aR_[1]
                            :246 === _aS_?caml_call1(CamlinternalLazy[2],_aR_):_aR_;
                         if(caml_call1(X[33][5],content$0))
                          {var shared$0=caml_call2(X[33][2],context,typename);
                           caml_call3(Memo[3],memo_table,typename,shared$0);
                           var computation$0=of_typerep(content$0);
                           return caml_call2(X[33][4],shared$0,computation$0)}
                         var param$0=content$0;
                         continue}
                       var string=caml_call1(_h_[4],typename[1]);
                       throw [0,Not_implemented,_ar_,string]}}
                var computation=of_typerep(rep);
                return [0,911962647,computation]}
              return [0,
                      ident,
                      Not_implemented,
                      register0,
                      register1,
                      register2,
                      register3,
                      register4,
                      register5,
                      register,
                      of_typerep,
                      [0,
                       X[3],
                       X[4],
                       X[5],
                       X[6],
                       X[7],
                       X[8],
                       X[9],
                       X[10],
                       X[11],
                       X[12],
                       X[13],
                       X[14],
                       X[15],
                       X[16],
                       X[17],
                       X[18],
                       X[19],
                       X[20],
                       X[21],
                       X[22],
                       X[23],
                       X[24],
                       X[25],
                       X[26],
                       X[27],
                       X[28],
                       X[29],
                       X[30],
                       X[31],
                       X[32],
                       X[33]]]},
           _L_=[0],
           Typerep_lib_Type_generic=
            [0,
             Typerep_lib_Variant_and_record,
             Helper,
             function(_ai_)
              {function create(_al_){return 0}
               var
                Context=[0,create],
                Undefined=
                 [248,cst_Typerep_lib_Type_generic_M,caml_fresh_oo_id(0)];
               function init(param,name)
                {var
                  path=caml_call1(_h_[4],name[1]),
                  r=[0,function(param){throw [0,Undefined,path]}],
                  _ak_=[0,0];
                 return [0,
                         function(input){return caml_call1(r[1],input)},
                         r,
                         _ak_]}
               function get_wip_computation(shared)
                {var _aj_=shared[3][1];
                 if(_aj_){var clos=_aj_[1];return clos}
                 return shared[1]}
               function set_final_computation(shared,computation)
                {var compiletime_dereference=shared[3];
                 if(compiletime_dereference[1])throw [0,Assert_failure,_H_];
                 if(caml_call2(Base[203],shared[1],computation))
                  throw [0,Assert_failure,_I_];
                 compiletime_dereference[1] = [0,computation];
                 shared[2][1] = computation;
                 return computation}
               function share(param){return 1}
               return [0,
                       Context,
                       init,
                       get_wip_computation,
                       set_final_computation,
                       share]},
             _L_,
             _K_];
          caml_register_global
           (81,Typerep_lib_Type_generic,"Typerep_lib__Type_generic");
          var
           _M_=
            function(X)
             {var Name_of_x=_b_(X),typename_of_t=Name_of_x[1];
              function named(of_p1,of_p2,of_p3,of_p4,of_p5)
               {var
                 _ad_=caml_call1(Typerep[14],of_p5),
                 _ae_=caml_call1(Typerep[14],of_p4),
                 _af_=caml_call1(Typerep[14],of_p3),
                 _ag_=caml_call1(Typerep[14],of_p2),
                 _ah_=caml_call1(Typerep[14],of_p1),
                 typename_of_t=
                  caml_call5(Name_of_x[1],_ah_,_ag_,_af_,_ae_,_ad_),
                 typename_of_named=Name_of_x[1];
                return [5,
                        [0,
                         of_p1,
                         of_p2,
                         of_p3,
                         of_p4,
                         of_p5,
                         typename_of_named,
                         typename_of_t,
                         witness]]}
              return [0,named,typename_of_t]},
           _N_=
            function(X)
             {var Name_of_x=_c_(X),typename_of_t=Name_of_x[1];
              function named(of_p1,of_p2,of_p3,of_p4)
               {var
                 _$_=caml_call1(Typerep[14],of_p4),
                 _aa_=caml_call1(Typerep[14],of_p3),
                 _ab_=caml_call1(Typerep[14],of_p2),
                 _ac_=caml_call1(Typerep[14],of_p1),
                 typename_of_t=caml_call4(Name_of_x[1],_ac_,_ab_,_aa_,_$_),
                 typename_of_named=Name_of_x[1];
                return [4,
                        [0,
                         of_p1,
                         of_p2,
                         of_p3,
                         of_p4,
                         typename_of_named,
                         typename_of_t,
                         witness]]}
              return [0,named,typename_of_t]},
           _O_=
            function(X)
             {var Name_of_x=_d_(X),typename_of_t=Name_of_x[1];
              function named(of_p1,of_p2,of_p3)
               {var
                 _Y_=caml_call1(Typerep[14],of_p3),
                 _Z_=caml_call1(Typerep[14],of_p2),
                 ___=caml_call1(Typerep[14],of_p1),
                 typename_of_t=caml_call3(Name_of_x[1],___,_Z_,_Y_),
                 typename_of_named=Name_of_x[1];
                return [3,
                        [0,
                         of_p1,
                         of_p2,
                         of_p3,
                         typename_of_named,
                         typename_of_t,
                         witness]]}
              return [0,named,typename_of_t]},
           _P_=
            function(X)
             {var Name_of_x=_e_(X),typename_of_t=Name_of_x[1];
              function named(of_p1,of_p2)
               {var
                 _W_=caml_call1(Typerep[14],of_p2),
                 _X_=caml_call1(Typerep[14],of_p1),
                 typename_of_t=caml_call2(Name_of_x[1],_X_,_W_),
                 typename_of_named=Name_of_x[1];
                return [2,
                        [0,of_p1,of_p2,typename_of_named,typename_of_t,witness]]}
              return [0,named,typename_of_t]},
           _Q_=
            function(X)
             {var Name_of_x=_f_(X),typename_of_t=Name_of_x[1];
              function named(of_p1)
               {var
                 _V_=caml_call1(Typerep[14],of_p1),
                 typename_of_t=caml_call1(Name_of_x[1],_V_),
                 typename_of_named=Name_of_x[1];
                return [1,[0,of_p1,typename_of_named,typename_of_t,witness]]}
              return [0,named,typename_of_t]},
           _R_=
            function(X)
             {var
               Name_of_x=_g_(X),
               typename_of_t=Name_of_x[1],
               typename_of_named=Name_of_x[1],
               named=[0,[0,typename_of_named,typename_of_t,witness]];
              return [0,named,typename_of_t]},
           Typerep_lib_Make_typename=[0,_R_,_Q_,_P_,_O_,_N_,_M_];
          caml_register_global
           (82,Typerep_lib_Make_typename,"Typerep_lib__Make_typename");
          var
           Make0=
            function(X)
             {var M=_R_(X),typerep_of_t=[9,[0,M[1],0]],typename_of_t=M[2];
              return [0,typerep_of_t,typename_of_t]},
           Make1=
            function(X)
             {var M=_Q_(X);
              function typerep_of_t(of_p1)
               {return [9,[0,caml_call1(M[1],of_p1),0]]}
              var typename_of_t=M[2];
              return [0,typerep_of_t,typename_of_t]},
           Make2=
            function(X)
             {var M=_P_(X);
              function typerep_of_t(of_p1,of_p2)
               {return [9,[0,caml_call2(M[1],of_p1,of_p2),0]]}
              var typename_of_t=M[2];
              return [0,typerep_of_t,typename_of_t]},
           Make3=
            function(X)
             {var M=_O_(X);
              function typerep_of_t(of_p1,of_p2,of_p3)
               {return [9,[0,caml_call3(M[1],of_p1,of_p2,of_p3),0]]}
              var typename_of_t=M[2];
              return [0,typerep_of_t,typename_of_t]},
           Make4=
            function(X)
             {var M=_N_(X);
              function typerep_of_t(of_p1,of_p2,of_p3,of_p4)
               {return [9,[0,caml_call4(M[1],of_p1,of_p2,of_p3,of_p4),0]]}
              var typename_of_t=M[2];
              return [0,typerep_of_t,typename_of_t]},
           Make5=
            function(X)
             {var M=_M_(X);
              function typerep_of_t(of_p1,of_p2,of_p3,of_p4,of_p5)
               {return [9,
                        [0,caml_call5(M[1],of_p1,of_p2,of_p3,of_p4,of_p5),0]]}
              var typename_of_t=M[2];
              return [0,typerep_of_t,typename_of_t]},
           Typerep_lib_Type_abstract=[0,Make0,Make1,Make2,Make3,Make4,Make5];
          caml_register_global
           (83,Typerep_lib_Type_abstract,"Typerep_lib__Type_abstract");
          var
           Typerep_lib_Std=
            [0,
             Typerep,
             typerep_of_int,
             typerep_of_int32,
             typerep_of_int64,
             typerep_of_nativeint,
             typerep_of_int63,
             typerep_of_char,
             typerep_of_float,
             typerep_of_string,
             typerep_of_bytes,
             typerep_of_bool,
             typerep_of_unit,
             value_tuple0,
             typerep_of_option,
             typerep_of_list,
             typerep_of_array,
             typerep_of_lazy_t,
             typerep_of_ref,
             typerep_of_function,
             typerep_of_tuple0,
             typerep_of_tuple2,
             typerep_of_tuple3,
             typerep_of_tuple4,
             typerep_of_tuple5,
             typename_of_int,
             typename_of_int32,
             typename_of_int64,
             typename_of_nativeint,
             typename_of_int63,
             typename_of_char,
             typename_of_float,
             typename_of_string,
             typename_of_bytes,
             typename_of_bool,
             typename_of_unit,
             typename_of_option,
             typename_of_list,
             typename_of_array,
             typename_of_lazy_t,
             typename_of_ref,
             typename_of_function,
             typename_of_tuple0,
             typename_of_tuple2,
             typename_of_tuple3,
             typename_of_tuple4,
             typename_of_tuple5];
          caml_register_global(84,Typerep_lib_Std,"Typerep_lib__Std");
          return}
        throw [0,Assert_failure,_S_]}
      throw [0,Assert_failure,_T_]}
    throw [0,Assert_failure,_U_]}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ0eXBlcmVwX2xpYi5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
