(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_ba_dim_1=runtime.caml_ba_dim_1,
     caml_ba_get_1=runtime.caml_ba_get_1,
     caml_ba_set_1=runtime.caml_ba_set_1,
     caml_ba_uint8_get16=runtime.caml_ba_uint8_get16,
     caml_ba_uint8_get32=runtime.caml_ba_uint8_get32,
     caml_ba_uint8_get64=runtime.caml_ba_uint8_get64,
     caml_ba_uint8_set16=runtime.caml_ba_uint8_set16,
     caml_ba_uint8_set32=runtime.caml_ba_uint8_set32,
     caml_ba_uint8_set64=runtime.caml_ba_uint8_set64,
     caml_bswap16=runtime.caml_bswap16,
     caml_greaterequal=runtime.caml_greaterequal,
     caml_int32_bswap=runtime.caml_int32_bswap,
     caml_int64_bswap=runtime.caml_int64_bswap,
     caml_int64_of_int32=runtime.caml_int64_of_int32,
     caml_int64_to_int32=runtime.caml_int64_to_int32,
     caml_lessthan=runtime.caml_lessthan,
     caml_ml_bytes_length=runtime.caml_ml_bytes_length,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
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
    var
     global_data=runtime.caml_get_global_data(),
     cst_Bigstring_set_uint32_be_ex=
      caml_string_of_jsbytes("Bigstring.set_uint32_be_exn"),
     cst_Bigstring_set_uint32_le_ex=
      caml_string_of_jsbytes("Bigstring.set_uint32_le_exn"),
     loc$0=caml_string_of_jsbytes("Bigstring.set_int8_exn"),
     loc=caml_string_of_jsbytes("Bigstring.set_uint8_exn"),
     cst_Bigstring_set_uint64_le_ex=
      caml_string_of_jsbytes("Bigstring.set_uint64_le_exn"),
     cst_Bigstring_set_uint64_be_ex=
      caml_string_of_jsbytes("Bigstring.set_uint64_be_exn"),
     cst_unsafe_read_uint64_value_c=
      caml_string_of_jsbytes
       ("unsafe_read_uint64: value cannot be represented unboxed!"),
     cst_unsafe_read_int64_value_ca=
      caml_string_of_jsbytes
       ("unsafe_read_int64: value cannot be represented unboxed!"),
     cst_Bigstring_write_int32_int$0=
      caml_string_of_jsbytes("Bigstring.write_int32_int"),
     cst_Bigstring_write_int32_int=
      caml_string_of_jsbytes("Bigstring.write_int32_int"),
     cst_Bigstring_write_uint16$0=
      caml_string_of_jsbytes("Bigstring.write_uint16"),
     cst_Bigstring_write_uint16=
      caml_string_of_jsbytes("Bigstring.write_uint16"),
     cst_Bigstring_write_int16$0=
      caml_string_of_jsbytes("Bigstring.write_int16"),
     cst_Bigstring_write_int16=caml_string_of_jsbytes("Bigstring.write_int16"),
     cst_set_64=caml_string_of_jsbytes("set_64"),
     cst_set_32=caml_string_of_jsbytes("set_32"),
     cst_set_16=caml_string_of_jsbytes("set_16"),
     cst_get_64=caml_string_of_jsbytes("get_64"),
     cst_get_32=caml_string_of_jsbytes("get_32"),
     cst_get_16=caml_string_of_jsbytes("get_16"),
     cst_find=caml_string_of_jsbytes("find"),
     cst_bigstring_of_sexp_atom_nee=
      caml_string_of_jsbytes("bigstring_of_sexp: atom needed"),
     cst_pos_0=caml_string_of_jsbytes(": pos < 0"),
     cst_len_0=caml_string_of_jsbytes(": len < 0"),
     cst_Base_bigstring=caml_string_of_jsbytes("Base_bigstring"),
     cst_base_bigstring=caml_string_of_jsbytes("base_bigstring"),
     cst_src_base_bigstring_ml=caml_string_of_jsbytes("src/base_bigstring.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_base_bigstring$0=caml_string_of_jsbytes("base_bigstring"),
     cst_base_bigstring$1=caml_string_of_jsbytes("base_bigstring"),
     cst_Base_bigstring$0=caml_string_of_jsbytes("Base_bigstring"),
     Base_Char=global_data.Base__Char,
     Base=global_data.Base,
     Base_Int=global_data.Base__Int,
     Base_Ordered_collection_common=
      global_data.Base__Ordered_collection_common,
     Base_Option=global_data.Base__Option,
     Base_List=global_data.Base__List,
     Assert_failure=global_data.Assert_failure,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base_Bytes=global_data.Base__Bytes,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Base_Printf=global_data.Base__Printf,
     Stdlib_Sys=global_data.Stdlib__Sys,
     Base_Blit=global_data.Base__Blit,
     Base_Hash=global_data.Base__Hash,
     Int_repr=global_data.Int_repr;
    caml_call1(Ppx_module_timer_runtime[4],cst_Base_bigstring);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_base_bigstring);
    caml_call1(Expect_test_collector[5][1],cst_src_base_bigstring_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_base_bigstring$0,cst);
    var
     Bigstring0=[0],
     sprintf=Base_Printf[2],
     arch_sixtyfour=64 === Stdlib_Sys[9]?1:0,
     arch_big_endian=Stdlib_Sys[11],
     not_on_32bit=32 < Stdlib_Sys[9]?1:0,
     _t_=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     _u_=runtime.caml_int64_create_lo_mi_hi(0,0,16384),
     _v_=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     _w_=runtime.caml_int64_create_lo_mi_hi(0,64,0),
     _p_=runtime.caml_int64_create_lo_mi_hi(0,0,49152),
     _q_=runtime.caml_int64_create_lo_mi_hi(0,0,16384),
     _r_=runtime.caml_int64_create_lo_mi_hi(0,16777152,65535),
     _s_=runtime.caml_int64_create_lo_mi_hi(0,64,0),
     _o_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": "),
         [4,
          0,
          0,
          0,
          [11,
           caml_string_of_jsbytes(" is not a valid unsigned 64-bit integer"),
           0]]]],
       caml_string_of_jsbytes("%s: %d is not a valid unsigned 64-bit integer")],
     _m_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": "),
         [4,
          0,
          0,
          0,
          [11,
           caml_string_of_jsbytes(" is not a valid unsigned 32-bit integer"),
           0]]]],
       caml_string_of_jsbytes("%s: %d is not a valid unsigned 32-bit integer")],
     _z_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": "),
         [4,
          0,
          0,
          0,
          [11,
           caml_string_of_jsbytes(" is not a valid unsigned 32-bit integer"),
           0]]]],
       caml_string_of_jsbytes("%s: %d is not a valid unsigned 32-bit integer")],
     _k_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": "),
         [4,
          0,
          0,
          0,
          [11,
           caml_string_of_jsbytes(" is not a valid (signed) 32-bit integer"),
           0]]]],
       caml_string_of_jsbytes("%s: %d is not a valid (signed) 32-bit integer")],
     _j_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": "),
         [4,
          0,
          0,
          0,
          [11,
           caml_string_of_jsbytes(" is not a valid (signed) 8-bit integer"),
           0]]]],
       caml_string_of_jsbytes("%s: %d is not a valid (signed) 8-bit integer")],
     _i_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": "),
         [4,
          0,
          0,
          0,
          [11,
           caml_string_of_jsbytes(" is not a valid unsigned 8-bit integer"),
           0]]]],
       caml_string_of_jsbytes("%s: %d is not a valid unsigned 8-bit integer")],
     _h_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": "),
         [4,
          0,
          0,
          0,
          [11,
           caml_string_of_jsbytes(" is not a valid (signed) 16-bit integer"),
           0]]]],
       caml_string_of_jsbytes("%s: %d is not a valid (signed) 16-bit integer")],
     _g_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": "),
         [4,
          0,
          0,
          0,
          [11,
           caml_string_of_jsbytes(" is not a valid unsigned 16-bit integer"),
           0]]]],
       caml_string_of_jsbytes("%s: %d is not a valid unsigned 16-bit integer")],
     _f_=[0,caml_string_of_jsbytes("src/base_bigstring.ml"),205,6],
     _b_=
      [0,
       [11,
        caml_string_of_jsbytes("Bigstring."),
        [2,0,[11,caml_string_of_jsbytes(": length(bstr) < pos + len"),0]]],
       caml_string_of_jsbytes("Bigstring.%s: length(bstr) < pos + len")],
     _a_=
      [0,
       [11,
        caml_string_of_jsbytes("create: size = "),
        [4,0,0,0,[11,caml_string_of_jsbytes(" < 0"),0]]],
       caml_string_of_jsbytes("create: size = %d < 0")];
    function create(max_mem_waiting_gc_in_bytes,size)
     {var
       max_mem_waiting_gc_in_bytes$0=
        caml_call2(Base_Option[27],max_mem_waiting_gc_in_bytes,-1);
      if(size < 0)
       {var _aG_=caml_call2(sprintf,_a_,size);caml_call1(Base[201],_aG_)}
      return runtime.bigstring_alloc(max_mem_waiting_gc_in_bytes$0,size)}
    var length=caml_ba_dim_1;
    function init(n,f)
     {var t=create(0,n),_aE_=n - 1 | 0,_aD_=0;
      if(! (_aE_ < 0))
       {var i=_aD_;
        for(;;)
         {caml_ba_set_1(t,i,caml_call1(f,i));
          var _aF_=i + 1 | 0;
          if(_aE_ !== i){var i=_aF_;continue}
          break}}
      return t}
    function check_args(loc,pos,len,bstr)
     {if(pos < 0)
       {var _az_=caml_call2(Base[197],loc,cst_pos_0);
        caml_call1(Base[201],_az_)}
      if(len < 0)
       {var _aA_=caml_call2(Base[197],loc,cst_len_0);
        caml_call1(Base[201],_aA_)}
      var bstr_len=caml_ba_dim_1(bstr),_aB_=(bstr_len - pos | 0) < len?1:0;
      if(_aB_)
       {var _aC_=caml_call2(sprintf,_b_,loc);
        return caml_call1(Base[201],_aC_)}
      return _aB_}
    function get_opt_len(bstr,pos,param)
     {if(param){var len=param[1];return len}
      return caml_ba_dim_1(bstr) - pos | 0}
    function create$0(len){return create(0,len)}
    function create$1(len){return caml_call1(Base_Bytes[31],len)}
    var length$0=caml_ml_bytes_length;
    function unsafe_blit(_ay_,_ax_,_aw_,_av_,_au_)
     {return runtime.bigstring_blit_stub(_ay_,_ax_,_aw_,_av_,_au_)}
    var
     include=caml_call1(Base_Blit[1],[0,length,create$0,unsafe_blit]),
     blit=include[1],
     blito=include[2],
     unsafe_blit$0=include[3],
     sub=include[4],
     subo=include[5],
     _c_=
      [0,
       length,
       create$0,
       function(_at_,_as_,_ar_,_aq_,_ap_)
        {return runtime.bigstring_blit_bytes_bigstring_stub
                 (_at_,_as_,_ar_,_aq_,_ap_)}],
     From_bytes=caml_call1(caml_call1(Base_Blit[2],[0,length$0]),_c_),
     _d_=
      [0,
       length$0,
       create$1,
       function(_ao_,_an_,_am_,_al_,_ak_)
        {return runtime.bigstring_blit_bigstring_bytes_stub
                 (_ao_,_an_,_am_,_al_,_ak_)}],
     To_bytes=caml_call1(caml_call1(Base_Blit[2],[0,length]),_d_),
     length$1=runtime.caml_ml_string_length,
     _e_=
      [0,
       length,
       create$0,
       function(_aj_,_ai_,_ah_,_ag_,_af_)
        {return runtime.bigstring_blit_string_bigstring_stub
                 (_aj_,_ai_,_ah_,_ag_,_af_)}],
     From_string=caml_call1(caml_call1(Base_Blit[2],[0,length$1]),_e_),
     blit$0=To_bytes[1],
     blito$0=To_bytes[2],
     unsafe_blit$1=To_bytes[3],
     include$0=caml_call1(caml_call1(Base_Blit[3],Bigstring0),To_bytes),
     sub$0=include$0[1],
     subo$0=include$0[2],
     To_string=[0,blit$0,blito$0,unsafe_blit$1,sub$0,subo$0],
     of_string=From_string[5],
     of_bytes=From_bytes[5],
     to_string=To_string[5],
     to_bytes=To_bytes[5];
    function sexp_of_t_frozen(t){return [0,caml_call3(to_string,0,0,t)]}
    function t_frozen_of_sexp(sexp)
     {if(0 === sexp[0]){var str=sexp[1];return caml_call3(of_string,0,0,str)}
      return caml_call2
              (Sexplib0_Sexp_conv[27],cst_bigstring_of_sexp_atom_nee,sexp)}
    function copy(t){return caml_call3(sub,t,0,caml_ba_dim_1(t))}
    function append(src,dst,dst_pos_ref)
     {var len=caml_ba_dim_1(src),dst_pos=dst_pos_ref[1];
      caml_call5(blit,src,0,dst,dst_pos,len);
      dst_pos_ref[1] = dst_pos + len | 0;
      return 0}
    function concat(sep,list)
     {if(list)
       {var
         tail=list[2],
         head=list[1],
         head_len=caml_ba_dim_1(head),
         sep_len=caml_call3(Base_Option[29],sep,0,length),
         tail_count=caml_call1(Base_List[7],tail),
         _ab_=function(_ae_,_ad_){return _ae_ + _ad_ | 0},
         len=
          (head_len + runtime.caml_mul(sep_len,tail_count) | 0)
          +
          caml_call3(Base_List[15],[0,Base_Int[74],_ab_],tail,length)
          |
          0,
         dst=create(0,len),
         dst_pos_ref=[0,0];
        append(head,dst,dst_pos_ref);
        var
         _ac_=
          function(src)
           {if(sep){var sep$0=sep[1];append(sep$0,dst,dst_pos_ref)}
            return append(src,dst,dst_pos_ref)};
        caml_call2(Base_List[9],tail,_ac_);
        if(dst_pos_ref[1] === len)return dst;
        throw [0,Assert_failure,_f_]}
      return create(0,0)}
    function memset(t,pos,len,c)
     {var _aa_=caml_ba_dim_1(t);
      caml_call3(Base_Ordered_collection_common[2],pos,len,_aa_);
      return runtime.bigstring_memset_stub(t,pos,len,c)}
    function memcmp(t1,pos1,t2,pos2,len)
     {var ___=caml_ba_dim_1(t1);
      caml_call3(Base_Ordered_collection_common[2],pos1,len,___);
      var _$_=caml_ba_dim_1(t2);
      caml_call3(Base_Ordered_collection_common[2],pos2,len,_$_);
      return runtime.bigstring_memcmp_stub(t1,pos1,t2,pos2,len)}
    function memcmp_bytes(t1,pos1,bytes,pos2,len)
     {var _Z_=caml_ba_dim_1(t1);
      caml_call3(Base_Ordered_collection_common[2],pos1,len,_Z_);
      caml_call3
       (Base_Ordered_collection_common[2],
        pos2,
        len,
        caml_ml_bytes_length(bytes));
      return runtime.bigstring_memcmp_bytes_stub(t1,pos1,bytes,pos2,len)}
    function compare_t_frozen(t1,t2)
     {if(caml_call2(Base[203],t1,t2))return 0;
      var
       len1=caml_ba_dim_1(t1),
       len2=caml_ba_dim_1(t2),
       len=caml_call2(Base_Int[14],len1,len2),
       n=runtime.bigstring_memcmp_stub(t1,0,t2,0,len);
      return 0 === n?len1 < len2?-1:len2 < len1?1:0:n}
    function hash_fold_t_frozen(_Y_,_X_)
     {return runtime.internalhash_fold_bigstring(_Y_,_X_)}
    var hash=caml_call1(Base_Hash[12],hash_fold_t_frozen);
    function hash_t_frozen(x){return caml_call1(hash,x)}
    function equal(t1,t2)
     {if(caml_call2(Base[203],t1,t2))return 1;
      var
       len1=caml_ba_dim_1(t1),
       len2=caml_ba_dim_1(t2),
       _V_=caml_call2(Base_Int[12],len1,len2);
      if(_V_)
       {var _W_=runtime.bigstring_memcmp_stub(t1,0,t2,0,len1);
        return caml_call2(Base_Int[12],_W_,0)}
      return _V_}
    function find(opt,len,chr,bstr)
     {if(opt)var sth=opt[1],pos=sth;else var pos=0;
      var len$0=get_opt_len(bstr,pos,len);
      check_args(cst_find,pos,len$0,bstr);
      var res=runtime.bigstring_find(bstr,chr,pos,len$0);
      return 0 <= res?[0,res]:0}
    function get_16(t,pos)
     {check_args(cst_get_16,pos,2,t);return caml_ba_uint8_get16(t,pos)}
    function get_32(t,pos)
     {check_args(cst_get_32,pos,4,t);return caml_ba_uint8_get32(t,pos)}
    function get_64(t,pos)
     {check_args(cst_get_64,pos,8,t);return caml_ba_uint8_get64(t,pos)}
    function set_16_trunc(t,pos,v)
     {check_args(cst_set_16,pos,2,t);return caml_ba_uint8_set16(t,pos,v)}
    function set_32(t,pos,v)
     {check_args(cst_set_32,pos,4,t);return caml_ba_uint8_set32(t,pos,v)}
    function set_64(t,pos,v)
     {check_args(cst_set_64,pos,8,t);return caml_ba_uint8_set64(t,pos,v)}
    function sign_extend_16(u)
     {return u << (Base_Int[59] - 16 | 0) >> (Base_Int[59] - 16 | 0)}
    function check_valid_uint16(x,loc)
     {var _S_=x < 0?1:0,_T_=_S_ || (65535 < x?1:0);
      if(_T_)
       {var _U_=caml_call3(sprintf,_g_,loc,x);
        return caml_call1(Base[201],_U_)}
      return _T_}
    function check_valid_int16(x,loc)
     {var _P_=x < -32768?1:0,_Q_=_P_ || (32767 < x?1:0);
      if(_Q_)
       {var _R_=caml_call3(sprintf,_h_,loc,x);
        return caml_call1(Base[201],_R_)}
      return _Q_}
    var
     _l_=
      arch_sixtyfour
       ?function(x,loc)
         {if(-2147483648 <= x && x < -2147483648)return 0;
          var _N_=caml_call3(sprintf,_k_,loc,x);
          return caml_call1(Base[201],_N_)}
       :function(param,_O_){return 0},
     _n_=
      arch_sixtyfour
       ?function(x,loc)
         {if(0 <= x && x < 1)return 0;
          var _L_=caml_call3(sprintf,_m_,loc,x);
          return caml_call1(Base[201],_L_)}
       :function(x,loc)
         {if(0 <= x)return 0;
          var _M_=caml_call3(sprintf,_z_,loc,x);
          return caml_call1(Base[201],_M_)};
    function check_valid_uint64(x,loc)
     {if(0 <= x)return 0;
      var _K_=caml_call3(sprintf,_o_,loc,x);
      return caml_call1(Base[201],_K_)}
    function unsafe_read_int16(t,pos)
     {return sign_extend_16(caml_ba_uint8_get16(t,pos))}
    function unsafe_read_int16_swap(t,pos)
     {return sign_extend_16(caml_bswap16(caml_ba_uint8_get16(t,pos)))}
    function unsafe_write_int16(t,pos,x){return caml_ba_uint8_set16(t,pos,x)}
    function unsafe_write_int16_swap(t,pos,x)
     {return caml_ba_uint8_set16(t,pos,caml_bswap16(x))}
    function read_int16(t,pos){return sign_extend_16(get_16(t,pos))}
    function read_int16_swap(t,pos)
     {return sign_extend_16(caml_bswap16(get_16(t,pos)))}
    function write_int16_exn(t,pos,x)
     {check_valid_int16(x,cst_Bigstring_write_int16);
      return set_16_trunc(t,pos,x)}
    function write_int16_swap_exn(t,pos,x)
     {check_valid_int16(x,cst_Bigstring_write_int16$0);
      return set_16_trunc(t,pos,caml_bswap16(x))}
    function unsafe_read_uint16(t,pos){return caml_ba_uint8_get16(t,pos)}
    function unsafe_read_uint16_swap(t,pos)
     {return caml_bswap16(caml_ba_uint8_get16(t,pos))}
    function unsafe_write_uint16(t,pos,x){return caml_ba_uint8_set16(t,pos,x)}
    function unsafe_write_uint16_swap(t,pos,x)
     {return caml_ba_uint8_set16(t,pos,caml_bswap16(x))}
    function read_uint16(t,pos){return get_16(t,pos)}
    function read_uint16_swap(t,pos){return caml_bswap16(get_16(t,pos))}
    function write_uint16_exn(t,pos,x)
     {check_valid_uint16(x,cst_Bigstring_write_uint16);
      return set_16_trunc(t,pos,x)}
    function write_uint16_swap_exn(t,pos,x)
     {check_valid_uint16(x,cst_Bigstring_write_uint16$0);
      return set_16_trunc(t,pos,caml_bswap16(x))}
    function unsafe_read_int32_int(t,pos){return caml_ba_uint8_get32(t,pos)}
    function unsafe_read_int32_int_swap(t,pos)
     {return caml_int32_bswap(caml_ba_uint8_get32(t,pos))}
    function unsafe_read_int32(t,pos){return caml_ba_uint8_get32(t,pos)}
    function unsafe_read_int32_swap(t,pos)
     {return caml_int32_bswap(caml_ba_uint8_get32(t,pos))}
    function unsafe_write_int32(t,pos,x){return caml_ba_uint8_set32(t,pos,x)}
    function unsafe_write_int32_swap(t,pos,x)
     {return caml_ba_uint8_set32(t,pos,caml_int32_bswap(x))}
    function unsafe_write_int32_int(t,pos,x)
     {return caml_ba_uint8_set32(t,pos,x)}
    function unsafe_write_int32_int_swap(t,pos,x)
     {return caml_ba_uint8_set32(t,pos,caml_int32_bswap(x))}
    function read_int32_int(t,pos){return get_32(t,pos)}
    function read_int32_int_swap(t,pos)
     {return caml_int32_bswap(get_32(t,pos))}
    function read_int32(t,pos){return get_32(t,pos)}
    function read_int32_swap(t,pos){return caml_int32_bswap(get_32(t,pos))}
    function write_int32(t,pos,x){return set_32(t,pos,x)}
    function write_int32_swap(t,pos,x)
     {return set_32(t,pos,caml_int32_bswap(x))}
    function write_int32_int_exn(t,pos,x)
     {_l_(x,cst_Bigstring_write_int32_int);return set_32(t,pos,x)}
    function write_int32_int_swap_exn(t,pos,x)
     {_l_(x,cst_Bigstring_write_int32_int$0);
      return set_32(t,pos,caml_int32_bswap(x))}
    function unsafe_read_int64_int(t,pos)
     {return caml_int64_to_int32(caml_ba_uint8_get64(t,pos))}
    function unsafe_read_int64_int_swap(t,pos)
     {return caml_int64_to_int32(caml_int64_bswap(caml_ba_uint8_get64(t,pos)))}
    function unsafe_read_int64(t,pos){return caml_ba_uint8_get64(t,pos)}
    function unsafe_read_int64_swap(t,pos)
     {return caml_int64_bswap(caml_ba_uint8_get64(t,pos))}
    function unsafe_write_int64(t,pos,x){return caml_ba_uint8_set64(t,pos,x)}
    function unsafe_write_int64_swap(t,pos,x)
     {return caml_ba_uint8_set64(t,pos,caml_int64_bswap(x))}
    function unsafe_write_int64_int(t,pos,x)
     {return caml_ba_uint8_set64(t,pos,caml_int64_of_int32(x))}
    function unsafe_write_int64_int_swap(t,pos,x)
     {return caml_ba_uint8_set64
              (t,pos,caml_int64_bswap(caml_int64_of_int32(x)))}
    function read_int64_int(t,pos){return caml_int64_to_int32(get_64(t,pos))}
    function read_int64_int_swap(t,pos)
     {return caml_int64_to_int32(caml_int64_bswap(get_64(t,pos)))}
    function read_int64(t,pos){return get_64(t,pos)}
    function read_int64_swap(t,pos){return caml_int64_bswap(get_64(t,pos))}
    function write_int64(t,pos,x){return set_64(t,pos,x)}
    function write_int64_swap(t,pos,x)
     {return set_64(t,pos,caml_int64_bswap(x))}
    function write_int64_int(t,pos,x)
     {return set_64(t,pos,caml_int64_of_int32(x))}
    function write_int64_int_swap(t,pos,x)
     {return set_64(t,pos,caml_int64_bswap(caml_int64_of_int32(x)))}
    var
     unsafe_read_int16$0=
      arch_big_endian?unsafe_read_int16:unsafe_read_int16_swap,
     unsafe_read_int16_swap$0=
      arch_big_endian?unsafe_read_int16_swap:unsafe_read_int16,
     unsafe_read_uint16$0=
      arch_big_endian?unsafe_read_uint16:unsafe_read_uint16_swap,
     unsafe_read_uint16_swap$0=
      arch_big_endian?unsafe_read_uint16_swap:unsafe_read_uint16,
     read_int16$0=arch_big_endian?read_int16:read_int16_swap,
     read_int16_swap$0=arch_big_endian?read_int16_swap:read_int16,
     read_uint16$0=arch_big_endian?read_uint16:read_uint16_swap,
     read_uint16_swap$0=arch_big_endian?read_uint16_swap:read_uint16,
     unsafe_write_int16$0=
      arch_big_endian?unsafe_write_int16:unsafe_write_int16_swap,
     unsafe_write_int16_swap$0=
      arch_big_endian?unsafe_write_int16_swap:unsafe_write_int16,
     unsafe_write_uint16$0=
      arch_big_endian?unsafe_write_uint16:unsafe_write_uint16_swap,
     unsafe_write_uint16_swap$0=
      arch_big_endian?unsafe_write_uint16_swap:unsafe_write_uint16,
     write_int16_exn$0=arch_big_endian?write_int16_exn:write_int16_swap_exn,
     write_int16_swap_exn$0=
      arch_big_endian?write_int16_swap_exn:write_int16_exn,
     write_uint16_exn$0=arch_big_endian?write_uint16_exn:write_uint16_swap_exn,
     write_uint16_swap_exn$0=
      arch_big_endian?write_uint16_swap_exn:write_uint16_exn,
     unsafe_read_int32$0=
      arch_big_endian?unsafe_read_int32:unsafe_read_int32_swap,
     unsafe_read_int32_swap$0=
      arch_big_endian?unsafe_read_int32_swap:unsafe_read_int32,
     unsafe_write_int32$0=
      arch_big_endian?unsafe_write_int32:unsafe_write_int32_swap,
     unsafe_write_int32_swap$0=
      arch_big_endian?unsafe_write_int32_swap:unsafe_write_int32,
     read_int32$0=arch_big_endian?read_int32:read_int32_swap,
     read_int32_swap$0=arch_big_endian?read_int32_swap:read_int32,
     write_int32$0=arch_big_endian?write_int32:write_int32_swap,
     write_int32_swap$0=arch_big_endian?write_int32_swap:write_int32,
     unsafe_read_int32_int$0=
      arch_big_endian?unsafe_read_int32_int:unsafe_read_int32_int_swap,
     unsafe_read_int32_int_swap$0=
      arch_big_endian?unsafe_read_int32_int_swap:unsafe_read_int32_int,
     unsafe_write_int32_int$0=
      arch_big_endian?unsafe_write_int32_int:unsafe_write_int32_int_swap,
     unsafe_write_int32_int_swap$0=
      arch_big_endian?unsafe_write_int32_int_swap:unsafe_write_int32_int,
     read_int32_int$0=arch_big_endian?read_int32_int:read_int32_int_swap,
     read_int32_int_swap$0=arch_big_endian?read_int32_int_swap:read_int32_int,
     write_int32_int_exn$0=
      arch_big_endian?write_int32_int_exn:write_int32_int_swap_exn,
     write_int32_int_swap_exn$0=
      arch_big_endian?write_int32_int_swap_exn:write_int32_int_exn,
     unsafe_read_int64_int$0=
      arch_big_endian?unsafe_read_int64_int:unsafe_read_int64_int_swap,
     unsafe_read_int64_int_swap$0=
      arch_big_endian?unsafe_read_int64_int_swap:unsafe_read_int64_int,
     unsafe_write_int64_int$0=
      arch_big_endian?unsafe_write_int64_int:unsafe_write_int64_int_swap,
     unsafe_write_int64_int_swap$0=
      arch_big_endian?unsafe_write_int64_int_swap:unsafe_write_int64_int,
     read_int64_int$0=arch_big_endian?read_int64_int:read_int64_int_swap,
     read_int64_int_swap$0=arch_big_endian?read_int64_int_swap:read_int64_int,
     write_int64_int$0=arch_big_endian?write_int64_int:write_int64_int_swap,
     write_int64_int_swap$0=
      arch_big_endian?write_int64_int_swap:write_int64_int,
     unsafe_read_int64$0=
      arch_big_endian?unsafe_read_int64:unsafe_read_int64_swap,
     unsafe_read_int64_swap$0=
      arch_big_endian?unsafe_read_int64_swap:unsafe_read_int64,
     unsafe_write_int64$0=
      arch_big_endian?unsafe_write_int64:unsafe_write_int64_swap,
     unsafe_write_int64_swap$0=
      arch_big_endian?unsafe_write_int64_swap:unsafe_write_int64,
     read_int64$0=arch_big_endian?read_int64:read_int64_swap,
     read_int64_swap$0=arch_big_endian?read_int64_swap:read_int64,
     write_int64$0=arch_big_endian?write_int64:write_int64_swap,
     write_int64_swap$0=arch_big_endian?write_int64_swap:write_int64;
    function int64_conv_error(param)
     {return caml_call1(Base[200],cst_unsafe_read_int64_value_ca)}
    function uint64_conv_error(param)
     {return caml_call1(Base[200],cst_unsafe_read_uint64_value_c)}
    function int64_to_int_exn(n)
     {if(arch_sixtyfour)
       {if(caml_greaterequal(n,_p_) && caml_lessthan(n,_q_))
         return caml_int64_to_int32(n);
        return int64_conv_error(0)}
      if(caml_greaterequal(n,_r_) && caml_lessthan(n,_s_))
       return caml_int64_to_int32(n);
      return int64_conv_error(0)}
    function uint64_to_int_exn(n)
     {if(arch_sixtyfour)
       {if(caml_greaterequal(n,_t_) && caml_lessthan(n,_u_))
         return caml_int64_to_int32(n);
        return uint64_conv_error(0)}
      if(caml_greaterequal(n,_v_) && caml_lessthan(n,_w_))
       return caml_int64_to_int32(n);
      return uint64_conv_error(0)}
    function unsafe_get_int64_be_exn(t,pos)
     {return int64_to_int_exn(unsafe_read_int64$0(t,pos))}
    function unsafe_get_int64_le_exn(t,pos)
     {return int64_to_int_exn(unsafe_read_int64_swap$0(t,pos))}
    function get_int64_be_exn(t,pos)
     {return int64_to_int_exn(read_int64$0(t,pos))}
    function get_int64_le_exn(t,pos)
     {return int64_to_int_exn(read_int64_swap$0(t,pos))}
    function unsafe_get_uint64_be_exn(t,pos)
     {return uint64_to_int_exn(unsafe_read_int64$0(t,pos))}
    function unsafe_get_uint64_le_exn(t,pos)
     {return uint64_to_int_exn(unsafe_read_int64_swap$0(t,pos))}
    function get_uint64_be_exn(t,pos)
     {return uint64_to_int_exn(read_int64$0(t,pos))}
    function get_uint64_le_exn(t,pos)
     {return uint64_to_int_exn(read_int64_swap$0(t,pos))}
    function set_uint64_be_exn(t,pos,n)
     {check_valid_uint64(n,cst_Bigstring_set_uint64_be_ex);
      return write_int64_int$0(t,pos,n)}
    function set_uint64_le_exn(t,pos,n)
     {check_valid_uint64(n,cst_Bigstring_set_uint64_le_ex);
      return write_int64_int_swap$0(t,pos,n)}
    function unsafe_set_uint8(t,pos,n)
     {return caml_ba_set_1(t,pos,caml_call1(Base_Char[32],n))}
    function unsafe_set_int8(t,pos,n)
     {var n$0=0 <= n?n:n + 256 | 0;
      return caml_ba_set_1(t,pos,caml_call1(Base_Char[32],n$0))}
    function unsafe_get_uint8(t,pos)
     {var _J_=caml_ba_get_1(t,pos);return caml_call1(Base_Char[29],_J_)}
    function unsafe_get_int8(t,pos)
     {var _I_=caml_ba_get_1(t,pos),n=caml_call1(Base_Char[29],_I_);
      return 128 <= n?n - 256 | 0:n}
    function set_uint8_exn(t,pos,n)
     {var _F_=n < 0?1:0,_G_=_F_ || (255 < n?1:0);
      if(_G_){var _H_=caml_call3(sprintf,_i_,loc,n);caml_call1(Base[201],_H_)}
      return caml_ba_set_1(t,pos,caml_call1(Base_Char[32],n))}
    function set_int8_exn(t,pos,n)
     {var _C_=n < -128?1:0,_D_=_C_ || (127 < n?1:0);
      if(_D_)
       {var _E_=caml_call3(sprintf,_j_,loc$0,n);caml_call1(Base[201],_E_)}
      var n$0=0 <= n?n:n + 256 | 0;
      return caml_ba_set_1(t,pos,caml_call1(Base_Char[32],n$0))}
    function get_uint8(t,pos)
     {var _B_=caml_ba_get_1(t,pos);return caml_call1(Base_Char[29],_B_)}
    function get_int8(t,pos)
     {var _A_=caml_ba_get_1(t,pos),n=caml_call1(Base_Char[29],_A_);
      return 128 <= n?n - 256 | 0:n}
    function uint32_of_int32_t(n){return not_on_32bit?n & 0:n}
    function unsafe_set_uint32_le(t,pos,n)
     {return unsafe_write_int32_swap$0(t,pos,n)}
    function unsafe_set_uint32_be(t,pos,n)
     {return unsafe_write_int32$0(t,pos,n)}
    function unsafe_get_uint32_le(t,pos)
     {return uint32_of_int32_t(unsafe_read_int32_swap$0(t,pos))}
    function unsafe_get_uint32_be(t,pos)
     {return uint32_of_int32_t(unsafe_read_int32$0(t,pos))}
    function set_uint32_le_exn(t,pos,n)
     {_n_(n,cst_Bigstring_set_uint32_le_ex);
      var switch$0=0;
      if(not_on_32bit && -2147483648 <= n){var n$0=n - 1 | 0;switch$0 = 1}
      if(! switch$0)var n$0=n;
      return write_int32_int_swap_exn$0(t,pos,n$0)}
    function set_uint32_be_exn(t,pos,n)
     {_n_(n,cst_Bigstring_set_uint32_be_ex);
      var switch$0=0;
      if(not_on_32bit && -2147483648 <= n){var n$0=n - 1 | 0;switch$0 = 1}
      if(! switch$0)var n$0=n;
      return write_int32_int_exn$0(t,pos,n$0)}
    function get_uint32_le(t,pos)
     {return uint32_of_int32_t(read_int32_swap$0(t,pos))}
    function get_uint32_be(t,pos)
     {return uint32_of_int32_t(read_int32$0(t,pos))}
    function get_uint8$0(t,pos){return get_uint8(t,pos)}
    function set_uint8(t,pos,x)
     {return caml_ba_set_1(t,pos,caml_call1(Base_Char[32],x))}
    function get_uint16_ne(t,pos){return get_16(t,pos)}
    function set_uint16_ne(t,pos,x){return set_16_trunc(t,pos,x)}
    function get_int32_ne(t,pos){return get_32(t,pos)}
    function set_int32_ne(t,pos,x){return set_32(t,pos,x)}
    function get_int64_ne(t,pos){return get_64(t,pos)}
    function set_int64_ne(t,pos,x){return set_64(t,pos,x)}
    var
     _x_=
      caml_call1
       (Int_repr[11],[0,get_uint8$0,get_uint16_ne,get_int32_ne,get_int64_ne]),
     get_int8$0=_x_[1],
     get_uint8$1=_x_[2],
     get_int16_le=_x_[3],
     get_int16_be=_x_[4],
     get_uint16_le=_x_[5],
     get_uint16_be=_x_[6],
     get_int32_le=_x_[7],
     get_int32_be=_x_[8],
     get_uint32_le$0=_x_[9],
     get_uint32_be$0=_x_[10],
     get_int64_le=_x_[11],
     get_int64_be=_x_[12],
     get_uint64_le=_x_[13],
     get_uint64_be=_x_[14],
     include$1=
      caml_call1
       (Int_repr[12],[0,set_uint8,set_uint16_ne,set_int32_ne,set_int64_ne]),
     set_int8=include$1[1],
     set_uint8$0=include$1[2],
     set_int16_le=include$1[3],
     set_int16_be=include$1[4],
     set_uint16_le=include$1[5],
     set_uint16_be=include$1[6],
     set_int32_le=include$1[7],
     set_int32_be=include$1[8],
     set_uint32_le=include$1[9],
     set_uint32_be=include$1[10],
     set_int64_le=include$1[11],
     set_int64_be=include$1[12],
     set_uint64_le=include$1[13],
     set_uint64_be=include$1[14];
    function get_uint8$2(t,pos){return unsafe_get_uint8(t,pos)}
    function set_uint8$1(t,pos,x){return unsafe_set_uint8(t,pos,x)}
    function get_uint16_ne$0(t,pos){return caml_ba_uint8_get16(t,pos)}
    function set_uint16_ne$0(t,pos,x){return caml_ba_uint8_set16(t,pos,x)}
    function get_int32_ne$0(t,pos){return caml_ba_uint8_get32(t,pos)}
    function set_int32_ne$0(t,pos,x){return caml_ba_uint8_set32(t,pos,x)}
    function get_int64_ne$0(t,pos){return caml_ba_uint8_get64(t,pos)}
    function set_int64_ne$0(t,pos,x){return caml_ba_uint8_set64(t,pos,x)}
    var
     _y_=
      caml_call1
       (Int_repr[11],
        [0,get_uint8$2,get_uint16_ne$0,get_int32_ne$0,get_int64_ne$0]),
     get_int8$1=_y_[1],
     get_uint8$3=_y_[2],
     get_int16_le$0=_y_[3],
     get_int16_be$0=_y_[4],
     get_uint16_le$0=_y_[5],
     get_uint16_be$0=_y_[6],
     get_int32_le$0=_y_[7],
     get_int32_be$0=_y_[8],
     get_uint32_le$1=_y_[9],
     get_uint32_be$1=_y_[10],
     get_int64_le$0=_y_[11],
     get_int64_be$0=_y_[12],
     get_uint64_le$0=_y_[13],
     get_uint64_be$0=_y_[14],
     include$2=
      caml_call1
       (Int_repr[12],
        [0,set_uint8$1,set_uint16_ne$0,set_int32_ne$0,set_int64_ne$0]),
     set_int8$0=include$2[1],
     set_uint8$2=include$2[2],
     set_int16_le$0=include$2[3],
     set_int16_be$0=include$2[4],
     set_uint16_le$0=include$2[5],
     set_uint16_be$0=include$2[6],
     set_int32_le$0=include$2[7],
     set_int32_be$0=include$2[8],
     set_uint32_le$0=include$2[9],
     set_uint32_be$0=include$2[10],
     set_int64_le$0=include$2[11],
     set_int64_be$0=include$2[12],
     set_uint64_le$0=include$2[13],
     set_uint64_be$0=include$2[14],
     Private=[0,sign_extend_16];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_base_bigstring$1);
    caml_call1(Expect_test_collector[5][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Base_bigstring$0);
    var
     Base_bigstring=
      [0,
       compare_t_frozen,
       t_frozen_of_sexp,
       sexp_of_t_frozen,
       compare_t_frozen,
       hash_fold_t_frozen,
       hash_t_frozen,
       sexp_of_t_frozen,
       t_frozen_of_sexp,
       equal,
       create,
       init,
       of_string,
       of_bytes,
       to_string,
       to_bytes,
       concat,
       check_args,
       get_opt_len,
       length,
       blit,
       blito,
       unsafe_blit$0,
       sub,
       subo,
       copy,
       To_string,
       From_string,
       To_bytes,
       From_bytes,
       memset,
       memcmp,
       memcmp_bytes,
       find,
       get_int8,
       set_int8_exn,
       get_uint8,
       set_uint8_exn,
       unsafe_get_int8,
       unsafe_set_int8,
       unsafe_get_uint8,
       unsafe_set_uint8,
       read_int16_swap$0,
       read_int16$0,
       write_int16_swap_exn$0,
       write_int16_exn$0,
       unsafe_read_int16_swap$0,
       unsafe_read_int16$0,
       unsafe_write_int16_swap$0,
       unsafe_write_int16$0,
       read_uint16_swap$0,
       read_uint16$0,
       write_uint16_swap_exn$0,
       write_uint16_exn$0,
       unsafe_read_uint16_swap$0,
       unsafe_read_uint16$0,
       unsafe_write_uint16_swap$0,
       unsafe_write_uint16$0,
       read_int32_int_swap$0,
       read_int32_int$0,
       write_int32_int_swap_exn$0,
       write_int32_int_exn$0,
       unsafe_read_int32_int_swap$0,
       unsafe_read_int32_int$0,
       unsafe_write_int32_int_swap$0,
       unsafe_write_int32_int$0,
       get_uint32_le,
       get_uint32_be,
       set_uint32_le_exn,
       set_uint32_be_exn,
       unsafe_get_uint32_le,
       unsafe_get_uint32_be,
       unsafe_set_uint32_le,
       unsafe_set_uint32_be,
       get_int64_le_exn,
       get_int64_be_exn,
       read_int64_int_swap$0,
       read_int64_int$0,
       write_int64_int_swap$0,
       write_int64_int$0,
       unsafe_get_int64_le_exn,
       unsafe_get_int64_be_exn,
       unsafe_read_int64_int_swap$0,
       unsafe_read_int64_int$0,
       unsafe_write_int64_int_swap$0,
       unsafe_write_int64_int$0,
       get_uint64_be_exn,
       get_uint64_le_exn,
       set_uint64_le_exn,
       set_uint64_be_exn,
       unsafe_get_uint64_be_exn,
       unsafe_get_uint64_le_exn,
       unsafe_write_int64_int_swap$0,
       unsafe_write_int64_int$0,
       read_int32_swap$0,
       read_int32$0,
       write_int32_swap$0,
       write_int32$0,
       unsafe_read_int32_swap$0,
       unsafe_read_int32$0,
       unsafe_write_int32_swap$0,
       unsafe_write_int32$0,
       read_int64_swap$0,
       read_int64$0,
       write_int64_swap$0,
       write_int64$0,
       unsafe_read_int64_swap$0,
       unsafe_read_int64$0,
       unsafe_write_int64_swap$0,
       unsafe_write_int64$0,
       [0,
        get_int8$0,
        get_uint8$1,
        get_int16_le,
        get_int16_be,
        get_uint16_le,
        get_uint16_be,
        get_int32_le,
        get_int32_be,
        get_uint32_le$0,
        get_uint32_be$0,
        get_int64_le,
        get_int64_be,
        get_uint64_le,
        get_uint64_be,
        set_int8,
        set_uint8$0,
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
        [0,
         get_int8$1,
         get_uint8$3,
         get_int16_le$0,
         get_int16_be$0,
         get_uint16_le$0,
         get_uint16_be$0,
         get_int32_le$0,
         get_int32_be$0,
         get_uint32_le$1,
         get_uint32_be$1,
         get_int64_le$0,
         get_int64_be$0,
         get_uint64_le$0,
         get_uint64_be$0,
         set_int8$0,
         set_uint8$2,
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
         set_uint64_be$0]],
       Private];
    runtime.caml_register_global(70,Base_bigstring,"Base_bigstring");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiYXNlX2JpZ3N0cmluZy5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
