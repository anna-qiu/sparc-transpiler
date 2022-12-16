(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_ba_dim_1=runtime.caml_ba_dim_1,
     caml_ba_dim_2=runtime.caml_ba_dim_2,
     caml_ba_get_1=runtime.caml_ba_get_1,
     caml_ba_get_2=runtime.caml_ba_get_2,
     caml_ba_kind=runtime.caml_ba_kind,
     caml_ba_layout=runtime.caml_ba_layout,
     caml_check_bound=runtime.caml_check_bound,
     caml_div=runtime.caml_div,
     caml_equal=runtime.caml_equal,
     caml_greaterequal=runtime.caml_greaterequal,
     caml_greaterthan=runtime.caml_greaterthan,
     caml_int64_add=runtime.caml_int64_add,
     caml_int64_and=runtime.caml_int64_and,
     caml_int64_div=runtime.caml_int64_div,
     caml_int64_mul=runtime.caml_int64_mul,
     caml_int64_neg=runtime.caml_int64_neg,
     caml_int64_or=runtime.caml_int64_or,
     caml_int64_shift_left=runtime.caml_int64_shift_left,
     caml_int64_shift_right=runtime.caml_int64_shift_right,
     caml_int64_shift_right_unsigne=runtime.caml_int64_shift_right_unsigned,
     caml_int64_sub=runtime.caml_int64_sub,
     caml_int64_xor=runtime.caml_int64_xor,
     caml_lessequal=runtime.caml_lessequal,
     caml_lessthan=runtime.caml_lessthan,
     caml_mul=runtime.caml_mul,
     caml_notequal=runtime.caml_notequal,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_update_dummy=runtime.caml_update_dummy;
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
     cst_Base_quickcheck_Observer_o=
      caml_string_of_jsbytes("Base_quickcheck.Observer.observe: size < 0"),
     cst_Float_uniform_exclusive_bo=
      caml_string_of_jsbytes("Float.uniform_exclusive: bounds are not finite"),
     cst_Float_uniform_exclusive_re=
      caml_string_of_jsbytes
       ("Float.uniform_exclusive: requested range is empty"),
     cst_Base_quickcheck_Generator_$5=
      caml_string_of_jsbytes
       ("Base_quickcheck.Generator.weighted_recursive_union: lists must be non-empty"),
     cst_Base_quickcheck_Generator_$2=
      caml_string_of_jsbytes
       ("Base_quickcheck.Generator.of_weighted_list: weight is not finite"),
     cst_Base_quickcheck_Generator_$3=
      caml_string_of_jsbytes
       ("Base_quickcheck.Generator.of_weighted_list: weight is negative"),
     cst_Base_quickcheck_Generator_$1=
      caml_string_of_jsbytes
       ("Base_quickcheck.Generator.of_weighted_list: empty list"),
     cst_Base_quickcheck_Generator_$4=
      caml_string_of_jsbytes
       ("Base_quickcheck.Generator.of_weighted_list: total weight is zero"),
     cst_Base_quickcheck_Generator_$0=
      caml_string_of_jsbytes("Base_quickcheck.Generator.of_list: empty list"),
     cst_Base_quickcheck_Generator_=
      caml_string_of_jsbytes("Base_quickcheck.Generator.generate: size < 0"),
     cst_dim2=caml_string_of_jsbytes("dim2"),
     cst_dim1=caml_string_of_jsbytes("dim1"),
     cst_Base_quickcheck_Test_run_t=
      caml_string_of_jsbytes("Base_quickcheck.Test.run: test failed"),
     cst_Base_quickcheck_Test_run_i=
      caml_string_of_jsbytes
       ("Base_quickcheck.Test.run: insufficient size values for test count"),
     cst=caml_string_of_jsbytes("..."),
     names=
      [0,
       caml_string_of_jsbytes("seed"),
       [0,
        caml_string_of_jsbytes("test_count"),
        [0,
         caml_string_of_jsbytes("shrink_count"),
         [0,caml_string_of_jsbytes("sizes"),0]]]],
     cst_sizes=caml_string_of_jsbytes("sizes"),
     cst_shrink_count=caml_string_of_jsbytes("shrink_count"),
     cst_test_count=caml_string_of_jsbytes("test_count"),
     cst_seed=caml_string_of_jsbytes("seed"),
     Base=global_data.Base,
     Base_Array=global_data.Base__Array,
     Stdlib_Bigarray=global_data.Stdlib__Bigarray,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base_Map=global_data.Base__Map,
     Base_Sequence=global_data.Base__Sequence,
     Base_Set=global_data.Base__Set,
     Base_List=global_data.Base__List,
     Base_String=global_data.Base__String,
     Base_Float=global_data.Base__Float,
     Splittable_random=global_data.Splittable_random,
     Base_Int63=global_data.Base__Int63,
     Base_Char=global_data.Base__Char,
     Base_Lazy=global_data.Base__Lazy,
     Base_Int=global_data.Base__Int,
     Base_Either=global_data.Base__Either,
     Base_Option=global_data.Base__Option,
     Assert_failure=global_data.Assert_failure,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Base_Error=global_data.Base__Error,
     Base_Hash=global_data.Base__Hash,
     Base_Staged=global_data.Base__Staged,
     Base_Applicative=global_data.Base__Applicative,
     Base_Monad=global_data.Base__Monad,
     Base_Int32=global_data.Base__Int32,
     Base_Int64=global_data.Base__Int64,
     Base_Nativeint=global_data.Base__Nativeint,
     Base_Bytes=global_data.Base__Bytes,
     Base_Field=global_data.Base__Field,
     Base_Backtrace=global_data.Base__Backtrace,
     Base_Or_error=global_data.Base__Or_error,
     Base_Random=global_data.Base__Random,
     Base_Bool=global_data.Base__Bool,
     Base_quickcheck=[0];
    caml_register_global(80,Base_quickcheck,"Base_quickcheck__");
    var Base_quickcheck_With_basic_typ=[0];
    caml_register_global
     (81,Base_quickcheck_With_basic_typ,"Base_quickcheck__With_basic_types");
    var
     _c_=[0,caml_string_of_jsbytes("size")],
     _aN_=[0,0,0],
     _aI_=[0,caml_string_of_jsbytes("upper_bound")],
     _aJ_=[0,caml_string_of_jsbytes("lower_bound")],
     _aK_=[0,caml_string_of_jsbytes("upper_bound")],
     _aL_=[0,caml_string_of_jsbytes("lower_bound")],
     _p_=[0,0],
     _o_=[0,1],
     _n_=[0,caml_string_of_jsbytes("src/generator.ml"),198,4],
     _m_=[0,caml_string_of_jsbytes("src/generator.ml"),225,6],
     _l_=[0,caml_string_of_jsbytes("src/generator.ml"),160,14],
     _j_=[0,caml_string_of_jsbytes("weight")],
     _k_=[0,caml_string_of_jsbytes("weight")],
     _d_=[0,caml_string_of_jsbytes("size")],
     _be_=[0,0],
     _bf_=[0,caml_string_of_jsbytes("error")],
     _bg_=[0,caml_string_of_jsbytes("input")],
     _bc_=[0,0],
     _bd_=[0,0],
     _ba_=[0,caml_string_of_jsbytes("number_of_size_values")],
     _bb_=[0,caml_string_of_jsbytes("test_count")],
     _a4_=[0,caml_string_of_jsbytes("sizes")],
     _a5_=[0,caml_string_of_jsbytes("shrink_count")],
     _a6_=[0,caml_string_of_jsbytes("test_count")],
     _a7_=[0,caml_string_of_jsbytes("seed")],
     _aU_=[0,caml_string_of_jsbytes("Deterministic")],
     _aV_=[0,caml_string_of_jsbytes("Nondeterministic")],
     _a8_=[0,104758188],
     _a9_=[0,104758188],
     _a$_=[0,caml_string_of_jsbytes("an arbitrary but deterministic string")],
     _bh_=[0,0];
    function offset(param){return param?1:0}
    var Layout=[0,offset];
    function iteri(t,f)
     {var
       _g0_=caml_ba_layout(t),
       offset=caml_call1(Layout[1],_g0_),
       _g2_=caml_ba_dim_1(t) - 1 | 0,
       _g1_=0;
      if(! (_g2_ < 0))
       {var i=_g1_;
        for(;;)
         {caml_call2(f,i + offset | 0,caml_ba_get_1(t,i + offset | 0));
          var _g3_=i + 1 | 0;
          if(_g2_ !== i){var i=_g3_;continue}
          break}}
      return 0}
    function init(kind,layout,dim,f)
     {var t=caml_call3(Stdlib_Bigarray[19][1],kind,layout,dim);
      iteri
       (t,
        function(i,param){return runtime.caml_ba_set_1(t,i,caml_call1(f,i))});
      return t}
    function fold(t,init,f)
     {var init$0=[0,init];
      iteri
       (t,
        function(i,param)
         {var _gZ_=caml_ba_get_1(t,i);
          init$0[1] = caml_call2(f,init$0[1],_gZ_);
          return 0});
      return init$0[1]}
    function to_array(t)
     {var _gW_=caml_ba_layout(t),offset=caml_call1(Layout[1],_gW_);
      function _gX_(i){return caml_ba_get_1(t,i + offset | 0)}
      var _gY_=caml_ba_dim_1(t);
      return caml_call2(Base_Array[27],_gY_,_gX_)}
    function sexp_of_t(sexp_of_elt,sexp_of_pack,sexp_of_layout,t)
     {var x_001=to_array(t);return caml_call2(Base[90],sexp_of_elt,x_001)}
    function hash_fold(hash_fold_elt,state,t)
     {var _gV_=caml_ba_dim_1(t),state$0=caml_call2(Base[116],state,_gV_);
      return fold(t,state$0,hash_fold_elt)}
    function iteri$0(t,f)
     {var
       _gO_=caml_ba_layout(t),
       offset=caml_call1(Layout[1],_gO_),
       _gQ_=caml_ba_dim_1(t) - 1 | 0,
       _gP_=0;
      if(! (_gQ_ < 0))
       {var i=_gP_;
        for(;;)
         {var _gS_=caml_ba_dim_2(t) - 1 | 0,_gR_=0;
          if(! (_gS_ < 0))
           {var j=_gR_;
            for(;;)
             {caml_call3
               (f,
                i + offset | 0,
                j + offset | 0,
                caml_ba_get_2(t,i + offset | 0,j + offset | 0));
              var _gU_=j + 1 | 0;
              if(_gS_ !== j){var j=_gU_;continue}
              break}}
          var _gT_=i + 1 | 0;
          if(_gQ_ !== i){var i=_gT_;continue}
          break}}
      return 0}
    function init$0(kind,layout,dim1,dim2,f)
     {var t=caml_call4(Stdlib_Bigarray[20][1],kind,layout,dim1,dim2);
      iteri$0
       (t,
        function(i,j,param)
         {return runtime.caml_ba_set_2(t,i,j,caml_call2(f,i,j))});
      return t}
    function fold$0(t,init,f)
     {var init$0=[0,init];
      iteri$0
       (t,
        function(param,_gN_,elt)
         {init$0[1] = caml_call2(f,init$0[1],elt);return 0});
      return init$0[1]}
    function to_array$0(t)
     {var _gI_=caml_ba_layout(t),offset=caml_call1(Layout[1],_gI_);
      function _gJ_(i)
       {function _gL_(j)
         {return caml_ba_get_2(t,i + offset | 0,j + offset | 0)}
        var _gM_=caml_ba_dim_2(t);
        return caml_call2(Base_Array[27],_gM_,_gL_)}
      var _gK_=caml_ba_dim_1(t);
      return caml_call2(Base_Array[27],_gK_,_gJ_)}
    function sexp_of_t$0(sexp_of_elt,sexp_of_pack,sexp_of_layout,t)
     {var x_002=to_array$0(t),_gH_=caml_call1(Base[90],sexp_of_elt);
      return caml_call2(Base[90],_gH_,x_002)}
    function hash_fold$0(hash_fold_elt,state,t)
     {var
       _gF_=caml_ba_dim_1(t),
       state$0=caml_call2(Base[116],state,_gF_),
       _gG_=caml_ba_dim_2(t),
       state$1=caml_call2(Base[116],state$0,_gG_);
      return fold$0(t,state$1,hash_fold_elt)}
    var
     _a_=[0,sexp_of_t$0,init$0,iteri$0,fold$0,to_array$0,hash_fold$0],
     _b_=[0,sexp_of_t,init,iteri,fold,to_array,hash_fold],
     Base_quickcheck_Bigarray_helpe=[0,Layout,_b_,_a_];
    caml_register_global
     (85,Base_quickcheck_Bigarray_helpe,"Base_quickcheck__Bigarray_helpers");
    function create(f){return f}
    function observe(t,x,size,hash)
     {if(0 <= size)return caml_call3(t,x,size,hash);
      var
       _gD_=[0,[1,[0,_c_,[0,caml_call1(Base[119],size),0]]],0],
       _gE_=
        [1,
         [0,
          caml_call1(Sexplib0_Sexp_conv[7],cst_Base_quickcheck_Observer_o),
          _gD_]];
      return caml_call1(Base[202],_gE_)}
    function quickcheck_observer_unit(param,_gC_,hash){return hash}
    var include=[0,quickcheck_observer_unit,create,observe];
    caml_register_global(87,include,"Base_quickcheck__Observer0");
    function create$0(f){return caml_call1(Base_Staged[1],f)}
    function generate(t,size,random)
     {if(0 <= size)return caml_call3(Base_Staged[2],t,size,random);
      var
       _gA_=[0,[1,[0,_d_,[0,caml_call1(Base[119],size),0]]],0],
       _gB_=
        [1,
         [0,
          caml_call1(Sexplib0_Sexp_conv[7],cst_Base_quickcheck_Generator_),
          _gA_]];
      return caml_call1(Base[202],_gB_)}
    var size=create$0(function(size,param){return size});
    function fn(dom,rng)
     {return create$0
              (function(size,random)
                {var random$0=caml_call1(Splittable_random[1][5],random);
                 return function(x)
                  {var
                    hash=observe(dom,x,size,caml_call1(Base_Hash[7],0)),
                    random=caml_call1(Splittable_random[1][4],random$0),
                    _gz_=caml_call1(Base_Hash[9],hash);
                   caml_call2(Splittable_random[1][3],random,_gz_);
                   return generate(rng,size,random)}})}
    function with_size(t,size)
     {return create$0(function(param,random){return generate(t,size,random)})}
    function perturb(t,salt)
     {return create$0
              (function(size,random)
                {caml_call2(Splittable_random[1][3],random,salt);
                 return generate(t,size,random)})}
    function filter_map(t,f)
     {function loop(size,random)
       {var size$0=size;
        for(;;)
         {var x=generate(t,size$0,random),match=caml_call1(f,x);
          if(match){var y=match[1];return y}
          var size$1=size$0 + 1 | 0,size$0=size$1;
          continue}}
      return create$0(loop)}
    function filter(t,f)
     {return filter_map(t,function(x){return caml_call1(f,x)?[0,x]:0})}
    function return$0(x){return create$0(function(param,_gy_){return x})}
    function map(t,f)
     {return create$0
              (function(size,random)
                {return caml_call1(f,generate(t,size,random))})}
    function apply(tf,tx)
     {return create$0
              (function(size,random)
                {var f=generate(tf,size,random),x=generate(tx,size,random);
                 return caml_call1(f,x)})}
    function bind(t,f)
     {return create$0
              (function(size,random)
                {var x=generate(t,size,random);
                 return generate(caml_call1(f,x),size,random)})}
    function all(list)
     {return create$0
              (function(size,random)
                {function _gw_(_gx_){return generate(_gx_,size,random)}
                 return caml_call2(Base_List[76],list,_gw_)})}
    function all_unit(list)
     {return create$0
              (function(size,random)
                {function _gu_(_gv_){return generate(_gv_,size,random)}
                 return caml_call2(Base_List[9],list,_gu_)})}
    var
     map$0=[0,-198771759,map],
     For_applicative=caml_call1(Base_Applicative[5],[0,return$0,apply,map$0]),
     both=For_applicative[3],
     map2=For_applicative[9],
     map3=For_applicative[10],
     include$0=For_applicative[13],
     symbol=include$0[1],
     symbol$0=include$0[2],
     symbol$1=include$0[3],
     map$1=[0,-198771759,map],
     For_monad=caml_call1(Base_Monad[1],[0,bind,return$0,map$1]),
     _f_=For_monad[7],
     _g_=For_monad[3],
     _e_=For_monad[8],
     _h_=_g_[1],
     _i_=_g_[2];
    function of_list(list)
     {if(caml_call1(Base_List[8],list))
       {var
         _gt_=
          caml_call1(Sexplib0_Sexp_conv[7],cst_Base_quickcheck_Generator_$0);
        caml_call1(Base_Error[30],_gt_)}
      var
       array=caml_call1(Base_Array[39],list),
       hi=array.length - 1 - 1 | 0,
       lo=0;
      return create$0
              (function(param,random)
                {var index=caml_call3(Splittable_random[3],random,lo,hi);
                 return caml_check_bound(array,index)[1 + index]})}
    function union(list){return caml_call1(_f_,of_list(list))}
    function of_weighted_list(alist)
     {if(caml_call1(Base_List[8],alist))
       {var
         _gl_=
          caml_call1(Sexplib0_Sexp_conv[7],cst_Base_quickcheck_Generator_$1);
        caml_call1(Base_Error[30],_gl_)}
      var
       match=caml_call1(Base_List[92],alist),
       values=match[2],
       weights=match[1],
       value_array=caml_call1(Base_Array[39],values);
      function _gm_(param){return 0.}
      var array=caml_call2(Base_Array[27],value_array.length - 1,_gm_);
      function _gn_(index,acc,weight)
       {if(1 - caml_call1(Base_Float[84],weight))
         {var
           _gp_=[0,[1,[0,_j_,[0,caml_call1(Base[112],weight),0]]],0],
           _gq_=
            [1,
             [0,
              caml_call1
               (Sexplib0_Sexp_conv[7],cst_Base_quickcheck_Generator_$2),
              _gp_]];
          caml_call1(Base_Error[30],_gq_)}
        if(caml_call2(Base_Float[13],weight,0.))
         {var
           _gr_=[0,[1,[0,_k_,[0,caml_call1(Base[112],weight),0]]],0],
           _gs_=
            [1,
             [0,
              caml_call1
               (Sexplib0_Sexp_conv[7],cst_Base_quickcheck_Generator_$3),
              _gr_]];
          caml_call1(Base_Error[30],_gs_)}
        var cumulative=caml_call2(Base[190],acc,weight);
        runtime.caml_array_set(array,index,cumulative);
        return cumulative}
      var sum=caml_call3(Base_List[99],weights,0.,_gn_);
      if(caml_call2(Base_Float[10],sum,0.))
       {var
         _go_=
          caml_call1(Sexplib0_Sexp_conv[7],cst_Base_quickcheck_Generator_$4);
        caml_call1(Base_Error[30],_go_)}
      return create$0
              (function(param,random)
                {var
                  choice=caml_call3(Splittable_random[8],random,0.,sum),
                  match=
                   caml_call6
                    (Base_Array[5],0,0,array,Base_Float[16],926943384,choice);
                 if(match)
                  {var index=match[1];
                   return caml_check_bound(value_array,index)[1 + index]}
                 throw [0,Assert_failure,_l_]})}
    function weighted_union(alist)
     {return caml_call1(_f_,of_weighted_list(alist))}
    function of_lazy(lazy_t)
     {return create$0
              (function(size,random)
                {var
                  _gj_=caml_obj_tag(lazy_t),
                  _gk_=
                   250 === _gj_
                    ?lazy_t[1]
                    :246 === _gj_?caml_call1(CamlinternalLazy[2],lazy_t):lazy_t;
                 return generate(_gk_,size,random)})}
    function fixed_point(of_generator)
     {var lazy_t=[];
      caml_update_dummy
       (lazy_t,
        [246,function(_gi_){return caml_call1(of_generator,of_lazy(lazy_t))}]);
      var _gh_=caml_obj_tag(lazy_t);
      return 250 === _gh_
              ?lazy_t[1]
              :246 === _gh_?caml_call1(CamlinternalLazy[2],lazy_t):lazy_t}
    function weighted_recursive_union(nonrec_list,f)
     {return fixed_point
              (function(self)
                {function _ga_(param)
                  {var t=param[2],w=param[1];
                   function _gg_(n){return with_size(t,n - 1 | 0)}
                   return [0,w,caml_call2(For_monad[11][4][2],size,_gg_)]}
                 var
                  _gb_=caml_call1(f,self),
                  rec_list=caml_call2(Base_List[76],_gb_,_ga_),
                  _gc_=caml_call1(Base_List[8],nonrec_list),
                  _gd_=_gc_ || caml_call1(Base_List[8],rec_list);
                 if(_gd_)
                  {var
                    _ge_=
                     caml_call1
                      (Sexplib0_Sexp_conv[7],cst_Base_quickcheck_Generator_$5);
                   caml_call1(Base[202],_ge_)}
                 var
                  nonrec_gen=weighted_union(nonrec_list),
                  rec_gen=
                   weighted_union(caml_call2(Base[178],nonrec_list,rec_list));
                 function _gf_(param){return 0 === param?nonrec_gen:rec_gen}
                 return caml_call2(For_monad[11][4][2],size,_gf_)})}
    function recursive_union(nonrec_list,f)
     {function weighted(list)
       {function _f$_(t){return [0,1.,t]}
        return caml_call2(Base_List[76],list,_f$_)}
      function _f__(self){return weighted(caml_call1(f,self))}
      return weighted_recursive_union(weighted(nonrec_list),_f__)}
    function sizes(opt,_fW_,param)
     {if(opt)var sth=opt[1],min_length=sth;else var min_length=0;
      if(_fW_)
       var sth$0=_fW_[1],max_length=sth$0;
      else
       var max_length=Base_Int[60];
      return create$0
              (function(size,random)
                {if(min_length <= max_length)
                  {var
                    upper_bound=min_length + size | 0,
                    max_length$0=
                     min_length <= upper_bound
                      ?caml_call2(Base[189],max_length,upper_bound)
                      :max_length,
                    len=
                     caml_call3
                      (Splittable_random[10][1],random,min_length,max_length$0);
                   if(0 === len)return 0;
                   var
                    _fX_=function(param){return 0},
                    sizes=caml_call2(Base_Array[27],len,_fX_),
                    remaining=size - (len - min_length | 0) | 0,
                    max_index=len - 1 | 0,
                    _fY_=1;
                   if(! (remaining < 1))
                    {var for$0=_fY_;
                     for(;;)
                      {var
                        index=
                         caml_call3(Splittable_random[10][1],random,0,max_index),
                        _f5_=caml_check_bound(sizes,index)[1 + index] + 1 | 0;
                       caml_check_bound(sizes,index)[1 + index] = _f5_;
                       var _f6_=for$0 + 1 | 0;
                       if(remaining !== for$0){var for$0=_f6_;continue}
                       break}}
                   var _f0_=max_index - 1 | 0,_fZ_=0;
                   if(! (_f0_ < 0))
                    {var i=_fZ_;
                     for(;;)
                      {var j=caml_call3(Splittable_random[3],random,i,max_index);
                       caml_call3(Base_Array[74],sizes,i,j);
                       var _f4_=i + 1 | 0;
                       if(_f0_ !== i){var i=_f4_;continue}
                       break}}
                   var
                    _f1_=len - min_length | 0,
                    _f2_=function(_f9_){return _f9_},
                    _f3_=function(_f8_,_f7_){return _f8_ + _f7_ | 0};
                   if
                    ((caml_call3
                       (Base_Array[16],[0,Base_Int[74],_f3_],sizes,_f2_)
                      +
                      _f1_
                      |
                      0)
                     ===
                     size)
                    return caml_call1(Base_Array[19],sizes);
                   throw [0,Assert_failure,_m_]}
                 throw [0,Assert_failure,_n_]})}
    var
     quickcheck_generator_unit=caml_call1(For_monad[11][1],0),
     quickcheck_generator_bool=
      create$0
       (function(param,random){return caml_call1(Splittable_random[2],random)});
    function quickcheck_generator_option(value_t)
     {var _fV_=[0,map(value_t,Base_Option[20]),0];
      return union([0,caml_call1(For_monad[11][1],0),_fV_])}
    function either(fst_t,snd_t)
     {var _fU_=[0,map(snd_t,Base_Either[18]),0];
      return union([0,map(fst_t,Base_Either[17]),_fU_])}
    function result(ok_t,err_t)
     {function _fT_(param)
       {if(0 === param[0]){var ok=param[1];return [0,ok]}
        var err=param[1];
        return [1,err]}
      return map(either(ok_t,err_t),_fT_)}
    function list_generic(min_length,max_length,elt_gen)
     {function _fQ_(sizes)
       {function _fS_(size){return with_size(elt_gen,size)}
        return all(caml_call2(Base_List[76],sizes,_fS_))}
      var _fR_=sizes(min_length,max_length,0);
      return caml_call2(For_monad[11][4][2],_fR_,_fQ_)}
    function quickcheck_generator_list(elt_gen)
     {return list_generic(0,0,elt_gen)}
    function list_non_empty(elt_gen){return list_generic(_o_,0,elt_gen)}
    function list_with_length(elt_gen,length)
     {return list_generic([0,length],[0,length],elt_gen)}
    function list_filtered(elts)
     {var
       elts$0=caml_call1(Base_Array[39],elts),
       length_of_input=elts$0.length - 1;
      return create$0
              (function(param,random)
                {var
                  length_of_output=
                   caml_call3(Splittable_random[3],random,0,length_of_input);
                 function _fJ_(_fP_){return _fP_}
                 var
                  indices=caml_call2(Base_Array[27],length_of_input,_fJ_),
                  _fL_=length_of_output - 1 | 0,
                  _fK_=0;
                 if(! (_fL_ < 0))
                  {var i=_fK_;
                   for(;;)
                    {var
                      j=
                       caml_call3
                        (Splittable_random[3],random,i,length_of_input - 1 | 0);
                     caml_call3(Base_Array[74],indices,i,j);
                     var _fN_=i + 1 | 0;
                     if(_fL_ !== i){var i=_fN_;continue}
                     break}}
                 caml_call4
                  (Base_Array[49],
                   _p_,
                   [0,length_of_output],
                   indices,
                   Base_Int[13]);
                 function _fM_(i)
                  {var _fO_=caml_check_bound(indices,i)[1 + i];
                   return caml_check_bound(elts$0,_fO_)[1 + _fO_]}
                 return caml_call2(Base_List[123],length_of_output,_fM_)})}
    function list_permutations(list)
     {return create$0
              (function(param,random)
                {var
                  array=caml_call1(Base_Array[39],list),
                  _fH_=array.length - 1 - 1 | 0,
                  _fG_=1;
                 if(! (_fH_ < 1))
                  {var i=_fG_;
                   for(;;)
                    {var j=caml_call3(Splittable_random[3],random,0,i);
                     caml_call3(Base_Array[74],array,i,j);
                     var _fI_=i + 1 | 0;
                     if(_fH_ !== i){var i=_fI_;continue}
                     break}}
                 return caml_call1(Base_Array[19],array)})}
    function quickcheck_generator_array(t)
     {var _fF_=Base_Array[39];return map(quickcheck_generator_list(t),_fF_)}
    function quickcheck_generator_ref(t)
     {return map(t,function(_fE_){return [0,_fE_]})}
    function quickcheck_generator_lazy_t(t){return map(t,Base_Lazy[21])}
    function char_uniform_inclusive(lo,hi)
     {return create$0
              (function(param,random)
                {var
                  _fB_=caml_call1(Base_Char[29],hi),
                  _fC_=caml_call1(Base_Char[29],lo),
                  _fD_=caml_call3(Splittable_random[3],random,_fC_,_fB_);
                 return caml_call1(Base_Char[32],_fD_)})}
    var
     char_uppercase=char_uniform_inclusive(65,90),
     char_lowercase=char_uniform_inclusive(97,122),
     char_digit=char_uniform_inclusive(48,57),
     char_print_uniform=char_uniform_inclusive(32,126),
     char_uniform=char_uniform_inclusive(Base_Char[50],Base_Char[51]),
     char_alpha=union([0,char_lowercase,[0,char_uppercase,0]]),
     char_alphanum=
      weighted_union([0,[0,52.,char_alpha],[0,[0,10.,char_digit],0]]),
     char_whitespace=
      of_list(caml_call2(Base_List[54],Base_Char[1],Base_Char[42])),
     char_print=
      weighted_union
       ([0,[0,10.,char_alphanum],[0,[0,1.,char_print_uniform],0]]),
     _q_=[0,[0,1.,caml_call1(For_monad[11][1],Base_Char[51])],0],
     quickcheck_generator_char=
      weighted_union
       ([0,
         [0,100.,char_print],
         [0,
          [0,10.,char_uniform],
          [0,[0,1.,caml_call1(For_monad[11][1],Base_Char[50])],_q_]]]);
    function small_int(allow_zero)
     {return create$0
              (function(size,random)
                {var
                  lower_bound=allow_zero?0:1,
                  upper_bound=size + 1 | 0,
                  weighted_low=
                   caml_call3
                    (Splittable_random[10][1],
                     random,
                     0,
                     upper_bound - lower_bound | 0),
                  weighted_high=upper_bound - weighted_low | 0;
                 return weighted_high})}
    var
     small_positive_or_zero_int=small_int(1),
     small_strictly_positive_int=small_int(0);
    function For_integer(Integer)
     {function uniform_inclusive(lo,hi)
       {return create$0
                (function(param,random)
                  {return caml_call3(Integer[96],random,lo,hi)})}
      function log_uniform_inclusive(lo,hi)
       {return create$0
                (function(param,random)
                  {return caml_call3(Integer[97],random,lo,hi)})}
      function non_uniform(f,lo,hi)
       {var
         _fz_=[0,[0,0.9,caml_call2(f,lo,hi)],0],
         _fA_=[0,[0,0.05,caml_call1(For_monad[11][1],hi)],_fz_];
        return weighted_union
                ([0,[0,0.05,caml_call1(For_monad[11][1],lo)],_fA_])}
      function inclusive(_fx_,_fy_)
       {return non_uniform(uniform_inclusive,_fx_,_fy_)}
      function log_inclusive(_fv_,_fw_)
       {return non_uniform(log_uniform_inclusive,_fv_,_fw_)}
      var
       uniform_all=uniform_inclusive(Integer[85],Integer[84]),
       let_syntax_004=log_inclusive(Integer[38],Integer[84]);
      function _ft_(param)
       {var magnitude=param[2],negative=param[1];
        return negative?caml_call1(Integer[70],magnitude):magnitude}
      var
       _fu_=
        caml_call2
         (For_monad[11][4][4],quickcheck_generator_bool,let_syntax_004),
       all=caml_call2(For_monad[11][4][3],_fu_,_ft_);
      return [0,
              uniform_inclusive,
              log_uniform_inclusive,
              non_uniform,
              inclusive,
              log_inclusive,
              uniform_all,
              all]}
    var
     t_sexp_grammar=Base_Int[1],
     of_float=Base_Int[2],
     to_float=Base_Int[3],
     of_int_exn=Base_Int[4],
     to_int_exn=Base_Int[5],
     hash_fold_t=Base_Int[6],
     hash=Base_Int[7],
     t_of_sexp=Base_Int[8],
     sexp_of_t$1=Base_Int[9],
     of_string=Base_Int[10],
     to_string=Base_Int[11],
     equal=Base_Int[12],
     compare=Base_Int[13],
     min=Base_Int[14],
     max=Base_Int[15],
     ascending=Base_Int[16],
     descending=Base_Int[17],
     between=Base_Int[18],
     clamp_exn=Base_Int[19],
     clamp=Base_Int[20],
     comparator=Base_Int[21],
     pp=Base_Int[22],
     hashable=Base_Int[23],
     is_positive=Base_Int[24],
     is_non_negative=Base_Int[25],
     is_negative=Base_Int[26],
     is_non_positive=Base_Int[27],
     sign=Base_Int[28],
     invariant=Base_Int[29],
     Hex=Base_Int[30],
     to_string_hum=Base_Int[31],
     one=Base_Int[32],
     minus_one=Base_Int[33],
     rem=Base_Int[34],
     round=Base_Int[35],
     round_towards_zero=Base_Int[36],
     round_down=Base_Int[37],
     round_up=Base_Int[38],
     round_nearest=Base_Int[39],
     succ=Base_Int[40],
     pred=Base_Int[41],
     pow=Base_Int[42],
     bit_and=Base_Int[43],
     bit_or=Base_Int[44],
     bit_xor=Base_Int[45],
     bit_not=Base_Int[46],
     popcount=Base_Int[47],
     shift_left=Base_Int[48],
     shift_right=Base_Int[49],
     decr=Base_Int[50],
     incr=Base_Int[51],
     of_int32_exn=Base_Int[52],
     to_int32_exn=Base_Int[53],
     of_int64_exn=Base_Int[54],
     to_int64=Base_Int[55],
     of_nativeint_exn=Base_Int[56],
     to_nativeint_exn=Base_Int[57],
     of_float_unchecked=Base_Int[58],
     num_bits=Base_Int[59],
     max_value=Base_Int[60],
     min_value=Base_Int[61],
     shift_right_logical=Base_Int[62],
     ceil_pow2=Base_Int[63],
     floor_pow2=Base_Int[64],
     ceil_log2=Base_Int[65],
     floor_log2=Base_Int[66],
     is_pow2=Base_Int[67],
     clz=Base_Int[68],
     ctz=Base_Int[69],
     O=Base_Int[70],
     symbol$2=Base_Int[71],
     lnot=Base_Int[72],
     abs=Base_Int[73],
     zero=Base_Int[74],
     symbol$3=Base_Int[75],
     symbol$4=Base_Int[76],
     symbol$5=Base_Int[77],
     uniform=Splittable_random[3],
     log_uniform=Splittable_random[10][1];
    function _r_(_fs_,_fr_){return _fs_ >>> _fr_ | 0}
    function _s_(_fq_,_fp_){return _fq_ >> _fp_}
    function _t_(_fo_,_fn_){return _fo_ << _fn_}
    var _u_=O[2];
    function _v_(_fm_,_fl_){return _fm_ ^ _fl_}
    function _w_(_fk_,_fj_){return _fk_ | _fj_}
    function _x_(_fi_,_fh_){return _fi_ & _fh_}
    var _y_=O[7],_z_=O[6],_A_=O[5],_B_=O[4];
    function _C_(_fg_){return - _fg_ | 0}
    var _D_=O[3];
    function _E_(_ff_,_fe_){return _ff_ !== _fe_?1:0}
    function _F_(_fd_,_fc_){return _fd_ < _fc_?1:0}
    function _G_(_fb_,_fa_){return _fa_ < _fb_?1:0}
    function _H_(_e$_,_e__){return _e$_ === _e__?1:0}
    function _I_(_e9_,_e8_){return _e9_ <= _e8_?1:0}
    function _J_(_e7_,_e6_){return _e6_ <= _e7_?1:0}
    var _K_=O[1];
    function _L_(_e5_){return - _e5_ | 0}
    var _M_=caml_div,_N_=caml_mul;
    function _O_(_e4_,_e3_){return _e4_ - _e3_ | 0}
    var
     _P_=
      [0,
       function(_e2_,_e1_){return _e2_ + _e1_ | 0},
       _O_,
       _N_,
       _M_,
       _L_,
       _K_,
       _J_,
       _I_,
       _H_,
       _G_,
       _F_,
       _E_,
       _D_,
       _C_,
       _B_,
       _A_,
       _z_,
       _y_,
       _x_,
       _w_,
       _v_,
       _u_,
       _t_,
       _s_,
       _r_];
    function _Q_(_e0_,_eZ_){return _e0_ >>> _eZ_ | 0}
    function _R_(_eY_,_eX_){return _eY_ >> _eX_}
    function _S_(_eW_,_eV_){return _eW_ << _eV_}
    function _T_(_eU_,_eT_){return _eU_ ^ _eT_}
    function _U_(_eS_,_eR_){return _eS_ | _eR_}
    function _V_(_eQ_,_eP_){return _eQ_ & _eP_}
    var _W_=caml_div;
    function _X_(_eO_){return - _eO_ | 0}
    function _Y_(_eN_){return - _eN_ | 0}
    var _Z_=caml_mul;
    function ___(_eM_,_eL_){return _eM_ - _eL_ | 0}
    function _$_(_eK_,_eJ_){return _eK_ + _eJ_ | 0}
    function _aa_(_eI_,_eH_){return _eI_ !== _eH_?1:0}
    function _ab_(_eG_,_eF_){return _eG_ < _eF_?1:0}
    function _ac_(_eE_,_eD_){return _eD_ < _eE_?1:0}
    function _ad_(_eC_,_eB_){return _eC_ === _eB_?1:0}
    function _ae_(_eA_,_ez_){return _eA_ <= _ez_?1:0}
    var
     For_int=
      For_integer
       ([0,
         t_sexp_grammar,
         of_float,
         to_float,
         of_int_exn,
         to_int_exn,
         hash_fold_t,
         hash,
         t_of_sexp,
         sexp_of_t$1,
         of_string,
         to_string,
         function(_ey_,_ex_){return _ex_ <= _ey_?1:0},
         _ae_,
         _ad_,
         _ac_,
         _ab_,
         _aa_,
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
         hashable,
         is_positive,
         is_non_negative,
         is_negative,
         is_non_positive,
         sign,
         invariant,
         Hex,
         to_string_hum,
         zero,
         one,
         minus_one,
         _$_,
         ___,
         _Z_,
         symbol$2,
         _Y_,
         _X_,
         symbol$4,
         symbol$3,
         _W_,
         rem,
         symbol$5,
         _V_,
         _U_,
         _T_,
         lnot,
         _S_,
         _R_,
         round,
         round_towards_zero,
         round_down,
         round_up,
         round_nearest,
         abs,
         succ,
         pred,
         pow,
         bit_and,
         bit_or,
         bit_xor,
         bit_not,
         popcount,
         shift_left,
         shift_right,
         decr,
         incr,
         of_int32_exn,
         to_int32_exn,
         of_int64_exn,
         to_int64,
         of_nativeint_exn,
         to_nativeint_exn,
         of_float_unchecked,
         num_bits,
         max_value,
         min_value,
         _Q_,
         shift_right_logical,
         ceil_pow2,
         floor_pow2,
         ceil_log2,
         floor_log2,
         is_pow2,
         clz,
         ctz,
         _P_,
         uniform,
         log_uniform]),
     quickcheck_generator_int=For_int[7],
     int_uniform=For_int[6],
     int_inclusive=For_int[4],
     int_uniform_inclusive=For_int[1],
     int_log_inclusive=For_int[5],
     int_log_uniform_inclusive=For_int[2],
     t_sexp_grammar$0=Base_Int32[1],
     of_float$0=Base_Int32[2],
     to_float$0=Base_Int32[3],
     of_int_exn$0=Base_Int32[4],
     to_int_exn$0=Base_Int32[5],
     hash_fold_t$0=Base_Int32[6],
     hash$0=Base_Int32[7],
     t_of_sexp$0=Base_Int32[8],
     sexp_of_t$2=Base_Int32[9],
     of_string$0=Base_Int32[10],
     to_string$0=Base_Int32[11],
     symbol$6=Base_Int32[12],
     symbol$7=Base_Int32[13],
     symbol$8=Base_Int32[14],
     symbol$9=Base_Int32[15],
     symbol$10=Base_Int32[16],
     symbol$11=Base_Int32[17],
     equal$0=Base_Int32[18],
     compare$0=Base_Int32[19],
     min$0=Base_Int32[20],
     max$0=Base_Int32[21],
     ascending$0=Base_Int32[22],
     descending$0=Base_Int32[23],
     between$0=Base_Int32[24],
     clamp_exn$0=Base_Int32[25],
     clamp$0=Base_Int32[26],
     comparator$0=Base_Int32[27],
     pp$0=Base_Int32[28],
     hashable$0=Base_Int32[29],
     is_positive$0=Base_Int32[30],
     is_non_negative$0=Base_Int32[31],
     is_negative$0=Base_Int32[32],
     is_non_positive$0=Base_Int32[33],
     sign$0=Base_Int32[34],
     invariant$0=Base_Int32[35],
     Hex$0=Base_Int32[36],
     to_string_hum$0=Base_Int32[37],
     zero$0=Base_Int32[38],
     one$0=Base_Int32[39],
     minus_one$0=Base_Int32[40],
     symbol$12=Base_Int32[41],
     symbol$13=Base_Int32[42],
     symbol$14=Base_Int32[43],
     symbol$15=Base_Int32[44],
     neg=Base_Int32[45],
     symbol$16=Base_Int32[46],
     symbol$17=Base_Int32[47],
     symbol$18=Base_Int32[48],
     symbol$19=Base_Int32[49],
     rem$0=Base_Int32[50],
     symbol$20=Base_Int32[51],
     land=Base_Int32[52],
     lor=Base_Int32[53],
     lxor=Base_Int32[54],
     lnot$0=Base_Int32[55],
     lsl=Base_Int32[56],
     asr=Base_Int32[57],
     round$0=Base_Int32[58],
     round_towards_zero$0=Base_Int32[59],
     round_down$0=Base_Int32[60],
     round_up$0=Base_Int32[61],
     round_nearest$0=Base_Int32[62],
     abs$0=Base_Int32[63],
     succ$0=Base_Int32[64],
     pred$0=Base_Int32[65],
     pow$0=Base_Int32[66],
     bit_and$0=Base_Int32[67],
     bit_or$0=Base_Int32[68],
     bit_xor$0=Base_Int32[69],
     bit_not$0=Base_Int32[70],
     popcount$0=Base_Int32[71],
     shift_left$0=Base_Int32[72],
     shift_right$0=Base_Int32[73],
     decr$0=Base_Int32[74],
     incr$0=Base_Int32[75],
     of_int32_exn$0=Base_Int32[76],
     to_int32_exn$0=Base_Int32[77],
     of_int64_exn$0=Base_Int32[78],
     to_int64$0=Base_Int32[79],
     of_nativeint_exn$0=Base_Int32[80],
     to_nativeint_exn$0=Base_Int32[81],
     of_float_unchecked$0=Base_Int32[82],
     num_bits$0=Base_Int32[83],
     max_value$0=Base_Int32[84],
     min_value$0=Base_Int32[85],
     lsr=Base_Int32[86],
     shift_right_logical$0=Base_Int32[87],
     ceil_pow2$0=Base_Int32[88],
     floor_pow2$0=Base_Int32[89],
     ceil_log2$0=Base_Int32[90],
     floor_log2$0=Base_Int32[91],
     is_pow2$0=Base_Int32[92],
     clz$0=Base_Int32[93],
     ctz$0=Base_Int32[94],
     O$0=Base_Int32[95],
     uniform$0=Splittable_random[4],
     log_uniform$0=Splittable_random[10][2],
     For_int32=
      For_integer
       ([0,
         t_sexp_grammar$0,
         of_float$0,
         to_float$0,
         of_int_exn$0,
         to_int_exn$0,
         hash_fold_t$0,
         hash$0,
         t_of_sexp$0,
         sexp_of_t$2,
         of_string$0,
         to_string$0,
         symbol$6,
         symbol$7,
         symbol$8,
         symbol$9,
         symbol$10,
         symbol$11,
         equal$0,
         compare$0,
         min$0,
         max$0,
         ascending$0,
         descending$0,
         between$0,
         clamp_exn$0,
         clamp$0,
         comparator$0,
         pp$0,
         hashable$0,
         is_positive$0,
         is_non_negative$0,
         is_negative$0,
         is_non_positive$0,
         sign$0,
         invariant$0,
         Hex$0,
         to_string_hum$0,
         zero$0,
         one$0,
         minus_one$0,
         symbol$12,
         symbol$13,
         symbol$14,
         symbol$15,
         neg,
         symbol$16,
         symbol$17,
         symbol$18,
         symbol$19,
         rem$0,
         symbol$20,
         land,
         lor,
         lxor,
         lnot$0,
         lsl,
         asr,
         round$0,
         round_towards_zero$0,
         round_down$0,
         round_up$0,
         round_nearest$0,
         abs$0,
         succ$0,
         pred$0,
         pow$0,
         bit_and$0,
         bit_or$0,
         bit_xor$0,
         bit_not$0,
         popcount$0,
         shift_left$0,
         shift_right$0,
         decr$0,
         incr$0,
         of_int32_exn$0,
         to_int32_exn$0,
         of_int64_exn$0,
         to_int64$0,
         of_nativeint_exn$0,
         to_nativeint_exn$0,
         of_float_unchecked$0,
         num_bits$0,
         max_value$0,
         min_value$0,
         lsr,
         shift_right_logical$0,
         ceil_pow2$0,
         floor_pow2$0,
         ceil_log2$0,
         floor_log2$0,
         is_pow2$0,
         clz$0,
         ctz$0,
         O$0,
         uniform$0,
         log_uniform$0]),
     quickcheck_generator_int32=For_int32[7],
     int32_uniform=For_int32[6],
     int32_inclusive=For_int32[4],
     int32_uniform_inclusive=For_int32[1],
     int32_log_inclusive=For_int32[5],
     int32_log_uniform_inclusive=For_int32[2],
     t_sexp_grammar$1=Base_Int63[1],
     of_float$1=Base_Int63[2],
     to_float$1=Base_Int63[3],
     of_int_exn$1=Base_Int63[4],
     to_int_exn$1=Base_Int63[5],
     hash_fold_t$1=Base_Int63[6],
     hash$1=Base_Int63[7],
     t_of_sexp$1=Base_Int63[8],
     sexp_of_t$3=Base_Int63[9],
     of_string$1=Base_Int63[10],
     to_string$1=Base_Int63[11],
     symbol$21=Base_Int63[12],
     symbol$22=Base_Int63[13],
     symbol$23=Base_Int63[14],
     symbol$24=Base_Int63[15],
     symbol$25=Base_Int63[16],
     symbol$26=Base_Int63[17],
     equal$1=Base_Int63[18],
     compare$1=Base_Int63[19],
     min$1=Base_Int63[20],
     max$1=Base_Int63[21],
     ascending$1=Base_Int63[22],
     descending$1=Base_Int63[23],
     between$1=Base_Int63[24],
     clamp_exn$1=Base_Int63[25],
     clamp$1=Base_Int63[26],
     comparator$1=Base_Int63[27],
     pp$1=Base_Int63[28],
     hashable$1=Base_Int63[29],
     is_positive$1=Base_Int63[30],
     is_non_negative$1=Base_Int63[31],
     is_negative$1=Base_Int63[32],
     is_non_positive$1=Base_Int63[33],
     sign$1=Base_Int63[34],
     invariant$1=Base_Int63[35],
     Hex$1=Base_Int63[36],
     to_string_hum$1=Base_Int63[37],
     zero$1=Base_Int63[38],
     one$1=Base_Int63[39],
     minus_one$1=Base_Int63[40],
     symbol$27=Base_Int63[41],
     symbol$28=Base_Int63[42],
     symbol$29=Base_Int63[43],
     symbol$30=Base_Int63[44],
     neg$0=Base_Int63[45],
     symbol$31=Base_Int63[46],
     symbol$32=Base_Int63[47],
     symbol$33=Base_Int63[48],
     symbol$34=Base_Int63[49],
     rem$1=Base_Int63[50],
     symbol$35=Base_Int63[51],
     land$0=Base_Int63[52],
     lor$0=Base_Int63[53],
     lxor$0=Base_Int63[54],
     lnot$1=Base_Int63[55],
     lsl$0=Base_Int63[56],
     asr$0=Base_Int63[57],
     round$1=Base_Int63[58],
     round_towards_zero$1=Base_Int63[59],
     round_down$1=Base_Int63[60],
     round_up$1=Base_Int63[61],
     round_nearest$1=Base_Int63[62],
     abs$1=Base_Int63[63],
     succ$1=Base_Int63[64],
     pred$1=Base_Int63[65],
     pow$1=Base_Int63[66],
     bit_and$1=Base_Int63[67],
     bit_or$1=Base_Int63[68],
     bit_xor$1=Base_Int63[69],
     bit_not$1=Base_Int63[70],
     popcount$1=Base_Int63[71],
     shift_left$1=Base_Int63[72],
     shift_right$1=Base_Int63[73],
     decr$1=Base_Int63[74],
     incr$1=Base_Int63[75],
     of_int32_exn$1=Base_Int63[76],
     to_int32_exn$1=Base_Int63[77],
     of_int64_exn$1=Base_Int63[78],
     to_int64$1=Base_Int63[79],
     of_nativeint_exn$1=Base_Int63[80],
     to_nativeint_exn$1=Base_Int63[81],
     of_float_unchecked$1=Base_Int63[82],
     num_bits$1=Base_Int63[83],
     max_value$1=Base_Int63[84],
     min_value$1=Base_Int63[85],
     lsr$0=Base_Int63[86],
     shift_right_logical$1=Base_Int63[87],
     ceil_pow2$1=Base_Int63[88],
     floor_pow2$1=Base_Int63[89],
     ceil_log2$1=Base_Int63[90],
     is_pow2$1=Base_Int63[91],
     clz$1=Base_Int63[92],
     ctz$1=Base_Int63[93],
     O$1=Base_Int63[94],
     floor_log2$1=Base_Int63[113],
     uniform$1=Splittable_random[5],
     log_uniform$1=Splittable_random[10][3],
     For_int63=
      For_integer
       ([0,
         t_sexp_grammar$1,
         of_float$1,
         to_float$1,
         of_int_exn$1,
         to_int_exn$1,
         hash_fold_t$1,
         hash$1,
         t_of_sexp$1,
         sexp_of_t$3,
         of_string$1,
         to_string$1,
         symbol$21,
         symbol$22,
         symbol$23,
         symbol$24,
         symbol$25,
         symbol$26,
         equal$1,
         compare$1,
         min$1,
         max$1,
         ascending$1,
         descending$1,
         between$1,
         clamp_exn$1,
         clamp$1,
         comparator$1,
         pp$1,
         hashable$1,
         is_positive$1,
         is_non_negative$1,
         is_negative$1,
         is_non_positive$1,
         sign$1,
         invariant$1,
         Hex$1,
         to_string_hum$1,
         zero$1,
         one$1,
         minus_one$1,
         symbol$27,
         symbol$28,
         symbol$29,
         symbol$30,
         neg$0,
         symbol$31,
         symbol$32,
         symbol$33,
         symbol$34,
         rem$1,
         symbol$35,
         land$0,
         lor$0,
         lxor$0,
         lnot$1,
         lsl$0,
         asr$0,
         round$1,
         round_towards_zero$1,
         round_down$1,
         round_up$1,
         round_nearest$1,
         abs$1,
         succ$1,
         pred$1,
         pow$1,
         bit_and$1,
         bit_or$1,
         bit_xor$1,
         bit_not$1,
         popcount$1,
         shift_left$1,
         shift_right$1,
         decr$1,
         incr$1,
         of_int32_exn$1,
         to_int32_exn$1,
         of_int64_exn$1,
         to_int64$1,
         of_nativeint_exn$1,
         to_nativeint_exn$1,
         of_float_unchecked$1,
         num_bits$1,
         max_value$1,
         min_value$1,
         lsr$0,
         shift_right_logical$1,
         ceil_pow2$1,
         floor_pow2$1,
         ceil_log2$1,
         floor_log2$1,
         is_pow2$1,
         clz$1,
         ctz$1,
         O$1,
         uniform$1,
         log_uniform$1]),
     int63=For_int63[7],
     int63_uniform=For_int63[6],
     int63_inclusive=For_int63[4],
     int63_uniform_inclusive=For_int63[1],
     int63_log_inclusive=For_int63[5],
     int63_log_uniform_inclusive=For_int63[2],
     t_sexp_grammar$2=Base_Int64[1],
     of_float$2=Base_Int64[2],
     to_float$2=Base_Int64[3],
     of_int_exn$2=Base_Int64[4],
     to_int_exn$2=Base_Int64[5],
     hash_fold_t$2=Base_Int64[6],
     hash$2=Base_Int64[7],
     t_of_sexp$2=Base_Int64[8],
     sexp_of_t$4=Base_Int64[9],
     of_string$2=Base_Int64[10],
     to_string$2=Base_Int64[11],
     equal$2=Base_Int64[12],
     compare$2=Base_Int64[13],
     min$2=Base_Int64[14],
     max$2=Base_Int64[15],
     ascending$2=Base_Int64[16],
     descending$2=Base_Int64[17],
     between$2=Base_Int64[18],
     clamp_exn$2=Base_Int64[19],
     clamp$2=Base_Int64[20],
     comparator$2=Base_Int64[21],
     pp$2=Base_Int64[22],
     hashable$2=Base_Int64[23],
     is_positive$2=Base_Int64[24],
     is_non_negative$2=Base_Int64[25],
     is_negative$2=Base_Int64[26],
     is_non_positive$2=Base_Int64[27],
     sign$2=Base_Int64[28],
     invariant$2=Base_Int64[29],
     Hex$2=Base_Int64[30],
     to_string_hum$2=Base_Int64[31],
     one$2=Base_Int64[32],
     minus_one$2=Base_Int64[33],
     rem$2=Base_Int64[34],
     round$2=Base_Int64[35],
     round_towards_zero$2=Base_Int64[36],
     round_down$2=Base_Int64[37],
     round_up$2=Base_Int64[38],
     round_nearest$2=Base_Int64[39],
     succ$2=Base_Int64[40],
     pred$2=Base_Int64[41],
     pow$2=Base_Int64[42],
     bit_and$2=Base_Int64[43],
     bit_or$2=Base_Int64[44],
     bit_xor$2=Base_Int64[45],
     bit_not$2=Base_Int64[46],
     popcount$2=Base_Int64[47],
     shift_left$2=Base_Int64[48],
     shift_right$2=Base_Int64[49],
     decr$2=Base_Int64[50],
     incr$2=Base_Int64[51],
     of_int32_exn$2=Base_Int64[52],
     to_int32_exn$2=Base_Int64[53],
     of_int64_exn$2=Base_Int64[54],
     to_int64$2=Base_Int64[55],
     of_nativeint_exn$2=Base_Int64[56],
     to_nativeint_exn$2=Base_Int64[57],
     of_float_unchecked$2=Base_Int64[58],
     num_bits$2=Base_Int64[59],
     max_value$2=Base_Int64[60],
     min_value$2=Base_Int64[61],
     shift_right_logical$2=Base_Int64[62],
     ceil_pow2$2=Base_Int64[63],
     floor_pow2$2=Base_Int64[64],
     ceil_log2$2=Base_Int64[65],
     floor_log2$2=Base_Int64[66],
     is_pow2$2=Base_Int64[67],
     clz$2=Base_Int64[68],
     ctz$2=Base_Int64[69],
     O$2=Base_Int64[70],
     symbol$36=Base_Int64[71],
     lnot$2=Base_Int64[72],
     abs$2=Base_Int64[73],
     zero$2=Base_Int64[74],
     symbol$37=Base_Int64[75],
     symbol$38=Base_Int64[76],
     symbol$39=Base_Int64[77],
     uniform$2=Splittable_random[6],
     log_uniform$2=Splittable_random[10][4],
     For_int64=
      For_integer
       ([0,
         t_sexp_grammar$2,
         of_float$2,
         to_float$2,
         of_int_exn$2,
         to_int_exn$2,
         hash_fold_t$2,
         hash$2,
         t_of_sexp$2,
         sexp_of_t$4,
         of_string$2,
         to_string$2,
         caml_greaterequal,
         caml_lessequal,
         caml_equal,
         caml_greaterthan,
         caml_lessthan,
         caml_notequal,
         equal$2,
         compare$2,
         min$2,
         max$2,
         ascending$2,
         descending$2,
         between$2,
         clamp_exn$2,
         clamp$2,
         comparator$2,
         pp$2,
         hashable$2,
         is_positive$2,
         is_non_negative$2,
         is_negative$2,
         is_non_positive$2,
         sign$2,
         invariant$2,
         Hex$2,
         to_string_hum$2,
         zero$2,
         one$2,
         minus_one$2,
         caml_int64_add,
         caml_int64_sub,
         caml_int64_mul,
         symbol$36,
         caml_int64_neg,
         caml_int64_neg,
         symbol$38,
         symbol$37,
         caml_int64_div,
         rem$2,
         symbol$39,
         caml_int64_and,
         caml_int64_or,
         caml_int64_xor,
         lnot$2,
         caml_int64_shift_left,
         caml_int64_shift_right,
         round$2,
         round_towards_zero$2,
         round_down$2,
         round_up$2,
         round_nearest$2,
         abs$2,
         succ$2,
         pred$2,
         pow$2,
         bit_and$2,
         bit_or$2,
         bit_xor$2,
         bit_not$2,
         popcount$2,
         shift_left$2,
         shift_right$2,
         decr$2,
         incr$2,
         of_int32_exn$2,
         to_int32_exn$2,
         of_int64_exn$2,
         to_int64$2,
         of_nativeint_exn$2,
         to_nativeint_exn$2,
         of_float_unchecked$2,
         num_bits$2,
         max_value$2,
         min_value$2,
         caml_int64_shift_right_unsigne,
         shift_right_logical$2,
         ceil_pow2$2,
         floor_pow2$2,
         ceil_log2$2,
         floor_log2$2,
         is_pow2$2,
         clz$2,
         ctz$2,
         [0,
          caml_int64_add,
          caml_int64_sub,
          caml_int64_mul,
          caml_int64_div,
          caml_int64_neg,
          O$2[1],
          caml_greaterequal,
          caml_lessequal,
          caml_equal,
          caml_greaterthan,
          caml_lessthan,
          caml_notequal,
          O$2[3],
          caml_int64_neg,
          O$2[4],
          O$2[5],
          O$2[6],
          O$2[7],
          caml_int64_and,
          caml_int64_or,
          caml_int64_xor,
          O$2[2],
          caml_int64_shift_left,
          caml_int64_shift_right,
          caml_int64_shift_right_unsigne],
         uniform$2,
         log_uniform$2]),
     quickcheck_generator_int64=For_int64[7],
     int64_uniform=For_int64[6],
     int64_inclusive=For_int64[4],
     int64_uniform_inclusive=For_int64[1],
     int64_log_inclusive=For_int64[5],
     int64_log_uniform_inclusive=For_int64[2],
     t_sexp_grammar$3=Base_Nativeint[1],
     of_float$3=Base_Nativeint[2],
     to_float$3=Base_Nativeint[3],
     of_int_exn$3=Base_Nativeint[4],
     to_int_exn$3=Base_Nativeint[5],
     hash_fold_t$3=Base_Nativeint[6],
     hash$3=Base_Nativeint[7],
     t_of_sexp$3=Base_Nativeint[8],
     sexp_of_t$5=Base_Nativeint[9],
     of_string$3=Base_Nativeint[10],
     to_string$3=Base_Nativeint[11],
     symbol$40=Base_Nativeint[12],
     symbol$41=Base_Nativeint[13],
     symbol$42=Base_Nativeint[14],
     symbol$43=Base_Nativeint[15],
     symbol$44=Base_Nativeint[16],
     symbol$45=Base_Nativeint[17],
     equal$3=Base_Nativeint[18],
     compare$3=Base_Nativeint[19],
     min$3=Base_Nativeint[20],
     max$3=Base_Nativeint[21],
     ascending$3=Base_Nativeint[22],
     descending$3=Base_Nativeint[23],
     between$3=Base_Nativeint[24],
     clamp_exn$3=Base_Nativeint[25],
     clamp$3=Base_Nativeint[26],
     comparator$3=Base_Nativeint[27],
     pp$3=Base_Nativeint[28],
     hashable$3=Base_Nativeint[29],
     is_positive$3=Base_Nativeint[30],
     is_non_negative$3=Base_Nativeint[31],
     is_negative$3=Base_Nativeint[32],
     is_non_positive$3=Base_Nativeint[33],
     sign$3=Base_Nativeint[34],
     invariant$3=Base_Nativeint[35],
     Hex$3=Base_Nativeint[36],
     to_string_hum$3=Base_Nativeint[37],
     zero$3=Base_Nativeint[38],
     one$3=Base_Nativeint[39],
     minus_one$3=Base_Nativeint[40],
     symbol$46=Base_Nativeint[41],
     symbol$47=Base_Nativeint[42],
     symbol$48=Base_Nativeint[43],
     symbol$49=Base_Nativeint[44],
     neg$1=Base_Nativeint[45],
     symbol$50=Base_Nativeint[46],
     symbol$51=Base_Nativeint[47],
     symbol$52=Base_Nativeint[48],
     symbol$53=Base_Nativeint[49],
     rem$3=Base_Nativeint[50],
     symbol$54=Base_Nativeint[51],
     land$1=Base_Nativeint[52],
     lor$1=Base_Nativeint[53],
     lxor$1=Base_Nativeint[54],
     lnot$3=Base_Nativeint[55],
     lsl$1=Base_Nativeint[56],
     asr$1=Base_Nativeint[57],
     round$3=Base_Nativeint[58],
     round_towards_zero$3=Base_Nativeint[59],
     round_down$3=Base_Nativeint[60],
     round_up$3=Base_Nativeint[61],
     round_nearest$3=Base_Nativeint[62],
     abs$3=Base_Nativeint[63],
     succ$3=Base_Nativeint[64],
     pred$3=Base_Nativeint[65],
     pow$3=Base_Nativeint[66],
     bit_and$3=Base_Nativeint[67],
     bit_or$3=Base_Nativeint[68],
     bit_xor$3=Base_Nativeint[69],
     bit_not$3=Base_Nativeint[70],
     popcount$3=Base_Nativeint[71],
     shift_left$3=Base_Nativeint[72],
     shift_right$3=Base_Nativeint[73],
     decr$3=Base_Nativeint[74],
     incr$3=Base_Nativeint[75],
     of_int32_exn$3=Base_Nativeint[76],
     to_int32_exn$3=Base_Nativeint[77],
     of_int64_exn$3=Base_Nativeint[78],
     to_int64$3=Base_Nativeint[79],
     of_nativeint_exn$3=Base_Nativeint[80],
     to_nativeint_exn$3=Base_Nativeint[81],
     of_float_unchecked$3=Base_Nativeint[82],
     num_bits$3=Base_Nativeint[83],
     max_value$3=Base_Nativeint[84],
     min_value$3=Base_Nativeint[85],
     lsr$1=Base_Nativeint[86],
     shift_right_logical$3=Base_Nativeint[87],
     ceil_pow2$3=Base_Nativeint[88],
     floor_pow2$3=Base_Nativeint[89],
     ceil_log2$3=Base_Nativeint[90],
     floor_log2$3=Base_Nativeint[91],
     is_pow2$3=Base_Nativeint[92],
     clz$3=Base_Nativeint[93],
     ctz$3=Base_Nativeint[94],
     O$3=Base_Nativeint[95],
     uniform$3=Splittable_random[7],
     log_uniform$3=Splittable_random[10][5],
     For_nativeint=
      For_integer
       ([0,
         t_sexp_grammar$3,
         of_float$3,
         to_float$3,
         of_int_exn$3,
         to_int_exn$3,
         hash_fold_t$3,
         hash$3,
         t_of_sexp$3,
         sexp_of_t$5,
         of_string$3,
         to_string$3,
         symbol$40,
         symbol$41,
         symbol$42,
         symbol$43,
         symbol$44,
         symbol$45,
         equal$3,
         compare$3,
         min$3,
         max$3,
         ascending$3,
         descending$3,
         between$3,
         clamp_exn$3,
         clamp$3,
         comparator$3,
         pp$3,
         hashable$3,
         is_positive$3,
         is_non_negative$3,
         is_negative$3,
         is_non_positive$3,
         sign$3,
         invariant$3,
         Hex$3,
         to_string_hum$3,
         zero$3,
         one$3,
         minus_one$3,
         symbol$46,
         symbol$47,
         symbol$48,
         symbol$49,
         neg$1,
         symbol$50,
         symbol$51,
         symbol$52,
         symbol$53,
         rem$3,
         symbol$54,
         land$1,
         lor$1,
         lxor$1,
         lnot$3,
         lsl$1,
         asr$1,
         round$3,
         round_towards_zero$3,
         round_down$3,
         round_up$3,
         round_nearest$3,
         abs$3,
         succ$3,
         pred$3,
         pow$3,
         bit_and$3,
         bit_or$3,
         bit_xor$3,
         bit_not$3,
         popcount$3,
         shift_left$3,
         shift_right$3,
         decr$3,
         incr$3,
         of_int32_exn$3,
         to_int32_exn$3,
         of_int64_exn$3,
         to_int64$3,
         of_nativeint_exn$3,
         to_nativeint_exn$3,
         of_float_unchecked$3,
         num_bits$3,
         max_value$3,
         min_value$3,
         lsr$1,
         shift_right_logical$3,
         ceil_pow2$3,
         floor_pow2$3,
         ceil_log2$3,
         floor_log2$3,
         is_pow2$3,
         clz$3,
         ctz$3,
         O$3,
         uniform$3,
         log_uniform$3]),
     quickcheck_generator_nativeint=For_nativeint[7],
     _af_=For_nativeint[6],
     _ag_=For_nativeint[4],
     _ah_=For_nativeint[1],
     _ai_=For_nativeint[5],
     _aj_=For_nativeint[2],
     float_zero_exponent=caml_call1(Base_Float[121],0.),
     float_zero_mantissa=caml_call1(Base_Float[122],0.),
     float_max_positive_subnormal_v=
      caml_call2(Base_Float[51],759637122,Base_Float[47]),
     float_subnormal_exponent=caml_call1(Base_Float[121],Base_Float[46]),
     float_min_subnormal_mantissa=caml_call1(Base_Float[122],Base_Float[46]),
     float_max_subnormal_mantissa=
      caml_call1(Base_Float[122],float_max_positive_subnormal_v),
     _ak_=Base_Float[45],
     lower_bound=caml_call1(Base_Float[121],Base_Float[47]),
     upper_bound=caml_call1(Base_Float[121],_ak_),
     float_max_nan_mantissa=caml_call1(Base_Float[122],_ak_),
     float_inf_exponent=caml_call1(Base_Float[121],Base_Float[33]),
     float_inf_mantissa=caml_call1(Base_Float[122],Base_Float[33]),
     float_nan_exponent=caml_call1(Base_Float[121],Base_Float[32]),
     float_min_nan_mantissa=caml_call1(Base_Int63[64],float_inf_mantissa),
     float_num_mantissa_bits=52;
    function _al_(num_bits)
     {function _et_(bits)
       {return caml_call2(Base_Int63[72],bits,52 - num_bits | 0)}
      var
       _eu_=caml_call2(Base_Int63[72],Base_Int63[39],num_bits),
       _ev_=caml_call1(Base_Int63[65],_eu_),
       _ew_=caml_call2(For_int63[4],Base_Int63[38],_ev_);
      return caml_call2(For_monad[11][4][3],_ew_,_et_)}
    var
     _am_=caml_call2(For_int[1],0,float_num_mantissa_bits),
     float_normal_mantissa=caml_call2(For_monad[11][4][2],_am_,_al_),
     upper_bound$0=caml_call1(Base_Float[121],1.),
     _ar_=0;
    function _an_(offset){return upper_bound$0 + offset | 0}
    var
     _ao_=caml_call2(For_int[5],0,upper_bound - upper_bound$0 | 0),
     _as_=[0,caml_call2(For_monad[11][4][3],_ao_,_an_),_ar_];
    function _ap_(offset){return upper_bound$0 - offset | 0}
    var
     _aq_=caml_call2(For_int[5],0,upper_bound$0 - lower_bound | 0),
     float_exponent=union([0,caml_call2(For_monad[11][4][3],_aq_,_ap_),_as_]);
    function _at_(negative)
     {return caml_call3
              (Base_Float[119],
               negative,
               float_zero_exponent,
               float_zero_mantissa)}
    var
     float_zero=caml_call2(For_monad[11][4][3],quickcheck_generator_bool,_at_),
     let_syntax_012=caml_call1(For_monad[11][1],float_subnormal_exponent),
     let_syntax_013=
      caml_call2
       (For_int63[5],
        float_min_subnormal_mantissa,
        float_max_subnormal_mantissa);
    function _au_(param)
     {var
       match=param[2],
       mantissa=match[2],
       exponent=match[1],
       negative=param[1];
      return caml_call3(Base_Float[119],negative,exponent,mantissa)}
    var
     _av_=caml_call2(For_monad[11][4][4],let_syntax_012,let_syntax_013),
     _aw_=caml_call2(For_monad[11][4][4],quickcheck_generator_bool,_av_),
     float_subnormal=caml_call2(For_monad[11][4][3],_aw_,_au_);
    function _ax_(param)
     {var
       match=param[2],
       mantissa=match[2],
       exponent=match[1],
       negative=param[1];
      return caml_call3(Base_Float[119],negative,exponent,mantissa)}
    var
     _ay_=caml_call2(For_monad[11][4][4],float_exponent,float_normal_mantissa),
     _az_=caml_call2(For_monad[11][4][4],quickcheck_generator_bool,_ay_),
     float_normal=caml_call2(For_monad[11][4][3],_az_,_ax_);
    function _aA_(negative)
     {return caml_call3
              (Base_Float[119],negative,float_inf_exponent,float_inf_mantissa)}
    var
     float_infinite=
      caml_call2(For_monad[11][4][3],quickcheck_generator_bool,_aA_),
     let_syntax_021=caml_call1(For_monad[11][1],float_nan_exponent),
     let_syntax_022=
      caml_call2(For_int63[4],float_min_nan_mantissa,float_max_nan_mantissa);
    function _aB_(param)
     {var
       match=param[2],
       mantissa=match[2],
       exponent=match[1],
       negative=param[1];
      return caml_call3(Base_Float[119],negative,exponent,mantissa)}
    var
     _aC_=caml_call2(For_monad[11][4][4],let_syntax_021,let_syntax_022),
     _aD_=caml_call2(For_monad[11][4][4],quickcheck_generator_bool,_aC_),
     float_nan=caml_call2(For_monad[11][4][3],_aD_,_aB_);
    function float_of_class(c)
     {switch(c)
       {case 0:return float_infinite;
        case 1:return float_nan;
        case 2:return float_normal;
        case 3:return float_subnormal;
        default:return float_zero}}
    function float_matching_classes(filter)
     {function _eq_(c)
       {if(caml_call1(filter,c))
         {var _er_=float_of_class(c);
          switch(c)
           {case 0:var _es_=1.;break;
            case 1:var _es_=1.;break;
            case 2:var _es_=100.;break;
            case 3:var _es_=10.;break;
            default:var _es_=1.}
          return [0,[0,_es_,_er_]]}
        return 0}
      return weighted_union
              (caml_call2(Base_List[126],Base_Float[113][2],_eq_))}
    var
     float_finite=
      float_matching_classes(function(param){return 2 <= param?1:0}),
     float_without_nan=
      float_matching_classes(function(param){return 1 === param?0:1}),
     quickcheck_generator_float=
      float_matching_classes(function(param){return 1}),
     float_finite_non_zero=
      float_matching_classes(function(param){return 1 < param - 2 >>> 0?0:1});
    function _aE_(t){return caml_call1(Base_Float[102],t)}
    var
     float_strictly_positive=
      caml_call2(For_monad[11][4][3],float_finite_non_zero,_aE_);
    function _aF_(t)
     {var _ep_=caml_call1(Base_Float[102],t);
      return caml_call1(Base[196],_ep_)}
    var
     float_strictly_negative=
      caml_call2(For_monad[11][4][3],float_finite_non_zero,_aF_);
    function _aG_(t){return caml_call1(Base_Float[102],t)}
    var
     float_positive_or_zero=
      caml_call2(For_monad[11][4][3],float_finite,_aG_);
    function _aH_(t)
     {var _eo_=caml_call1(Base_Float[102],t);
      return caml_call1(Base[196],_eo_)}
    var
     float_negative_or_zero=
      caml_call2(For_monad[11][4][3],float_finite,_aH_);
    function float_uniform_exclusive(lower_bound,upper_bound)
     {var
       _eg_=1 - caml_call1(Base_Float[84],lower_bound),
       _eh_=_eg_ || 1 - caml_call1(Base_Float[84],upper_bound);
      if(_eh_)
       {var
         _ei_=[0,[1,[0,_aI_,[0,caml_call1(Base[112],upper_bound),0]]],0],
         _ej_=[0,[1,[0,_aJ_,[0,caml_call1(Base[112],lower_bound),0]]],_ei_],
         _ek_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Float_uniform_exclusive_bo),
            _ej_]];
        caml_call1(Base[202],_ek_)}
      var
       lower_inclusive=caml_call2(Base_Float[51],19067,lower_bound),
       upper_inclusive=caml_call2(Base_Float[51],759637122,upper_bound);
      if(caml_call2(Base_Float[103][11],lower_inclusive,upper_inclusive))
       {var
         _el_=[0,[1,[0,_aK_,[0,caml_call1(Base[112],upper_bound),0]]],0],
         _em_=[0,[1,[0,_aL_,[0,caml_call1(Base[112],lower_bound),0]]],_el_],
         _en_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Float_uniform_exclusive_re),
            _em_]];
        caml_call1(Base[202],_en_)}
      return create$0
              (function(param,random)
                {return caml_call3
                         (Splittable_random[8],
                          random,
                          lower_inclusive,
                          upper_inclusive)})}
    function float_inclusive(lower_bound,upper_bound)
     {if(caml_call2(Base_Float[15],lower_bound,upper_bound))
       return caml_call1(For_monad[11][1],lower_bound);
      var _ec_=caml_call2(Base_Float[51],19067,lower_bound);
      if(caml_call2(Base_Float[11],_ec_,upper_bound))
       {var _ed_=[0,caml_call1(For_monad[11][1],upper_bound),0];
        return union([0,caml_call1(For_monad[11][1],lower_bound),_ed_])}
      var
       _ee_=[0,[0,0.9,float_uniform_exclusive(lower_bound,upper_bound)],0],
       _ef_=[0,[0,0.05,caml_call1(For_monad[11][1],upper_bound)],_ee_];
      return weighted_union
              ([0,[0,0.05,caml_call1(For_monad[11][1],lower_bound)],_ef_])}
    function string_with_length_of(char_gen,length)
     {var _eb_=list_with_length(char_gen,length);
      return map(_eb_,Base_String[123])}
    function string_of(char_gen)
     {return bind
              (small_positive_or_zero_int,
               function(length){return string_with_length_of(char_gen,length)})}
    function string_non_empty_of(char_gen)
     {return bind
              (small_strictly_positive_int,
               function(length){return string_with_length_of(char_gen,length)})}
    var
     quickcheck_generator_string=string_of(quickcheck_generator_char),
     string_non_empty=string_non_empty_of(quickcheck_generator_char);
    function string_with_length(length)
     {return string_with_length_of(quickcheck_generator_char,length)}
    var
     quickcheck_generator_bytes=
      map(quickcheck_generator_string,Base_Bytes[25]);
    function sexp_of(atom)
     {return fixed_point
              (function(self)
                {function _d7_(size)
                  {function _d8_(param)
                    {if(0 === param)
                      {var _d__=function(atom){return [0,atom]};
                       return caml_call2(For_monad[11][4][3],atom,_d__)}
                     function _d$_(list){return [1,list]}
                     var _ea_=quickcheck_generator_list(self);
                     return caml_call2(For_monad[11][4][3],_ea_,_d$_)}
                   var _d9_=caml_call2(For_int[2],0,size + 1 | 0);
                   return caml_call2(For_monad[11][4][2],_d9_,_d8_)}
                 return caml_call2(For_monad[11][4][2],size,_d7_)})}
    var sexp=sexp_of(quickcheck_generator_string);
    function map_tree_using_comparator(comparator,key_gen,data_gen)
     {function _d1_(keys)
       {var keys$0=caml_call2(Base_List[114],keys,comparator[1]);
        function _d3_(data)
         {var
           _d5_=caml_call2(Base_List[95],keys$0,data),
           _d6_=caml_call2(Base_Map[104][3][9],comparator,_d5_);
          return caml_call1(For_monad[11][1],_d6_)}
        var _d4_=list_with_length(data_gen,caml_call1(Base_List[7],keys$0));
        return caml_call2(For_monad[11][4][2],_d4_,_d3_)}
      var _d2_=quickcheck_generator_list(key_gen);
      return caml_call2(For_monad[11][4][2],_d2_,_d1_)}
    function set_tree_using_comparator(comparator,elt_gen)
     {var _d0_=caml_call1(Base_Set[74][3][54],comparator);
      return map(quickcheck_generator_list(elt_gen),_d0_)}
    function map_t_m(m,key_gen,data_gen)
     {var
       comparator=m[1],
       _dZ_=map_tree_using_comparator(comparator,key_gen,data_gen);
      return map(_dZ_,caml_call1(Base_Map[104][95],comparator))}
    function set_t_m(m,elt_gen)
     {var comparator=m[1],_dY_=set_tree_using_comparator(comparator,elt_gen);
      return map(_dY_,caml_call1(Base_Set[74][64],comparator))}
    function bigarray1(t,kind,layout)
     {function _dU_(elts)
       {var
         elts$0=caml_call1(Base_Array[39],elts),
         dim=elts$0.length - 1,
         offset=caml_call1(Layout[1],layout);
        function _dW_(i)
         {var _dX_=i - offset | 0;
          return caml_check_bound(elts$0,_dX_)[1 + _dX_]}
        return caml_call4(_b_[2],kind,layout,dim,_dW_)}
      var _dV_=quickcheck_generator_list(t);
      return caml_call2(For_monad[11][4][3],_dV_,_dU_)}
    var
     bigstring=bigarray1(quickcheck_generator_char,12,0),
     float32_vec=bigarray1(quickcheck_generator_float,0,1),
     float64_vec=bigarray1(quickcheck_generator_float,1,1);
    function _aM_(max_total_size)
     {if(0 === max_total_size)return caml_call1(For_monad[11][1],_aN_);
      function _dN_(a)
       {function _dP_(b)
         {function _dT_(param){return param?[0,a,b]:[0,b,a]}
          return caml_call2
                  (For_monad[11][4][3],quickcheck_generator_bool,_dT_)}
        var max_b=caml_div(max_total_size,a);
        function _dQ_(b_weighted_low){return max_b - b_weighted_low | 0}
        var
         _dR_=caml_call2(int_log_uniform_inclusive,0,max_b),
         _dS_=caml_call2(For_monad[11][4][3],_dR_,_dQ_);
        return caml_call2(For_monad[11][4][2],_dS_,_dP_)}
      var _dO_=caml_call2(int_log_uniform_inclusive,1,max_total_size);
      return caml_call2(For_monad[11][4][2],_dO_,_dN_)}
    var bigarray2_dim=caml_call2(For_monad[11][4][2],size,_aM_);
    function bigarray2(t,kind,layout)
     {function _dH_(param)
       {var dim2=param[2],dim1=param[1];
        function _dI_(elts)
         {var
           elts$0=caml_call2(Base_Array[78],elts,Base_Array[39]),
           offset=caml_call1(Layout[1],layout);
          function _dK_(i,j)
           {var _dL_=j - offset | 0,_dM_=i - offset | 0;
            return caml_check_bound
                     (caml_check_bound(elts$0,_dM_)[1 + _dM_],_dL_)
                    [1 + _dL_]}
          return caml_call5(_a_[2],kind,layout,dim1,dim2,_dK_)}
        var _dJ_=list_with_length(list_with_length(t,dim2),dim1);
        return caml_call2(For_monad[11][4][3],_dJ_,_dI_)}
      return caml_call2(For_monad[11][4][2],bigarray2_dim,_dH_)}
    var
     float32_mat=bigarray2(quickcheck_generator_float,0,1),
     float64_mat=bigarray2(quickcheck_generator_float,1,1);
    function coverage(Cmp)
     {return function(sample)
       {function _dE_(counts,value)
         {function _dG_(param)
           {if(param){var prev=param[1];return prev + 1 | 0}return 1}
          return caml_call3(Base_Map[35],counts,value,_dG_)}
        var _dF_=caml_call1(Base_Map[6],Cmp);
        return caml_call3(Base_Sequence[8],sample,_dF_,_dE_)}}
    function monitor(t,f)
     {return map(t,function(value){caml_call1(f,value);return value})}
    var
     Debug=[0,coverage,monitor],
     Base_quickcheck_Generator=
      [0,
       quickcheck_generator_unit,
       quickcheck_generator_bool,
       quickcheck_generator_char,
       quickcheck_generator_string,
       quickcheck_generator_bytes,
       quickcheck_generator_int,
       quickcheck_generator_int32,
       int63,
       quickcheck_generator_int64,
       quickcheck_generator_nativeint,
       quickcheck_generator_float,
       sexp,
       quickcheck_generator_option,
       quickcheck_generator_list,
       quickcheck_generator_array,
       quickcheck_generator_ref,
       quickcheck_generator_lazy_t,
       either,
       result,
       bigstring,
       float32_vec,
       float64_vec,
       float32_mat,
       float64_mat,
       fn,
       map_t_m,
       set_t_m,
       map_tree_using_comparator,
       set_tree_using_comparator,
       of_list,
       union,
       both,
       symbol,
       symbol$0,
       symbol$1,
       apply,
       map2,
       map3,
       For_applicative[13],
       _h_,
       _i_,
       For_monad[3],
       bind,
       return$0,
       map,
       _f_,
       _e_,
       all,
       all_unit,
       For_monad[11],
       size,
       with_size,
       sizes,
       filter,
       filter_map,
       recursive_union,
       fixed_point,
       of_lazy,
       of_weighted_list,
       weighted_union,
       weighted_recursive_union,
       small_positive_or_zero_int,
       small_strictly_positive_int,
       int_uniform,
       int32_uniform,
       int63_uniform,
       int64_uniform,
       _af_,
       int_inclusive,
       int32_inclusive,
       int63_inclusive,
       int64_inclusive,
       _ag_,
       int_uniform_inclusive,
       int32_uniform_inclusive,
       int63_uniform_inclusive,
       int64_uniform_inclusive,
       _ah_,
       int_log_uniform_inclusive,
       int32_log_uniform_inclusive,
       int63_log_uniform_inclusive,
       int64_log_uniform_inclusive,
       _aj_,
       int_log_inclusive,
       int32_log_inclusive,
       int63_log_inclusive,
       int64_log_inclusive,
       _ai_,
       float_inclusive,
       float_uniform_exclusive,
       float_without_nan,
       float_finite,
       float_strictly_positive,
       float_strictly_negative,
       float_positive_or_zero,
       float_negative_or_zero,
       float_of_class,
       char_lowercase,
       char_uppercase,
       char_digit,
       char_alpha,
       char_alphanum,
       char_whitespace,
       char_print,
       char_uniform_inclusive,
       string_non_empty,
       string_with_length,
       string_of,
       string_non_empty_of,
       string_with_length_of,
       sexp_of,
       list_non_empty,
       list_with_length,
       list_filtered,
       list_permutations,
       perturb,
       create$0,
       generate,
       Debug];
    caml_register_global
     (112,Base_quickcheck_Generator,"Base_quickcheck__Generator");
    function quickcheck_shrinker_float(param){return Base_Sequence[38]}
    function create$1(_dD_){return _dD_}
    function shrink(_dC_){return _dC_}
    function map$2(t,f,f_inverse)
     {return function(x)
       {var _dB_=caml_call1(t,caml_call1(f_inverse,x));
        return caml_call2(Base_Sequence[32],_dB_,f)}}
    function filter$0(t,f)
     {return function(x)
       {var _dA_=caml_call1(t,x);return caml_call2(Base_Sequence[51],_dA_,f)}}
    function filter_map$0(t,f,f_inverse)
     {return function(x)
       {var _dz_=caml_call1(t,caml_call1(f_inverse,x));
        return caml_call2(Base_Sequence[78],_dz_,f)}}
    function of_lazy$0(lazy_t)
     {return function(x)
       {var
         _dv_=
          [246,
           function(_dw_)
            {var
              _dx_=caml_obj_tag(lazy_t),
              _dy_=
               250 === _dx_
                ?lazy_t[1]
                :246 === _dx_?caml_call1(CamlinternalLazy[2],lazy_t):lazy_t;
             return caml_call1(_dy_,x)}];
        return caml_call1(Base_Sequence[105],_dv_)}}
    function fixed_point$0(of_shrinker)
     {var lazy_t=[];
      caml_update_dummy
       (lazy_t,
        [246,function(_du_){return caml_call1(of_shrinker,of_lazy$0(lazy_t))}]);
      return of_lazy$0(lazy_t)}
    function both$0(fst_t,snd_t)
     {return function(param)
       {var snd=param[2],fst=param[1],_dn_=0;
        function _do_(snd){return [0,fst,snd]}
        var
         _dp_=caml_call1(snd_t,snd),
         _dq_=[0,caml_call2(Base_Sequence[32],_dp_,_do_),_dn_];
        function _dr_(fst){return [0,fst,snd]}
        var
         _ds_=caml_call1(fst_t,fst),
         _dt_=[0,caml_call2(Base_Sequence[32],_ds_,_dr_),_dq_];
        return caml_call1(Base_Sequence[68],_dt_)}}
    function float64_vec$0(src)
     {var dim=caml_ba_dim_1(src);
      if(0 === dim)return Base_Sequence[38];
      var
       kind=caml_ba_kind(src),
       layout=caml_ba_layout(src),
       offset=caml_call1(Layout[1],layout);
      function _dl_(to_skip)
       {var to_skip$0=to_skip + offset | 0;
        function _dm_(i)
         {var i$0=i < to_skip$0?i:i + 1 | 0;return caml_ba_get_1(src,i$0)}
        return caml_call4(_b_[2],kind,layout,dim - 1 | 0,_dm_)}
      return caml_call2(Base_Sequence[77],dim,_dl_)}
    function dim2(r){return r[2]}
    function dim1(r){return r[1]}
    function _aO_(r,v){return [0,r[1],v]}
    var _aP_=0,dim2$0=[0,function(param){return 0},cst_dim2,_aP_,dim2,_aO_];
    function _aQ_(r,v){return [0,v,r[2]]}
    var _aR_=0,dim1$0=[0,function(param){return 0},cst_dim1,_aR_,dim1,_aQ_];
    function shrink$0(field,src)
     {var
       _dh_=caml_ba_dim_2(src),
       dims=[0,caml_ba_dim_1(src),_dh_],
       match=caml_call2(Base_Field[3],field,dims);
      if(0 === match)return Base_Sequence[38];
      var
       kind=caml_ba_kind(src),
       layout=caml_ba_layout(src),
       offset=caml_call1(Layout[1],layout),
       match$0=caml_call3(Base_Field[6],field,dims,Base_Int[41]),
       dim2=match$0[2],
       dim1=match$0[1];
      function _di_(to_skip)
       {var to_skip$0=to_skip + offset | 0;
        function skip(i){return i < to_skip$0?i:i + 1 | 0}
        function _dk_(dim1,dim2)
         {var
           match=caml_call3(Base_Field[6],field,[0,dim1,dim2],skip),
           dim2$0=match[2],
           dim1$0=match[1];
          return caml_ba_get_2(src,dim1$0,dim2$0)}
        return caml_call5(_a_[2],kind,layout,dim1,dim2,_dk_)}
      var _dj_=caml_call2(Base_Field[3],field,dims);
      return caml_call2(Base_Sequence[77],_dj_,_di_)}
    function float64_mat$0(src)
     {var _df_=[0,shrink$0(dim2$0,src),0],_dg_=[0,shrink$0(dim1$0,src),_df_];
      return caml_call1(Base_Sequence[68],_dg_)}
    function quickcheck_shrinker_option(value_t)
     {return function(param)
       {if(param)
         {var
           value=param[1],
           _db_=Base_Option[20],
           _dc_=caml_call1(value_t,value),
           _dd_=caml_call2(Base_Sequence[32],_dc_,_db_),
           _de_=caml_call1(Base_Sequence[99],0);
          return caml_call2(Base_Sequence[63],_de_,_dd_)}
        return Base_Sequence[38]}}
    function quickcheck_shrinker_list(elt_t)
     {return fixed_point$0
              (function(list_t)
                {return function(param)
                  {if(param)
                    {var
                      tail=param[2],
                      head=param[1],
                      _c5_=0,
                      _c6_=function(tail){return [0,head,tail]},
                      _c7_=caml_call1(list_t,tail),
                      _c8_=[0,caml_call2(Base_Sequence[32],_c7_,_c6_),_c5_],
                      _c9_=function(head){return [0,head,tail]},
                      _c__=caml_call1(elt_t,head),
                      _c$_=[0,caml_call2(Base_Sequence[32],_c__,_c9_),_c8_],
                      _da_=[0,caml_call1(Base_Sequence[99],tail),_c$_];
                     return caml_call1(Base_Sequence[68],_da_)}
                   return Base_Sequence[38]}})}
    var
     _aS_=Base_String[16],
     _aT_=Base_String[123],
     quickcheck_shrinker_string=
      map$2(quickcheck_shrinker_list(quickcheck_shrinker_float),_aT_,_aS_),
     quickcheck_shrinker_bytes=
      map$2(quickcheck_shrinker_string,Base_Bytes[25],Base_Bytes[26]);
    function quickcheck_shrinker_array(t)
     {var _c3_=Base_Array[19],_c4_=Base_Array[39];
      return map$2(quickcheck_shrinker_list(t),_c4_,_c3_)}
    function quickcheck_shrinker_ref(t)
     {function _c0_(_c2_){return _c2_[1]}
      return map$2(t,function(_c1_){return [0,_c1_]},_c0_)}
    function quickcheck_shrinker_lazy_t(t)
     {function _cX_(_cY_)
       {var _cZ_=caml_obj_tag(_cY_);
        return 250 === _cZ_
                ?_cY_[1]
                :246 === _cZ_?caml_call1(CamlinternalLazy[2],_cY_):_cY_}
      return map$2(t,Base_Lazy[21],_cX_)}
    var
     sexp$0=
      fixed_point$0
       (function(shrinker)
         {return function(param)
           {if(0 === param[0])return Base_Sequence[38];
            var
             l=param[1],
             _cV_=caml_call1(quickcheck_shrinker_list(shrinker),l),
             _cW_=Base_Sequence[32],
             shrink_list=caml_call2(_cW_,_cV_,function(l){return [1,l]}),
             shrink_tree=caml_call1(Base_Sequence[104],l);
            return caml_call1
                    (Base_Sequence[68],[0,shrink_list,[0,shrink_tree,0]])}});
    function either$0(fst_t,snd_t)
     {return function(either)
       {if(0 === either[0])
         {var fst=either[1],_cR_=Base_Either[17],_cS_=caml_call1(fst_t,fst);
          return caml_call2(Base_Sequence[32],_cS_,_cR_)}
        var snd=either[1],_cT_=Base_Either[18],_cU_=caml_call1(snd_t,snd);
        return caml_call2(Base_Sequence[32],_cU_,_cT_)}}
    function result$0(ok_t,err_t)
     {function _cP_(param)
       {if(0 === param[0]){var ok=param[1];return [0,ok]}
        var err=param[1];
        return [1,err]}
      function _cQ_(param)
       {if(0 === param[0]){var ok=param[1];return [0,ok]}
        var err=param[1];
        return [1,err]}
      return map$2(either$0(ok_t,err_t),_cQ_,_cP_)}
    function map_tree_using_comparator$0(comparator,key_t,data_t)
     {return function(tree)
       {var alist=caml_call2(Base_Map[104][3][66],0,tree);
        function _cF_(param)
         {var k=param[1];
          return caml_call3(Base_Map[104][3][39],comparator,tree,k)}
        var
         _cG_=caml_call1(Base_Sequence[104],alist),
         drop_keys=caml_call2(Base_Sequence[32],_cG_,_cF_);
        function _cH_(param)
         {var
           data=param[2],
           key=param[1],
           tree$0=caml_call3(Base_Map[104][3][39],comparator,tree,key);
          function _cN_(smaller_key)
           {var
             match=
              caml_call4
               (Base_Map[104][3][29],comparator,tree$0,smaller_key,data);
            if(typeof match === "number")return 0;
            var tree=match[2];
            return [0,tree]}
          var _cO_=caml_call1(key_t,key);
          return caml_call2(Base_Sequence[78],_cO_,_cN_)}
        var
         _cI_=caml_call2(Base_List[76],alist,_cH_),
         shrink_keys=caml_call1(Base_Sequence[68],_cI_);
        function _cJ_(param)
         {var data=param[2],key=param[1];
          function _cL_(smaller_data)
           {return caml_call4
                    (Base_Map[104][3][31],comparator,tree,key,smaller_data)}
          var _cM_=caml_call1(data_t,data);
          return caml_call2(Base_Sequence[32],_cM_,_cL_)}
        var
         _cK_=caml_call2(Base_List[76],alist,_cJ_),
         shrink_data=caml_call1(Base_Sequence[68],_cK_);
        return caml_call1
                (Base_Sequence[68],
                 [0,drop_keys,[0,shrink_keys,[0,shrink_data,0]]])}}
    function set_tree_using_comparator$0(comparator,elt_t)
     {return function(tree)
       {var list=caml_call1(Base_Set[74][3][15],tree);
        function _cz_(elt)
         {return caml_call3(Base_Set[74][3][20],comparator,tree,elt)}
        var
         _cA_=caml_call1(Base_Sequence[104],list),
         drop_elts=caml_call2(Base_Sequence[32],_cA_,_cz_);
        function _cB_(elt)
         {var tree$0=caml_call3(Base_Set[74][3][20],comparator,tree,elt);
          function _cD_(smaller_elt)
           {var
             match=
              caml_call3(Base_Set[74][3][18],comparator,tree$0,smaller_elt);
            return match
                    ?0
                    :[0,
                      caml_call3
                       (Base_Set[74][3][19],comparator,tree$0,smaller_elt)]}
          var _cE_=caml_call1(elt_t,elt);
          return caml_call2(Base_Sequence[78],_cE_,_cD_)}
        var
         _cC_=caml_call2(Base_List[76],list,_cB_),
         shrink_elts=caml_call1(Base_Sequence[68],_cC_);
        return caml_call1(Base_Sequence[68],[0,drop_elts,[0,shrink_elts,0]])}}
    function map_t(key_t,data_t)
     {return function(map_t)
       {var
         comparator=caml_call1(Base_Map[5],map_t),
         _cx_=Base_Map[104][68],
         _cy_=caml_call1(Base_Map[104][95],comparator),
         t=
          map$2
           (map_tree_using_comparator$0(comparator,key_t,data_t),_cy_,_cx_);
        return caml_call1(t,map_t)}}
    function set_t(elt_t)
     {return function(set_t)
       {var
         comparator=caml_call1(Base_Set[4],set_t),
         _cv_=Base_Set[74][47],
         _cw_=caml_call1(Base_Set[74][64],comparator),
         t=map$2(set_tree_using_comparator$0(comparator,elt_t),_cw_,_cv_);
        return caml_call1(t,set_t)}}
    var
     Base_quickcheck_Shrinker=
      [0,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_string,
       quickcheck_shrinker_bytes,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       sexp$0,
       quickcheck_shrinker_option,
       quickcheck_shrinker_list,
       quickcheck_shrinker_array,
       quickcheck_shrinker_ref,
       quickcheck_shrinker_lazy_t,
       both$0,
       either$0,
       result$0,
       float64_vec$0,
       float64_vec$0,
       float64_vec$0,
       float64_mat$0,
       float64_mat$0,
       map_t,
       set_t,
       map_tree_using_comparator$0,
       set_tree_using_comparator$0,
       map$2,
       filter$0,
       filter_map$0,
       fixed_point$0,
       of_lazy$0,
       create$1,
       shrink];
    caml_register_global
     (114,Base_quickcheck_Shrinker,"Base_quickcheck__Shrinker");
    var Base_quickcheck_Test_intf=[0];
    caml_register_global
     (115,Base_quickcheck_Test_intf,"Base_quickcheck__Test_intf");
    function sexp_of_t$6(param)
     {if(param)
       {var arg0_001=param[1],res0_002=caml_call1(Base[164],arg0_001);
        return [1,[0,_aU_,[0,res0_002,0]]]}
      return _aV_}
    var Seed=[0,sexp_of_t$6];
    function sizes$0(r){return r[4]}
    function shrink_count(r){return r[3]}
    function test_count(r){return r[2]}
    function seed(r){return r[1]}
    function _aW_(r,v){return [0,r[1],r[2],r[3],v]}
    var
     _aX_=0,
     sizes$1=[0,function(param){return 0},cst_sizes,_aX_,sizes$0,_aW_];
    function _aY_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _aZ_=0,
     shrink_count$0=
      [0,function(param){return 0},cst_shrink_count,_aZ_,shrink_count,_aY_];
    function _a0_(r,v){return [0,r[1],v,r[3],r[4]]}
    var
     _a1_=0,
     test_count$0=
      [0,function(param){return 0},cst_test_count,_a1_,test_count,_a0_];
    function _a2_(r,v){return [0,v,r[2],r[3],r[4]]}
    var _a3_=0,seed$0=[0,function(param){return 0},cst_seed,_a3_,seed,_a2_];
    function make_creator
     (seed_fun,test_count_fun,shrink_count_fun,sizes_fun,compile_acc)
     {var
       match=caml_call2(seed_fun,seed$0,compile_acc),
       compile_acc$0=match[2],
       seed_gen=match[1],
       match$0=caml_call2(test_count_fun,test_count$0,compile_acc$0),
       compile_acc$1=match$0[2],
       test_count_gen=match$0[1],
       match$1=caml_call2(shrink_count_fun,shrink_count$0,compile_acc$1),
       compile_acc$2=match$1[2],
       shrink_count_gen=match$1[1],
       match$2=caml_call2(sizes_fun,sizes$1,compile_acc$2),
       compile_acc$3=match$2[2],
       sizes_gen=match$2[1];
      return [0,
              function(acc)
               {var
                 seed=caml_call1(seed_gen,acc),
                 test_count=caml_call1(test_count_gen,acc),
                 shrink_count=caml_call1(shrink_count_gen,acc),
                 sizes=caml_call1(sizes_gen,acc);
                return [0,seed,test_count,shrink_count,sizes]},
              compile_acc$3]}
    function create$2(seed,test_count,shrink_count,sizes)
     {return [0,seed,test_count,shrink_count,sizes]}
    function map$3(seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _cs_=caml_call1(sizes_fun,sizes$1),
       _ct_=caml_call1(shrink_count_fun,shrink_count$0),
       _cu_=caml_call1(test_count_fun,test_count$0);
      return [0,caml_call1(seed_fun,seed$0),_cu_,_ct_,_cs_]}
    function iter(seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {caml_call1(seed_fun,seed$0);
      caml_call1(test_count_fun,test_count$0);
      caml_call1(shrink_count_fun,shrink_count$0);
      return caml_call1(sizes_fun,sizes$1)}
    function fold$1(init,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {return caml_call2
              (sizes_fun,
               caml_call2
                (shrink_count_fun,
                 caml_call2
                  (test_count_fun,
                   caml_call2(seed_fun,init,seed$0),
                   test_count$0),
                 shrink_count$0),
               sizes$1)}
    function map_poly(record)
     {var
       _cp_=[0,caml_call1(record[1],sizes$1),0],
       _cq_=[0,caml_call1(record[1],shrink_count$0),_cp_],
       _cr_=[0,caml_call1(record[1],test_count$0),_cq_];
      return [0,caml_call1(record[1],seed$0),_cr_]}
    function for_all(seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _cm_=caml_call1(seed_fun,seed$0),
       _cn_=_cm_?caml_call1(test_count_fun,test_count$0):_cm_,
       _co_=_cn_?caml_call1(shrink_count_fun,shrink_count$0):_cn_;
      return _co_?caml_call1(sizes_fun,sizes$1):_co_}
    function exists(seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _cl_=caml_call1(seed_fun,seed$0),
       _cj_=_cl_ || caml_call1(test_count_fun,test_count$0),
       _ck_=_cj_ || caml_call1(shrink_count_fun,shrink_count$0);
      return _ck_?_ck_:caml_call1(sizes_fun,sizes$1)}
    function to_list(seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _cg_=[0,caml_call1(sizes_fun,sizes$1),0],
       _ch_=[0,caml_call1(shrink_count_fun,shrink_count$0),_cg_],
       _ci_=[0,caml_call1(test_count_fun,test_count$0),_ch_];
      return [0,caml_call1(seed_fun,seed$0),_ci_]}
    function iter$0(record,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {caml_call3(seed_fun,seed$0,record,record[1]);
      caml_call3(test_count_fun,test_count$0,record,record[2]);
      caml_call3(shrink_count_fun,shrink_count$0,record,record[3]);
      return caml_call3(sizes_fun,sizes$1,record,record[4])}
    function fold$2
     (record,init,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var _cd_=record[4],_ce_=record[3],_cf_=record[2];
      return caml_call4
              (sizes_fun,
               caml_call4
                (shrink_count_fun,
                 caml_call4
                  (test_count_fun,
                   caml_call4(seed_fun,init,seed$0,record,record[1]),
                   test_count$0,
                   record,
                   _cf_),
                 shrink_count$0,
                 record,
                 _ce_),
               sizes$1,
               record,
               _cd_)}
    function for_all$0
     (record,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _ca_=caml_call3(seed_fun,seed$0,record,record[1]),
       _cb_=_ca_?caml_call3(test_count_fun,test_count$0,record,record[2]):_ca_,
       _cc_=
        _cb_?caml_call3(shrink_count_fun,shrink_count$0,record,record[3]):_cb_;
      return _cc_?caml_call3(sizes_fun,sizes$1,record,record[4]):_cc_}
    function exists$0
     (record,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _b$_=caml_call3(seed_fun,seed$0,record,record[1]),
       _b9_=_b$_ || caml_call3(test_count_fun,test_count$0,record,record[2]),
       _b__=
        _b9_
        ||
        caml_call3(shrink_count_fun,shrink_count$0,record,record[3]);
      return _b__?_b__:caml_call3(sizes_fun,sizes$1,record,record[4])}
    function to_list$0
     (record,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _b6_=[0,caml_call3(sizes_fun,sizes$1,record,record[4]),0],
       _b7_=
        [0,caml_call3(shrink_count_fun,shrink_count$0,record,record[3]),_b6_],
       _b8_=[0,caml_call3(test_count_fun,test_count$0,record,record[2]),_b7_];
      return [0,caml_call3(seed_fun,seed$0,record,record[1]),_b8_]}
    function map$4(record,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _b3_=caml_call3(sizes_fun,sizes$1,record,record[4]),
       _b4_=caml_call3(shrink_count_fun,shrink_count$0,record,record[3]),
       _b5_=caml_call3(test_count_fun,test_count$0,record,record[2]);
      return [0,caml_call3(seed_fun,seed$0,record,record[1]),_b5_,_b4_,_b3_]}
    function set_all_mutable_fields(record)
     {caml_call1(Base_Field[1][1],record);return 0}
    var
     Direct=
      [0,
       iter$0,
       fold$2,
       for_all$0,
       exists$0,
       to_list$0,
       map$4,
       set_all_mutable_fields];
    function sexp_of_t$7(param)
     {var
       sizes_010=param[4],
       shrink_count_008=param[3],
       test_count_006=param[2],
       seed_004=param[1],
       _b2_=Base[119],
       match=caml_call2(Base_Sequence[88],sizes_010,100),
       suffix=match[2],
       prefix=match[1],
       prefix$0=caml_call2(Base_List[76],prefix,_b2_),
       match$0=caml_call1(Base_Sequence[6],suffix),
       bnds_003=0,
       suffix$0=match$0?0:[0,caml_call1(Sexplib0_Sexp_conv[7],cst),0],
       arg_011=[1,caml_call2(Base[178],prefix$0,suffix$0)],
       bnds_003$0=[0,[1,[0,_a4_,[0,arg_011,0]]],bnds_003],
       arg_009=caml_call1(Base[119],shrink_count_008),
       bnds_003$1=[0,[1,[0,_a5_,[0,arg_009,0]]],bnds_003$0],
       arg_007=caml_call1(Base[119],test_count_006),
       bnds_003$2=[0,[1,[0,_a6_,[0,arg_007,0]]],bnds_003$1],
       arg_005=caml_call1(Seed[1],seed_004),
       bnds_003$3=[0,[1,[0,_a7_,[0,arg_005,0]]],bnds_003$2];
      return [1,bnds_003$3]}
    var
     _a__=caml_call5(Base_List[121],0,_a9_,_a8_,0,30),
     default_config=[0,_a$_,10000,10000,caml_call1(Base_Sequence[97],_a__)],
     lazy_nondeterministic_state=
      [246,function(_b1_){return caml_call2(Base_Random[18][3],0,0)}];
    function with_sample(f,opt,_bX_,generator)
     {if(opt)var sth=opt[1],config=sth;else var config=default_config;
      if(_bX_)var sth$0=_bX_[1],examples=sth$0;else var examples=0;
      var match=config[1];
      if(match)
       var
        string=match[1],
        _bP_=runtime.Base_hash_string(string),
        random=caml_call1(Splittable_random[1][2],_bP_);
      else
       var
        _bQ_=caml_obj_tag(lazy_nondeterministic_state),
        _bR_=
         250 === _bQ_
          ?lazy_nondeterministic_state[1]
          :246 === _bQ_
            ?caml_call1(CamlinternalLazy[2],lazy_nondeterministic_state)
            :lazy_nondeterministic_state,
        random=caml_call1(Splittable_random[1][1],_bR_);
      function _bS_(param)
       {var
         number_of_size_values=param[2],
         sizes=param[1],
         match=config[2] <= number_of_size_values?1:0;
        if(match)return 0;
        var match$0=caml_call1(Base_Sequence[39],sizes);
        if(match$0)
         {var match$1=match$0[1],remaining_sizes=match$1[2],size=match$1[1];
          return [0,
                  [0,size,[0,remaining_sizes,number_of_size_values + 1 | 0]]]}
        var
         _bY_=
          [0,[1,[0,_ba_,[0,caml_call1(Base[119],number_of_size_values),0]]],0],
         _bZ_=[0,[1,[0,_bb_,[0,caml_call1(Base[119],config[2]),0]]],_bY_],
         _b0_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Base_quickcheck_Test_run_i),
            _bZ_]];
        return caml_call1(Base[202],_b0_)}
      var
       _bT_=caml_call2(Base_Sequence[42],[0,config[4],0],_bS_),
       _bU_=Base_Sequence[32],
       _bV_=
        caml_call2
         (_bU_,_bT_,function(size){return generate(generator,size,random)}),
       _bW_=caml_call1(Base_Sequence[104],examples),
       sequence=caml_call2(Base_Sequence[63],_bW_,_bV_);
      return caml_call1(f,sequence)}
    function result$1(f,opt,_bK_,m)
     {if(opt)var sth=opt[1],config=sth;else var config=default_config;
      if(_bK_)var sth$0=_bK_[1],examples=sth$0;else var examples=0;
      var _bL_=m[2],_bM_=[0,examples],_bN_=[0,config];
      return with_sample
              (function(sequence)
                {function _bO_(param,input)
                  {var match=caml_call1(f,input);
                   if(0 === match[0])return _bc_;
                   var error=match[1];
                   return [1,[0,input,error]]}
                 var match$2=caml_call3(Base_Sequence[9],sequence,0,_bO_);
                 if(0 === match$2[0])return _bd_;
                 var
                  match$3=match$2[1],
                  error$1=match$3[2],
                  input$0=match$3[1],
                  shrinker=m[3],
                  shrink_count$1=config[3],
                  alternates$2=caml_call1(shrinker,input$0),
                  shrink_count=shrink_count$1,
                  alternates=alternates$2,
                  input=input$0,
                  error=error$1;
                 for(;;)
                  {if(0 !== shrink_count)
                    {var
                      shrink_count$0=shrink_count - 1 | 0,
                      match=caml_call1(Base_Sequence[39],alternates);
                     if(match)
                      {var
                        match$0=match[1],
                        alternates$0=match$0[2],
                        alternate=match$0[1],
                        match$1=caml_call1(f,alternate);
                       if(0 === match$1[0])
                        {var shrink_count=shrink_count$0,alternates=alternates$0;
                         continue}
                       var
                        error$0=match$1[1],
                        alternates$1=caml_call1(shrinker,alternate),
                        shrink_count=shrink_count$0,
                        alternates=alternates$1,
                        input=alternate,
                        error=error$0;
                       continue}}
                   return [1,[0,input,error]]}},
               _bN_,
               _bM_,
               _bL_)}
    function run(f,config,examples,M)
     {function f$0(x)
       {function _bI_(param){return caml_call1(f,x)}
        var _bJ_=[0,caml_call1(Base_Backtrace[6][1],0)];
        return caml_call2(Base_Or_error[29],_bJ_,_bI_)}
      var match=result$1(f$0,config,examples,M);
      if(0 === match[0])return _be_;
      var
       match$0=match[1],
       error=match$0[2],
       input=match$0[1],
       _bF_=[0,[1,[0,_bf_,[0,caml_call1(Base_Error[6],error),0]]],0],
       _bG_=[0,[1,[0,_bg_,[0,caml_call1(M[1],input),0]]],_bF_],
       _bH_=
        [1,
         [0,
          caml_call1(Sexplib0_Sexp_conv[7],cst_Base_quickcheck_Test_run_t),
          _bG_]];
      return caml_call1(Base_Or_error[35],_bH_)}
    function with_sample_exn(f,config,examples,generator)
     {function f$0(x)
       {function _bE_(param){return caml_call1(f,x)}
        return caml_call2(Base_Or_error[28],0,_bE_)}
      var _bD_=with_sample(f$0,config,examples,generator);
      return caml_call1(Base_Or_error[31],_bD_)}
    function run_exn(f,config,examples,testable)
     {function f$0(x)
       {function _bB_(param){return caml_call1(f,x)}
        var _bC_=[0,caml_call1(Base_Backtrace[6][1],0)];
        return caml_call2(Base_Or_error[28],_bC_,_bB_)}
      var _bA_=run(f$0,config,examples,testable);
      return caml_call1(Base_Or_error[31],_bA_)}
    var
     Base_quickcheck_Test=
      [0,
       [0,
        Seed,
        sizes$0,
        shrink_count,
        test_count,
        seed,
        [0,
         names,
         sizes$1,
         shrink_count$0,
         test_count$0,
         seed$0,
         fold$1,
         make_creator,
         create$2,
         map$3,
         iter,
         for_all,
         exists,
         to_list,
         map_poly,
         Direct],
        sexp_of_t$7],
       default_config,
       run,
       run_exn,
       result$1,
       with_sample,
       with_sample_exn];
    caml_register_global(119,Base_quickcheck_Test,"Base_quickcheck__Test");
    function unmap(t,f)
     {return function(x,size,hash)
       {return observe(t,caml_call1(f,x),size,hash)}}
    function of_hash_fold(f)
     {return function(x,param,hash){return caml_call2(f,hash,x)}}
    function of_lazy$1(lazy_t)
     {return function(x,size,hash)
       {var
         _by_=caml_obj_tag(lazy_t),
         _bz_=
          250 === _by_
           ?lazy_t[1]
           :246 === _by_?caml_call1(CamlinternalLazy[2],lazy_t):lazy_t;
        return observe(_bz_,x,size,hash)}}
    function fixed_point$1(wrap)
     {var lazy_t=[];
      caml_update_dummy
       (lazy_t,
        [246,function(_bx_){return caml_call1(wrap,of_lazy$1(lazy_t))}]);
      return of_lazy$1(lazy_t)}
    var
     quickcheck_observer_bool=of_hash_fold(Base_Bool[3]),
     quickcheck_observer_char=of_hash_fold(Base_Char[3]),
     quickcheck_observer_int=of_hash_fold(Base_Int[6]),
     quickcheck_observer_int32=of_hash_fold(Base_Int32[6]),
     int63$0=of_hash_fold(Base_Int63[6]),
     quickcheck_observer_int64=of_hash_fold(Base_Int64[6]),
     quickcheck_observer_nativeint=of_hash_fold(Base_Nativeint[6]),
     quickcheck_observer_float=of_hash_fold(Base_Float[4]),
     quickcheck_observer_string=of_hash_fold(Base_String[26]),
     sexp$1=of_hash_fold(Base[84][1]),
     bigstring$0=of_hash_fold(caml_call1(_b_[6],Base[101])),
     float32_vec$0=of_hash_fold(caml_call1(_b_[6],Base[109])),
     float64_vec$1=of_hash_fold(caml_call1(_b_[6],Base[109])),
     float32_mat$0=of_hash_fold(caml_call1(_a_[6],Base[109])),
     float64_mat$1=of_hash_fold(caml_call1(_a_[6],Base[109])),
     quickcheck_observer_bytes=
      unmap(quickcheck_observer_string,Base_Bytes[26]);
    function either$1(fst_t,snd_t)
     {return function(either,size,hash)
       {if(0 === either[0])
         {var fst=either[1];
          return observe(fst_t,fst,size,caml_call2(Base[116],hash,1))}
        var snd=either[1];
        return observe(snd_t,snd,size,caml_call2(Base[116],hash,2))}}
    function result$2(ok_t,err_t)
     {function _bw_(param)
       {if(0 === param[0]){var ok=param[1];return [0,ok]}
        var err=param[1];
        return [1,err]}
      return unmap(either$1(ok_t,err_t),_bw_)}
    function both$1(fst_t,snd_t)
     {return function(param,size,hash)
       {var
         snd=param[2],
         fst=param[1],
         hash$0=observe(fst_t,fst,size,hash),
         hash$1=observe(snd_t,snd,size,hash$0);
        return hash$1}}
    function quickcheck_observer_option(value_t)
     {function _bv_(param)
       {if(param){var value=param[1];return [1,value]}return _bh_}
      return unmap(either$1(quickcheck_observer_unit,value_t),_bv_)}
    function quickcheck_observer_list(elt_t)
     {return function(list,size,hash)
       {var
         _bs_=caml_call1(Base_Hash[9],hash),
         random=caml_call1(Splittable_random[1][2],_bs_),
         length=caml_call1(Base_List[7],list),
         sizes$0=generate(sizes([0,length],[0,length],0),size,random);
        function _bt_(hash,elt,size)
         {return observe(elt_t,elt,size,caml_call2(Base[116],hash,1))}
        var _bu_=caml_call2(Base[116],hash,0);
        return caml_call4(Base_List[46],list,sizes$0,_bu_,_bt_)}}
    function quickcheck_observer_array(t)
     {var _br_=Base_Array[19];return unmap(quickcheck_observer_list(t),_br_)}
    function quickcheck_observer_ref(t)
     {return unmap(t,function(_bq_){return _bq_[1]})}
    function quickcheck_observer_lazy_t(t)
     {return unmap
              (t,
               function(_bo_)
                {var _bp_=caml_obj_tag(_bo_);
                 return 250 === _bp_
                         ?_bo_[1]
                         :246 === _bp_?caml_call1(CamlinternalLazy[2],_bo_):_bo_})}
    function fn$0(dom,rng)
     {return function(f,size,hash)
       {var
         _bm_=caml_call1(Base_Hash[9],hash),
         random=caml_call1(Splittable_random[1][2],_bm_),
         sizes$0=generate(sizes(0,0,0),size * 2 | 0,random);
        function _bn_(hash,size)
         {var x=generate(dom,size,random);
          return observe(rng,caml_call1(f,x),size,hash)}
        return caml_call3(Base_List[10],sizes$0,hash,_bn_)}}
    function map_tree(key_obs,data_obs)
     {var arg=Base_Map[104][3][66];
      function _bl_(eta){return caml_call2(arg,0,eta)}
      return unmap(quickcheck_observer_list(both$1(key_obs,data_obs)),_bl_)}
    function set_tree(elt_obs)
     {var _bk_=Base_Set[74][3][15];
      return unmap(quickcheck_observer_list(elt_obs),_bk_)}
    function map_t$0(key_obs,data_obs)
     {var _bj_=Base_Map[104][68];
      return unmap(map_tree(key_obs,data_obs),_bj_)}
    function set_t$0(elt_obs)
     {var _bi_=Base_Set[74][47];return unmap(set_tree(elt_obs),_bi_)}
    var
     Base_quickcheck_Observer=
      [0,
       quickcheck_observer_unit,
       quickcheck_observer_unit,
       quickcheck_observer_bool,
       quickcheck_observer_char,
       quickcheck_observer_string,
       quickcheck_observer_bytes,
       quickcheck_observer_int,
       quickcheck_observer_int32,
       int63$0,
       quickcheck_observer_int64,
       quickcheck_observer_nativeint,
       quickcheck_observer_float,
       sexp$1,
       quickcheck_observer_option,
       quickcheck_observer_list,
       quickcheck_observer_array,
       quickcheck_observer_ref,
       quickcheck_observer_lazy_t,
       both$1,
       either$1,
       result$2,
       bigstring$0,
       float32_vec$0,
       float64_vec$1,
       float32_mat$0,
       float64_mat$1,
       fn$0,
       map_t$0,
       set_t$0,
       map_tree,
       set_tree,
       of_hash_fold,
       unmap,
       fixed_point$1,
       of_lazy$1,
       create,
       observe];
    caml_register_global
     (121,Base_quickcheck_Observer,"Base_quickcheck__Observer");
    var
     include$1=
      [0,
       quickcheck_generator_unit,
       quickcheck_generator_bool,
       quickcheck_generator_char,
       quickcheck_generator_string,
       quickcheck_generator_bytes,
       quickcheck_generator_int,
       quickcheck_generator_int32,
       quickcheck_generator_int64,
       quickcheck_generator_nativeint,
       quickcheck_generator_float,
       quickcheck_observer_unit,
       quickcheck_observer_bool,
       quickcheck_observer_char,
       quickcheck_observer_string,
       quickcheck_observer_bytes,
       quickcheck_observer_int,
       quickcheck_observer_int32,
       quickcheck_observer_int64,
       quickcheck_observer_nativeint,
       quickcheck_observer_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_string,
       quickcheck_shrinker_bytes,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_generator_option,
       quickcheck_generator_list,
       quickcheck_generator_array,
       quickcheck_generator_ref,
       quickcheck_generator_lazy_t,
       quickcheck_observer_option,
       quickcheck_observer_list,
       quickcheck_observer_array,
       quickcheck_observer_ref,
       quickcheck_observer_lazy_t,
       quickcheck_shrinker_option,
       quickcheck_shrinker_list,
       quickcheck_shrinker_array,
       quickcheck_shrinker_ref,
       quickcheck_shrinker_lazy_t];
    caml_register_global(122,include$1,"Base_quickcheck__Export");
    var
     Private=[0],
     Base_quickcheck$0=
      [0,
       quickcheck_generator_unit,
       quickcheck_generator_bool,
       quickcheck_generator_char,
       quickcheck_generator_string,
       quickcheck_generator_bytes,
       quickcheck_generator_int,
       quickcheck_generator_int32,
       quickcheck_generator_int64,
       quickcheck_generator_nativeint,
       quickcheck_generator_float,
       quickcheck_observer_unit,
       quickcheck_observer_bool,
       quickcheck_observer_char,
       quickcheck_observer_string,
       quickcheck_observer_bytes,
       quickcheck_observer_int,
       quickcheck_observer_int32,
       quickcheck_observer_int64,
       quickcheck_observer_nativeint,
       quickcheck_observer_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_string,
       quickcheck_shrinker_bytes,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_generator_option,
       quickcheck_generator_list,
       quickcheck_generator_array,
       quickcheck_generator_ref,
       quickcheck_generator_lazy_t,
       quickcheck_observer_option,
       quickcheck_observer_list,
       quickcheck_observer_array,
       quickcheck_observer_ref,
       quickcheck_observer_lazy_t,
       quickcheck_shrinker_option,
       quickcheck_shrinker_list,
       quickcheck_shrinker_array,
       quickcheck_shrinker_ref,
       quickcheck_shrinker_lazy_t,
       Private];
    caml_register_global(123,Base_quickcheck$0,"Base_quickcheck");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiYXNlX3F1aWNrY2hlY2suY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbInN5bWJvbCQzNiIsImxub3QkMiIsImFicyQyIiwiemVybyQyIiwic3ltYm9sJDM3Iiwic3ltYm9sJDM4Iiwic3ltYm9sJDM5Il0sInNvdXJjZXMiOlsiL2hvbWUvYW5uYXEvLm9wYW0vZGVmYXVsdC9saWIvb2NhbWwvaW50NjQubWxpIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0EwQkVHOzs7Ozs7U0FiQUg7OztTQWVBSztTQURBRDs7O1NBRUFFOzs7O1NBTkFMOzs7Ozs7OztTQUNBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0siLCJzb3VyY2VzQ29udGVudCI6WyIoKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9DYW1sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICBYYXZpZXIgTGVyb3ksIHByb2pldCBDcmlzdGFsLCBJTlJJQSBSb2NxdWVuY291cnQgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgIENvcHlyaWdodCAxOTk2IEluc3RpdHV0IE5hdGlvbmFsIGRlIFJlY2hlcmNoZSBlbiBJbmZvcm1hdGlxdWUgZXQgICAgICopXG4oKiAgICAgZW4gQXV0b21hdGlxdWUuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgIEFsbCByaWdodHMgcmVzZXJ2ZWQuICBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mICAgICopXG4oKiAgIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAyLjEsIHdpdGggdGhlICAgICAgICAgICopXG4oKiAgIHNwZWNpYWwgZXhjZXB0aW9uIG9uIGxpbmtpbmcgZGVzY3JpYmVkIGluIHRoZSBmaWxlIExJQ0VOU0UuICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiopXG5cbigqKiA2NC1iaXQgaW50ZWdlcnMuXG5cbiAgIFRoaXMgbW9kdWxlIHByb3ZpZGVzIG9wZXJhdGlvbnMgb24gdGhlIHR5cGUgW2ludDY0XSBvZlxuICAgc2lnbmVkIDY0LWJpdCBpbnRlZ2Vycy4gIFVubGlrZSB0aGUgYnVpbHQtaW4gW2ludF0gdHlwZSxcbiAgIHRoZSB0eXBlIFtpbnQ2NF0gaXMgZ3VhcmFudGVlZCB0byBiZSBleGFjdGx5IDY0LWJpdCB3aWRlIG9uIGFsbFxuICAgcGxhdGZvcm1zLiAgQWxsIGFyaXRobWV0aWMgb3BlcmF0aW9ucyBvdmVyIFtpbnQ2NF0gYXJlIHRha2VuXG4gICBtb2R1bG8gMnteNjR9XG5cbiAgIFBlcmZvcm1hbmNlIG5vdGljZTogdmFsdWVzIG9mIHR5cGUgW2ludDY0XSBvY2N1cHkgbW9yZSBtZW1vcnlcbiAgIHNwYWNlIHRoYW4gdmFsdWVzIG9mIHR5cGUgW2ludF0sIGFuZCBhcml0aG1ldGljIG9wZXJhdGlvbnMgb25cbiAgIFtpbnQ2NF0gYXJlIGdlbmVyYWxseSBzbG93ZXIgdGhhbiB0aG9zZSBvbiBbaW50XS4gIFVzZSBbaW50NjRdXG4gICBvbmx5IHdoZW4gdGhlIGFwcGxpY2F0aW9uIHJlcXVpcmVzIGV4YWN0IDY0LWJpdCBhcml0aG1ldGljLlxuXG4gICAgTGl0ZXJhbHMgZm9yIDY0LWJpdCBpbnRlZ2VycyBhcmUgc3VmZml4ZWQgYnkgTDpcbiAgICB7W1xuICAgICAgbGV0IHplcm86IGludDY0ID0gMExcbiAgICAgIGxldCBvbmU6IGludDY0ID0gMUxcbiAgICAgIGxldCBtX29uZTogaW50NjQgPSAtMUxcbiAgICBdfVxuKilcblxudmFsIHplcm8gOiBpbnQ2NFxuKCoqIFRoZSA2NC1iaXQgaW50ZWdlciAwLiAqKVxuXG52YWwgb25lIDogaW50NjRcbigqKiBUaGUgNjQtYml0IGludGVnZXIgMS4gKilcblxudmFsIG1pbnVzX29uZSA6IGludDY0XG4oKiogVGhlIDY0LWJpdCBpbnRlZ2VyIC0xLiAqKVxuXG5leHRlcm5hbCBuZWcgOiBpbnQ2NCAtPiBpbnQ2NCA9IFwiJWludDY0X25lZ1wiXG4oKiogVW5hcnkgbmVnYXRpb24uICopXG5cbmV4dGVybmFsIGFkZCA6IGludDY0IC0+IGludDY0IC0+IGludDY0ID0gXCIlaW50NjRfYWRkXCJcbigqKiBBZGRpdGlvbi4gKilcblxuZXh0ZXJuYWwgc3ViIDogaW50NjQgLT4gaW50NjQgLT4gaW50NjQgPSBcIiVpbnQ2NF9zdWJcIlxuKCoqIFN1YnRyYWN0aW9uLiAqKVxuXG5leHRlcm5hbCBtdWwgOiBpbnQ2NCAtPiBpbnQ2NCAtPiBpbnQ2NCA9IFwiJWludDY0X211bFwiXG4oKiogTXVsdGlwbGljYXRpb24uICopXG5cbmV4dGVybmFsIGRpdiA6IGludDY0IC0+IGludDY0IC0+IGludDY0ID0gXCIlaW50NjRfZGl2XCJcbigqKiBJbnRlZ2VyIGRpdmlzaW9uLlxuICAgQHJhaXNlIERpdmlzaW9uX2J5X3plcm8gaWYgdGhlIHNlY29uZFxuICAgYXJndW1lbnQgaXMgemVyby4gIFRoaXMgZGl2aXNpb24gcm91bmRzIHRoZSByZWFsIHF1b3RpZW50IG9mXG4gICBpdHMgYXJndW1lbnRzIHRvd2FyZHMgemVybywgYXMgc3BlY2lmaWVkIGZvciB7IVN0ZGxpYi4oLyl9LiAqKVxuXG52YWwgdW5zaWduZWRfZGl2IDogaW50NjQgLT4gaW50NjQgLT4gaW50NjRcbigqKiBTYW1lIGFzIHshZGl2fSwgZXhjZXB0IHRoYXQgYXJndW1lbnRzIGFuZCByZXN1bHQgYXJlIGludGVycHJldGVkIGFzIHtlXG4gICAgdW5zaWduZWR9IDY0LWJpdCBpbnRlZ2Vycy5cblxuICAgIEBzaW5jZSA0LjA4LjAgKilcblxuZXh0ZXJuYWwgcmVtIDogaW50NjQgLT4gaW50NjQgLT4gaW50NjQgPSBcIiVpbnQ2NF9tb2RcIlxuKCoqIEludGVnZXIgcmVtYWluZGVyLiAgSWYgW3ldIGlzIG5vdCB6ZXJvLCB0aGUgcmVzdWx0XG4gICBvZiBbSW50NjQucmVtIHggeV0gc2F0aXNmaWVzIHRoZSBmb2xsb3dpbmcgcHJvcGVydHk6XG4gICBbeCA9IEludDY0LmFkZCAoSW50NjQubXVsIChJbnQ2NC5kaXYgeCB5KSB5KSAoSW50NjQucmVtIHggeSldLlxuICAgSWYgW3kgPSAwXSwgW0ludDY0LnJlbSB4IHldIHJhaXNlcyBbRGl2aXNpb25fYnlfemVyb10uICopXG5cbnZhbCB1bnNpZ25lZF9yZW0gOiBpbnQ2NCAtPiBpbnQ2NCAtPiBpbnQ2NFxuKCoqIFNhbWUgYXMgeyFyZW19LCBleGNlcHQgdGhhdCBhcmd1bWVudHMgYW5kIHJlc3VsdCBhcmUgaW50ZXJwcmV0ZWQgYXMge2VcbiAgICB1bnNpZ25lZH0gNjQtYml0IGludGVnZXJzLlxuXG4gICAgQHNpbmNlIDQuMDguMCAqKVxuXG52YWwgc3VjYyA6IGludDY0IC0+IGludDY0XG4oKiogU3VjY2Vzc29yLiAgW0ludDY0LnN1Y2MgeF0gaXMgW0ludDY0LmFkZCB4IEludDY0Lm9uZV0uICopXG5cbnZhbCBwcmVkIDogaW50NjQgLT4gaW50NjRcbigqKiBQcmVkZWNlc3Nvci4gIFtJbnQ2NC5wcmVkIHhdIGlzIFtJbnQ2NC5zdWIgeCBJbnQ2NC5vbmVdLiAqKVxuXG52YWwgYWJzIDogaW50NjQgLT4gaW50NjRcbigqKiBSZXR1cm4gdGhlIGFic29sdXRlIHZhbHVlIG9mIGl0cyBhcmd1bWVudC4gKilcblxudmFsIG1heF9pbnQgOiBpbnQ2NFxuKCoqIFRoZSBncmVhdGVzdCByZXByZXNlbnRhYmxlIDY0LWJpdCBpbnRlZ2VyLCAye142M30gLSAxLiAqKVxuXG52YWwgbWluX2ludCA6IGludDY0XG4oKiogVGhlIHNtYWxsZXN0IHJlcHJlc2VudGFibGUgNjQtYml0IGludGVnZXIsIC0ye142M30uICopXG5cbmV4dGVybmFsIGxvZ2FuZCA6IGludDY0IC0+IGludDY0IC0+IGludDY0ID0gXCIlaW50NjRfYW5kXCJcbigqKiBCaXR3aXNlIGxvZ2ljYWwgYW5kLiAqKVxuXG5leHRlcm5hbCBsb2dvciA6IGludDY0IC0+IGludDY0IC0+IGludDY0ID0gXCIlaW50NjRfb3JcIlxuKCoqIEJpdHdpc2UgbG9naWNhbCBvci4gKilcblxuZXh0ZXJuYWwgbG9neG9yIDogaW50NjQgLT4gaW50NjQgLT4gaW50NjQgPSBcIiVpbnQ2NF94b3JcIlxuKCoqIEJpdHdpc2UgbG9naWNhbCBleGNsdXNpdmUgb3IuICopXG5cbnZhbCBsb2dub3QgOiBpbnQ2NCAtPiBpbnQ2NFxuKCoqIEJpdHdpc2UgbG9naWNhbCBuZWdhdGlvbi4gKilcblxuZXh0ZXJuYWwgc2hpZnRfbGVmdCA6IGludDY0IC0+IGludCAtPiBpbnQ2NCA9IFwiJWludDY0X2xzbFwiXG4oKiogW0ludDY0LnNoaWZ0X2xlZnQgeCB5XSBzaGlmdHMgW3hdIHRvIHRoZSBsZWZ0IGJ5IFt5XSBiaXRzLlxuICAgVGhlIHJlc3VsdCBpcyB1bnNwZWNpZmllZCBpZiBbeSA8IDBdIG9yIFt5ID49IDY0XS4gKilcblxuZXh0ZXJuYWwgc2hpZnRfcmlnaHQgOiBpbnQ2NCAtPiBpbnQgLT4gaW50NjQgPSBcIiVpbnQ2NF9hc3JcIlxuKCoqIFtJbnQ2NC5zaGlmdF9yaWdodCB4IHldIHNoaWZ0cyBbeF0gdG8gdGhlIHJpZ2h0IGJ5IFt5XSBiaXRzLlxuICAgVGhpcyBpcyBhbiBhcml0aG1ldGljIHNoaWZ0OiB0aGUgc2lnbiBiaXQgb2YgW3hdIGlzIHJlcGxpY2F0ZWRcbiAgIGFuZCBpbnNlcnRlZCBpbiB0aGUgdmFjYXRlZCBiaXRzLlxuICAgVGhlIHJlc3VsdCBpcyB1bnNwZWNpZmllZCBpZiBbeSA8IDBdIG9yIFt5ID49IDY0XS4gKilcblxuZXh0ZXJuYWwgc2hpZnRfcmlnaHRfbG9naWNhbCA6IGludDY0IC0+IGludCAtPiBpbnQ2NCA9IFwiJWludDY0X2xzclwiXG4oKiogW0ludDY0LnNoaWZ0X3JpZ2h0X2xvZ2ljYWwgeCB5XSBzaGlmdHMgW3hdIHRvIHRoZSByaWdodCBieSBbeV0gYml0cy5cbiAgIFRoaXMgaXMgYSBsb2dpY2FsIHNoaWZ0OiB6ZXJvZXMgYXJlIGluc2VydGVkIGluIHRoZSB2YWNhdGVkIGJpdHNcbiAgIHJlZ2FyZGxlc3Mgb2YgdGhlIHNpZ24gb2YgW3hdLlxuICAgVGhlIHJlc3VsdCBpcyB1bnNwZWNpZmllZCBpZiBbeSA8IDBdIG9yIFt5ID49IDY0XS4gKilcblxuZXh0ZXJuYWwgb2ZfaW50IDogaW50IC0+IGludDY0ID0gXCIlaW50NjRfb2ZfaW50XCJcbigqKiBDb252ZXJ0IHRoZSBnaXZlbiBpbnRlZ2VyICh0eXBlIFtpbnRdKSB0byBhIDY0LWJpdCBpbnRlZ2VyXG4gICAgKHR5cGUgW2ludDY0XSkuICopXG5cbmV4dGVybmFsIHRvX2ludCA6IGludDY0IC0+IGludCA9IFwiJWludDY0X3RvX2ludFwiXG4oKiogQ29udmVydCB0aGUgZ2l2ZW4gNjQtYml0IGludGVnZXIgKHR5cGUgW2ludDY0XSkgdG8gYW5cbiAgIGludGVnZXIgKHR5cGUgW2ludF0pLiAgT24gNjQtYml0IHBsYXRmb3JtcywgdGhlIDY0LWJpdCBpbnRlZ2VyXG4gICBpcyB0YWtlbiBtb2R1bG8gMnteNjN9LCBpLmUuIHRoZSBoaWdoLW9yZGVyIGJpdCBpcyBsb3N0XG4gICBkdXJpbmcgdGhlIGNvbnZlcnNpb24uICBPbiAzMi1iaXQgcGxhdGZvcm1zLCB0aGUgNjQtYml0IGludGVnZXJcbiAgIGlzIHRha2VuIG1vZHVsbyAye14zMX0sIGkuZS4gdGhlIHRvcCAzMyBiaXRzIGFyZSBsb3N0XG4gICBkdXJpbmcgdGhlIGNvbnZlcnNpb24uICopXG5cbnZhbCB1bnNpZ25lZF90b19pbnQgOiBpbnQ2NCAtPiBpbnQgb3B0aW9uXG4oKiogU2FtZSBhcyB7IXRvX2ludH0sIGJ1dCBpbnRlcnByZXRzIHRoZSBhcmd1bWVudCBhcyBhbiB7ZSB1bnNpZ25lZH0gaW50ZWdlci5cbiAgICBSZXR1cm5zIFtOb25lXSBpZiB0aGUgdW5zaWduZWQgdmFsdWUgb2YgdGhlIGFyZ3VtZW50IGNhbm5vdCBmaXQgaW50byBhblxuICAgIFtpbnRdLlxuXG4gICAgQHNpbmNlIDQuMDguMCAqKVxuXG5leHRlcm5hbCBvZl9mbG9hdCA6IGZsb2F0IC0+IGludDY0XG4gID0gXCJjYW1sX2ludDY0X29mX2Zsb2F0XCIgXCJjYW1sX2ludDY0X29mX2Zsb2F0X3VuYm94ZWRcIlxuICBbQEB1bmJveGVkXSBbQEBub2FsbG9jXVxuKCoqIENvbnZlcnQgdGhlIGdpdmVuIGZsb2F0aW5nLXBvaW50IG51bWJlciB0byBhIDY0LWJpdCBpbnRlZ2VyLFxuICAgZGlzY2FyZGluZyB0aGUgZnJhY3Rpb25hbCBwYXJ0ICh0cnVuY2F0ZSB0b3dhcmRzIDApLlxuICAgSWYgdGhlIHRydW5jYXRlZCBmbG9hdGluZy1wb2ludCBudW1iZXIgaXMgb3V0c2lkZSB0aGUgcmFuZ2VcbiAgIFxcW3shSW50NjQubWluX2ludH0sIHshSW50NjQubWF4X2ludH1cXF0sIG5vIGV4Y2VwdGlvbiBpcyByYWlzZWQsIGFuZFxuICAgYW4gdW5zcGVjaWZpZWQsIHBsYXRmb3JtLWRlcGVuZGVudCBpbnRlZ2VyIGlzIHJldHVybmVkLiAqKVxuXG5leHRlcm5hbCB0b19mbG9hdCA6IGludDY0IC0+IGZsb2F0XG4gID0gXCJjYW1sX2ludDY0X3RvX2Zsb2F0XCIgXCJjYW1sX2ludDY0X3RvX2Zsb2F0X3VuYm94ZWRcIlxuICBbQEB1bmJveGVkXSBbQEBub2FsbG9jXVxuKCoqIENvbnZlcnQgdGhlIGdpdmVuIDY0LWJpdCBpbnRlZ2VyIHRvIGEgZmxvYXRpbmctcG9pbnQgbnVtYmVyLiAqKVxuXG5cbmV4dGVybmFsIG9mX2ludDMyIDogaW50MzIgLT4gaW50NjQgPSBcIiVpbnQ2NF9vZl9pbnQzMlwiXG4oKiogQ29udmVydCB0aGUgZ2l2ZW4gMzItYml0IGludGVnZXIgKHR5cGUgW2ludDMyXSlcbiAgIHRvIGEgNjQtYml0IGludGVnZXIgKHR5cGUgW2ludDY0XSkuICopXG5cbmV4dGVybmFsIHRvX2ludDMyIDogaW50NjQgLT4gaW50MzIgPSBcIiVpbnQ2NF90b19pbnQzMlwiXG4oKiogQ29udmVydCB0aGUgZ2l2ZW4gNjQtYml0IGludGVnZXIgKHR5cGUgW2ludDY0XSkgdG8gYVxuICAgMzItYml0IGludGVnZXIgKHR5cGUgW2ludDMyXSkuIFRoZSA2NC1iaXQgaW50ZWdlclxuICAgaXMgdGFrZW4gbW9kdWxvIDJ7XjMyfSwgaS5lLiB0aGUgdG9wIDMyIGJpdHMgYXJlIGxvc3RcbiAgIGR1cmluZyB0aGUgY29udmVyc2lvbi4gICopXG5cbmV4dGVybmFsIG9mX25hdGl2ZWludCA6IG5hdGl2ZWludCAtPiBpbnQ2NCA9IFwiJWludDY0X29mX25hdGl2ZWludFwiXG4oKiogQ29udmVydCB0aGUgZ2l2ZW4gbmF0aXZlIGludGVnZXIgKHR5cGUgW25hdGl2ZWludF0pXG4gICB0byBhIDY0LWJpdCBpbnRlZ2VyICh0eXBlIFtpbnQ2NF0pLiAqKVxuXG5leHRlcm5hbCB0b19uYXRpdmVpbnQgOiBpbnQ2NCAtPiBuYXRpdmVpbnQgPSBcIiVpbnQ2NF90b19uYXRpdmVpbnRcIlxuKCoqIENvbnZlcnQgdGhlIGdpdmVuIDY0LWJpdCBpbnRlZ2VyICh0eXBlIFtpbnQ2NF0pIHRvIGFcbiAgIG5hdGl2ZSBpbnRlZ2VyLiAgT24gMzItYml0IHBsYXRmb3JtcywgdGhlIDY0LWJpdCBpbnRlZ2VyXG4gICBpcyB0YWtlbiBtb2R1bG8gMnteMzJ9LiAgT24gNjQtYml0IHBsYXRmb3JtcyxcbiAgIHRoZSBjb252ZXJzaW9uIGlzIGV4YWN0LiAqKVxuXG5leHRlcm5hbCBvZl9zdHJpbmcgOiBzdHJpbmcgLT4gaW50NjQgPSBcImNhbWxfaW50NjRfb2Zfc3RyaW5nXCJcbigqKiBDb252ZXJ0IHRoZSBnaXZlbiBzdHJpbmcgdG8gYSA2NC1iaXQgaW50ZWdlci5cbiAgIFRoZSBzdHJpbmcgaXMgcmVhZCBpbiBkZWNpbWFsIChieSBkZWZhdWx0LCBvciBpZiB0aGUgc3RyaW5nXG4gICBiZWdpbnMgd2l0aCBbMHVdKSBvciBpbiBoZXhhZGVjaW1hbCwgb2N0YWwgb3IgYmluYXJ5IGlmIHRoZVxuICAgc3RyaW5nIGJlZ2lucyB3aXRoIFsweF0sIFswb10gb3IgWzBiXSByZXNwZWN0aXZlbHkuXG5cbiAgIFRoZSBbMHVdIHByZWZpeCByZWFkcyB0aGUgaW5wdXQgYXMgYW4gdW5zaWduZWQgaW50ZWdlciBpbiB0aGUgcmFuZ2VcbiAgIFtbMCwgMipJbnQ2NC5tYXhfaW50KzFdXS4gIElmIHRoZSBpbnB1dCBleGNlZWRzIHshSW50NjQubWF4X2ludH1cbiAgIGl0IGlzIGNvbnZlcnRlZCB0byB0aGUgc2lnbmVkIGludGVnZXJcbiAgIFtJbnQ2NC5taW5faW50ICsgaW5wdXQgLSBJbnQ2NC5tYXhfaW50IC0gMV0uXG5cbiAgIFRoZSBbX10gKHVuZGVyc2NvcmUpIGNoYXJhY3RlciBjYW4gYXBwZWFyIGFueXdoZXJlIGluIHRoZSBzdHJpbmdcbiAgIGFuZCBpcyBpZ25vcmVkLlxuICAgQHJhaXNlIEZhaWx1cmUgaWYgdGhlIGdpdmVuIHN0cmluZyBpcyBub3RcbiAgIGEgdmFsaWQgcmVwcmVzZW50YXRpb24gb2YgYW4gaW50ZWdlciwgb3IgaWYgdGhlIGludGVnZXIgcmVwcmVzZW50ZWRcbiAgIGV4Y2VlZHMgdGhlIHJhbmdlIG9mIGludGVnZXJzIHJlcHJlc2VudGFibGUgaW4gdHlwZSBbaW50NjRdLiAqKVxuXG52YWwgb2Zfc3RyaW5nX29wdDogc3RyaW5nIC0+IGludDY0IG9wdGlvblxuKCoqIFNhbWUgYXMgW29mX3N0cmluZ10sIGJ1dCByZXR1cm4gW05vbmVdIGluc3RlYWQgb2YgcmFpc2luZy5cbiAgICBAc2luY2UgNC4wNSAqKVxuXG52YWwgdG9fc3RyaW5nIDogaW50NjQgLT4gc3RyaW5nXG4oKiogUmV0dXJuIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgaXRzIGFyZ3VtZW50LCBpbiBkZWNpbWFsLiAqKVxuXG5leHRlcm5hbCBiaXRzX29mX2Zsb2F0IDogZmxvYXQgLT4gaW50NjRcbiAgPSBcImNhbWxfaW50NjRfYml0c19vZl9mbG9hdFwiIFwiY2FtbF9pbnQ2NF9iaXRzX29mX2Zsb2F0X3VuYm94ZWRcIlxuICBbQEB1bmJveGVkXSBbQEBub2FsbG9jXVxuKCoqIFJldHVybiB0aGUgaW50ZXJuYWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIGZsb2F0IGFjY29yZGluZ1xuICAgdG8gdGhlIElFRUUgNzU0IGZsb2F0aW5nLXBvaW50ICdkb3VibGUgZm9ybWF0JyBiaXQgbGF5b3V0LlxuICAgQml0IDYzIG9mIHRoZSByZXN1bHQgcmVwcmVzZW50cyB0aGUgc2lnbiBvZiB0aGUgZmxvYXQ7XG4gICBiaXRzIDYyIHRvIDUyIHJlcHJlc2VudCB0aGUgKGJpYXNlZCkgZXhwb25lbnQ7IGJpdHMgNTEgdG8gMFxuICAgcmVwcmVzZW50IHRoZSBtYW50aXNzYS4gKilcblxuZXh0ZXJuYWwgZmxvYXRfb2ZfYml0cyA6IGludDY0IC0+IGZsb2F0XG4gID0gXCJjYW1sX2ludDY0X2Zsb2F0X29mX2JpdHNcIiBcImNhbWxfaW50NjRfZmxvYXRfb2ZfYml0c191bmJveGVkXCJcbiAgW0BAdW5ib3hlZF0gW0BAbm9hbGxvY11cbigqKiBSZXR1cm4gdGhlIGZsb2F0aW5nLXBvaW50IG51bWJlciB3aG9zZSBpbnRlcm5hbCByZXByZXNlbnRhdGlvbixcbiAgIGFjY29yZGluZyB0byB0aGUgSUVFRSA3NTQgZmxvYXRpbmctcG9pbnQgJ2RvdWJsZSBmb3JtYXQnIGJpdCBsYXlvdXQsXG4gICBpcyB0aGUgZ2l2ZW4gW2ludDY0XS4gKilcblxudHlwZSB0ID0gaW50NjRcbigqKiBBbiBhbGlhcyBmb3IgdGhlIHR5cGUgb2YgNjQtYml0IGludGVnZXJzLiAqKVxuXG52YWwgY29tcGFyZTogdCAtPiB0IC0+IGludFxuKCoqIFRoZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciA2NC1iaXQgaW50ZWdlcnMsIHdpdGggdGhlIHNhbWUgc3BlY2lmaWNhdGlvbiBhc1xuICAgIHshU3RkbGliLmNvbXBhcmV9LiAgQWxvbmcgd2l0aCB0aGUgdHlwZSBbdF0sIHRoaXMgZnVuY3Rpb24gW2NvbXBhcmVdXG4gICAgYWxsb3dzIHRoZSBtb2R1bGUgW0ludDY0XSB0byBiZSBwYXNzZWQgYXMgYXJndW1lbnQgdG8gdGhlIGZ1bmN0b3JzXG4gICAgeyFTZXQuTWFrZX0gYW5kIHshTWFwLk1ha2V9LiAqKVxuXG52YWwgdW5zaWduZWRfY29tcGFyZTogdCAtPiB0IC0+IGludFxuKCoqIFNhbWUgYXMgeyFjb21wYXJlfSwgZXhjZXB0IHRoYXQgYXJndW1lbnRzIGFyZSBpbnRlcnByZXRlZCBhcyB7ZSB1bnNpZ25lZH1cbiAgICA2NC1iaXQgaW50ZWdlcnMuXG5cbiAgICBAc2luY2UgNC4wOC4wICopXG5cbnZhbCBlcXVhbDogdCAtPiB0IC0+IGJvb2xcbigqKiBUaGUgZXF1YWwgZnVuY3Rpb24gZm9yIGludDY0cy5cbiAgICBAc2luY2UgNC4wMy4wICopXG5cbnZhbCBtaW46IHQgLT4gdCAtPiB0XG4oKiogUmV0dXJuIHRoZSBzbWFsbGVyIG9mIHRoZSB0d28gYXJndW1lbnRzLlxuICAgIEBzaW5jZSA0LjEzLjBcbiopXG5cbnZhbCBtYXg6IHQgLT4gdCAtPiB0XG4oKiogUmV0dXJuIHRoZSBncmVhdGVyIG9mIHRoZSB0d28gYXJndW1lbnRzLlxuICAgIEBzaW5jZSA0LjEzLjBcbiAqKVxuXG4oKiovKiopXG5cbigqKiB7MSBEZXByZWNhdGVkIGZ1bmN0aW9uc30gKilcblxuZXh0ZXJuYWwgZm9ybWF0IDogc3RyaW5nIC0+IGludDY0IC0+IHN0cmluZyA9IFwiY2FtbF9pbnQ2NF9mb3JtYXRcIlxuW0BAb2NhbWwuZGVwcmVjYXRlZCBcIlVzZSBQcmludGYuc3ByaW50ZiB3aXRoIGEgWyVMLi4uXSBmb3JtYXQgaW5zdGVhZC5cIl1cbigqKiBEbyBub3QgdXNlIHRoaXMgZGVwcmVjYXRlZCBmdW5jdGlvbi4gIEluc3RlYWQsXG4gICB1c2VkIHshUHJpbnRmLnNwcmludGZ9IHdpdGggYSBbJUwuLi5dIGZvcm1hdC4gKilcbiJdfQ==
