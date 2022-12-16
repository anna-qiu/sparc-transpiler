(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_bswap16=runtime.caml_bswap16,
     caml_div=runtime.caml_div,
     caml_greaterequal=runtime.caml_greaterequal,
     caml_int32_bswap=runtime.caml_int32_bswap,
     caml_int64_add=runtime.caml_int64_add,
     caml_int64_and=runtime.caml_int64_and,
     caml_int64_bswap=runtime.caml_int64_bswap,
     caml_int64_div=runtime.caml_int64_div,
     caml_int64_mul=runtime.caml_int64_mul,
     caml_int64_of_int32=runtime.caml_int64_of_int32,
     caml_int64_sub=runtime.caml_int64_sub,
     caml_int64_to_int32=runtime.caml_int64_to_int32,
     caml_lessequal=runtime.caml_lessequal,
     caml_mul=runtime.caml_mul,
     caml_string_get16=runtime.caml_string_get16,
     caml_string_get32=runtime.caml_string_get32,
     caml_string_get64=runtime.caml_string_get64,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Int_repr_Uint64_t_of_sexp_=
      caml_string_of_jsbytes("Int_repr.Uint64.t_of_sexp: integer atom needed"),
     cst_Int_repr_Uint64_t_of_sexp_$0=
      caml_string_of_jsbytes("Int_repr.Uint64.t_of_sexp: atom needed"),
     cst_Int_repr_Uint63_t_of_sexp_=
      caml_string_of_jsbytes("Int_repr.Uint63.t_of_sexp: integer atom needed"),
     cst_Int_repr_Uint63_t_of_sexp_$0=
      caml_string_of_jsbytes("Int_repr.Uint63.t_of_sexp: atom needed"),
     cst_Int_repr_Uint32_t_of_sexp_=
      caml_string_of_jsbytes("Int_repr.Uint32.t_of_sexp: integer atom needed"),
     cst_Int_repr_Uint32_t_of_sexp_$0=
      caml_string_of_jsbytes("Int_repr.Uint32.t_of_sexp: atom needed"),
     cst_value_cannot_be_represente=
      caml_string_of_jsbytes(": value cannot be represented"),
     cst_Int_repr=caml_string_of_jsbytes("Int_repr"),
     cst_int_repr=caml_string_of_jsbytes("int_repr"),
     cst_src_int_repr_ml=caml_string_of_jsbytes("src/int_repr.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_int_repr$0=caml_string_of_jsbytes("int_repr"),
     mod_name=caml_string_of_jsbytes("Int8"),
     mod_name$0=caml_string_of_jsbytes("Uint8"),
     mod_name$1=caml_string_of_jsbytes("Int16"),
     mod_name$2=caml_string_of_jsbytes("Uint16"),
     mod_name$3=caml_string_of_jsbytes("Int32"),
     mod_name$4=caml_string_of_jsbytes("Uint32"),
     mod_name$5=caml_string_of_jsbytes("Int32"),
     mod_name$6=caml_string_of_jsbytes("Uint32"),
     mod_name$7=caml_string_of_jsbytes("Int63"),
     mod_name$8=caml_string_of_jsbytes("Uint63"),
     mod_name$9=caml_string_of_jsbytes("Int64"),
     max_value$12=runtime.caml_int64_create_lo_mi_hi(16777215,16777215,65535),
     mod_name$10=caml_string_of_jsbytes("Uint64"),
     cst_int_repr$1=caml_string_of_jsbytes("int_repr"),
     cst_Int_repr$0=caml_string_of_jsbytes("Int_repr"),
     Stdlib_Sys=global_data.Stdlib__Sys,
     Stdlib_Scanf=global_data.Stdlib__Scanf,
     Stdlib_Printf=global_data.Stdlib__Printf,
     Base_Int63=global_data.Base__Int63,
     Base_Int64=global_data.Base__Int64,
     Stdlib_Int64=global_data.Stdlib__Int64,
     Base_Int32=global_data.Base__Int32,
     Stdlib_Int32=global_data.Stdlib__Int32,
     Base_Int=global_data.Base__Int,
     Stdlib=global_data.Stdlib,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base=global_data.Base,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Base_Comparable=global_data.Base__Comparable,
     Typerep_lib_Std=global_data.Typerep_lib__Std,
     Base_quickcheck_Generator=global_data.Base_quickcheck__Generator,
     Base_quickcheck_Observer=global_data.Base_quickcheck__Observer,
     Base_quickcheck_Shrinker=global_data.Base_quickcheck__Shrinker,
     Base_quickcheck=global_data.Base_quickcheck,
     Stdlib_Bytes=global_data.Stdlib__Bytes;
    caml_call1(Ppx_module_timer_runtime[4],cst_Int_repr);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_int_repr);
    caml_call1(Expect_test_collector[5][1],cst_src_int_repr_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_int_repr$0,cst);
    var
     _bk_=[0,[7,12,0,0,0],caml_string_of_jsbytes("%Lu")],
     _bj_=[0,[7,12,0,0,0],caml_string_of_jsbytes("%Lu")],
     _bi_=runtime.caml_int64_create_lo_mi_hi(16777215,16777215,32767),
     _bh_=[0,[7,12,0,0,0],caml_string_of_jsbytes("%Lu")],
     _bg_=[0,[7,12,0,0,0],caml_string_of_jsbytes("%Lu")],
     _bf_=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     _be_=runtime.caml_int64_create_lo_mi_hi(16777215,16777215,32767),
     _bd_=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     _a6_=[0,[5,12,0,0,0],caml_string_of_jsbytes("%lu")],
     _a5_=[0,[5,12,0,0,0],caml_string_of_jsbytes("%lu")],
     _a4_=runtime.caml_int64_create_lo_mi_hi(16777215,255,0),
     _a2_=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     _a3_=runtime.caml_int64_create_lo_mi_hi(16777215,255,0),
     _a0_=runtime.caml_int64_create_lo_mi_hi(16777215,127,0),
     _aU_=runtime.caml_int64_create_lo_mi_hi(16777215,255,0),
     _aV_=runtime.caml_int64_create_lo_mi_hi(16777215,255,0),
     _bc_=runtime.caml_int64_create_lo_mi_hi(16777215,16777215,32767);
    function raise_cannot_repr(mod_name,to_string,x)
     {var
       _dc_=caml_call1(to_string,x),
       _dd_=[0,caml_call1(Sexplib0_Sexp_conv[7],_dc_),0],
       _de_=caml_call2(Stdlib[28],mod_name,cst_value_cannot_be_represente),
       _df_=[1,[0,caml_call1(Sexplib0_Sexp_conv[7],_de_),_dd_]];
      return caml_call1(Base[202],_df_)}
    function trunc_unsigned(conv,logand,mask,x)
     {return caml_call1(conv,caml_call2(logand,x,mask))}
    function exn_unsigned(conv,logand,mask,equal,mod_name,to_string,x)
     {var y=trunc_unsigned(function(_db_){return _db_},logand,mask,x);
      return caml_call2(equal,x,y)
              ?caml_call1(conv,y)
              :raise_cannot_repr(mod_name,to_string,x)}
    function trunc_signed(shift_left,shift_right,shift,x)
     {return caml_call2(shift_right,caml_call2(shift_left,x,shift),shift)}
    function exn_signed
     (shift_left,shift_right,shift,equal,mod_name,to_string,x)
     {var y=trunc_signed(shift_left,shift_right,shift,x);
      return caml_call2(equal,x,y)?y:raise_cannot_repr(mod_name,to_string,x)}
    function identity_if_positive(greater_equal,zero,mod_name,to_string,x)
     {return caml_call2(greater_equal,x,zero)
              ?x
              :raise_cannot_repr(mod_name,to_string,x)}
    function of_sexp_error(what,sexp)
     {throw [0,Sexplib0_Sexp_conv[25],[0,Stdlib[7],what],sexp]}
    var
     include=caml_call1(caml_call1(Stdlib_Sys[51][1],[0]),[0]),
     repr=include[1];
    function to_int32(x){return repr?x:caml_call1(Base_Int32[103],x)}
    function to_int64(x)
     {return repr?caml_int64_of_int32(x):caml_int64_of_int32(x)}
    var compare=Base_Int[13],hash_fold_t=Base_Int[6],func=Base_Int[7];
    function hash(x){return caml_call1(func,x)}
    var
     t_of_sexp=Base_Int[8],
     sexp_of_t=Base_Int[9],
     include$0=caml_call1(Base_Comparable[10],[0,compare,sexp_of_t]),
     _g_=include$0[7],
     _n_=Base_Int[48],
     _o_=Base_Int[49],
     shift=Base_Int[59] - 8 | 0,
     _a_=include$0[1],
     _b_=include$0[2],
     _c_=include$0[3],
     _d_=include$0[4],
     _e_=include$0[5],
     _f_=include$0[6],
     _h_=include$0[8],
     _i_=include$0[9],
     _j_=include$0[10],
     _k_=Typerep_lib_Std[2],
     _l_=Typerep_lib_Std[25],
     _m_=Base_Int[74],
     min_value=-128,
     max_value=127,
     signed=1,
     num_bits=8,
     num_bytes=1,
     _p_=Base_Int[11];
    function trunc(x){return trunc_signed(_n_,_o_,shift,x)}
    function exn(x){return exn_signed(_n_,_o_,shift,_g_,mod_name,_p_,x)}
    function of_base_int_trunc(x){return trunc(x)}
    function of_base_int_exn(x){return exn(x)}
    function to_base_int(x){return x}
    function of_int16_trunc(x){return trunc(x)}
    function of_int16_exn(x){return exn(x)}
    function of_int32_trunc(x)
     {var _da_=to_int32(x);return trunc(caml_call1(Base_Int32[104],_da_))}
    function of_int32_exn(x)
     {var _c$_=to_int32(x);return exn(caml_call1(Base_Int32[5],_c$_))}
    function of_int63_trunc(x){return trunc(caml_call1(Base_Int63[103],x))}
    function of_int63_exn(x){return exn(caml_call1(Base_Int63[5],x))}
    function of_int64_trunc(x){return trunc(caml_int64_to_int32(x))}
    function of_int64_exn(x){return exn(caml_call1(Base_Int64[5],x))}
    function of_uint8_wrap(x){return trunc(x)}
    function of_uint8_exn(x){return exn(x)}
    var
     quickcheck_generator=
      caml_call2(Base_quickcheck_Generator[69],min_value,max_value),
     quickcheck_observer=
      caml_call2
       (Base_quickcheck_Observer[33],Base_quickcheck_Observer[7],trunc);
    function _q_(x){return caml_call2(_g_,x,trunc(x))}
    var
     quickcheck_shrinker=
      caml_call2(Base_quickcheck_Shrinker[32],Base_quickcheck_Shrinker[7],_q_);
    function symbol(_c__,_c9_){return _c9_ <= _c__?1:0}
    function symbol$0(_c8_,_c7_){return _c8_ <= _c7_?1:0}
    function symbol$1(_c6_,_c5_){return _c6_ === _c5_?1:0}
    function symbol$2(_c4_,_c3_){return _c3_ < _c4_?1:0}
    function symbol$3(_c2_,_c1_){return _c2_ < _c1_?1:0}
    function symbol$4(_c0_,_cZ_){return _c0_ !== _cZ_?1:0}
    function symbol$5(x,y){return trunc(x + y | 0)}
    function symbol$6(x,y){return trunc(x - y | 0)}
    function symbol$7(x,y){return trunc(caml_mul(x,y))}
    function symbol$8(x,y){return trunc(caml_div(x,y))}
    var
     Wrap=[0,symbol$5,symbol$6,symbol$7,symbol$8],
     O=[0,symbol,symbol$0,symbol$1,symbol$2,symbol$3,symbol$4,Wrap],
     compare$0=Base_Int[13],
     hash_fold_t$0=Base_Int[6],
     func$0=Base_Int[7];
    function hash$0(x){return caml_call1(func$0,x)}
    var
     t_of_sexp$0=Base_Int[8],
     sexp_of_t$0=Base_Int[9],
     include$1=caml_call1(Base_Comparable[10],[0,compare$0,sexp_of_t$0]),
     _D_=Base_Int[74],
     conv=caml_int64_to_int32,
     _r_=include$1[1],
     _s_=include$1[2],
     _t_=include$1[3],
     _u_=include$1[4],
     _v_=include$1[5],
     _w_=include$1[6],
     _x_=include$1[8],
     _y_=include$1[9],
     _z_=include$1[10],
     _A_=Typerep_lib_Std[2],
     _B_=Typerep_lib_Std[25],
     _C_=Base_Int[74],
     max_value$0=255,
     signed$0=0,
     num_bits$0=8,
     num_bytes$0=1;
    function logand(_cY_,_cX_){return _cY_ & _cX_}
    var
     logand64=caml_int64_and,
     mask64=caml_int64_of_int32(255),
     _E_=Base_Int[12],
     mask=255,
     _F_=Base_Int64[12],
     _G_=Base_Int[11],
     _H_=Base_Int64[11];
    function trunc$0(x)
     {return trunc_unsigned(function(_cW_){return _cW_},logand,mask,x)}
    function exn$0(x)
     {return exn_unsigned
              (function(_cV_){return _cV_},logand,mask,_E_,mod_name$0,_G_,x)}
    function trunc64(x){return trunc_unsigned(conv,logand64,mask64,x)}
    function exn64(x)
     {return exn_unsigned(conv,logand64,mask64,_F_,mod_name$0,_H_,x)}
    function of_base_int_trunc$0(x){return trunc$0(x)}
    function of_base_int_exn$0(x){return exn$0(x)}
    function to_base_int$0(x){return x}
    function of_uint16_trunc(x){return trunc$0(x)}
    function of_uint16_exn(x){return exn$0(x)}
    function of_uint32_trunc(x){return trunc64(to_int64(x))}
    function of_uint32_exn(x){return exn64(to_int64(x))}
    function of_uint63_trunc(x){return trunc64(caml_call1(Base_Int63[79],x))}
    function of_uint63_exn(x){return exn64(caml_call1(Base_Int63[79],x))}
    function of_uint64_trunc(x){return trunc64(x)}
    function of_uint64_exn(x){return exn64(x)}
    function of_int8_wrap(x){return trunc$0(x)}
    function of_int8_exn(x){return exn$0(x)}
    var
     quickcheck_generator$0=
      caml_call2(Base_quickcheck_Generator[69],_D_,max_value$0),
     quickcheck_observer$0=
      caml_call2
       (Base_quickcheck_Observer[33],Base_quickcheck_Observer[7],trunc$0);
    function _I_(x){return caml_call2(_E_,x,trunc$0(x))}
    var
     quickcheck_shrinker$0=
      caml_call2(Base_quickcheck_Shrinker[32],Base_quickcheck_Shrinker[7],_I_);
    function symbol$9(_cU_,_cT_){return _cT_ <= _cU_?1:0}
    function symbol$10(_cS_,_cR_){return _cS_ <= _cR_?1:0}
    function symbol$11(_cQ_,_cP_){return _cQ_ === _cP_?1:0}
    function symbol$12(_cO_,_cN_){return _cN_ < _cO_?1:0}
    function symbol$13(_cM_,_cL_){return _cM_ < _cL_?1:0}
    function symbol$14(_cK_,_cJ_){return _cK_ !== _cJ_?1:0}
    function symbol$15(x,y){return trunc$0(x + y | 0)}
    function symbol$16(x,y){return trunc$0(x - y | 0)}
    function symbol$17(x,y){return trunc$0(caml_mul(x,y))}
    function symbol$18(x,y){return trunc$0(caml_div(x,y))}
    var
     Wrap$0=[0,symbol$15,symbol$16,symbol$17,symbol$18],
     O$0=[0,symbol$9,symbol$10,symbol$11,symbol$12,symbol$13,symbol$14,Wrap$0],
     compare$1=Base_Int[13],
     hash_fold_t$1=Base_Int[6],
     func$1=Base_Int[7];
    function hash$1(x){return caml_call1(func$1,x)}
    var
     t_of_sexp$1=Base_Int[8],
     sexp_of_t$1=Base_Int[9],
     include$2=caml_call1(Base_Comparable[10],[0,compare$1,sexp_of_t$1]),
     _P_=include$2[7],
     _W_=Base_Int[48],
     _X_=Base_Int[49],
     shift$0=Base_Int[59] - 16 | 0,
     _J_=include$2[1],
     _K_=include$2[2],
     _L_=include$2[3],
     _M_=include$2[4],
     _N_=include$2[5],
     _O_=include$2[6],
     _Q_=include$2[8],
     _R_=include$2[9],
     _S_=include$2[10],
     _T_=Typerep_lib_Std[2],
     _U_=Typerep_lib_Std[25],
     _V_=Base_Int[74],
     min_value$0=-32768,
     max_value$1=32767,
     signed$1=1,
     num_bits$1=16,
     num_bytes$1=2,
     _Y_=Base_Int[11];
    function trunc$1(x){return trunc_signed(_W_,_X_,shift$0,x)}
    function exn$1(x){return exn_signed(_W_,_X_,shift$0,_P_,mod_name$1,_Y_,x)}
    function of_base_int_trunc$1(x){return trunc$1(x)}
    function of_base_int_exn$1(x){return exn$1(x)}
    function to_base_int$1(x){return x}
    function of_int8(x){return x}
    function of_int32_trunc$0(x)
     {var _cI_=to_int32(x);return trunc$1(caml_call1(Base_Int32[104],_cI_))}
    function of_int32_exn$0(x)
     {var _cH_=to_int32(x);return exn$1(caml_call1(Base_Int32[5],_cH_))}
    function of_int63_trunc$0(x)
     {return trunc$1(caml_call1(Base_Int63[103],x))}
    function of_int63_exn$0(x){return exn$1(caml_call1(Base_Int63[5],x))}
    function of_int64_trunc$0(x){return trunc$1(caml_int64_to_int32(x))}
    function of_int64_exn$0(x){return exn$1(caml_call1(Base_Int64[5],x))}
    function of_uint16_wrap(x){return trunc$1(x)}
    function of_uint16_exn$0(x){return exn$1(x)}
    var
     quickcheck_generator$1=
      caml_call2(Base_quickcheck_Generator[69],min_value$0,max_value$1),
     quickcheck_observer$1=
      caml_call2
       (Base_quickcheck_Observer[33],Base_quickcheck_Observer[7],trunc$1);
    function _Z_(x){return caml_call2(_P_,x,trunc$1(x))}
    var
     quickcheck_shrinker$1=
      caml_call2(Base_quickcheck_Shrinker[32],Base_quickcheck_Shrinker[7],_Z_);
    function symbol$19(_cG_,_cF_){return _cF_ <= _cG_?1:0}
    function symbol$20(_cE_,_cD_){return _cE_ <= _cD_?1:0}
    function symbol$21(_cC_,_cB_){return _cC_ === _cB_?1:0}
    function symbol$22(_cA_,_cz_){return _cz_ < _cA_?1:0}
    function symbol$23(_cy_,_cx_){return _cy_ < _cx_?1:0}
    function symbol$24(_cw_,_cv_){return _cw_ !== _cv_?1:0}
    function symbol$25(x,y){return trunc$1(x + y | 0)}
    function symbol$26(x,y){return trunc$1(x - y | 0)}
    function symbol$27(x,y){return trunc$1(caml_mul(x,y))}
    function symbol$28(x,y){return trunc$1(caml_div(x,y))}
    var
     Wrap$1=[0,symbol$25,symbol$26,symbol$27,symbol$28],
     O$1=
      [0,symbol$19,symbol$20,symbol$21,symbol$22,symbol$23,symbol$24,Wrap$1],
     compare$2=Base_Int[13],
     hash_fold_t$2=Base_Int[6],
     func$2=Base_Int[7];
    function hash$2(x){return caml_call1(func$2,x)}
    var
     t_of_sexp$2=Base_Int[8],
     sexp_of_t$2=Base_Int[9],
     include$3=caml_call1(Base_Comparable[10],[0,compare$2,sexp_of_t$2]),
     _ak_=Base_Int[74],
     conv$0=caml_int64_to_int32,
     ___=include$3[1],
     _$_=include$3[2],
     _aa_=include$3[3],
     _ab_=include$3[4],
     _ac_=include$3[5],
     _ad_=include$3[6],
     _ae_=include$3[8],
     _af_=include$3[9],
     _ag_=include$3[10],
     _ah_=Typerep_lib_Std[2],
     _ai_=Typerep_lib_Std[25],
     _aj_=Base_Int[74],
     max_value$2=65535,
     signed$2=0,
     num_bits$2=16,
     num_bytes$2=2;
    function logand$0(_cu_,_ct_){return _cu_ & _ct_}
    var
     logand64$0=caml_int64_and,
     mask64$0=caml_int64_of_int32(65535),
     _al_=Base_Int[12],
     mask$0=65535,
     _am_=Base_Int64[12],
     _an_=Base_Int[11],
     _ao_=Base_Int64[11];
    function trunc$2(x)
     {return trunc_unsigned(function(_cs_){return _cs_},logand$0,mask$0,x)}
    function exn$2(x)
     {return exn_unsigned
              (function(_cr_){return _cr_},
               logand$0,
               mask$0,
               _al_,
               mod_name$2,
               _an_,
               x)}
    function trunc64$0(x){return trunc_unsigned(conv$0,logand64$0,mask64$0,x)}
    function exn64$0(x)
     {return exn_unsigned(conv$0,logand64$0,mask64$0,_am_,mod_name$2,_ao_,x)}
    function of_base_int_trunc$2(x){return trunc$2(x)}
    function of_base_int_exn$2(x){return exn$2(x)}
    function to_base_int$2(x){return x}
    function of_uint8(x){return x}
    function of_uint32_trunc$0(x){return trunc64$0(to_int64(x))}
    function of_uint32_exn$0(x){return exn64$0(to_int64(x))}
    function of_uint63_trunc$0(x)
     {return trunc64$0(caml_call1(Base_Int63[79],x))}
    function of_uint63_exn$0(x){return exn64$0(caml_call1(Base_Int63[79],x))}
    function of_uint64_trunc$0(x){return trunc64$0(x)}
    function of_uint64_exn$0(x){return exn64$0(x)}
    function of_int16_wrap(x){return trunc$2(x)}
    function of_int16_exn$0(x){return exn$2(x)}
    var
     quickcheck_generator$2=
      caml_call2(Base_quickcheck_Generator[69],_ak_,max_value$2),
     quickcheck_observer$2=
      caml_call2
       (Base_quickcheck_Observer[33],Base_quickcheck_Observer[7],trunc$2);
    function _ap_(x){return caml_call2(_al_,x,trunc$2(x))}
    var
     quickcheck_shrinker$2=
      caml_call2
       (Base_quickcheck_Shrinker[32],Base_quickcheck_Shrinker[7],_ap_);
    function symbol$29(_cq_,_cp_){return _cp_ <= _cq_?1:0}
    function symbol$30(_co_,_cn_){return _co_ <= _cn_?1:0}
    function symbol$31(_cm_,_cl_){return _cm_ === _cl_?1:0}
    function symbol$32(_ck_,_cj_){return _cj_ < _ck_?1:0}
    function symbol$33(_ci_,_ch_){return _ci_ < _ch_?1:0}
    function symbol$34(_cg_,_cf_){return _cg_ !== _cf_?1:0}
    function symbol$35(x,y){return trunc$2(x + y | 0)}
    function symbol$36(x,y){return trunc$2(x - y | 0)}
    function symbol$37(x,y){return trunc$2(caml_mul(x,y))}
    function symbol$38(x,y){return trunc$2(caml_div(x,y))}
    var
     Wrap$2=[0,symbol$35,symbol$36,symbol$37,symbol$38],
     O$2=
      [0,symbol$29,symbol$30,symbol$31,symbol$32,symbol$33,symbol$34,Wrap$2],
     compare$3=Base_Int[13],
     hash_fold_t$3=Base_Int[6],
     func$3=Base_Int[7];
    function hash$3(x){return caml_call1(func$3,x)}
    var
     t_of_sexp$3=Base_Int[8],
     sexp_of_t$3=Base_Int[9],
     include$4=caml_call1(Base_Comparable[10],[0,compare$3,sexp_of_t$3]),
     _aw_=include$4[7],
     _aq_=include$4[1],
     _ar_=include$4[2],
     _as_=include$4[3],
     _at_=include$4[4],
     _au_=include$4[5],
     _av_=include$4[6],
     _ax_=include$4[8],
     _ay_=include$4[9],
     _az_=include$4[10],
     _aA_=Typerep_lib_Std[2],
     _aB_=Typerep_lib_Std[25],
     _aC_=Base_Int[74],
     min_value$1=caml_call1(Base_Int32[104],Base_Int32[85]),
     max_value$3=caml_call1(Base_Int32[104],Base_Int32[84]),
     _aD_=Base_Int[48],
     _aE_=Base_Int[49],
     shift$1=Base_Int[59] - 32 | 0,
     signed$3=1,
     num_bits$3=32,
     num_bytes$3=4,
     _aF_=Base_Int[11];
    function trunc$3(x){return trunc_signed(_aD_,_aE_,shift$1,x)}
    function exn$3(x)
     {return exn_signed(_aD_,_aE_,shift$1,_aw_,mod_name$3,_aF_,x)}
    function of_base_int32(x){return caml_call1(Base_Int32[104],x)}
    function to_base_int32(x){return caml_call1(Base_Int32[103],x)}
    function of_int8$0(x){return x}
    function of_int16(x){return x}
    function of_int63_trunc$1(x)
     {return trunc$3(caml_call1(Base_Int63[103],x))}
    function of_int63_exn$1(x){return exn$3(caml_call1(Base_Int63[5],x))}
    function of_int64_trunc$1(x){return trunc$3(caml_int64_to_int32(x))}
    function of_int64_exn$1(x){return exn$3(caml_call1(Base_Int64[5],x))}
    function of_uint32_wrap(x){return trunc$3(x)}
    function of_uint32_exn$1(x){return exn$3(x)}
    var
     quickcheck_generator$3=
      caml_call2(Base_quickcheck_Generator[69],min_value$1,max_value$3),
     quickcheck_observer$3=
      caml_call2
       (Base_quickcheck_Observer[33],Base_quickcheck_Observer[7],trunc$3);
    function _aG_(x){return caml_call2(_aw_,x,trunc$3(x))}
    var
     quickcheck_shrinker$3=
      caml_call2
       (Base_quickcheck_Shrinker[32],Base_quickcheck_Shrinker[7],_aG_);
    function symbol$39(_ce_,_cd_){return _cd_ <= _ce_?1:0}
    function symbol$40(_cc_,_cb_){return _cc_ <= _cb_?1:0}
    function symbol$41(_ca_,_b$_){return _ca_ === _b$_?1:0}
    function symbol$42(_b__,_b9_){return _b9_ < _b__?1:0}
    function symbol$43(_b8_,_b7_){return _b8_ < _b7_?1:0}
    function symbol$44(_b6_,_b5_){return _b6_ !== _b5_?1:0}
    function symbol$45(x,y){return trunc$3(x + y | 0)}
    function symbol$46(x,y){return trunc$3(x - y | 0)}
    function symbol$47(x,y){return trunc$3(caml_mul(x,y))}
    function symbol$48(x,y){return trunc$3(caml_div(x,y))}
    var
     Wrap$3=[0,symbol$45,symbol$46,symbol$47,symbol$48],
     O$3=
      [0,symbol$39,symbol$40,symbol$41,symbol$42,symbol$43,symbol$44,Wrap$3],
     compare$4=Base_Int[13],
     hash_fold_t$4=Base_Int[6],
     func$4=Base_Int[7];
    function hash$4(x){return caml_call1(func$4,x)}
    var
     t_of_sexp$4=Base_Int[8],
     sexp_of_t$4=Base_Int[9],
     include$5=caml_call1(Base_Comparable[10],[0,compare$4,sexp_of_t$4]),
     _aT_=Base_Int[74],
     max_value$4=caml_int64_to_int32(_aU_),
     conv$1=caml_int64_to_int32,
     _aH_=include$5[1],
     _aI_=include$5[2],
     _aJ_=include$5[3],
     _aK_=include$5[4],
     _aL_=include$5[5],
     _aM_=include$5[6],
     _aN_=include$5[8],
     _aO_=include$5[9],
     _aP_=include$5[10],
     _aQ_=Typerep_lib_Std[2],
     _aR_=Typerep_lib_Std[25],
     _aS_=Base_Int[74],
     signed$4=0,
     num_bits$4=32,
     num_bytes$4=4;
    function logand$1(_b4_,_b3_){return _b4_ & _b3_}
    var
     logand64$1=caml_int64_and,
     mask$1=caml_int64_to_int32(_aV_),
     mask64$1=caml_int64_of_int32(mask$1),
     _aW_=Base_Int[12],
     _aX_=Base_Int64[12],
     _aY_=Base_Int[11],
     _aZ_=Base_Int64[11];
    function trunc$4(x)
     {return trunc_unsigned(function(_b2_){return _b2_},logand$1,mask$1,x)}
    function exn$4(x)
     {return exn_unsigned
              (function(_b1_){return _b1_},
               logand$1,
               mask$1,
               _aW_,
               mod_name$4,
               _aY_,
               x)}
    function trunc64$1(x){return trunc_unsigned(conv$1,logand64$1,mask64$1,x)}
    function exn64$1(x)
     {return exn_unsigned(conv$1,logand64$1,mask64$1,_aX_,mod_name$4,_aZ_,x)}
    function of_base_int32_trunc(x)
     {return caml_int64_to_int32
              (caml_int64_and(caml_int64_of_int32(x),mask64$1))}
    function of_base_int32_exn(x){return exn$4(caml_call1(Base_Int32[104],x))}
    function to_base_int32_trunc(x){return x}
    function to_base_int32_exn(x)
     {return x <= caml_int64_to_int32(_a0_)
              ?caml_call1(Base_Int32[103],x)
              :raise_cannot_repr(mod_name$4,Base_Int[11],x)}
    function of_base_int64_trunc(x){return trunc64$1(x)}
    function of_base_int64_exn(x){return exn64$1(x)}
    function to_base_int64(x){return caml_call1(Base_Int[55],x)}
    function to_base_int_exn(x){return x}
    function of_uint8$0(x){return x}
    function of_uint16(x){return x}
    function of_uint63_trunc$1(x)
     {return trunc64$1(caml_call1(Base_Int63[79],x))}
    function of_uint63_exn$1(x){return exn64$1(caml_call1(Base_Int63[79],x))}
    function of_uint64_trunc$1(x){return trunc64$1(x)}
    function of_uint64_exn$1(x){return exn64$1(x)}
    function of_int32_wrap(x){return trunc$4(x)}
    function of_int32_exn$1(x){return exn$4(x)}
    var
     quickcheck_generator$4=
      caml_call2(Base_quickcheck_Generator[69],_aT_,max_value$4),
     quickcheck_observer$4=
      caml_call2
       (Base_quickcheck_Observer[33],Base_quickcheck_Observer[7],trunc$4);
    function _a1_(x){return caml_call2(_aW_,x,trunc$4(x))}
    var
     quickcheck_shrinker$4=
      caml_call2
       (Base_quickcheck_Shrinker[32],Base_quickcheck_Shrinker[7],_a1_);
    function symbol$49(_b0_,_bZ_){return _bZ_ <= _b0_?1:0}
    function symbol$50(_bY_,_bX_){return _bY_ <= _bX_?1:0}
    function symbol$51(_bW_,_bV_){return _bW_ === _bV_?1:0}
    function symbol$52(_bU_,_bT_){return _bT_ < _bU_?1:0}
    function symbol$53(_bS_,_bR_){return _bS_ < _bR_?1:0}
    function symbol$54(_bQ_,_bP_){return _bQ_ !== _bP_?1:0}
    function symbol$55(x,y){return trunc$4(x + y | 0)}
    function symbol$56(x,y){return trunc$4(x - y | 0)}
    function symbol$57(x,y){return trunc$4(caml_mul(x,y))}
    function symbol$58(x,y){return trunc$4(caml_div(x,y))}
    var
     Wrap$4=[0,symbol$55,symbol$56,symbol$57,symbol$58],
     O$4=
      [0,symbol$49,symbol$50,symbol$51,symbol$52,symbol$53,symbol$54,Wrap$4],
     compare$5=Base_Int32[19],
     hash_fold_t$5=Base_Int32[6],
     func$5=Base_Int32[7];
    function hash$5(x){return caml_call1(func$5,x)}
    var
     t_of_sexp$5=Base_Int32[8],
     sexp_of_t$5=Base_Int32[9],
     include$6=caml_call1(Base_Comparable[10],[0,compare$5,sexp_of_t$5]),
     symbol$59=include$6[1],
     symbol$60=include$6[2],
     symbol$61=include$6[3],
     symbol$62=include$6[4],
     symbol$63=include$6[5],
     symbol$64=include$6[6],
     equal=include$6[7],
     compare$6=include$6[8],
     min=include$6[9],
     max=include$6[10],
     quickcheck_generator$5=Base_quickcheck[7],
     quickcheck_observer$5=Base_quickcheck[17],
     quickcheck_shrinker$5=Base_quickcheck[27],
     typerep_of_t=Typerep_lib_Std[3],
     typename_of_t=Typerep_lib_Std[26],
     zero=Base_Int32[38],
     min_value$2=Base_Int32[85],
     max_value$5=Base_Int32[84],
     greater_equal=Base_Int32[12],
     to_string=Base_Int32[11],
     signed$5=1,
     num_bits$5=32,
     num_bytes$5=4;
    function of_base_int32$0(x){return x}
    function to_base_int32$0(x){return x}
    function of_int8$1(x){return caml_call1(Base_Int32[103],x)}
    function of_int16$0(x){return caml_call1(Base_Int32[103],x)}
    function of_int63_trunc$2(x){return caml_call1(Base_Int63[104],x)}
    function of_int63_exn$2(x){return caml_call1(Base_Int63[77],x)}
    function of_int64_trunc$2(x){return caml_int64_to_int32(x)}
    function of_int64_exn$2(x){return caml_call1(Base_Int64[53],x)}
    function of_uint32_wrap$0(x){return x}
    function of_uint32_exn$2(x)
     {return identity_if_positive(greater_equal,zero,mod_name$5,to_string,x)}
    var
     symbol$65=Base_Int32[12],
     symbol$66=Base_Int32[13],
     symbol$67=Base_Int32[14],
     symbol$68=Base_Int32[15],
     symbol$69=Base_Int32[16],
     symbol$70=Base_Int32[17],
     symbol$71=Base_Int32[41],
     symbol$72=Base_Int32[42],
     symbol$73=Base_Int32[43],
     symbol$74=Base_Int32[49],
     Wrap$5=[0,symbol$71,symbol$72,symbol$73,symbol$74],
     O$5=
      [0,symbol$65,symbol$66,symbol$67,symbol$68,symbol$69,symbol$70,Wrap$5],
     hash_fold_t$6=Base_Int32[6],
     func$6=Base_Int32[7];
    function hash$6(x){return caml_call1(func$6,x)}
    var
     quickcheck_generator$6=Base_quickcheck[7],
     quickcheck_observer$6=Base_quickcheck[17],
     quickcheck_shrinker$6=Base_quickcheck[27];
    function compare$7(x,y){return caml_call2(Stdlib_Int32[16],x,y)}
    var
     typerep_of_t$0=Typerep_lib_Std[3],
     typename_of_t$0=Typerep_lib_Std[26],
     zero$0=Base_Int32[38],
     min_value$3=Base_Int32[38],
     greater_equal$0=Base_Int32[12],
     to_string$0=Base_Int32[11],
     max_value$6=-1,
     signed$6=0,
     num_bits$6=32,
     num_bytes$6=4;
    function of_base_int32_trunc$0(x){return x}
    function of_base_int32_exn$0(x)
     {return identity_if_positive
              (greater_equal$0,zero$0,mod_name$6,to_string$0,x)}
    function to_base_int32_trunc$0(x){return x}
    function to_base_int32_exn$0(x)
     {return identity_if_positive
              (greater_equal$0,zero$0,mod_name$6,to_string$0,x)}
    function of_base_int64_trunc$0(x){return caml_call1(Base_Int32[106],x)}
    function of_base_int64_exn$0(x)
     {if(caml_greaterequal(x,_a2_) && caml_lessequal(x,_a3_))
       return caml_int64_to_int32(x);
      return raise_cannot_repr(mod_name$6,Base_Int64[11],x)}
    function to_base_int64$0(x)
     {return caml_int64_and(caml_call1(Base_Int32[79],x),_a4_)}
    function to_base_int_exn$0(x)
     {var
       _bO_=
        identity_if_positive(greater_equal$0,zero$0,mod_name$6,to_string$0,x);
      return caml_call1(Base_Int32[5],_bO_)}
    function of_uint8$1(x){return caml_call1(Base_Int32[103],x)}
    function of_uint16$0(x){return caml_call1(Base_Int32[103],x)}
    function of_uint63_trunc$2(x)
     {return of_base_int64_trunc$0(caml_call1(Base_Int63[79],x))}
    function of_uint63_exn$2(x)
     {return of_base_int64_exn$0(caml_call1(Base_Int63[79],x))}
    function of_uint64_trunc$2(x){return of_base_int64_trunc$0(x)}
    function of_uint64_exn$2(x){return of_base_int64_exn$0(x)}
    function of_int32_wrap$0(x){return x}
    function of_int32_exn$2(x)
     {return identity_if_positive
              (greater_equal$0,zero$0,mod_name$6,to_string$0,x)}
    function sexp_of_t$6(x){return [0,caml_call2(Stdlib_Printf[4],_a5_,x)]}
    function t_of_sexp$6(sexp)
     {if(0 === sexp[0])
       {var s=sexp[1];
        try
         {var
           _bK_=function(_bN_){return _bN_},
           _bL_=caml_call3(Stdlib_Scanf[4],s,_a6_,_bK_);
          return _bL_}
        catch(_bM_){return of_sexp_error(cst_Int_repr_Uint32_t_of_sexp_,sexp)}}
      return of_sexp_error(cst_Int_repr_Uint32_t_of_sexp_$0,sexp)}
    function symbol$75(x,y){return 0 <= compare$7(x,y)?1:0}
    function symbol$76(x,y){return compare$7(x,y) <= 0?1:0}
    function symbol$77(x,y){return 0 === compare$7(x,y)?1:0}
    function symbol$78(x,y){return 0 < compare$7(x,y)?1:0}
    function symbol$79(x,y){return compare$7(x,y) < 0?1:0}
    function symbol$80(x,y){return 0 !== compare$7(x,y)?1:0}
    var
     symbol$81=Base_Int32[41],
     symbol$82=Base_Int32[42],
     symbol$83=Base_Int32[43],
     symbol$84=Stdlib_Int32[4],
     Wrap$6=[0,symbol$81,symbol$82,symbol$83,symbol$84],
     O$6=
      [0,symbol$75,symbol$76,symbol$77,symbol$78,symbol$79,symbol$80,Wrap$6],
     include$7=caml_call1(Base_Comparable[10],[0,compare$7,sexp_of_t$6]),
     symbol$85=include$7[1],
     symbol$86=include$7[2],
     symbol$87=include$7[3],
     symbol$88=include$7[4],
     symbol$89=include$7[5],
     symbol$90=include$7[6],
     equal$0=include$7[7],
     compare$8=include$7[8],
     min$0=include$7[9],
     max$0=include$7[10],
     M=
      repr
       ?[0,
         [0,
          quickcheck_generator$5,
          quickcheck_observer$5,
          quickcheck_shrinker$5,
          t_of_sexp$5,
          sexp_of_t$5,
          typerep_of_t,
          typename_of_t,
          signed$5,
          num_bits$5,
          num_bytes$5,
          zero,
          min_value$2,
          max_value$5,
          hash_fold_t$5,
          hash$5,
          symbol$59,
          symbol$60,
          symbol$61,
          symbol$62,
          symbol$63,
          symbol$64,
          equal,
          compare$6,
          min,
          max,
          O$5,
          of_base_int32$0,
          to_base_int32$0,
          of_int8$1,
          of_int16$0,
          of_int63_trunc$2,
          of_int63_exn$2,
          of_int64_trunc$2,
          of_int64_exn$2,
          of_uint32_wrap$0,
          of_uint32_exn$2],
         [0,
          quickcheck_generator$6,
          quickcheck_observer$6,
          quickcheck_shrinker$6,
          t_of_sexp$6,
          sexp_of_t$6,
          typerep_of_t$0,
          typename_of_t$0,
          signed$6,
          num_bits$6,
          num_bytes$6,
          zero$0,
          min_value$3,
          max_value$6,
          hash_fold_t$6,
          hash$6,
          symbol$85,
          symbol$86,
          symbol$87,
          symbol$88,
          symbol$89,
          symbol$90,
          equal$0,
          compare$8,
          min$0,
          max$0,
          O$6,
          of_base_int32_trunc$0,
          of_base_int32_exn$0,
          to_base_int32_trunc$0,
          to_base_int32_exn$0,
          of_base_int64_trunc$0,
          of_base_int64_exn$0,
          to_base_int64$0,
          to_base_int_exn$0,
          of_uint8$1,
          of_uint16$0,
          of_uint63_trunc$2,
          of_uint63_exn$2,
          of_uint64_trunc$2,
          of_uint64_exn$2,
          of_int32_wrap$0,
          of_int32_exn$2]]
       :[0,
         [0,
          quickcheck_generator$3,
          quickcheck_observer$3,
          quickcheck_shrinker$3,
          t_of_sexp$3,
          sexp_of_t$3,
          _aA_,
          _aB_,
          signed$3,
          num_bits$3,
          num_bytes$3,
          _aC_,
          min_value$1,
          max_value$3,
          hash_fold_t$3,
          hash$3,
          _aq_,
          _ar_,
          _as_,
          _at_,
          _au_,
          _av_,
          _aw_,
          _ax_,
          _ay_,
          _az_,
          O$3,
          of_base_int32,
          to_base_int32,
          of_int8$0,
          of_int16,
          of_int63_trunc$1,
          of_int63_exn$1,
          of_int64_trunc$1,
          of_int64_exn$1,
          of_uint32_wrap,
          of_uint32_exn$1],
         [0,
          quickcheck_generator$4,
          quickcheck_observer$4,
          quickcheck_shrinker$4,
          t_of_sexp$4,
          sexp_of_t$4,
          _aQ_,
          _aR_,
          signed$4,
          num_bits$4,
          num_bytes$4,
          _aS_,
          _aT_,
          max_value$4,
          hash_fold_t$4,
          hash$4,
          _aH_,
          _aI_,
          _aJ_,
          _aK_,
          _aL_,
          _aM_,
          _aW_,
          _aN_,
          _aO_,
          _aP_,
          O$4,
          of_base_int32_trunc,
          of_base_int32_exn,
          to_base_int32_trunc,
          to_base_int32_exn,
          of_base_int64_trunc,
          of_base_int64_exn,
          to_base_int64,
          to_base_int_exn,
          of_uint8$0,
          of_uint16,
          of_uint63_trunc$1,
          of_uint63_exn$1,
          of_uint64_trunc$1,
          of_uint64_exn$1,
          of_int32_wrap,
          of_int32_exn$1]],
     include$8=M[1],
     quickcheck_generator$7=include$8[1],
     quickcheck_observer$7=include$8[2],
     quickcheck_shrinker$7=include$8[3],
     t_of_sexp$7=include$8[4],
     sexp_of_t$7=include$8[5],
     typerep_of_t$1=include$8[6],
     typename_of_t$1=include$8[7],
     signed$7=include$8[8],
     num_bits$7=include$8[9],
     num_bytes$7=include$8[10],
     zero$1=include$8[11],
     min_value$4=include$8[12],
     max_value$7=include$8[13],
     hash_fold_t$7=include$8[14],
     hash$7=include$8[15],
     symbol$91=include$8[16],
     symbol$92=include$8[17],
     symbol$93=include$8[18],
     symbol$94=include$8[19],
     symbol$95=include$8[20],
     symbol$96=include$8[21],
     equal$1=include$8[22],
     compare$9=include$8[23],
     min$1=include$8[24],
     max$1=include$8[25],
     O$7=include$8[26],
     of_base_int32$1=include$8[27],
     to_base_int32$1=include$8[28],
     of_int8$2=include$8[29],
     of_int16$1=include$8[30],
     of_int63_trunc$3=include$8[31],
     of_int63_exn$3=include$8[32],
     of_int64_trunc$3=include$8[33],
     of_int64_exn$3=include$8[34],
     of_uint32_wrap$1=include$8[35],
     of_uint32_exn$3=include$8[36],
     include$9=M[2],
     quickcheck_generator$8=include$9[1],
     quickcheck_observer$8=include$9[2],
     quickcheck_shrinker$8=include$9[3],
     t_of_sexp$8=include$9[4],
     sexp_of_t$8=include$9[5],
     typerep_of_t$2=include$9[6],
     typename_of_t$2=include$9[7],
     signed$8=include$9[8],
     num_bits$8=include$9[9],
     num_bytes$8=include$9[10],
     zero$2=include$9[11],
     min_value$5=include$9[12],
     max_value$8=include$9[13],
     hash_fold_t$8=include$9[14],
     hash$8=include$9[15],
     symbol$97=include$9[16],
     symbol$98=include$9[17],
     symbol$99=include$9[18],
     symbol$100=include$9[19],
     symbol$101=include$9[20],
     symbol$102=include$9[21],
     equal$2=include$9[22],
     compare$10=include$9[23],
     min$2=include$9[24],
     max$2=include$9[25],
     O$8=include$9[26],
     of_base_int32_trunc$1=include$9[27],
     of_base_int32_exn$1=include$9[28],
     to_base_int32_trunc$1=include$9[29],
     to_base_int32_exn$1=include$9[30],
     of_base_int64_trunc$1=include$9[31],
     of_base_int64_exn$1=include$9[32],
     to_base_int64$1=include$9[33],
     to_base_int_exn$1=include$9[34],
     of_uint8$2=include$9[35],
     of_uint16$1=include$9[36],
     of_uint63_trunc$3=include$9[37],
     of_uint63_exn$3=include$9[38],
     of_uint64_trunc$3=include$9[39],
     of_uint64_exn$3=include$9[40],
     of_int32_wrap$1=include$9[41],
     of_int32_exn$3=include$9[42],
     compare$11=Base_Int63[19],
     hash_fold_t$9=Base_Int63[6],
     func$7=Base_Int63[7];
    function hash$9(x){return caml_call1(func$7,x)}
    var
     t_of_sexp$9=Base_Int63[8],
     sexp_of_t$9=Base_Int63[9],
     include$10=caml_call1(Base_Comparable[10],[0,compare$11,sexp_of_t$9]),
     symbol$103=include$10[1],
     symbol$104=include$10[2],
     symbol$105=include$10[3],
     symbol$106=include$10[4],
     symbol$107=include$10[5],
     symbol$108=include$10[6],
     equal$3=include$10[7],
     compare$12=include$10[8],
     min$3=include$10[9],
     max$3=include$10[10],
     quickcheck_generator$9=Base_quickcheck_Generator[66],
     quickcheck_observer$9=Base_quickcheck_Observer[9],
     quickcheck_shrinker$9=Base_quickcheck_Shrinker[9],
     typerep_of_t$3=Typerep_lib_Std[6],
     typename_of_t$3=Typerep_lib_Std[29],
     zero$3=Base_Int63[38],
     min_value$6=Base_Int63[85],
     max_value$9=Base_Int63[84],
     greater_equal$1=Base_Int63[12],
     to_string$1=Base_Int63[11],
     signed$9=1,
     num_bits$9=63,
     num_bytes$9=8;
    function of_int8$3(x){return caml_call1(Base_Int63[96],x)}
    function of_int16$2(x){return caml_call1(Base_Int63[96],x)}
    function of_int32(x)
     {var _bJ_=to_base_int32$1(x);return caml_call1(Base_Int63[98],_bJ_)}
    function of_int64_trunc$4(x){return caml_call1(Base_Int63[105],x)}
    function of_int64_exn$4(x){return caml_call1(Base_Int63[78],x)}
    function of_uint63_wrap(x){return x}
    function of_uint63_exn$4(x)
     {return identity_if_positive
              (greater_equal$1,zero$3,mod_name$7,to_string$1,x)}
    var
     symbol$109=Base_Int63[12],
     symbol$110=Base_Int63[13],
     symbol$111=Base_Int63[14],
     symbol$112=Base_Int63[15],
     symbol$113=Base_Int63[16],
     symbol$114=Base_Int63[17],
     symbol$115=Base_Int63[41],
     symbol$116=Base_Int63[42],
     symbol$117=Base_Int63[43],
     symbol$118=Base_Int63[49],
     Wrap$7=[0,symbol$115,symbol$116,symbol$117,symbol$118],
     O$9=
      [0,
       symbol$109,
       symbol$110,
       symbol$111,
       symbol$112,
       symbol$113,
       symbol$114,
       Wrap$7],
     hash_fold_t$10=Base_Int63[6],
     func$8=Base_Int63[7];
    function hash$10(x){return caml_call1(func$8,x)}
    var
     _a7_=Base_quickcheck_Generator[66],
     _a8_=Base_quickcheck_Observer[9],
     _a9_=Base_quickcheck_Shrinker[9];
    function compare$13(x,y)
     {var _bH_=caml_call1(Base_Int63[79],y),_bI_=caml_call1(Base_Int63[79],x);
      return caml_call2(Stdlib_Int64[16],_bI_,_bH_)}
    var
     _ba_=Base_Int63[38],
     _a__=Typerep_lib_Std[6],
     _a$_=Typerep_lib_Std[29],
     _bb_=Base_Int63[38],
     max_value$10=caml_call1(Base_Int63[105],_bc_),
     greater_equal$2=Base_Int63[12],
     to_string$2=Base_Int63[11],
     signed$10=0,
     num_bits$10=63,
     num_bytes$10=8;
    function of_base_int64_trunc$2(x){return caml_call1(Base_Int63[105],x)}
    function of_base_int64_exn$2(x)
     {return caml_greaterequal(x,_bd_)
              ?caml_call1(Base_Int63[105],x)
              :raise_cannot_repr(mod_name$8,Base_Int64[11],x)}
    function to_base_int64$2(x)
     {return caml_int64_and(caml_call1(Base_Int63[79],x),_be_)}
    function of_uint8$3(x){return caml_call1(Base_Int63[96],x)}
    function of_uint16$2(x){return caml_call1(Base_Int63[96],x)}
    function of_uint32(x)
     {var _bG_=to_base_int64$1(x);return caml_call1(Base_Int63[105],_bG_)}
    function of_uint64_trunc$4(x){return caml_call1(Base_Int63[105],x)}
    function of_uint64_exn$4(x)
     {return caml_greaterequal(x,_bf_)
              ?caml_call1(Base_Int63[105],x)
              :raise_cannot_repr(mod_name$8,Base_Int64[11],x)}
    function of_int63_wrap(x){return x}
    function of_int63_exn$4(x)
     {return identity_if_positive
              (greater_equal$2,_ba_,mod_name$8,to_string$2,x)}
    function sexp_of_t$10(x)
     {var _bF_=to_base_int64$2(x);
      return [0,caml_call2(Stdlib_Printf[4],_bg_,_bF_)]}
    function t_of_sexp$10(sexp)
     {if(0 === sexp[0])
       {var s=sexp[1];
        try
         {var _bD_=caml_call3(Stdlib_Scanf[4],s,_bh_,of_base_int64_exn$2);
          return _bD_}
        catch(_bE_){return of_sexp_error(cst_Int_repr_Uint63_t_of_sexp_,sexp)}}
      return of_sexp_error(cst_Int_repr_Uint63_t_of_sexp_$0,sexp)}
    function symbol$119(x,y){return 0 <= compare$13(x,y)?1:0}
    function symbol$120(x,y){return compare$13(x,y) <= 0?1:0}
    function symbol$121(x,y){return 0 === compare$13(x,y)?1:0}
    function symbol$122(x,y){return 0 < compare$13(x,y)?1:0}
    function symbol$123(x,y){return compare$13(x,y) < 0?1:0}
    function symbol$124(x,y){return 0 !== compare$13(x,y)?1:0}
    var
     symbol$125=Base_Int63[41],
     symbol$126=Base_Int63[42],
     symbol$127=Base_Int63[43];
    function symbol$128(x,y)
     {var _bC_=to_base_int64$2(y);
      return of_base_int64_trunc$2(caml_int64_div(to_base_int64$2(x),_bC_))}
    var
     Wrap$8=[0,symbol$125,symbol$126,symbol$127,symbol$128],
     O$10=
      [0,
       symbol$119,
       symbol$120,
       symbol$121,
       symbol$122,
       symbol$123,
       symbol$124,
       Wrap$8],
     include$11=caml_call1(Base_Comparable[10],[0,compare$13,sexp_of_t$10]),
     symbol$129=include$11[1],
     symbol$130=include$11[2],
     symbol$131=include$11[3],
     symbol$132=include$11[4],
     symbol$133=include$11[5],
     symbol$134=include$11[6],
     equal$4=include$11[7],
     compare$14=include$11[8],
     min$4=include$11[9],
     max$4=include$11[10],
     compare$15=Base_Int64[13],
     hash_fold_t$11=Base_Int64[6],
     func$9=Base_Int64[7];
    function hash$11(x){return caml_call1(func$9,x)}
    var
     t_of_sexp$11=Base_Int64[8],
     sexp_of_t$11=Base_Int64[9],
     include$12=caml_call1(Base_Comparable[10],[0,compare$15,sexp_of_t$11]),
     symbol$135=include$12[1],
     symbol$136=include$12[2],
     symbol$137=include$12[3],
     symbol$138=include$12[4],
     symbol$139=include$12[5],
     symbol$140=include$12[6],
     equal$5=include$12[7],
     compare$16=include$12[8],
     min$5=include$12[9],
     max$5=include$12[10],
     quickcheck_generator$10=Base_quickcheck[8],
     quickcheck_observer$10=Base_quickcheck[18],
     quickcheck_shrinker$10=Base_quickcheck[28],
     typerep_of_t$4=Typerep_lib_Std[4],
     typename_of_t$4=Typerep_lib_Std[27],
     zero$4=Base_Int64[74],
     min_value$7=Base_Int64[61],
     max_value$11=Base_Int64[60],
     greater_equal$3=caml_greaterequal,
     to_string$3=Base_Int64[11],
     signed$11=1,
     num_bits$11=64,
     num_bytes$11=8;
    function of_int8$4(x){return caml_int64_of_int32(x)}
    function of_int16$3(x){return caml_int64_of_int32(x)}
    function of_int32$0(x){return caml_int64_of_int32(to_base_int32$1(x))}
    function of_int63(x){return caml_call1(Base_Int63[79],x)}
    function of_uint64_wrap(x){return x}
    function of_uint64_exn$5(x)
     {return identity_if_positive
              (greater_equal$3,zero$4,mod_name$9,to_string$3,x)}
    var
     symbol$141=caml_greaterequal,
     symbol$142=caml_lessequal,
     symbol$143=runtime.caml_equal,
     symbol$144=runtime.caml_greaterthan,
     symbol$145=runtime.caml_lessthan,
     symbol$146=runtime.caml_notequal,
     symbol$147=caml_int64_add,
     symbol$148=caml_int64_sub,
     symbol$149=caml_int64_mul,
     symbol$150=caml_int64_div,
     Wrap$9=[0,symbol$147,symbol$148,symbol$149,symbol$150],
     O$11=
      [0,
       symbol$141,
       symbol$142,
       symbol$143,
       symbol$144,
       symbol$145,
       symbol$146,
       Wrap$9],
     hash_fold_t$12=Base_Int64[6],
     func$10=Base_Int64[7];
    function hash$12(x){return caml_call1(func$10,x)}
    var
     quickcheck_generator$11=Base_quickcheck[8],
     quickcheck_observer$11=Base_quickcheck[18],
     quickcheck_shrinker$11=Base_quickcheck[28],
     compare$17=Stdlib_Int64[16],
     typerep_of_t$5=Typerep_lib_Std[4],
     typename_of_t$5=Typerep_lib_Std[27],
     zero$5=Base_Int64[74],
     min_value$8=Base_Int64[74],
     greater_equal$4=caml_greaterequal,
     to_string$4=Base_Int64[11],
     signed$12=0,
     num_bits$12=64,
     num_bytes$12=8;
    function exn$5(x)
     {return identity_if_positive
              (greater_equal$4,zero$5,mod_name$10,to_string$4,x)}
    function of_base_int64_trunc$3(x){return x}
    function of_base_int64_exn$3(x){return exn$5(x)}
    function to_base_int64_trunc(x){return x}
    function to_base_int64_exn(x){return exn$5(x)}
    function of_uint8$4(x){return caml_int64_of_int32(x)}
    function of_uint16$3(x){return caml_int64_of_int32(x)}
    function of_uint32$0(x){return to_base_int64$1(x)}
    function of_uint63(x)
     {return caml_int64_and(caml_call1(Base_Int63[79],x),_bi_)}
    function of_int64_wrap(x){return x}
    function of_int64_exn$5(x){return exn$5(x)}
    function sexp_of_t$12(x){return [0,caml_call2(Stdlib_Printf[4],_bj_,x)]}
    function t_of_sexp$12(sexp)
     {if(0 === sexp[0])
       {var s=sexp[1];
        try
         {var
           _by_=function(_bB_){return _bB_},
           _bz_=caml_call3(Stdlib_Scanf[4],s,_bk_,_by_);
          return _bz_}
        catch(_bA_){return of_sexp_error(cst_Int_repr_Uint64_t_of_sexp_,sexp)}}
      return of_sexp_error(cst_Int_repr_Uint64_t_of_sexp_$0,sexp)}
    function symbol$151(x,y){return 0 <= caml_call2(compare$17,x,y)?1:0}
    function symbol$152(x,y){return caml_call2(compare$17,x,y) <= 0?1:0}
    function symbol$153(x,y){return 0 === caml_call2(compare$17,x,y)?1:0}
    function symbol$154(x,y){return 0 < caml_call2(compare$17,x,y)?1:0}
    function symbol$155(x,y){return caml_call2(compare$17,x,y) < 0?1:0}
    function symbol$156(x,y){return 0 !== caml_call2(compare$17,x,y)?1:0}
    var
     symbol$157=caml_int64_add,
     symbol$158=caml_int64_sub,
     symbol$159=caml_int64_mul,
     symbol$160=Stdlib_Int64[4],
     Wrap$10=[0,symbol$157,symbol$158,symbol$159,symbol$160],
     O$12=
      [0,
       symbol$151,
       symbol$152,
       symbol$153,
       symbol$154,
       symbol$155,
       symbol$156,
       Wrap$10],
     include$13=caml_call1(Base_Comparable[10],[0,compare$17,sexp_of_t$12]),
     symbol$161=include$13[1],
     symbol$162=include$13[2],
     symbol$163=include$13[3],
     symbol$164=include$13[4],
     symbol$165=include$13[5],
     symbol$166=include$13[6],
     equal$6=include$13[7],
     compare$18=include$13[8],
     min$6=include$13[9],
     max$6=include$13[10];
    function Make_get(F)
     {function get_int8(t,pos)
       {return of_base_int_trunc(caml_call2(F[1],t,pos))}
      function get_uint8(t,pos)
       {return of_base_int_trunc$0(caml_call2(F[1],t,pos))}
      function get_int16_le(t,pos)
       {var x=caml_call2(F[2],t,pos),_bx_=Stdlib_Sys[11]?caml_bswap16(x):x;
        return of_base_int_trunc$1(_bx_)}
      function get_int16_be(t,pos)
       {var x=caml_call2(F[2],t,pos),x$0=Stdlib_Sys[11]?x:caml_bswap16(x);
        return of_base_int_trunc$1(x$0)}
      function get_uint16_le(t,pos)
       {var x=caml_call2(F[2],t,pos),_bw_=Stdlib_Sys[11]?caml_bswap16(x):x;
        return of_base_int_trunc$2(_bw_)}
      function get_uint16_be(t,pos)
       {var x=caml_call2(F[2],t,pos),x$0=Stdlib_Sys[11]?x:caml_bswap16(x);
        return of_base_int_trunc$2(x$0)}
      function get_int32_le(t,pos)
       {var
         x=caml_call2(F[3],t,pos),
         _bv_=Stdlib_Sys[11]?caml_int32_bswap(x):x;
        return of_base_int32$1(_bv_)}
      function get_int32_be(t,pos)
       {var x=caml_call2(F[3],t,pos),x$0=Stdlib_Sys[11]?x:caml_int32_bswap(x);
        return of_base_int32$1(x$0)}
      function get_uint32_le(t,pos)
       {var
         x=caml_call2(F[3],t,pos),
         _bu_=Stdlib_Sys[11]?caml_int32_bswap(x):x;
        return of_base_int32_trunc$1(_bu_)}
      function get_uint32_be(t,pos)
       {var x=caml_call2(F[3],t,pos),x$0=Stdlib_Sys[11]?x:caml_int32_bswap(x);
        return of_base_int32_trunc$1(x$0)}
      function get_int64_le(t,pos)
       {var x=caml_call2(F[4],t,pos);
        return Stdlib_Sys[11]?caml_int64_bswap(x):x}
      function get_int64_be(t,pos)
       {var x=caml_call2(F[4],t,pos);
        return Stdlib_Sys[11]?x:caml_int64_bswap(x)}
      function get_uint64_le(t,pos)
       {var
         x=caml_call2(F[4],t,pos),
         _bt_=Stdlib_Sys[11]?caml_int64_bswap(x):x;
        return _bt_}
      function get_uint64_be(t,pos)
       {var x=caml_call2(F[4],t,pos),x$0=Stdlib_Sys[11]?x:caml_int64_bswap(x);
        return x$0}
      return [0,
              get_int8,
              get_uint8,
              get_int16_le,
              get_int16_be,
              get_uint16_le,
              get_uint16_be,
              get_int32_le,
              get_int32_be,
              get_uint32_le,
              get_uint32_be,
              get_int64_le,
              get_int64_be,
              get_uint64_le,
              get_uint64_be]}
    function Make_set(F)
     {function set_uint8(t,pos,x){return caml_call3(F[1],t,pos,x)}
      function set_int8(t,pos,x){return set_uint8(t,pos,of_int8_wrap(x))}
      function set_uint16_le(t,pos,x)
       {var x$0=Stdlib_Sys[11]?caml_bswap16(x):x;
        return caml_call3(F[2],t,pos,x$0)}
      function set_uint16_be(t,pos,x)
       {var x$0=Stdlib_Sys[11]?x:caml_bswap16(x);
        return caml_call3(F[2],t,pos,x$0)}
      function set_int16_le(t,pos,x)
       {return set_uint16_le(t,pos,of_int16_wrap(x))}
      function set_int16_be(t,pos,x)
       {return set_uint16_be(t,pos,of_int16_wrap(x))}
      function set_int32_le(t,pos,x)
       {var
         x$0=to_base_int32$1(x),
         x$1=Stdlib_Sys[11]?caml_int32_bswap(x$0):x$0;
        return caml_call3(F[3],t,pos,x$1)}
      function set_int32_be(t,pos,x)
       {var
         x$0=to_base_int32$1(x),
         x$1=Stdlib_Sys[11]?x$0:caml_int32_bswap(x$0);
        return caml_call3(F[3],t,pos,x$1)}
      function set_uint32_le(t,pos,x)
       {return set_int32_le(t,pos,of_uint32_wrap$1(x))}
      function set_uint32_be(t,pos,x)
       {return set_int32_be(t,pos,of_uint32_wrap$1(x))}
      function set_int64_le(t,pos,x)
       {var x$0=Stdlib_Sys[11]?caml_int64_bswap(x):x;
        return caml_call3(F[4],t,pos,x$0)}
      function set_int64_be(t,pos,x)
       {var x$0=Stdlib_Sys[11]?x:caml_int64_bswap(x);
        return caml_call3(F[4],t,pos,x$0)}
      function set_uint64_le(t,pos,x){return set_int64_le(t,pos,x)}
      function set_uint64_be(t,pos,x){return set_int64_be(t,pos,x)}
      return [0,
              set_int8,
              set_uint8,
              set_int16_le,
              set_int16_be,
              set_uint16_le,
              set_uint16_be,
              set_int32_le,
              set_int32_be,
              set_uint32_le,
              set_uint32_be,
              set_int64_le,
              set_int64_be,
              set_uint64_le,
              set_uint64_be]}
    var
     _bl_=
      Make_get
       ([0,
         Stdlib_Bytes[63],
         Stdlib_Bytes[65],
         Stdlib_Bytes[71],
         Stdlib_Bytes[74]]),
     get_int8=_bl_[1],
     get_uint8=_bl_[2],
     get_int16_le=_bl_[3],
     get_int16_be=_bl_[4],
     get_uint16_le=_bl_[5],
     get_uint16_be=_bl_[6],
     get_int32_le=_bl_[7],
     get_int32_be=_bl_[8],
     get_uint32_le=_bl_[9],
     get_uint32_be=_bl_[10],
     get_int64_le=_bl_[11],
     get_int64_be=_bl_[12],
     get_uint64_le=_bl_[13],
     get_uint64_be=_bl_[14],
     include$14=
      Make_set
       ([0,
         Stdlib_Bytes[77],
         Stdlib_Bytes[79],
         Stdlib_Bytes[85],
         Stdlib_Bytes[88]]),
     set_int8=include$14[1],
     set_uint8=include$14[2],
     set_int16_le=include$14[3],
     set_int16_be=include$14[4],
     set_uint16_le=include$14[5],
     set_uint16_be=include$14[6],
     set_int32_le=include$14[7],
     set_int32_be=include$14[8],
     set_uint32_le=include$14[9],
     set_uint32_be=include$14[10],
     set_int64_le=include$14[11],
     set_int64_be=include$14[12],
     set_uint64_le=include$14[13],
     set_uint64_be=include$14[14],
     _bm_=
      Make_get
       ([0,
         runtime.caml_bytes_unsafe_get,
         runtime.caml_bytes_get16,
         runtime.caml_bytes_get32,
         runtime.caml_bytes_get64]),
     get_int8$0=_bm_[1],
     get_uint8$0=_bm_[2],
     get_int16_le$0=_bm_[3],
     get_int16_be$0=_bm_[4],
     get_uint16_le$0=_bm_[5],
     get_uint16_be$0=_bm_[6],
     get_int32_le$0=_bm_[7],
     get_int32_be$0=_bm_[8],
     get_uint32_le$0=_bm_[9],
     get_uint32_be$0=_bm_[10],
     get_int64_le$0=_bm_[11],
     get_int64_be$0=_bm_[12],
     get_uint64_le$0=_bm_[13],
     get_uint64_be$0=_bm_[14],
     _bn_=runtime.caml_bytes_set64,
     _bo_=runtime.caml_bytes_set32,
     _bp_=runtime.caml_bytes_set16,
     include$15=
      Make_set
       ([0,
         function(_bs_,_br_,_bq_)
          {runtime.caml_bytes_unsafe_set(_bs_,_br_,_bq_);return 0},
         _bp_,
         _bo_,
         _bn_]),
     set_int8$0=include$15[1],
     set_uint8$0=include$15[2],
     set_int16_le$0=include$15[3],
     set_int16_be$0=include$15[4],
     set_uint16_le$0=include$15[5],
     set_uint16_be$0=include$15[6],
     set_int32_le$0=include$15[7],
     set_int32_be$0=include$15[8],
     set_uint32_le$0=include$15[9],
     set_uint32_be$0=include$15[10],
     set_int64_le$0=include$15[11],
     set_int64_be$0=include$15[12],
     set_uint64_le$0=include$15[13],
     set_uint64_be$0=include$15[14],
     Unsafe=
      [0,
       get_int8$0,
       get_uint8$0,
       get_int16_le$0,
       get_int16_be$0,
       get_uint16_le$0,
       get_uint16_be$0,
       get_int32_le$0,
       get_int32_be$0,
       get_uint32_le$0,
       get_uint32_be$0,
       get_int64_le$0,
       get_int64_be$0,
       get_uint64_le$0,
       get_uint64_be$0,
       set_int8$0,
       set_uint8$0,
       set_int16_le$0,
       set_int16_be$0,
       set_uint16_le$0,
       set_uint16_be$0,
       set_int32_le$0,
       set_int32_be$0,
       set_uint32_le$0,
       set_uint32_be$0,
       set_int64_le$0,
       set_int64_be$0,
       set_uint64_le$0,
       set_uint64_be$0],
     Bytes=
      [0,
       get_int8,
       get_uint8,
       get_int16_le,
       get_int16_be,
       get_uint16_le,
       get_uint16_be,
       get_int32_le,
       get_int32_be,
       get_uint32_le,
       get_uint32_be,
       get_int64_le,
       get_int64_be,
       get_uint64_le,
       get_uint64_be,
       set_int8,
       set_uint8,
       set_int16_le,
       set_int16_be,
       set_uint16_le,
       set_uint16_be,
       set_int32_le,
       set_int32_be,
       set_uint32_le,
       set_uint32_be,
       set_int64_le,
       set_int64_be,
       set_uint64_le,
       set_uint64_be,
       Unsafe],
     include$16=
      Make_get
       ([0,
         runtime.caml_string_get,
         caml_string_get16,
         caml_string_get32,
         caml_string_get64]),
     get_int8$1=include$16[1],
     get_uint8$1=include$16[2],
     get_int16_le$1=include$16[3],
     get_int16_be$1=include$16[4],
     get_uint16_le$1=include$16[5],
     get_uint16_be$1=include$16[6],
     get_int32_le$1=include$16[7],
     get_int32_be$1=include$16[8],
     get_uint32_le$1=include$16[9],
     get_uint32_be$1=include$16[10],
     get_int64_le$1=include$16[11],
     get_int64_be$1=include$16[12],
     get_uint64_le$1=include$16[13],
     get_uint64_be$1=include$16[14],
     include$17=
      Make_get
       ([0,
         runtime.caml_string_unsafe_get,
         caml_string_get16,
         caml_string_get32,
         caml_string_get64]),
     get_int8$2=include$17[1],
     get_uint8$2=include$17[2],
     get_int16_le$2=include$17[3],
     get_int16_be$2=include$17[4],
     get_uint16_le$2=include$17[5],
     get_uint16_be$2=include$17[6],
     get_int32_le$2=include$17[7],
     get_int32_be$2=include$17[8],
     get_uint32_le$2=include$17[9],
     get_uint32_be$2=include$17[10],
     get_int64_le$2=include$17[11],
     get_int64_be$2=include$17[12],
     get_uint64_le$2=include$17[13],
     get_uint64_be$2=include$17[14],
     Unsafe$0=
      [0,
       get_int8$2,
       get_uint8$2,
       get_int16_le$2,
       get_int16_be$2,
       get_uint16_le$2,
       get_uint16_be$2,
       get_int32_le$2,
       get_int32_be$2,
       get_uint32_le$2,
       get_uint32_be$2,
       get_int64_le$2,
       get_int64_be$2,
       get_uint64_le$2,
       get_uint64_be$2],
     String=
      [0,
       get_int8$1,
       get_uint8$1,
       get_int16_le$1,
       get_int16_be$1,
       get_uint16_le$1,
       get_uint16_be$1,
       get_int32_le$1,
       get_int32_be$1,
       get_uint32_le$1,
       get_uint32_be$1,
       get_int64_le$1,
       get_int64_be$1,
       get_uint64_le$1,
       get_uint64_be$1,
       Unsafe$0];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_int_repr$1);
    caml_call1(Expect_test_collector[5][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Int_repr$0);
    var
     Int_repr=
      [0,
       [0,
        quickcheck_generator,
        quickcheck_observer,
        quickcheck_shrinker,
        t_of_sexp,
        sexp_of_t,
        _k_,
        _l_,
        signed,
        num_bits,
        num_bytes,
        _m_,
        min_value,
        max_value,
        hash_fold_t,
        hash,
        _a_,
        _b_,
        _c_,
        _d_,
        _e_,
        _f_,
        _g_,
        _h_,
        _i_,
        _j_,
        O,
        of_base_int_trunc,
        of_base_int_exn,
        to_base_int,
        of_int16_trunc,
        of_int16_exn,
        of_int32_trunc,
        of_int32_exn,
        of_int63_trunc,
        of_int63_exn,
        of_int64_trunc,
        of_int64_exn,
        of_uint8_wrap,
        of_uint8_exn],
       [0,
        quickcheck_generator$0,
        quickcheck_observer$0,
        quickcheck_shrinker$0,
        t_of_sexp$0,
        sexp_of_t$0,
        _A_,
        _B_,
        signed$0,
        num_bits$0,
        num_bytes$0,
        _C_,
        _D_,
        max_value$0,
        hash_fold_t$0,
        hash$0,
        _r_,
        _s_,
        _t_,
        _u_,
        _v_,
        _w_,
        _E_,
        _x_,
        _y_,
        _z_,
        O$0,
        of_base_int_trunc$0,
        of_base_int_exn$0,
        to_base_int$0,
        of_uint16_trunc,
        of_uint16_exn,
        of_uint32_trunc,
        of_uint32_exn,
        of_uint63_trunc,
        of_uint63_exn,
        of_uint64_trunc,
        of_uint64_exn,
        of_int8_wrap,
        of_int8_exn],
       [0,
        quickcheck_generator$1,
        quickcheck_observer$1,
        quickcheck_shrinker$1,
        t_of_sexp$1,
        sexp_of_t$1,
        _T_,
        _U_,
        signed$1,
        num_bits$1,
        num_bytes$1,
        _V_,
        min_value$0,
        max_value$1,
        hash_fold_t$1,
        hash$1,
        _J_,
        _K_,
        _L_,
        _M_,
        _N_,
        _O_,
        _P_,
        _Q_,
        _R_,
        _S_,
        O$1,
        of_base_int_trunc$1,
        of_base_int_exn$1,
        to_base_int$1,
        of_int8,
        of_int32_trunc$0,
        of_int32_exn$0,
        of_int63_trunc$0,
        of_int63_exn$0,
        of_int64_trunc$0,
        of_int64_exn$0,
        of_uint16_wrap,
        of_uint16_exn$0],
       [0,
        quickcheck_generator$2,
        quickcheck_observer$2,
        quickcheck_shrinker$2,
        t_of_sexp$2,
        sexp_of_t$2,
        _ah_,
        _ai_,
        signed$2,
        num_bits$2,
        num_bytes$2,
        _aj_,
        _ak_,
        max_value$2,
        hash_fold_t$2,
        hash$2,
        ___,
        _$_,
        _aa_,
        _ab_,
        _ac_,
        _ad_,
        _al_,
        _ae_,
        _af_,
        _ag_,
        O$2,
        of_base_int_trunc$2,
        of_base_int_exn$2,
        to_base_int$2,
        of_uint8,
        of_uint32_trunc$0,
        of_uint32_exn$0,
        of_uint63_trunc$0,
        of_uint63_exn$0,
        of_uint64_trunc$0,
        of_uint64_exn$0,
        of_int16_wrap,
        of_int16_exn$0],
       [0,
        quickcheck_generator$7,
        quickcheck_observer$7,
        quickcheck_shrinker$7,
        t_of_sexp$7,
        sexp_of_t$7,
        typerep_of_t$1,
        typename_of_t$1,
        signed$7,
        num_bits$7,
        num_bytes$7,
        zero$1,
        min_value$4,
        max_value$7,
        hash_fold_t$7,
        hash$7,
        symbol$91,
        symbol$92,
        symbol$93,
        symbol$94,
        symbol$95,
        symbol$96,
        equal$1,
        compare$9,
        min$1,
        max$1,
        O$7,
        of_base_int32$1,
        to_base_int32$1,
        of_int8$2,
        of_int16$1,
        of_int63_trunc$3,
        of_int63_exn$3,
        of_int64_trunc$3,
        of_int64_exn$3,
        of_uint32_wrap$1,
        of_uint32_exn$3],
       [0,
        quickcheck_generator$8,
        quickcheck_observer$8,
        quickcheck_shrinker$8,
        t_of_sexp$8,
        sexp_of_t$8,
        typerep_of_t$2,
        typename_of_t$2,
        signed$8,
        num_bits$8,
        num_bytes$8,
        zero$2,
        min_value$5,
        max_value$8,
        hash_fold_t$8,
        hash$8,
        symbol$97,
        symbol$98,
        symbol$99,
        symbol$100,
        symbol$101,
        symbol$102,
        equal$2,
        compare$10,
        min$2,
        max$2,
        O$8,
        of_base_int32_trunc$1,
        of_base_int32_exn$1,
        to_base_int32_trunc$1,
        to_base_int32_exn$1,
        of_base_int64_trunc$1,
        of_base_int64_exn$1,
        to_base_int64$1,
        to_base_int_exn$1,
        of_uint8$2,
        of_uint16$1,
        of_uint63_trunc$3,
        of_uint63_exn$3,
        of_uint64_trunc$3,
        of_uint64_exn$3,
        of_int32_wrap$1,
        of_int32_exn$3],
       [0,
        quickcheck_generator$9,
        quickcheck_observer$9,
        quickcheck_shrinker$9,
        t_of_sexp$9,
        sexp_of_t$9,
        typerep_of_t$3,
        typename_of_t$3,
        signed$9,
        num_bits$9,
        num_bytes$9,
        zero$3,
        min_value$6,
        max_value$9,
        hash_fold_t$9,
        hash$9,
        symbol$103,
        symbol$104,
        symbol$105,
        symbol$106,
        symbol$107,
        symbol$108,
        equal$3,
        compare$12,
        min$3,
        max$3,
        O$9,
        of_int8$3,
        of_int16$2,
        of_int32,
        of_int64_trunc$4,
        of_int64_exn$4,
        of_uint63_wrap,
        of_uint63_exn$4],
       [0,
        _a7_,
        _a8_,
        _a9_,
        t_of_sexp$10,
        sexp_of_t$10,
        _a__,
        _a$_,
        signed$10,
        num_bits$10,
        num_bytes$10,
        _ba_,
        _bb_,
        max_value$10,
        hash_fold_t$10,
        hash$10,
        symbol$129,
        symbol$130,
        symbol$131,
        symbol$132,
        symbol$133,
        symbol$134,
        equal$4,
        compare$14,
        min$4,
        max$4,
        O$10,
        of_base_int64_trunc$2,
        of_base_int64_exn$2,
        to_base_int64$2,
        of_uint8$3,
        of_uint16$2,
        of_uint32,
        of_uint64_trunc$4,
        of_uint64_exn$4,
        of_int63_wrap,
        of_int63_exn$4],
       [0,
        quickcheck_generator$10,
        quickcheck_observer$10,
        quickcheck_shrinker$10,
        t_of_sexp$11,
        sexp_of_t$11,
        typerep_of_t$4,
        typename_of_t$4,
        signed$11,
        num_bits$11,
        num_bytes$11,
        zero$4,
        min_value$7,
        max_value$11,
        hash_fold_t$11,
        hash$11,
        symbol$135,
        symbol$136,
        symbol$137,
        symbol$138,
        symbol$139,
        symbol$140,
        equal$5,
        compare$16,
        min$5,
        max$5,
        O$11,
        of_int8$4,
        of_int16$3,
        of_int32$0,
        of_int63,
        of_uint64_wrap,
        of_uint64_exn$5],
       [0,
        quickcheck_generator$11,
        quickcheck_observer$11,
        quickcheck_shrinker$11,
        t_of_sexp$12,
        sexp_of_t$12,
        typerep_of_t$5,
        typename_of_t$5,
        signed$12,
        num_bits$12,
        num_bytes$12,
        zero$5,
        min_value$8,
        max_value$12,
        hash_fold_t$12,
        hash$12,
        symbol$161,
        symbol$162,
        symbol$163,
        symbol$164,
        symbol$165,
        symbol$166,
        equal$6,
        compare$18,
        min$6,
        max$6,
        O$12,
        of_base_int64_trunc$3,
        of_base_int64_exn$3,
        to_base_int64_trunc,
        to_base_int64_exn,
        of_uint8$4,
        of_uint16$3,
        of_uint32$0,
        of_uint63,
        of_int64_wrap,
        of_int64_exn$5],
       Make_get,
       Make_set,
       Bytes,
       String];
    runtime.caml_register_global(69,Int_repr,"Int_repr");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJpbnRfcmVwci5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
