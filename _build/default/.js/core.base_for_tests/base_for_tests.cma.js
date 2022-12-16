(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_register_global=runtime.caml_register_global;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     Base_Blit=global_data.Base__Blit,
     Assert_failure=global_data.Assert_failure,
     Base_Binary_searchable=global_data.Base__Binary_searchable,
     Base_for_tests=[0];
    caml_register_global(1,Base_for_tests,"Base_for_tests");
    var Base_for_tests_Test_blit_intf=[0];
    caml_register_global
     (2,Base_for_tests_Test_blit_intf,"Base_for_tests__Test_blit_intf");
    var
     _a_=
      [0,
       runtime.caml_string_of_jsbytes("base_for_tests/src/test_blit.ml"),
       70,
       11];
    function Test_gen(For_tests,_G_)
     {function init(len,create,set,f)
       {var t=caml_call1(create,len),_I_=len - 1 | 0,_H_=0;
        if(! (_I_ < 0))
         {var i=_H_;
          for(;;)
           {caml_call3(set,t,i,caml_call1(f,i));
            var _J_=i + 1 | 0;
            if(_I_ !== i){var i=_J_;continue}
            break}}
        return t}
      var
       elt1=caml_call1(For_tests[1][2],1),
       elt2=caml_call1(For_tests[1][2],0);
      if(caml_call2(For_tests[1][1],elt1,elt2))throw [0,Assert_failure,_a_];
      function src_bit(i){return 0 === (i & 1)?elt1:elt2}
      function dst_bit(i){return 0 === (i & 1)?elt2:elt1}
      return [0,init,elt1,elt2,src_bit,dst_bit]}
    function Test1(Sequence,Tested)
     {var equal=runtime.caml_equal,_D_=[0,Tested[2],Tested[4]];
      function of_bool(_F_){return _F_}
      var
       Elt=[0,equal,of_bool],
       length=Sequence[1],
       create_bool=Sequence[2],
       get=Sequence[3],
       set=Sequence[4],
       overlapping_src_dst=[0,-656144216,function(_E_){return _E_}],
       Dst=[0,length,create_bool,get,set,overlapping_src_dst];
      return Test_gen([0,Elt,Sequence,Dst],_D_)}
    function Test1_generic(Elt,Sequence,Tested)
     {var
       length=Sequence[1],
       create_bool=Sequence[2],
       get=Sequence[3],
       set=Sequence[4],
       _B_=[0,Tested[2],Tested[4]],
       overlapping_src_dst=[0,-656144216,function(_C_){return _C_}],
       Dst=[0,length,create_bool,get,set,overlapping_src_dst];
      return Test_gen([0,Elt,Sequence,Dst],_B_)}
    function Elt_to_elt1(Elt)
     {var equal=Elt[1],of_bool=Elt[2];return [0,equal,of_bool]}
    function Test(_y_,Sequence,Tested)
     {var
       _z_=[0,Tested[2],Tested[4]],
       Elt=Elt_to_elt1(_y_),
       length=Sequence[2],
       get=Sequence[3],
       set=Sequence[4],
       create_bool=Sequence[1],
       overlapping_src_dst=[0,-656144216,function(_A_){return _A_}];
      return Test_gen
              ([0,
                Elt,
                [0,length,create_bool,get,set],
                [0,length,create_bool,get,set,overlapping_src_dst]],
               _z_)}
    function Test_distinct(_w_,Src,Dst,Tested)
     {var
       _x_=[0,Tested[2],Tested[4]],
       Elt=Elt_to_elt1(_w_),
       length=Src[2],
       get=Src[3],
       set=Src[4],
       create_bool=Src[1],
       length$0=Dst[2],
       get$0=Dst[3],
       set$0=Dst[4],
       create_bool$0=Dst[1];
      return Test_gen
              ([0,
                Elt,
                [0,length,create_bool,get,set],
                [0,length$0,create_bool$0,get$0,set$0,1021207688]],
               _x_)}
    function _b_(Elt,Sequence)
     {var B=caml_call1(Base_Blit[5],[0,Sequence[1],Sequence[3],Sequence[2]]);
      Test1_generic(Elt,[0,Sequence[3],Sequence[4],Sequence[5],Sequence[6]],B);
      var blit=B[1],blito=B[2],unsafe_blit=B[3],sub=B[4],subo=B[5];
      return [0,blit,blito,unsafe_blit,sub,subo]}
    function _c_(Sequence)
     {var B=caml_call1(Base_Blit[4],[0,Sequence[1],Sequence[3],Sequence[2]]);
      Test1([0,Sequence[3],Sequence[4],Sequence[5],Sequence[6]],B);
      var blit=B[1],blito=B[2],unsafe_blit=B[3],sub=B[4],subo=B[5];
      return [0,blit,blito,unsafe_blit,sub,subo]}
    function _d_(Elt,Src,Dst)
     {var
       _v_=[0,Dst[2],Dst[1],Dst[5]],
       B=caml_call1(caml_call1(Base_Blit[2],[0,Src[2]]),_v_);
      Test_distinct(Elt,Src,[0,Dst[1],Dst[2],Dst[3],Dst[4]],B);
      var blit=B[1],blito=B[2],unsafe_blit=B[3],sub=B[4],subo=B[5];
      return [0,blit,blito,unsafe_blit,sub,subo]}
    function _e_(Elt,Sequence)
     {var B=caml_call1(Base_Blit[1],[0,Sequence[2],Sequence[1],Sequence[5]]);
      Test(Elt,[0,Sequence[1],Sequence[2],Sequence[3],Sequence[4]],B);
      var blit=B[1],blito=B[2],unsafe_blit=B[3],sub=B[4],subo=B[5];
      return [0,blit,blito,unsafe_blit,sub,subo]}
    function _f_(_u_,_t_,_s_){Test1_generic(_u_,_t_,_s_);return [0]}
    function _g_(_r_,_q_){Test1(_r_,_q_);return [0]}
    function _h_(_p_,_o_,_n_,_m_){Test_distinct(_p_,_o_,_n_,_m_);return [0]}
    var
     Base_for_tests_Test_blit=
      [0,
       function(_l_,_k_,_j_){Test(_l_,_k_,_j_);return [0]},
       _h_,
       _g_,
       _f_,
       _e_,
       _d_,
       _c_,
       _b_];
    caml_register_global
     (5,Base_for_tests_Test_blit,"Base_for_tests__Test_blit");
    var Base_for_tests_Test_binary_sea=[0];
    caml_register_global
     (6,
      Base_for_tests_Test_binary_sea,
      "Base_for_tests__Test_binary_searchable_intf");
    function Test$0(M){return [0]}
    function Test1$0(M){return [0]}
    function _i_(M)
     {var
       B=caml_call1(Base_Binary_searchable[2],[0,M[1],M[2]]),
       binary_search=B[1],
       binary_search_segmented=B[2];
      return [0,binary_search,binary_search_segmented]}
    var
     Base_for_tests_Test_binary_sea$0=
      [0,
       Test$0,
       Test1$0,
       function(M)
        {var
          B=caml_call1(Base_Binary_searchable[1],[0,M[1],M[2]]),
          binary_search=B[1],
          binary_search_segmented=B[2];
         return [0,binary_search,binary_search_segmented]},
       _i_];
    caml_register_global
     (9,
      Base_for_tests_Test_binary_sea$0,
      "Base_for_tests__Test_binary_searchable");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiYXNlX2Zvcl90ZXN0cy5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
