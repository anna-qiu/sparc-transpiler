(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
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
    var
     global_data=runtime.caml_get_global_data(),
     flags=[0,0,0],
     cst=caml_string_of_jsbytes("\n"),
     flags$0=[0,1,[0,3,0]],
     Base_List=global_data.Base__List,
     Caml=global_data.Caml,
     Base_Char=global_data.Base__Char,
     Base_String=global_data.Base__String,
     Stdlib_Buffer=global_data.Stdlib__Buffer,
     Base_Buffer=global_data.Base__Buffer,
     Stdlib=global_data.Stdlib,
     Base_Exn=global_data.Base__Exn,
     Base=global_data.Base,
     Stdlib_Printf=global_data.Stdlib__Printf,
     Stdio=[0];
    caml_register_global(6,Stdio,"Stdio__");
    var
     _a_=[0,caml_string_of_jsbytes("<stderr>")],
     _b_=[0,caml_string_of_jsbytes("<stdout>")],
     _c_=[0,caml_string_of_jsbytes("<Out_channel.t>")];
    function equal(t1,t2){return caml_call2(Base[203],t1,t2)}
    var seek=Caml[96][4],pos=Caml[96][5],length=Caml[96][6],stdin=Caml[38];
    function create(opt,file)
     {if(opt)var sth=opt[1],binary=sth;else var binary=1;
      var flags$0=binary?[0,6,flags]:flags;
      return caml_call3(Caml[81],flags$0,0,file)}
    var close=Caml[93];
    function with_file(binary,file,f)
     {var _t_=create(binary,file);return caml_call3(Base_Exn[12],f,_t_,close)}
    function may_eof(f)
     {try
       {var _r_=[0,caml_call1(f,0)];return _r_}
      catch(_s_)
       {_s_ = caml_wrap_exception(_s_);
        if(_s_ === Stdlib[12])return 0;
        throw _s_}}
    function input(t,buf,pos,len){return caml_call4(Caml[84],t,buf,pos,len)}
    function really_input(t,buf,pos,len)
     {return may_eof
              (function(param){return caml_call4(Caml[85],t,buf,pos,len)})}
    function really_input_exn(t,buf,pos,len)
     {return caml_call4(Caml[85],t,buf,pos,len)}
    function input_byte(t)
     {return may_eof(function(param){return caml_call1(Caml[87],t)})}
    function input_char(t)
     {return may_eof(function(param){return caml_call1(Caml[82],t)})}
    function input_binary_int(t)
     {return may_eof(function(param){return caml_call1(Caml[88],t)})}
    function unsafe_input_value(t)
     {return may_eof(function(param){return caml_call1(Caml[89],t)})}
    function input_buffer(t,buf,len)
     {return may_eof
              (function(param){return caml_call3(Stdlib_Buffer[22],buf,t,len)})}
    var set_binary_mode=Caml[95];
    function input_all(t)
     {var buffer=caml_call1(Base_Buffer[2],65536),chunk_size=65536;
      function loop(param)
       {for(;;){caml_call3(Stdlib_Buffer[22],buffer,t,chunk_size);continue}}
      try
       {var _p_=loop(0);return _p_}
      catch(_q_)
       {_q_ = caml_wrap_exception(_q_);
        if(_q_ === Stdlib[12])return caml_call1(Base_Buffer[3],buffer);
        throw _q_}}
    function trim(fix_win_eol,line)
     {if(fix_win_eol)
       {var len=runtime.caml_ml_string_length(line);
        if(0 < len)
         {var _o_=runtime.caml_string_get(line,len - 1 | 0);
          if(caml_call2(Base_Char[15],_o_,13))
           return caml_call3(Base_String[2],line,0,len - 1 | 0)}
        return line}
      return line}
    function input_line(opt,t)
     {if(opt)var sth=opt[1],fix_win_eol=sth;else var fix_win_eol=1;
      var match=may_eof(function(param){return caml_call1(Caml[83],t)});
      if(match){var line=match[1];return [0,trim(fix_win_eol,line)]}
      return 0}
    function input_line_exn(opt,t)
     {if(opt)var sth=opt[1],fix_win_eol=sth;else var fix_win_eol=1;
      var line=caml_call1(Caml[83],t);
      return trim(fix_win_eol,line)}
    function fold_lines(fix_win_eol,t,ac,f)
     {var ac$0=ac;
      for(;;)
       {var match=input_line(fix_win_eol,t);
        if(match)
         {var line=match[1],ac$1=caml_call2(f,ac$0,line),ac$0=ac$1;continue}
        return ac$0}}
    function input_lines(fix_win_eol,t)
     {var
       _n_=
        fold_lines
         (fix_win_eol,t,0,function(lines,line){return [0,line,lines]});
      return caml_call1(Base_List[38],_n_)}
    function iter_lines(fix_win_eol,t,f)
     {return fold_lines
              (fix_win_eol,
               t,
               0,
               function(param,line){return caml_call1(f,line)})}
    function read_lines(fix_win_eol,fname)
     {return with_file
              (0,fname,function(_m_){return input_lines(fix_win_eol,_m_)})}
    function read_all(fname){return with_file(0,fname,input_all)}
    var
     Stdio_In_channel=
      [0,
       equal,
       stdin,
       create,
       with_file,
       close,
       input,
       really_input,
       really_input_exn,
       input_char,
       input_byte,
       input_binary_int,
       unsafe_input_value,
       input_buffer,
       input_all,
       input_line,
       input_line_exn,
       fold_lines,
       input_lines,
       iter_lines,
       seek,
       pos,
       length,
       set_binary_mode,
       read_lines,
       read_all];
    caml_register_global(16,Stdio_In_channel,"Stdio__In_channel");
    function equal$0(t1,t2){return caml_call2(Base[203],t1,t2)}
    var
     seek$0=Caml[96][1],
     pos$0=Caml[96][2],
     length$0=Caml[96][3],
     stdout=Caml[39],
     stderr=Caml[40];
    function sexp_of_t(t)
     {return caml_call2(Base[203],t,stderr)
              ?_a_
              :caml_call2(Base[203],t,stdout)?_b_:_c_}
    function create$0(opt,_j_,_i_,_h_,file)
     {if(opt)var sth=opt[1],binary=sth;else var binary=1;
      if(_j_)var sth$0=_j_[1],append=sth$0;else var append=0;
      if(_i_)var sth$1=_i_[1],fail_if_exists=sth$1;else var fail_if_exists=0;
      if(_h_)var sth$2=_h_[1],perm=sth$2;else var perm=438;
      var
       _k_=binary?6:7,
       flags=[0,_k_,flags$0],
       _l_=append?2:4,
       flags$1=[0,_l_,flags],
       flags$2=fail_if_exists?[0,5,flags$1]:flags$1;
      return caml_call3(Caml[62],flags$2,perm,file)}
    var
     set_binary_mode$0=Caml[78],
     flush=Caml[63],
     close$0=Caml[76],
     close_no_err=Caml[77];
    function output(t,buf,pos,len){return caml_call4(Caml[68],t,buf,pos,len)}
    function output_substring(t,buf,pos,len)
     {return caml_call4(Caml[69],t,buf,pos,len)}
    var
     output_string=Caml[66],
     output_bytes=Caml[67],
     output_char=Caml[65],
     output_byte=Caml[70],
     output_binary_int=Caml[71],
     output_buffer=Stdlib_Buffer[10],
     output_value=Caml[72];
    function newline(t){return caml_call2(output_string,t,cst)}
    function output_lines(t,lines)
     {function _g_(line){caml_call2(output_string,t,line);return newline(t)}
      return caml_call2(Base_List[9],lines,_g_)}
    var
     printf=Stdlib_Printf[2],
     eprintf=Stdlib_Printf[3],
     fprintf=Stdlib_Printf[1],
     kfprintf=Stdlib_Printf[8],
     print_string=Caml[42],
     print_endline=Caml[46],
     prerr_endline=Caml[53];
    function print_s(mach,sexp)
     {var
       _f_=
        mach?caml_call1(Base[84][14],sexp):caml_call2(Base[84][13],0,sexp);
      return caml_call1(print_endline,_f_)}
    function eprint_s(mach,sexp)
     {var
       _e_=
        mach?caml_call1(Base[84][14],sexp):caml_call2(Base[84][13],0,sexp);
      return caml_call1(prerr_endline,_e_)}
    function with_file$0(binary,append,fail_if_exists,perm,file,f)
     {var _d_=create$0(binary,append,fail_if_exists,perm,file);
      return caml_call3(Base_Exn[12],f,_d_,close$0)}
    function write_lines(file,lines)
     {return with_file$0
              (0,0,0,0,file,function(t){return output_lines(t,lines)})}
    function write_all(file,data)
     {return with_file$0
              (0,
               0,
               0,
               0,
               file,
               function(t){return caml_call2(output_string,t,data)})}
    var
     Stdio_Out_channel=
      [0,
       sexp_of_t,
       equal$0,
       stdout,
       stderr,
       create$0,
       with_file$0,
       close$0,
       close_no_err,
       set_binary_mode$0,
       flush,
       output,
       output_string,
       output_substring,
       output_bytes,
       output_char,
       output_byte,
       output_binary_int,
       output_buffer,
       output_value,
       newline,
       output_lines,
       fprintf,
       printf,
       print_s,
       eprint_s,
       eprintf,
       kfprintf,
       print_string,
       print_endline,
       prerr_endline,
       seek$0,
       pos$0,
       length$0,
       write_lines,
       write_all];
    caml_register_global(18,Stdio_Out_channel,"Stdio__Out_channel");
    var
     Stdio$0=
      [0,
       stdin,
       stdout,
       stderr,
       printf,
       print_s,
       eprint_s,
       eprintf,
       print_string,
       print_endline,
       prerr_endline];
    caml_register_global(19,Stdio$0,"Stdio");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJzdGRpby5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOlsiZmxhZ3MiLCJmbGFncyQwIiwiZXF1YWwiLCJ0MSIsInQyIiwic2VlayIsInBvcyIsImxlbmd0aCIsImNyZWF0ZSIsIm9wdCIsImZpbGUiLCJzdGgiLCJiaW5hcnkiLCJjbG9zZSIsIndpdGhfZmlsZSIsImYiLCJtYXlfZW9mIiwiaW5wdXQiLCJ0IiwiYnVmIiwibGVuIiwicmVhbGx5X2lucHV0IiwicmVhbGx5X2lucHV0X2V4biIsImlucHV0X2J5dGUiLCJpbnB1dF9jaGFyIiwiaW5wdXRfYmluYXJ5X2ludCIsInVuc2FmZV9pbnB1dF92YWx1ZSIsImlucHV0X2J1ZmZlciIsInNldF9iaW5hcnlfbW9kZSIsImlucHV0X2FsbCIsImJ1ZmZlciIsImNodW5rX3NpemUiLCJsb29wIiwidHJpbSIsImZpeF93aW5fZW9sIiwibGluZSIsImlucHV0X2xpbmUiLCJpbnB1dF9saW5lX2V4biIsImZvbGRfbGluZXMiLCJhYyIsImFjJDAiLCJhYyQxIiwiaW5wdXRfbGluZXMiLCJsaW5lcyIsIml0ZXJfbGluZXMiLCJyZWFkX2xpbmVzIiwiZm5hbWUiLCJyZWFkX2FsbCIsImVxdWFsJDAiLCJzZWVrJDAiLCJwb3MkMCIsImxlbmd0aCQwIiwic2V4cF9vZl90IiwiY3JlYXRlJDAiLCJzdGgkMCIsImFwcGVuZCIsInN0aCQxIiwiZmFpbF9pZl9leGlzdHMiLCJzdGgkMiIsInBlcm0iLCJmbGFncyQxIiwiZmxhZ3MkMiIsInNldF9iaW5hcnlfbW9kZSQwIiwiZmx1c2giLCJjbG9zZSQwIiwiY2xvc2Vfbm9fZXJyIiwib3V0cHV0Iiwib3V0cHV0X3N1YnN0cmluZyIsIm91dHB1dF9zdHJpbmciLCJvdXRwdXRfYnl0ZXMiLCJvdXRwdXRfY2hhciIsIm91dHB1dF9ieXRlIiwib3V0cHV0X2JpbmFyeV9pbnQiLCJvdXRwdXRfYnVmZmVyIiwib3V0cHV0X3ZhbHVlIiwibmV3bGluZSIsIm91dHB1dF9saW5lcyIsImZwcmludGYiLCJrZnByaW50ZiIsIm1hY2giLCJzZXhwIiwid2l0aF9maWxlJDAiLCJ3cml0ZV9saW5lcyIsIndyaXRlX2FsbCIsImRhdGEiXSwic291cmNlcyI6WyIvaG9tZS9hbm5hcS8ub3BhbS9kZWZhdWx0L2xpYi9vY2FtbC9pbl9jaGFubmVsLm1sIiwiL2hvbWUvYW5uYXEvLm9wYW0vZGVmYXVsdC9saWIvb2NhbWwvb3V0X2NoYW5uZWwubWwiXSwibWFwcGluZ3MiOiI7O0k7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBV01BOztLQ2tCQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O2FEekJGQyxNQUFPQyxHQUFRQyxJQUFLLDRCQUFiRCxHQUFRQyxHQUFxQjtRQUNwQ0MsaUJBQ0FDLGdCQUNBQzthQUdBQyxPQUFTQyxJQUFlQztNQUMxQixHQURXRCxJQUFTLFFBQVRBLGNBQVNFLGFBQVRDO01BQ1gsSUFDSVgsUUFGT1csWUFDUFo7TUFFSiwyQkFESUMsVUFGc0JTLEtBR087UUFHL0JHO2FBQ0FDLFVBQVdGLE9BQU9GLEtBQU1LO01BQWlCLGVBQTlCSCxPQUFPRixNQUF1QiwrQkFBakJLLE1BRHhCRixNQUNnRjthQUVoRkcsUUFBUUQ7TUFDVjtRQUFTLHNCQURDQTs7OzhCQUVPO2tCQUFJO2FBR25CRSxNQUFNQyxFQUFHQyxJQUFLYixJQUFLYyxLQUFNLDJCQUFuQkYsRUFBR0MsSUFBS2IsSUFBS2MsSUFBOEI7YUFDakRDLGFBQWFILEVBQUdDLElBQUtiLElBQUtjO01BQU07K0JBQW1CLDJCQUF0Q0YsRUFBR0MsSUFBS2IsSUFBS2MsSUFBd0QsRUFBQzthQUNuRkUsaUJBQWlCSixFQUFHQyxJQUFLYixJQUFLYztNQUFNLDJCQUFuQkYsRUFBR0MsSUFBS2IsSUFBS2MsSUFBcUM7YUFDbkVHLFdBQVdMO01BQUksK0JBQW1CLDJCQUF2QkEsRUFBd0MsRUFBQzthQUNwRE0sV0FBV047TUFBSSwrQkFBbUIsMkJBQXZCQSxFQUF3QyxFQUFDO2FBQ3BETyxpQkFBaUJQO01BQUksK0JBQW1CLDJCQUF2QkEsRUFBOEMsRUFBQzthQUNoRVEsbUJBQW1CUjtNQUFJLCtCQUFtQiwyQkFBdkJBLEVBQXlDLEVBQUM7YUFDN0RTLGFBQWFULEVBQUVDLElBQUtDO01BQU07K0JBQW1CLG9DQUE5QkQsSUFBRkQsRUFBT0UsSUFBMEQsRUFBQztRQUMvRVE7YUFFQUMsVUFBVVg7TUFHQyw0Q0FEYjtNQUNhLFNBQ0xjO1FBQ04scUNBRkVGLE9BSFFaLEVBRVJhLHFCQUlLO01BSEk7UUFLVDs7OzhCQUNhLGlDQU5iRDtRQU4yQyxVQVlSO2FBR3JDRyxLQUFNQyxZQUFZQztNQUNwQixHQURRRDtRQUVILElBQ0NkLElBREQsOEJBRmVlO1FBRWYsT0FDQ2Y7VUFDcUIsZ0NBSlBlLEtBR2RmO1VBQ1U7V0FDVCxpQ0FMYWUsT0FHZGY7UUFHQyxPQU5hZTtNQU9mLE9BUGVBLElBT1g7YUFHUEMsV0FBYTNCLElBQW9CUztNQUNuQyxHQURlVCxJQUFjLFFBQWRBLG1CQUFjRSxhQUFkdUI7TUFDVCxrQ0FBbUIsMkJBRFVoQixFQUNPO01BQXBDLFVBRVMsSUFBUmlCLGNBQWEsZUFITEQsWUFHUkM7TUFERyxRQUNrQzthQUcxQ0UsZUFBaUI1QixJQUFvQlM7TUFDdkMsR0FEbUJULElBQWMsUUFBZEEsbUJBQWNFLGFBQWR1QjtNQUNSLElBQVBDLEtBQU8sb0JBRDRCakI7TUFDNUIsWUFEUWdCLFlBQ2ZDLEtBQ2tCO2FBR3BCRyxXQUFZSixZQUFZaEIsRUFDYnFCLEdBRHNCeEI7TSxJQUN0QnlCO01BQ1g7UUFBTSxxQkFGTU4sWUFBWWhCO1FBRWxCO1VBRVMsa0JBQUssZ0JBSmFILEVBQ3RCeUIsS0FHSkwsTUFISUs7UUFFRCxPQUZDQSxLQUtKO2FBR1BFLFlBQWFSLFlBQVloQjtNQUNsQjs7O1VBRE1nQixZQUFZaEIsYUFDMEJ5QixNQUFNUixNQUFRLFVBQVJBLEtBQU5RLE1BQTJCO01BQXZFLG9DQUF5RTthQUdoRkMsV0FBWVYsWUFBWWhCLEVBQUdIO01BQzdCO2VBRGNtQjtlQUFZaEI7OzhCQUNvQmlCLE1BQVEsa0JBRHpCcEIsRUFDaUJvQixLQUFjLEVBQUM7YUFHM0RVLFdBQVlYLFlBQVlZO01BQTJCO2lCQUEzQkEsb0IsT0FSeEJKLFlBUVlSLGtCQUFpRTthQUM3RWEsU0FBU0QsT0FBUSxtQkFBUkEsTUFuRFRqQixVQW1ENkM7Ozs7T0FqRjdDM0I7O09BTUFNO09BT0FNO09BREFEO09BUUFJO09BQ0FJO09BQ0FDO09BRUFFO09BREFEO09BRUFFO09BQ0FDO09BQ0FDO09BR0FFO09Bc0JBTztPQU1BQztPQUtBQztPQVNBSTtPQUlBRTtPQTNFQXZDO09BQ0FDO09BQ0FDO09BeUJBcUI7T0FvREFpQjtPQUNBRTs7YUNqRkFDLFFBQU83QyxHQUFRQyxJQUFLLDRCQUFiRCxHQUFRQyxHQUFxQjs7S0FDcEM2QztLQUNBQztLQUNBQzs7O2FBSUFDLFVBQVVsQztNQUNULDRCQURTQTs7ZUFHSixxQkFISUEsaUJBS29CO2FBTTlCbUMsU0FDSTVDLGdCQUlGQztNQUVKLEdBTk1ELElBQVMsUUFBVEEsY0FBU0UsYUFBVEM7TUFNTixPQUxlLGlCQUFUMkMsT0FBU0QsZUFBVEM7TUFLTixPQUp1QixpQkFBakJFLGVBQWlCRCxlQUFqQkM7TUFJTixPQUhhLGlCQUFQRSxLQUFPRCxlQUFQQztNQUdOO1dBTk0vQztPQU9NLGFBRFJYO09BQ1EsSUFOTnNEO09BT00sZUFEUnZEO09BQ1EsUUFOTnlELG9CQU1GRztNQUVKLDJCQURJQyxRQU5FRixLQUNGakQsS0FNNkI7O0tBRy9Cb0Q7S0FDQUM7S0FDQUM7S0FDQUM7YUFDQUMsT0FBT2hELEVBQUdDLElBQUtiLElBQUtjLEtBQU0sMkJBQW5CRixFQUFHQyxJQUFLYixJQUFLYyxJQUErQjthQUNuRCtDLGlCQUFpQmpELEVBQUdDLElBQUtiLElBQUtjO01BQU0sMkJBQW5CRixFQUFHQyxJQUFLYixJQUFLYyxJQUF5Qzs7S0FDdkVnRDtLQUNBQztLQUNBQztLQUNBQztLQUNBQztLQUNBQztLQUNBQzthQUNBQyxRQUFRekQsR0FBSSxrQkFQWmtELGNBT1FsRCxNQUF3QjthQUVoQzBELGFBQWExRCxFQUFFeUI7TUFDakIsYUFBd0JSLE1BQ3RCLFdBWEFpQyxjQVNhbEQsRUFDU2lCLE1BQ3RCLGVBRmFqQixFQUdKO01BRlgsK0JBRGlCeUIsVUFHTDs7OztLQUtWa0M7S0FDQUM7Ozs7cUJBS1NDLEtBQUtDO01BQ2hCOztRQURXRCxLQUdLLHdCQUhBQyxNQUlILDBCQUpHQTtNQUlvQixvQ0FBQztzQkFHekJELEtBQUtDO01BQ2pCOztRQURZRCxLQUdJLHdCQUhDQyxNQUlKLDBCQUpJQTtNQUltQixvQ0FBQzthQUduQ0MsWUFBV3JFLE9BQVEyQyxPQUFRRSxlQUFnQkUsS0FBS2pELEtBQU1LO01BQzNDLGlCQURBSCxPQUFRMkMsT0FBUUUsZUFBZ0JFLEtBQUtqRDtNQUNyQywrQkFEMkNLLE1BekN0RGlELFFBMENnRjthQUdoRmtCLFlBQVl4RSxLQUFLaUM7TUFBUTt1QkFBYmpDLGNBQW9DUSxHQUFLLG9CQUFMQSxFQUEvQnlCLE1BQXdELEVBQUM7YUFDMUV3QyxVQUFVekUsS0FBTTBFO01BQU87Ozs7O2VBQWIxRTt3QkFBb0NRLEdBQUssa0JBMUNuRGtELGNBMEM4Q2xELEVBQTlCa0UsS0FBdUQsRUFBQzs7OztPQXpFeEVoQztPQVBBSjs7O09Ba0JBSztPQXlEQTRCO09BekNBakI7T0FDQUM7T0FIQUg7T0FDQUM7T0FHQUc7T0FFQUU7T0FEQUQ7T0FFQUU7T0FDQUM7T0FDQUM7T0FDQUM7T0FDQUM7T0FDQUM7T0FDQUM7T0FFQUM7T0FRQUM7Ozs7O09BQ0FDOzs7O09BdkRBN0I7T0FDQUM7T0FDQUM7T0E0RUErQjtPQUNBQzs7Ozs7Ozs7Ozs7Ozs7OztVIiwic291cmNlc0NvbnRlbnQiOlsiKCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPQ2FtbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgWGF2aWVyIExlcm95LCBwcm9qZXQgQ3Jpc3RhbCwgSU5SSUEgUm9jcXVlbmNvdXJ0ICAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICBDb3B5cmlnaHQgMjAyMSBJbnN0aXR1dCBOYXRpb25hbCBkZSBSZWNoZXJjaGUgZW4gSW5mb3JtYXRpcXVlIGV0ICAgICAqKVxuKCogICAgIGVuIEF1dG9tYXRpcXVlLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICBBbGwgcmlnaHRzIHJlc2VydmVkLiAgVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiAgICAqKVxuKCogICB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMi4xLCB3aXRoIHRoZSAgICAgICAgICAqKVxuKCogICBzcGVjaWFsIGV4Y2VwdGlvbiBvbiBsaW5raW5nIGRlc2NyaWJlZCBpbiB0aGUgZmlsZSBMSUNFTlNFLiAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKVxuXG50eXBlIHQgPSBpbl9jaGFubmVsXG5cbnR5cGUgb3Blbl9mbGFnID0gU3RkbGliLm9wZW5fZmxhZyA9XG4gIHwgT3Blbl9yZG9ubHlcbiAgfCBPcGVuX3dyb25seVxuICB8IE9wZW5fYXBwZW5kXG4gIHwgT3Blbl9jcmVhdFxuICB8IE9wZW5fdHJ1bmNcbiAgfCBPcGVuX2V4Y2xcbiAgfCBPcGVuX2JpbmFyeVxuICB8IE9wZW5fdGV4dFxuICB8IE9wZW5fbm9uYmxvY2tcblxubGV0IHN0ZGluID0gU3RkbGliLnN0ZGluXG5sZXQgb3Blbl9iaW4gPSBTdGRsaWIub3Blbl9pbl9iaW5cbmxldCBvcGVuX3RleHQgPSBTdGRsaWIub3Blbl9pblxubGV0IG9wZW5fZ2VuID0gU3RkbGliLm9wZW5faW5fZ2VuXG5cbmxldCB3aXRoX29wZW4gb3BlbmZ1biBzIGYgPVxuICBsZXQgaWMgPSBvcGVuZnVuIHMgaW5cbiAgRnVuLnByb3RlY3QgfmZpbmFsbHk6KGZ1biAoKSAtPiBTdGRsaWIuY2xvc2VfaW5fbm9lcnIgaWMpXG4gICAgKGZ1biAoKSAtPiBmIGljKVxuXG5sZXQgd2l0aF9vcGVuX2JpbiBzIGYgPVxuICB3aXRoX29wZW4gU3RkbGliLm9wZW5faW5fYmluIHMgZlxuXG5sZXQgd2l0aF9vcGVuX3RleHQgcyBmID1cbiAgd2l0aF9vcGVuIFN0ZGxpYi5vcGVuX2luIHMgZlxuXG5sZXQgd2l0aF9vcGVuX2dlbiBmbGFncyBwZXJtIHMgZiA9XG4gIHdpdGhfb3BlbiAoU3RkbGliLm9wZW5faW5fZ2VuIGZsYWdzIHBlcm0pIHMgZlxuXG5sZXQgc2VlayA9IFN0ZGxpYi5MYXJnZUZpbGUuc2Vla19pblxubGV0IHBvcyA9IFN0ZGxpYi5MYXJnZUZpbGUucG9zX2luXG5sZXQgbGVuZ3RoID0gU3RkbGliLkxhcmdlRmlsZS5pbl9jaGFubmVsX2xlbmd0aFxubGV0IGNsb3NlID0gU3RkbGliLmNsb3NlX2luXG5sZXQgY2xvc2Vfbm9lcnIgPSBTdGRsaWIuY2xvc2VfaW5fbm9lcnJcblxubGV0IGlucHV0X2NoYXIgaWMgPVxuICBtYXRjaCBTdGRsaWIuaW5wdXRfY2hhciBpYyB3aXRoXG4gIHwgYyAtPiBTb21lIGNcbiAgfCBleGNlcHRpb24gRW5kX29mX2ZpbGUgLT4gTm9uZVxuXG5sZXQgaW5wdXRfYnl0ZSBpYyA9XG4gIG1hdGNoIFN0ZGxpYi5pbnB1dF9ieXRlIGljIHdpdGhcbiAgfCBuIC0+IFNvbWUgblxuICB8IGV4Y2VwdGlvbiBFbmRfb2ZfZmlsZSAtPiBOb25lXG5cbmxldCBpbnB1dF9saW5lIGljID1cbiAgbWF0Y2ggU3RkbGliLmlucHV0X2xpbmUgaWMgd2l0aFxuICB8IHMgLT4gU29tZSBzXG4gIHwgZXhjZXB0aW9uIEVuZF9vZl9maWxlIC0+IE5vbmVcblxubGV0IGlucHV0ID0gU3RkbGliLmlucHV0XG5cbmxldCByZWFsbHlfaW5wdXQgaWMgYnVmIHBvcyBsZW4gPVxuICBtYXRjaCBTdGRsaWIucmVhbGx5X2lucHV0IGljIGJ1ZiBwb3MgbGVuIHdpdGhcbiAgfCAoKSAtPiBTb21lICgpXG4gIHwgZXhjZXB0aW9uIEVuZF9vZl9maWxlIC0+IE5vbmVcblxubGV0IHJlYWxseV9pbnB1dF9zdHJpbmcgaWMgbGVuID1cbiAgbWF0Y2ggU3RkbGliLnJlYWxseV9pbnB1dF9zdHJpbmcgaWMgbGVuIHdpdGhcbiAgfCBzIC0+IFNvbWUgc1xuICB8IGV4Y2VwdGlvbiBFbmRfb2ZfZmlsZSAtPiBOb25lXG5cbigqIFJlYWQgdXAgdG8gW2xlbl0gYnl0ZXMgaW50byBbYnVmXSwgc3RhcnRpbmcgYXQgW29mc10uIFJldHVybiB0b3RhbCBieXRlc1xuICAgcmVhZC4gKilcbmxldCByZWFkX3VwdG8gaWMgYnVmIG9mcyBsZW4gPVxuICBsZXQgcmVjIGxvb3Agb2ZzIGxlbiA9XG4gICAgaWYgbGVuID0gMCB0aGVuIG9mc1xuICAgIGVsc2UgYmVnaW5cbiAgICAgIGxldCByID0gU3RkbGliLmlucHV0IGljIGJ1ZiBvZnMgbGVuIGluXG4gICAgICBpZiByID0gMCB0aGVuXG4gICAgICAgIG9mc1xuICAgICAgZWxzZVxuICAgICAgICBsb29wIChvZnMgKyByKSAobGVuIC0gcilcbiAgICBlbmRcbiAgaW5cbiAgbG9vcCBvZnMgbGVuIC0gb2ZzXG5cbigqIEJlc3QgZWZmb3J0IGF0dGVtcHQgdG8gcmV0dXJuIGEgYnVmZmVyIHdpdGggPj0gKG9mcyArIG4pIGJ5dGVzIG9mIHN0b3JhZ2UsXG4gICBhbmQgc3VjaCB0aGF0IGl0IGNvaW5jaWRlcyB3aXRoIFtidWZdIGF0IGluZGljZXMgPCBbb2ZzXS5cblxuICAgVGhlIHJldHVybmVkIGJ1ZmZlciBpcyBlcXVhbCB0byBbYnVmXSBpdHNlbGYgaWYgaXQgYWxyZWFkeSBoYXMgc3VmZmljaWVudFxuICAgZnJlZSBzcGFjZS5cblxuICAgVGhlIHJldHVybmVkIGJ1ZmZlciBtYXkgaGF2ZSAqZmV3ZXIqIHRoYW4gW29mcyArIG5dIGJ5dGVzIG9mIHN0b3JhZ2UgaWYgdGhpc1xuICAgbnVtYmVyIGlzID4gW1N5cy5tYXhfc3RyaW5nX2xlbmd0aF0uIEhvd2V2ZXIgdGhlIHJldHVybmVkIGJ1ZmZlciB3aWxsXG4gICAqYWx3YXlzKiBoYXZlID4gW29mc10gYnl0ZXMgb2Ygc3RvcmFnZS4gSW4gdGhlIGxpbWl0aW5nIGNhc2Ugd2hlbiBbb2ZzID0gbGVuXG4gICA9IFN5cy5tYXhfc3RyaW5nX2xlbmd0aF0gKHNvIHRoYXQgaXQgaXMgbm90IHBvc3NpYmxlIHRvIHJlc2l6ZSB0aGUgYnVmZmVyIGF0XG4gICBhbGwpLCBhbiBleGNlcHRpb24gaXMgcmFpc2VkLiAqKVxuXG5sZXQgZW5zdXJlIGJ1ZiBvZnMgbiA9XG4gIGxldCBsZW4gPSBCeXRlcy5sZW5ndGggYnVmIGluXG4gIGlmIGxlbiA+PSBvZnMgKyBuIHRoZW4gYnVmXG4gIGVsc2UgYmVnaW5cbiAgICBsZXQgbmV3X2xlbiA9IHJlZiBsZW4gaW5cbiAgICB3aGlsZSAhbmV3X2xlbiA8IG9mcyArIG4gZG9cbiAgICAgIG5ld19sZW4gOj0gMiAqICFuZXdfbGVuICsgMVxuICAgIGRvbmU7XG4gICAgbGV0IG5ld19sZW4gPSAhbmV3X2xlbiBpblxuICAgIGxldCBuZXdfbGVuID1cbiAgICAgIGlmIG5ld19sZW4gPD0gU3lzLm1heF9zdHJpbmdfbGVuZ3RoIHRoZW5cbiAgICAgICAgbmV3X2xlblxuICAgICAgZWxzZSBpZiBvZnMgPCBTeXMubWF4X3N0cmluZ19sZW5ndGggdGhlblxuICAgICAgICBTeXMubWF4X3N0cmluZ19sZW5ndGhcbiAgICAgIGVsc2VcbiAgICAgICAgZmFpbHdpdGggXCJJbl9jaGFubmVsLmlucHV0X2FsbDogY2hhbm5lbCBjb250ZW50IFxcXG4gICAgICAgICAgICAgICAgICBpcyBsYXJnZXIgdGhhbiBtYXhpbXVtIHN0cmluZyBsZW5ndGhcIlxuICAgIGluXG4gICAgbGV0IG5ld19idWYgPSBCeXRlcy5jcmVhdGUgbmV3X2xlbiBpblxuICAgIEJ5dGVzLmJsaXQgYnVmIDAgbmV3X2J1ZiAwIG9mcztcbiAgICBuZXdfYnVmXG4gIGVuZFxuXG5sZXQgaW5wdXRfYWxsIGljID1cbiAgbGV0IGNodW5rX3NpemUgPSA2NTUzNiBpbiAoKiBJT19CVUZGRVJfU0laRSAqKVxuICBsZXQgaW5pdGlhbF9zaXplID1cbiAgICB0cnlcbiAgICAgIFN0ZGxpYi5pbl9jaGFubmVsX2xlbmd0aCBpYyAtIFN0ZGxpYi5wb3NfaW4gaWNcbiAgICB3aXRoIFN5c19lcnJvciBfIC0+XG4gICAgICAtMVxuICBpblxuICBsZXQgaW5pdGlhbF9zaXplID0gaWYgaW5pdGlhbF9zaXplIDwgMCB0aGVuIGNodW5rX3NpemUgZWxzZSBpbml0aWFsX3NpemUgaW5cbiAgbGV0IGluaXRpYWxfc2l6ZSA9XG4gICAgaWYgaW5pdGlhbF9zaXplIDw9IFN5cy5tYXhfc3RyaW5nX2xlbmd0aCB0aGVuXG4gICAgICBpbml0aWFsX3NpemVcbiAgICBlbHNlXG4gICAgICBTeXMubWF4X3N0cmluZ19sZW5ndGhcbiAgaW5cbiAgbGV0IGJ1ZiA9IEJ5dGVzLmNyZWF0ZSBpbml0aWFsX3NpemUgaW5cbiAgbGV0IG5yZWFkID0gcmVhZF91cHRvIGljIGJ1ZiAwIGluaXRpYWxfc2l6ZSBpblxuICBpZiBucmVhZCA8IGluaXRpYWxfc2l6ZSB0aGVuICgqIEVPRiByZWFjaGVkLCBidWZmZXIgcGFydGlhbGx5IGZpbGxlZCAqKVxuICAgIEJ5dGVzLnN1Yl9zdHJpbmcgYnVmIDAgbnJlYWRcbiAgZWxzZSBiZWdpbiAoKiBucmVhZCA9IGluaXRpYWxfc2l6ZSwgbWF5YmUgRU9GIHJlYWNoZWQgKilcbiAgICBtYXRjaCBTdGRsaWIuaW5wdXRfY2hhciBpYyB3aXRoXG4gICAgfCBleGNlcHRpb24gRW5kX29mX2ZpbGUgLT5cbiAgICAgICAgKCogRU9GIHJlYWNoZWQsIGJ1ZmZlciBpcyBjb21wbGV0ZWx5IGZpbGxlZCAqKVxuICAgICAgICBCeXRlcy51bnNhZmVfdG9fc3RyaW5nIGJ1ZlxuICAgIHwgYyAtPlxuICAgICAgICAoKiBFT0Ygbm90IHJlYWNoZWQgKilcbiAgICAgICAgbGV0IHJlYyBsb29wIGJ1ZiBvZnMgPVxuICAgICAgICAgIGxldCBidWYgPSBlbnN1cmUgYnVmIG9mcyBjaHVua19zaXplIGluXG4gICAgICAgICAgbGV0IHJlbSA9IEJ5dGVzLmxlbmd0aCBidWYgLSBvZnMgaW5cbiAgICAgICAgICAoKiBbcmVtXSBjYW4gYmUgPCBbY2h1bmtfc2l6ZV0gaWYgYnVmZmVyIHNpemUgY2xvc2UgdG9cbiAgICAgICAgICAgICBbU3lzLm1heF9zdHJpbmdfbGVuZ3RoXSAqKVxuICAgICAgICAgIGxldCByID0gcmVhZF91cHRvIGljIGJ1ZiBvZnMgcmVtIGluXG4gICAgICAgICAgaWYgciA8IHJlbSB0aGVuICgqIEVPRiByZWFjaGVkICopXG4gICAgICAgICAgICBCeXRlcy5zdWJfc3RyaW5nIGJ1ZiAwIChvZnMgKyByKVxuICAgICAgICAgIGVsc2UgKCogciA9IHJlbSAqKVxuICAgICAgICAgICAgbG9vcCBidWYgKG9mcyArIHJlbSlcbiAgICAgICAgaW5cbiAgICAgICAgbGV0IGJ1ZiA9IGVuc3VyZSBidWYgbnJlYWQgKGNodW5rX3NpemUgKyAxKSBpblxuICAgICAgICBCeXRlcy5zZXQgYnVmIG5yZWFkIGM7XG4gICAgICAgIGxvb3AgYnVmIChucmVhZCArIDEpXG4gIGVuZFxuXG5sZXQgc2V0X2JpbmFyeV9tb2RlID0gU3RkbGliLnNldF9iaW5hcnlfbW9kZV9pblxuIiwiKCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPQ2FtbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgWGF2aWVyIExlcm95LCBwcm9qZXQgQ3Jpc3RhbCwgSU5SSUEgUm9jcXVlbmNvdXJ0ICAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICBDb3B5cmlnaHQgMjAyMSBJbnN0aXR1dCBOYXRpb25hbCBkZSBSZWNoZXJjaGUgZW4gSW5mb3JtYXRpcXVlIGV0ICAgICAqKVxuKCogICAgIGVuIEF1dG9tYXRpcXVlLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICBBbGwgcmlnaHRzIHJlc2VydmVkLiAgVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiAgICAqKVxuKCogICB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMi4xLCB3aXRoIHRoZSAgICAgICAgICAqKVxuKCogICBzcGVjaWFsIGV4Y2VwdGlvbiBvbiBsaW5raW5nIGRlc2NyaWJlZCBpbiB0aGUgZmlsZSBMSUNFTlNFLiAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKVxuXG50eXBlIHQgPSBvdXRfY2hhbm5lbFxuXG50eXBlIG9wZW5fZmxhZyA9IFN0ZGxpYi5vcGVuX2ZsYWcgPVxuICB8IE9wZW5fcmRvbmx5XG4gIHwgT3Blbl93cm9ubHlcbiAgfCBPcGVuX2FwcGVuZFxuICB8IE9wZW5fY3JlYXRcbiAgfCBPcGVuX3RydW5jXG4gIHwgT3Blbl9leGNsXG4gIHwgT3Blbl9iaW5hcnlcbiAgfCBPcGVuX3RleHRcbiAgfCBPcGVuX25vbmJsb2NrXG5cbmxldCBzdGRvdXQgPSBTdGRsaWIuc3Rkb3V0XG5sZXQgc3RkZXJyID0gU3RkbGliLnN0ZGVyclxubGV0IG9wZW5fYmluID0gU3RkbGliLm9wZW5fb3V0X2JpblxubGV0IG9wZW5fdGV4dCA9IFN0ZGxpYi5vcGVuX291dFxubGV0IG9wZW5fZ2VuID0gU3RkbGliLm9wZW5fb3V0X2dlblxuXG5sZXQgd2l0aF9vcGVuIG9wZW5mdW4gcyBmID1cbiAgbGV0IG9jID0gb3BlbmZ1biBzIGluXG4gIEZ1bi5wcm90ZWN0IH5maW5hbGx5OihmdW4gKCkgLT4gU3RkbGliLmNsb3NlX291dF9ub2VyciBvYylcbiAgICAoZnVuICgpIC0+IGYgb2MpXG5cbmxldCB3aXRoX29wZW5fYmluIHMgZiA9XG4gIHdpdGhfb3BlbiBTdGRsaWIub3Blbl9vdXRfYmluIHMgZlxuXG5sZXQgd2l0aF9vcGVuX3RleHQgcyBmID1cbiAgd2l0aF9vcGVuIFN0ZGxpYi5vcGVuX291dCBzIGZcblxubGV0IHdpdGhfb3Blbl9nZW4gZmxhZ3MgcGVybSBzIGYgPVxuICB3aXRoX29wZW4gKFN0ZGxpYi5vcGVuX291dF9nZW4gZmxhZ3MgcGVybSkgcyBmXG5cbmxldCBzZWVrID0gU3RkbGliLkxhcmdlRmlsZS5zZWVrX291dFxubGV0IHBvcyA9IFN0ZGxpYi5MYXJnZUZpbGUucG9zX291dFxubGV0IGxlbmd0aCA9IFN0ZGxpYi5MYXJnZUZpbGUub3V0X2NoYW5uZWxfbGVuZ3RoXG5sZXQgY2xvc2UgPSBTdGRsaWIuY2xvc2Vfb3V0XG5sZXQgY2xvc2Vfbm9lcnIgPSBTdGRsaWIuY2xvc2Vfb3V0X25vZXJyXG5sZXQgZmx1c2ggPSBTdGRsaWIuZmx1c2hcbmxldCBmbHVzaF9hbGwgPSBTdGRsaWIuZmx1c2hfYWxsXG5sZXQgb3V0cHV0X2NoYXIgPSBTdGRsaWIub3V0cHV0X2NoYXJcbmxldCBvdXRwdXRfYnl0ZSA9IFN0ZGxpYi5vdXRwdXRfYnl0ZVxubGV0IG91dHB1dF9zdHJpbmcgPSBTdGRsaWIub3V0cHV0X3N0cmluZ1xubGV0IG91dHB1dF9ieXRlcyA9IFN0ZGxpYi5vdXRwdXRfYnl0ZXNcbmxldCBvdXRwdXQgPSBTdGRsaWIub3V0cHV0XG5sZXQgb3V0cHV0X3N1YnN0cmluZyA9IFN0ZGxpYi5vdXRwdXRfc3Vic3RyaW5nXG5sZXQgc2V0X2JpbmFyeV9tb2RlID0gU3RkbGliLnNldF9iaW5hcnlfbW9kZV9vdXRcblxuZXh0ZXJuYWwgc2V0X2J1ZmZlcmVkIDogdCAtPiBib29sIC0+IHVuaXQgPSBcImNhbWxfbWxfc2V0X2J1ZmZlcmVkXCJcblxuZXh0ZXJuYWwgaXNfYnVmZmVyZWQgOiB0IC0+IGJvb2wgPSBcImNhbWxfbWxfaXNfYnVmZmVyZWRcIlxuIl19
