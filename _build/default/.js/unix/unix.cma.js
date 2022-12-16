(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_channel_descriptor=runtime.caml_channel_descriptor,
     caml_ml_bytes_length=runtime.caml_ml_bytes_length,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_register_global=runtime.caml_register_global,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_wrap_exception=runtime.caml_wrap_exception,
     unix_inet_addr_of_string=runtime.unix_inet_addr_of_string;
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
     cst_close_process_full=caml_string_of_jsbytes("close_process_full"),
     cst_close_process=caml_string_of_jsbytes("close_process"),
     cst_close_process_out=caml_string_of_jsbytes("close_process_out"),
     cst_close_process_in=caml_string_of_jsbytes("close_process_in"),
     cst_process_full_pid=caml_string_of_jsbytes("process_full_pid"),
     cst_process_pid=caml_string_of_jsbytes("process_pid"),
     cst_process_out_pid=caml_string_of_jsbytes("process_out_pid"),
     cst_process_in_pid=caml_string_of_jsbytes("process_in_pid"),
     cst$8=caml_string_of_jsbytes(""),
     cst_c$0=caml_string_of_jsbytes("-c"),
     cst_c=caml_string_of_jsbytes("-c"),
     cst$7=caml_string_of_jsbytes(""),
     cst_udp$1=caml_string_of_jsbytes("udp"),
     cst_tcp$1=caml_string_of_jsbytes("tcp"),
     cst$4=caml_string_of_jsbytes(""),
     cst$6=caml_string_of_jsbytes(""),
     cst_tcp=caml_string_of_jsbytes("tcp"),
     cst_udp=caml_string_of_jsbytes("udp"),
     cst_udp$0=caml_string_of_jsbytes("udp"),
     cst_tcp$0=caml_string_of_jsbytes("tcp"),
     cst$5=caml_string_of_jsbytes(""),
     cst_0_0_0_0$0=caml_string_of_jsbytes("0.0.0.0"),
     cst_127_0_0_1$0=caml_string_of_jsbytes("127.0.0.1"),
     cst_Unix_sendto=caml_string_of_jsbytes("Unix.sendto"),
     cst_Unix_send=caml_string_of_jsbytes("Unix.send"),
     cst_Unix_recvfrom=caml_string_of_jsbytes("Unix.recvfrom"),
     cst_Unix_recv=caml_string_of_jsbytes("Unix.recv"),
     cst_Unix_single_write=caml_string_of_jsbytes("Unix.single_write"),
     cst_Unix_write=caml_string_of_jsbytes("Unix.write"),
     cst_Unix_read=caml_string_of_jsbytes("Unix.read"),
     cst$1=caml_string_of_jsbytes(': "'),
     cst_failed=caml_string_of_jsbytes('" failed'),
     cst_on=caml_string_of_jsbytes(' on "'),
     cst$2=caml_string_of_jsbytes('"'),
     cst$3=caml_string_of_jsbytes(": "),
     cst_E2BIG=caml_string_of_jsbytes("E2BIG"),
     cst_EACCES=caml_string_of_jsbytes("EACCES"),
     cst_EAGAIN=caml_string_of_jsbytes("EAGAIN"),
     cst_EBADF=caml_string_of_jsbytes("EBADF"),
     cst_EBUSY=caml_string_of_jsbytes("EBUSY"),
     cst_ECHILD=caml_string_of_jsbytes("ECHILD"),
     cst_EDEADLK=caml_string_of_jsbytes("EDEADLK"),
     cst_EDOM=caml_string_of_jsbytes("EDOM"),
     cst_EEXIST=caml_string_of_jsbytes("EEXIST"),
     cst_EFAULT=caml_string_of_jsbytes("EFAULT"),
     cst_EFBIG=caml_string_of_jsbytes("EFBIG"),
     cst_EINTR=caml_string_of_jsbytes("EINTR"),
     cst_EINVAL=caml_string_of_jsbytes("EINVAL"),
     cst_EIO=caml_string_of_jsbytes("EIO"),
     cst_EISDIR=caml_string_of_jsbytes("EISDIR"),
     cst_EMFILE=caml_string_of_jsbytes("EMFILE"),
     cst_EMLINK=caml_string_of_jsbytes("EMLINK"),
     cst_ENAMETOOLONG=caml_string_of_jsbytes("ENAMETOOLONG"),
     cst_ENFILE=caml_string_of_jsbytes("ENFILE"),
     cst_ENODEV=caml_string_of_jsbytes("ENODEV"),
     cst_ENOENT=caml_string_of_jsbytes("ENOENT"),
     cst_ENOEXEC=caml_string_of_jsbytes("ENOEXEC"),
     cst_ENOLCK=caml_string_of_jsbytes("ENOLCK"),
     cst_ENOMEM=caml_string_of_jsbytes("ENOMEM"),
     cst_ENOSPC=caml_string_of_jsbytes("ENOSPC"),
     cst_ENOSYS=caml_string_of_jsbytes("ENOSYS"),
     cst_ENOTDIR=caml_string_of_jsbytes("ENOTDIR"),
     cst_ENOTEMPTY=caml_string_of_jsbytes("ENOTEMPTY"),
     cst_ENOTTY=caml_string_of_jsbytes("ENOTTY"),
     cst_ENXIO=caml_string_of_jsbytes("ENXIO"),
     cst_EPERM=caml_string_of_jsbytes("EPERM"),
     cst_EPIPE=caml_string_of_jsbytes("EPIPE"),
     cst_ERANGE=caml_string_of_jsbytes("ERANGE"),
     cst_EROFS=caml_string_of_jsbytes("EROFS"),
     cst_ESPIPE=caml_string_of_jsbytes("ESPIPE"),
     cst_ESRCH=caml_string_of_jsbytes("ESRCH"),
     cst_EXDEV=caml_string_of_jsbytes("EXDEV"),
     cst_EWOULDBLOCK=caml_string_of_jsbytes("EWOULDBLOCK"),
     cst_EINPROGRESS=caml_string_of_jsbytes("EINPROGRESS"),
     cst_EALREADY=caml_string_of_jsbytes("EALREADY"),
     cst_ENOTSOCK=caml_string_of_jsbytes("ENOTSOCK"),
     cst_EDESTADDRREQ=caml_string_of_jsbytes("EDESTADDRREQ"),
     cst_EMSGSIZE=caml_string_of_jsbytes("EMSGSIZE"),
     cst_EPROTOTYPE=caml_string_of_jsbytes("EPROTOTYPE"),
     cst_ENOPROTOOPT=caml_string_of_jsbytes("ENOPROTOOPT"),
     cst_EPROTONOSUPPORT=caml_string_of_jsbytes("EPROTONOSUPPORT"),
     cst_ESOCKTNOSUPPORT=caml_string_of_jsbytes("ESOCKTNOSUPPORT"),
     cst_EOPNOTSUPP=caml_string_of_jsbytes("EOPNOTSUPP"),
     cst_EPFNOSUPPORT=caml_string_of_jsbytes("EPFNOSUPPORT"),
     cst_EAFNOSUPPORT=caml_string_of_jsbytes("EAFNOSUPPORT"),
     cst_EADDRINUSE=caml_string_of_jsbytes("EADDRINUSE"),
     cst_EADDRNOTAVAIL=caml_string_of_jsbytes("EADDRNOTAVAIL"),
     cst_ENETDOWN=caml_string_of_jsbytes("ENETDOWN"),
     cst_ENETUNREACH=caml_string_of_jsbytes("ENETUNREACH"),
     cst_ENETRESET=caml_string_of_jsbytes("ENETRESET"),
     cst_ECONNABORTED=caml_string_of_jsbytes("ECONNABORTED"),
     cst_ECONNRESET=caml_string_of_jsbytes("ECONNRESET"),
     cst_ENOBUFS=caml_string_of_jsbytes("ENOBUFS"),
     cst_EISCONN=caml_string_of_jsbytes("EISCONN"),
     cst_ENOTCONN=caml_string_of_jsbytes("ENOTCONN"),
     cst_ESHUTDOWN=caml_string_of_jsbytes("ESHUTDOWN"),
     cst_ETOOMANYREFS=caml_string_of_jsbytes("ETOOMANYREFS"),
     cst_ETIMEDOUT=caml_string_of_jsbytes("ETIMEDOUT"),
     cst_ECONNREFUSED=caml_string_of_jsbytes("ECONNREFUSED"),
     cst_EHOSTDOWN=caml_string_of_jsbytes("EHOSTDOWN"),
     cst_EHOSTUNREACH=caml_string_of_jsbytes("EHOSTUNREACH"),
     cst_ELOOP=caml_string_of_jsbytes("ELOOP"),
     cst_EOVERFLOW=caml_string_of_jsbytes("EOVERFLOW"),
     shell=caml_string_of_jsbytes("/bin/sh"),
     cst_Unix_Unix_error=caml_string_of_jsbytes("Unix.Unix_error"),
     cst=caml_string_of_jsbytes(""),
     cst$0=caml_string_of_jsbytes(""),
     cst_Unix_Unix_error$0=caml_string_of_jsbytes("Unix.Unix_error"),
     cst_0_0_0_0=caml_string_of_jsbytes("0.0.0.0"),
     cst_127_0_0_1=caml_string_of_jsbytes("127.0.0.1"),
     cst$9=caml_string_of_jsbytes("::"),
     cst_1=caml_string_of_jsbytes("::1"),
     Stdlib=global_data.Stdlib,
     Stdlib_Hashtbl=global_data.Stdlib__Hashtbl,
     Stdlib_List=global_data.Stdlib__List,
     Stdlib_Fun=global_data.Stdlib__Fun,
     Stdlib_Int=global_data.Stdlib__Int,
     Stdlib_Array=global_data.Stdlib__Array,
     Stdlib_Bytes=global_data.Stdlib__Bytes,
     Stdlib_Printf=global_data.Stdlib__Printf,
     Stdlib_Callback=global_data.Stdlib__Callback,
     Stdlib_Printexc=global_data.Stdlib__Printexc,
     Unix_error=[248,cst_Unix_Unix_error,runtime.caml_fresh_oo_id(0)];
    caml_call2
     (Stdlib_Callback[2],cst_Unix_Unix_error$0,[0,Unix_error,0,cst$0,cst]);
    var
     _n_=[0,1],
     _o_=[0,1],
     _m_=[0,1],
     _j_=[0,1],
     _k_=[0,1],
     _l_=[0,1],
     _h_=[0,1],
     _i_=[0,1],
     _g_=[0,1],
     _f_=[0,1],
     _e_=[0,1],
     _d_=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     _c_=
      [0,
       [11,caml_string_of_jsbytes("EUNKNOWNERR "),[4,0,0,0,0]],
       caml_string_of_jsbytes("EUNKNOWNERR %d")],
     _b_=
      [0,
       [11,
        caml_string_of_jsbytes("Unix.Unix_error(Unix."),
        [2,
         0,
         [11,
          caml_string_of_jsbytes(", "),
          [3,0,[11,caml_string_of_jsbytes(", "),[3,0,[12,41,0]]]]]]],
       caml_string_of_jsbytes("Unix.Unix_error(Unix.%s, %S, %S)")];
    function _a_(param)
     {if(param[1] === Unix_error)
       {var s=param[4],s$0=param[3],e=param[2];
        if(typeof e === "number")
         {var _c__=e;
          if(34 <= _c__)
           switch(_c__)
            {case 34:var msg=cst_ESPIPE;break;
             case 35:var msg=cst_ESRCH;break;
             case 36:var msg=cst_EXDEV;break;
             case 37:var msg=cst_EWOULDBLOCK;break;
             case 38:var msg=cst_EINPROGRESS;break;
             case 39:var msg=cst_EALREADY;break;
             case 40:var msg=cst_ENOTSOCK;break;
             case 41:var msg=cst_EDESTADDRREQ;break;
             case 42:var msg=cst_EMSGSIZE;break;
             case 43:var msg=cst_EPROTOTYPE;break;
             case 44:var msg=cst_ENOPROTOOPT;break;
             case 45:var msg=cst_EPROTONOSUPPORT;break;
             case 46:var msg=cst_ESOCKTNOSUPPORT;break;
             case 47:var msg=cst_EOPNOTSUPP;break;
             case 48:var msg=cst_EPFNOSUPPORT;break;
             case 49:var msg=cst_EAFNOSUPPORT;break;
             case 50:var msg=cst_EADDRINUSE;break;
             case 51:var msg=cst_EADDRNOTAVAIL;break;
             case 52:var msg=cst_ENETDOWN;break;
             case 53:var msg=cst_ENETUNREACH;break;
             case 54:var msg=cst_ENETRESET;break;
             case 55:var msg=cst_ECONNABORTED;break;
             case 56:var msg=cst_ECONNRESET;break;
             case 57:var msg=cst_ENOBUFS;break;
             case 58:var msg=cst_EISCONN;break;
             case 59:var msg=cst_ENOTCONN;break;
             case 60:var msg=cst_ESHUTDOWN;break;
             case 61:var msg=cst_ETOOMANYREFS;break;
             case 62:var msg=cst_ETIMEDOUT;break;
             case 63:var msg=cst_ECONNREFUSED;break;
             case 64:var msg=cst_EHOSTDOWN;break;
             case 65:var msg=cst_EHOSTUNREACH;break;
             case 66:var msg=cst_ELOOP;break;
             default:var msg=cst_EOVERFLOW}
          else
           switch(_c__)
            {case 0:var msg=cst_E2BIG;break;
             case 1:var msg=cst_EACCES;break;
             case 2:var msg=cst_EAGAIN;break;
             case 3:var msg=cst_EBADF;break;
             case 4:var msg=cst_EBUSY;break;
             case 5:var msg=cst_ECHILD;break;
             case 6:var msg=cst_EDEADLK;break;
             case 7:var msg=cst_EDOM;break;
             case 8:var msg=cst_EEXIST;break;
             case 9:var msg=cst_EFAULT;break;
             case 10:var msg=cst_EFBIG;break;
             case 11:var msg=cst_EINTR;break;
             case 12:var msg=cst_EINVAL;break;
             case 13:var msg=cst_EIO;break;
             case 14:var msg=cst_EISDIR;break;
             case 15:var msg=cst_EMFILE;break;
             case 16:var msg=cst_EMLINK;break;
             case 17:var msg=cst_ENAMETOOLONG;break;
             case 18:var msg=cst_ENFILE;break;
             case 19:var msg=cst_ENODEV;break;
             case 20:var msg=cst_ENOENT;break;
             case 21:var msg=cst_ENOEXEC;break;
             case 22:var msg=cst_ENOLCK;break;
             case 23:var msg=cst_ENOMEM;break;
             case 24:var msg=cst_ENOSPC;break;
             case 25:var msg=cst_ENOSYS;break;
             case 26:var msg=cst_ENOTDIR;break;
             case 27:var msg=cst_ENOTEMPTY;break;
             case 28:var msg=cst_ENOTTY;break;
             case 29:var msg=cst_ENXIO;break;
             case 30:var msg=cst_EPERM;break;
             case 31:var msg=cst_EPIPE;break;
             case 32:var msg=cst_ERANGE;break;
             default:var msg=cst_EROFS}}
        else
         var x=e[1],msg=caml_call2(Stdlib_Printf[4],_c_,x);
        return [0,caml_call4(Stdlib_Printf[4],_b_,msg,s$0,s)]}
      return 0}
    caml_call1(Stdlib_Printexc[9],_a_);
    function handle_unix_error(f,arg)
     {try
       {var _c9_=caml_call1(f,arg);return _c9_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Unix_error)
         {var
           arg$0=exn[4],
           fun_name=exn[3],
           err=exn[2],
           _c7_=runtime.caml_check_bound(runtime.caml_sys_argv(0),0)[1];
          caml_call1(Stdlib[49],_c7_);
          caml_call1(Stdlib[49],cst$1);
          caml_call1(Stdlib[49],fun_name);
          caml_call1(Stdlib[49],cst_failed);
          if(0 < caml_ml_string_length(arg$0))
           {caml_call1(Stdlib[49],cst_on);
            caml_call1(Stdlib[49],arg$0);
            caml_call1(Stdlib[49],cst$2)}
          caml_call1(Stdlib[49],cst$3);
          var _c8_=runtime.unix_error_message(err);
          caml_call1(Stdlib[53],_c8_);
          return caml_call1(Stdlib[99],2)}
        throw exn}}
    var stdin=0,stdout=1,stderr=2;
    function read(fd,buf,ofs,len)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_read(fd,buf,ofs,len);
      return caml_call1(Stdlib[1],cst_Unix_read)}
    function write(fd,buf,ofs,len)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_write(fd,buf,ofs,len);
      return caml_call1(Stdlib[1],cst_Unix_write)}
    function single_write(fd,buf,ofs,len)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_single_write(fd,buf,ofs,len);
      return caml_call1(Stdlib[1],cst_Unix_single_write)}
    function write_substring(fd,buf,ofs,len)
     {return write(fd,caml_call1(Stdlib_Bytes[49],buf),ofs,len)}
    function single_write_substring(fd,buf,ofs,len)
     {return single_write(fd,caml_call1(Stdlib_Bytes[49],buf),ofs,len)}
    function map_file(fd,opt,kind,layout,shared,dims)
     {if(opt)var sth=opt[1],pos=sth;else var pos=_d_;
      return runtime.caml_unix_map_file_bytecode
              (fd,kind,layout,shared,dims,pos)}
    function pause(param)
     {var sigs=runtime.unix_sigprocmask(1,0);
      return runtime.unix_sigsuspend(sigs)}
    function sleep(duration){return runtime.unix_sleep(duration)}
    function is_inet6_addr(s){return 16 === caml_ml_string_length(s)?1:0}
    var
     inet_addr_any=unix_inet_addr_of_string(cst_0_0_0_0),
     inet_addr_loopback=unix_inet_addr_of_string(cst_127_0_0_1);
    try
     {var _v_=unix_inet_addr_of_string(cst$9),inet_addr_any$0=_v_}
    catch(_c6_)
     {_c6_ = caml_wrap_exception(_c6_);
      if(_c6_[1] !== Stdlib[7])throw _c6_;
      var inet_addr_any$0=inet_addr_any}
    try
     {var _u_=unix_inet_addr_of_string(cst_1),inet6_addr_loopback=_u_}
    catch(_c5_)
     {_c5_ = caml_wrap_exception(_c5_);
      if(_c5_[1] !== Stdlib[7])throw _c5_;
      var inet6_addr_loopback=inet_addr_loopback}
    function domain_of_sockaddr(param)
     {if(0 === param[0])return 0;var a=param[1];return is_inet6_addr(a)?2:1}
    function recv(fd,buf,ofs,len,flags)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_recv(fd,buf,ofs,len,flags);
      return caml_call1(Stdlib[1],cst_Unix_recv)}
    function recvfrom(fd,buf,ofs,len,flags)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_recvfrom(fd,buf,ofs,len,flags);
      return caml_call1(Stdlib[1],cst_Unix_recvfrom)}
    function send(fd,buf,ofs,len,flags)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_send(fd,buf,ofs,len,flags);
      return caml_call1(Stdlib[1],cst_Unix_send)}
    function sendto(fd,buf,ofs,len,flags,addr)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_sendto(fd,buf,ofs,len,flags,addr);
      return caml_call1(Stdlib[1],cst_Unix_sendto)}
    function send_substring(fd,buf,ofs,len,flags)
     {return send(fd,caml_call1(Stdlib_Bytes[49],buf),ofs,len,flags)}
    function sendto_substring(fd,buf,ofs,len,flags,addr)
     {return sendto(fd,caml_call1(Stdlib_Bytes[49],buf),ofs,len,flags,addr)}
    function getsockopt(fd,opt){return runtime.unix_getsockopt(0,fd,opt)}
    function setsockopt(fd,opt,v){return runtime.unix_setsockopt(0,fd,opt,v)}
    function getsockopt_int(fd,opt){return runtime.unix_getsockopt(1,fd,opt)}
    function setsockopt_int(fd,opt,v)
     {return runtime.unix_setsockopt(1,fd,opt,v)}
    function getsockopt_optint(fd,opt)
     {return runtime.unix_getsockopt(2,fd,opt)}
    function setsockopt_optint(fd,opt,v)
     {return runtime.unix_setsockopt(2,fd,opt,v)}
    function getsockopt_float(fd,opt)
     {return runtime.unix_getsockopt(3,fd,opt)}
    function setsockopt_float(fd,opt,v)
     {return runtime.unix_setsockopt(3,fd,opt,v)}
    function getsockopt_error(fd){return runtime.unix_getsockopt(4,fd,0)}
    function getaddrinfo(node,service,opts)
     {try
       {var
         _cV_=runtime.unix_getaddrinfo(node,service,opts),
         _cW_=caml_call1(Stdlib_List[9],_cV_);
        return _cW_}
      catch(_cX_)
       {_cX_ = caml_wrap_exception(_cX_);
        if(_cX_[1] === Stdlib[6])
         {var
           opt_socktype=[0,0],
           opt_protocol=[0,0],
           opt_passive=[0,0],
           _cI_=
            function(param)
             {if(typeof param === "number")
               {if(2 === param){opt_passive[1] = 1;return 0}}
              else
               switch(param[0])
                {case 1:var s=param[1];opt_socktype[1] = [0,s];return 0;
                 case 2:var p=param[1];opt_protocol[1] = p;return 0
                 }
              return 0};
          caml_call2(Stdlib_List[17],_cI_,opts);
          var
           get_port=
            function(ty,kind)
             {if(caml_string_equal(service,cst$4))return [0,[0,ty,0],0];
              try
               {var _c2_=[0,[0,ty,runtime.caml_int_of_string(service)],0];
                return _c2_}
              catch(_c3_)
               {_c3_ = caml_wrap_exception(_c3_);
                if(_c3_[1] === Stdlib[7])
                 try
                  {var
                    _c1_=
                     [0,[0,ty,runtime.unix_getservbyname(service,kind)[3]],0];
                   return _c1_}
                 catch(_c4_)
                  {_c4_ = caml_wrap_exception(_c4_);
                   if(_c4_ === Stdlib[8])return 0;
                   throw _c4_}
                throw _c3_}},
           _cJ_=opt_socktype[1];
          if(_cJ_)
           var
            _cK_=_cJ_[1],
            _cL_=
             1 === _cK_
              ?get_port(1,cst_udp)
              :_cK_
                ?caml_string_equal(service,cst$6)?[0,[0,_cK_,0],0]:0
                :get_port(0,cst_tcp),
            ports=_cL_;
          else
           var
            _cT_=get_port(1,cst_udp$0),
            _cU_=get_port(0,cst_tcp$0),
            ports=caml_call2(Stdlib[37],_cU_,_cT_);
          if(caml_string_equal(node,cst$5))
           var
            addresses=
             caml_call2(Stdlib_List[36],2,opts)
              ?[0,[0,inet_addr_any,cst_0_0_0_0$0],0]
              :[0,[0,inet_addr_loopback,cst_127_0_0_1$0],0];
          else
           try
            {var
              _cS_=[0,[0,unix_inet_addr_of_string(node),node],0],
              addresses=_cS_}
           catch(_cZ_)
            {_cZ_ = caml_wrap_exception(_cZ_);
             if(_cZ_[1] !== Stdlib[7])throw _cZ_;
             try
              {var
                he=runtime.unix_gethostbyname(node),
                _cP_=caml_call1(Stdlib_Array[11],he[4]),
                _cQ_=function(a){return [0,a,he[1]]},
                _cR_=caml_call2(Stdlib_List[19],_cQ_,_cP_),
                _cO_=_cR_}
             catch(_c0_)
              {_c0_ = caml_wrap_exception(_c0_);
               if(_c0_ !== Stdlib[8])throw _c0_;
               var _cO_=0}
             var addresses=_cO_}
          var
           _cM_=
            function(param)
             {var port=param[2],ty=param[1];
              function _cY_(param)
               {var name=param[2],addr=param[1];
                return [0,1,ty,opt_protocol[1],[1,addr,port],name]}
              return caml_call2(Stdlib_List[19],_cY_,addresses)},
           _cN_=caml_call2(Stdlib_List[19],_cM_,ports);
          return caml_call1(Stdlib_List[14],_cN_)}
        throw _cX_}}
    function getnameinfo(addr,opts)
     {try
       {var _cE_=runtime.unix_getnameinfo(addr,opts);return _cE_}
      catch(_cF_)
       {_cF_ = caml_wrap_exception(_cF_);
        if(_cF_[1] === Stdlib[6])
         {if(0 === addr[0]){var f=addr[1];return [0,cst$7,f]}
          var p=addr[2],a=addr[1];
          try
           {if(caml_call2(Stdlib_List[36],1,opts))throw Stdlib[8];
            var _cD_=runtime.unix_gethostbyaddr(a)[1],hostname=_cD_}
          catch(_cH_)
           {_cH_ = caml_wrap_exception(_cH_);
            if(_cH_ !== Stdlib[8])throw _cH_;
            if(caml_call2(Stdlib_List[36],2,opts))throw Stdlib[8];
            var hostname=runtime.unix_string_of_inet_addr(a)}
          try
           {if(caml_call2(Stdlib_List[36],3,opts))throw Stdlib[8];
            var
             kind=caml_call2(Stdlib_List[36],4,opts)?cst_udp$1:cst_tcp$1,
             _cC_=runtime.unix_getservbyport(p,kind)[1],
             service=_cC_}
          catch(_cG_)
           {_cG_ = caml_wrap_exception(_cG_);
            if(_cG_ !== Stdlib[8])throw _cG_;
            var service=caml_call1(Stdlib_Int[12],p)}
          return [0,hostname,service]}
        throw _cF_}}
    function waitpid_non_intr(pid)
     {for(;;)
       try
        {var _cA_=runtime.unix_waitpid(0,pid);return _cA_}
       catch(_cB_)
        {_cB_ = caml_wrap_exception(_cB_);
         if(_cB_[1] === Unix_error)
          {var _cz_=_cB_[2];
           if(typeof _cz_ === "number" && 11 === _cz_)continue}
         throw _cB_}}
    function system(cmd)
     {var pid=runtime.unix_spawn(shell,[0,shell,cst_c,cmd],0,0,[0,0,1,2]);
      return waitpid_non_intr(pid)[2]}
    function create_process_gen
     (cmd,args,optenv,new_stdin,new_stdout,new_stderr)
     {var toclose=[0,0];
      function close_after(param)
       {var _cv_=toclose[1];
        function _cw_(fd)
         {try
           {var _cx_=runtime.unix_close(fd);return _cx_}
          catch(_cy_)
           {_cy_ = caml_wrap_exception(_cy_);
            if(_cy_[1] === Unix_error)return 0;
            throw _cy_}}
        return caml_call2(Stdlib_List[17],_cw_,_cv_)}
      function file_descr_not_standard(fd)
       {var fd$0=fd;
        for(;;)
         {if(3 <= fd$0)return fd$0;
          var fd$1=runtime.unix_dup(_e_,fd$0);
          toclose[1] = [0,fd$1,toclose[1]];
          var fd$0=fd$1;
          continue}}
      var
       _cr_=2 === new_stderr?2:file_descr_not_standard(new_stderr),
       _cs_=1 === new_stdout?1:file_descr_not_standard(new_stdout),
       _ct_=0 === new_stdin?0:file_descr_not_standard(new_stdin),
       redirections=[0,_ct_,_cs_,_cr_];
      function _cu_(param)
       {return runtime.unix_spawn(cmd,args,optenv,1,redirections)}
      return caml_call2(Stdlib_Fun[4],close_after,_cu_)}
    function create_process(cmd,args,new_stdin,new_stdout,new_stderr)
     {return create_process_gen(cmd,args,0,new_stdin,new_stdout,new_stderr)}
    function create_process_env(cmd,args,env,new_stdin,new_stdout,new_stderr)
     {return create_process_gen
              (cmd,args,[0,env],new_stdin,new_stdout,new_stderr)}
    var popen_processes=caml_call2(Stdlib_Hashtbl[1],0,7);
    function open_proc(prog,args,envopt,proc,input,output,error)
     {var pid=create_process_gen(prog,args,envopt,input,output,error);
      return caml_call3(Stdlib_Hashtbl[5],popen_processes,proc,pid)}
    function open_process_args_in(prog,args)
     {var
       match=runtime.unix_pipe(_f_,0),
       in_write=match[2],
       in_read=match[1],
       inchan=runtime.unix_inchannel_of_filedescr(in_read);
      try
       {open_proc(prog,args,0,[1,inchan],stdin,in_write,stderr)}
      catch(e)
       {e = caml_wrap_exception(e);
        caml_call1(Stdlib[93],inchan);
        runtime.unix_close(in_write);
        throw e}
      runtime.unix_close(in_write);
      return inchan}
    function open_process_args_out(prog,args)
     {var
       match=runtime.unix_pipe(_g_,0),
       out_write=match[2],
       out_read=match[1],
       outchan=runtime.unix_outchannel_of_filedescr(out_write);
      try
       {open_proc(prog,args,0,[2,outchan],out_read,stdout,stderr)}
      catch(e)
       {e = caml_wrap_exception(e);
        caml_call1(Stdlib[76],outchan);
        runtime.unix_close(out_read);
        throw e}
      runtime.unix_close(out_read);
      return outchan}
    function open_process_args(prog,args)
     {var match=runtime.unix_pipe(_h_,0),in_write=match[2],in_read=match[1];
      try
       {var match$0=runtime.unix_pipe(_i_,0)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        throw e}
      var
       out_write=match$0[2],
       out_read=match$0[1],
       inchan=runtime.unix_inchannel_of_filedescr(in_read),
       outchan=runtime.unix_outchannel_of_filedescr(out_write);
      try
       {open_proc(prog,args,0,[0,inchan,outchan],out_read,in_write,stderr)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(out_read);
        runtime.unix_close(out_write);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        throw e}
      runtime.unix_close(out_read);
      runtime.unix_close(in_write);
      return [0,inchan,outchan]}
    function open_process_args_full(prog,args,env)
     {var match=runtime.unix_pipe(_j_,0),in_write=match[2],in_read=match[1];
      try
       {var match$0=runtime.unix_pipe(_k_,0)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        throw e}
      var out_write=match$0[2],out_read=match$0[1];
      try
       {var match$1=runtime.unix_pipe(_l_,0)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        runtime.unix_close(out_read);
        runtime.unix_close(out_write);
        throw e}
      var
       err_write=match$1[2],
       err_read=match$1[1],
       inchan=runtime.unix_inchannel_of_filedescr(in_read),
       outchan=runtime.unix_outchannel_of_filedescr(out_write),
       errchan=runtime.unix_inchannel_of_filedescr(err_read);
      try
       {open_proc
         (prog,
          args,
          [0,env],
          [3,inchan,outchan,errchan],
          out_read,
          in_write,
          err_write)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(out_read);
        runtime.unix_close(out_write);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        runtime.unix_close(err_read);
        runtime.unix_close(err_write);
        throw e}
      runtime.unix_close(out_read);
      runtime.unix_close(in_write);
      runtime.unix_close(err_write);
      return [0,inchan,outchan,errchan]}
    function open_process_shell(fn,cmd)
     {return caml_call2(fn,shell,[0,shell,cst_c$0,cmd])}
    function open_process_in(cmd)
     {return open_process_shell(open_process_args_in,cmd)}
    function open_process_out(cmd)
     {return open_process_shell(open_process_args_out,cmd)}
    function open_process(cmd)
     {return open_process_shell(open_process_args,cmd)}
    function open_process_full(cmd)
     {return open_process_shell(open_process_args_full,cmd)}
    function find_proc_id(fun_name,proc)
     {try
       {var _cp_=caml_call2(Stdlib_Hashtbl[6],popen_processes,proc);
        return _cp_}
      catch(_cq_)
       {_cq_ = caml_wrap_exception(_cq_);
        if(_cq_ === Stdlib[8])throw [0,Unix_error,3,fun_name,cst$8];
        throw _cq_}}
    function remove_proc_id(proc)
     {return caml_call2(Stdlib_Hashtbl[10],popen_processes,proc)}
    function process_in_pid(inchan)
     {return find_proc_id(cst_process_in_pid,[1,inchan])}
    function process_out_pid(outchan)
     {return find_proc_id(cst_process_out_pid,[2,outchan])}
    function process_pid(param)
     {var outchan=param[2],inchan=param[1];
      return find_proc_id(cst_process_pid,[0,inchan,outchan])}
    function process_full_pid(param)
     {var errchan=param[3],outchan=param[2],inchan=param[1];
      return find_proc_id(cst_process_full_pid,[3,inchan,outchan,errchan])}
    function close_process_in(inchan)
     {var proc=[1,inchan],pid=find_proc_id(cst_close_process_in,proc);
      remove_proc_id(proc);
      caml_call1(Stdlib[93],inchan);
      return waitpid_non_intr(pid)[2]}
    function close_process_out(outchan)
     {var proc=[2,outchan],pid=find_proc_id(cst_close_process_out,proc);
      remove_proc_id(proc);
      try
       {caml_call1(Stdlib[76],outchan)}
      catch(_co_)
       {_co_ = caml_wrap_exception(_co_);if(_co_[1] !== Stdlib[11])throw _co_}
      return waitpid_non_intr(pid)[2]}
    function close_process(param)
     {var
       outchan=param[2],
       inchan=param[1],
       proc=[0,inchan,outchan],
       pid=find_proc_id(cst_close_process,proc);
      remove_proc_id(proc);
      caml_call1(Stdlib[93],inchan);
      try
       {caml_call1(Stdlib[76],outchan)}
      catch(_cn_)
       {_cn_ = caml_wrap_exception(_cn_);if(_cn_[1] !== Stdlib[11])throw _cn_}
      return waitpid_non_intr(pid)[2]}
    function close_process_full(param)
     {var
       errchan=param[3],
       outchan=param[2],
       inchan=param[1],
       proc=[3,inchan,outchan,errchan],
       pid=find_proc_id(cst_close_process_full,proc);
      remove_proc_id(proc);
      caml_call1(Stdlib[93],inchan);
      try
       {caml_call1(Stdlib[76],outchan)}
      catch(_cm_)
       {_cm_ = caml_wrap_exception(_cm_);if(_cm_[1] !== Stdlib[11])throw _cm_}
      caml_call1(Stdlib[93],errchan);
      return waitpid_non_intr(pid)[2]}
    function open_connection(sockaddr)
     {var sock=runtime.unix_socket(_m_,domain_of_sockaddr(sockaddr),0,0);
      try
       {runtime.unix_connect(sock,sockaddr);
        var
         _ck_=runtime.unix_outchannel_of_filedescr(sock),
         _cl_=[0,runtime.unix_inchannel_of_filedescr(sock),_ck_];
        return _cl_}
      catch(exn)
       {exn = caml_wrap_exception(exn);runtime.unix_close(sock);throw exn}}
    function shutdown_connection(inchan)
     {return runtime.unix_shutdown(caml_channel_descriptor(inchan),1)}
    function accept_non_intr(s)
     {for(;;)
       try
        {var _ci_=runtime.unix_accept(_n_,s);return _ci_}
       catch(_cj_)
        {_cj_ = caml_wrap_exception(_cj_);
         if(_cj_[1] === Unix_error)
          {var _ch_=_cj_[2];
           if(typeof _ch_ === "number" && 11 === _ch_)continue}
         throw _cj_}}
    function establish_server(server_fun,sockaddr)
     {var sock=runtime.unix_socket(_o_,domain_of_sockaddr(sockaddr),0,0);
      runtime.unix_setsockopt(0,sock,2,1);
      runtime.unix_bind(sock,sockaddr);
      runtime.unix_listen(sock,5);
      for(;;)
       {var match=accept_non_intr(sock),s=match[1],id=runtime.unix_fork(0);
        if(0 === id)
         {if(0 !== runtime.unix_fork(0))runtime.unix_exit(0);
          runtime.unix_close(sock);
          var
           inchan=runtime.unix_inchannel_of_filedescr(s),
           outchan=runtime.unix_outchannel_of_filedescr(s);
          caml_call2(server_fun,inchan,outchan);
          caml_call1(Stdlib[99],0)}
        else
         {runtime.unix_close(s);waitpid_non_intr(id)}
        continue}}
    function setsid(_cg_){return runtime.unix_setsid(_cg_)}
    function tcflow(_cf_,_ce_){return runtime.unix_tcflow(_cf_,_ce_)}
    function tcflush(_cd_,_cc_){return runtime.unix_tcflush(_cd_,_cc_)}
    function tcdrain(_cb_){return runtime.unix_tcdrain(_cb_)}
    function tcsendbreak(_ca_,_b$_)
     {return runtime.unix_tcsendbreak(_ca_,_b$_)}
    function tcsetattr(_b__,_b9_,_b8_)
     {return runtime.unix_tcsetattr(_b__,_b9_,_b8_)}
    function tcgetattr(_b7_){return runtime.unix_tcgetattr(_b7_)}
    function getservbyport(_b6_,_b5_)
     {return runtime.unix_getservbyport(_b6_,_b5_)}
    function getservbyname(_b4_,_b3_)
     {return runtime.unix_getservbyname(_b4_,_b3_)}
    function getprotobynumber(_b2_)
     {return runtime.unix_getprotobynumber(_b2_)}
    function getprotobyname(_b1_){return runtime.unix_getprotobyname(_b1_)}
    function gethostbyaddr(_b0_){return runtime.unix_gethostbyaddr(_b0_)}
    function gethostbyname(_bZ_){return runtime.unix_gethostbyname(_bZ_)}
    function gethostname(_bY_){return runtime.unix_gethostname(_bY_)}
    function getpeername(_bX_){return runtime.unix_getpeername(_bX_)}
    function getsockname(_bW_){return runtime.unix_getsockname(_bW_)}
    function shutdown(_bV_,_bU_){return runtime.unix_shutdown(_bV_,_bU_)}
    function listen(_bT_,_bS_){return runtime.unix_listen(_bT_,_bS_)}
    function connect(_bR_,_bQ_){return runtime.unix_connect(_bR_,_bQ_)}
    function bind(_bP_,_bO_){return runtime.unix_bind(_bP_,_bO_)}
    function accept(_bN_,_bM_){return runtime.unix_accept(_bN_,_bM_)}
    function socketpair(_bL_,_bK_,_bJ_,_bI_)
     {return runtime.unix_socketpair(_bL_,_bK_,_bJ_,_bI_)}
    function socket(_bH_,_bG_,_bF_,_bE_)
     {return runtime.unix_socket(_bH_,_bG_,_bF_,_bE_)}
    function string_of_inet_addr(_bD_)
     {return runtime.unix_string_of_inet_addr(_bD_)}
    function inet_addr_of_string(_bC_){return unix_inet_addr_of_string(_bC_)}
    function getgrgid(_bB_){return runtime.unix_getgrgid(_bB_)}
    var getpwuid=runtime.unix_getpwuid;
    function getgrnam(_bA_){return runtime.unix_getgrnam(_bA_)}
    function getpwnam(_bz_){return runtime.unix_getpwnam(_bz_)}
    function getlogin(_by_){return runtime.unix_getlogin(_by_)}
    function initgroups(_bx_,_bw_){return runtime.unix_initgroups(_bx_,_bw_)}
    function setgroups(_bv_){return runtime.unix_setgroups(_bv_)}
    function getgroups(_bu_){return runtime.unix_getgroups(_bu_)}
    function setgid(_bt_){return runtime.unix_setgid(_bt_)}
    function getegid(_bs_){return runtime.unix_getegid(_bs_)}
    function getgid(_br_){return runtime.unix_getgid(_br_)}
    function setuid(_bq_){return runtime.unix_setuid(_bq_)}
    function geteuid(_bp_){return runtime.unix_geteuid(_bp_)}
    var getuid=runtime.unix_getuid;
    function setitimer(_bo_,_bn_){return runtime.unix_setitimer(_bo_,_bn_)}
    function getitimer(_bm_){return runtime.unix_getitimer(_bm_)}
    function utimes(_bl_,_bk_,_bj_)
     {return runtime.unix_utimes(_bl_,_bk_,_bj_)}
    function times(_bi_){return runtime.unix_times(_bi_)}
    function sleepf(_bh_){return runtime.unix_sleep(_bh_)}
    function alarm(_bg_){return runtime.unix_alarm(_bg_)}
    var
     mktime=runtime.unix_mktime,
     localtime=runtime.unix_localtime,
     gmtime=runtime.unix_gmtime;
    function gettimeofday(_bf_){return runtime.unix_gettimeofday(_bf_)}
    function time(_be_){return runtime.unix_time(_be_)}
    function sigsuspend(_bd_){return runtime.unix_sigsuspend(_bd_)}
    function sigpending(_bc_){return runtime.unix_sigpending(_bc_)}
    function sigprocmask(_bb_,_ba_)
     {return runtime.unix_sigprocmask(_bb_,_ba_)}
    function kill(_a$_,_a__){return runtime.unix_kill(_a$_,_a__)}
    function lockf(_a9_,_a8_,_a7_){return runtime.unix_lockf(_a9_,_a8_,_a7_)}
    function select(_a6_,_a5_,_a4_,_a3_)
     {return runtime.unix_select(_a6_,_a5_,_a4_,_a3_)}
    var
     readlink=runtime.unix_readlink,
     has_symlink=runtime.unix_has_symlink,
     symlink=runtime.unix_symlink;
    function mkfifo(_a2_,_a1_){return runtime.unix_mkfifo(_a2_,_a1_)}
    function pipe(_a0_,_aZ_){return runtime.unix_pipe(_a0_,_aZ_)}
    function closedir(_aY_){return runtime.unix_closedir(_aY_)}
    function rewinddir(_aX_){return runtime.unix_rewinddir(_aX_)}
    function readdir(_aW_){return runtime.unix_readdir(_aW_)}
    function opendir(_aV_){return runtime.unix_opendir(_aV_)}
    function chroot(_aU_){return runtime.unix_chroot(_aU_)}
    function getcwd(_aT_){return runtime.unix_getcwd(_aT_)}
    function chdir(_aS_){return runtime.unix_chdir(_aS_)}
    var rmdir=runtime.unix_rmdir,mkdir=runtime.unix_mkdir;
    function clear_close_on_exec(_aR_)
     {return runtime.unix_clear_close_on_exec(_aR_)}
    function set_close_on_exec(_aQ_)
     {return runtime.unix_set_close_on_exec(_aQ_)}
    function clear_nonblock(_aP_){return runtime.unix_clear_nonblock(_aP_)}
    function set_nonblock(_aO_){return runtime.unix_set_nonblock(_aO_)}
    function dup2(_aN_,_aM_,_aL_){return runtime.unix_dup2(_aN_,_aM_,_aL_)}
    function dup(_aK_,_aJ_){return runtime.unix_dup(_aK_,_aJ_)}
    function access(_aI_,_aH_){return runtime.unix_access(_aI_,_aH_)}
    function umask(_aG_){return runtime.unix_umask(_aG_)}
    function fchown(_aF_,_aE_,_aD_)
     {return runtime.unix_fchown(_aF_,_aE_,_aD_)}
    function chown(_aC_,_aB_,_aA_){return runtime.unix_chown(_aC_,_aB_,_aA_)}
    function fchmod(_az_,_ay_){return runtime.unix_fchmod(_az_,_ay_)}
    function chmod(_ax_,_aw_){return runtime.unix_chmod(_ax_,_aw_)}
    function realpath(_av_){return runtime.unix_realpath(_av_)}
    function link(_au_,_at_,_as_){return runtime.unix_link(_au_,_at_,_as_)}
    function rename(_ar_,_aq_){return runtime.unix_rename(_ar_,_aq_)}
    var unlink=runtime.unix_unlink;
    function _p_(_ap_){return runtime.unix_fstat_64(_ap_)}
    function _q_(_ao_){return runtime.unix_lstat_64(_ao_)}
    function _r_(_an_){return runtime.unix_stat_64(_an_)}
    function _s_(_am_,_al_){return runtime.unix_ftruncate_64(_am_,_al_)}
    function _t_(_ak_,_aj_){return runtime.unix_truncate_64(_ak_,_aj_)}
    var
     LargeFile=
      [0,
       function(_ai_,_ah_,_ag_){return runtime.unix_lseek_64(_ai_,_ah_,_ag_)},
       _t_,
       _s_,
       _r_,
       _q_,
       _p_],
     isatty=runtime.unix_isatty;
    function fstat(_af_){return runtime.unix_fstat(_af_)}
    var lstat=runtime.unix_lstat,stat=runtime.unix_stat;
    function ftruncate(_ae_,_ad_){return runtime.unix_ftruncate(_ae_,_ad_)}
    function truncate(_ac_,_ab_){return runtime.unix_truncate(_ac_,_ab_)}
    function lseek(_aa_,_$_,___){return runtime.unix_lseek(_aa_,_$_,___)}
    var
     descr_of_out_channel=caml_channel_descriptor,
     descr_of_in_channel=caml_channel_descriptor;
    function out_channel_of_descr(_Z_)
     {return runtime.unix_outchannel_of_filedescr(_Z_)}
    function in_channel_of_descr(_Y_)
     {return runtime.unix_inchannel_of_filedescr(_Y_)}
    function fsync(_X_){return runtime.unix_fsync(_X_)}
    function close(_W_){return runtime.unix_close(_W_)}
    function openfile(_V_,_U_,_T_){return runtime.unix_open(_V_,_U_,_T_)}
    function nice(_S_){return runtime.unix_nice(_S_)}
    function getppid(_R_){return runtime.unix_getppid(_R_)}
    function getpid(_Q_){return runtime.unix_getpid(_Q_)}
    function exit(_P_){return runtime.unix_exit(_P_)}
    function waitpid(_O_,_N_){return runtime.unix_waitpid(_O_,_N_)}
    function wait(_M_){return runtime.unix_wait(_M_)}
    function fork(_L_){return runtime.unix_fork(_L_)}
    function execvpe(_K_,_J_,_I_){return runtime.unix_execvpe(_K_,_J_,_I_)}
    function execvp(_H_,_G_){return runtime.unix_execvp(_H_,_G_)}
    function execve(_F_,_E_,_D_){return runtime.unix_execve(_F_,_E_,_D_)}
    function execv(_C_,_B_){return runtime.unix_execv(_C_,_B_)}
    function putenv(_A_,_z_){return runtime.unix_putenv(_A_,_z_)}
    var
     unsafe_getenv=runtime.caml_sys_unsafe_getenv,
     getenv=runtime.caml_sys_getenv;
    function unsafe_environment(_y_)
     {return runtime.unix_environment_unsafe(_y_)}
    function environment(_x_){return runtime.unix_environment(_x_)}
    function error_message(_w_){return runtime.unix_error_message(_w_)}
    var
     include=
      [0,
       Unix_error,
       error_message,
       handle_unix_error,
       environment,
       unsafe_environment,
       getenv,
       unsafe_getenv,
       putenv,
       execv,
       execve,
       execvp,
       execvpe,
       fork,
       wait,
       waitpid,
       system,
       exit,
       getpid,
       getppid,
       nice,
       stdin,
       stdout,
       stderr,
       openfile,
       close,
       fsync,
       read,
       write,
       single_write,
       write_substring,
       single_write_substring,
       in_channel_of_descr,
       out_channel_of_descr,
       descr_of_in_channel,
       descr_of_out_channel,
       lseek,
       truncate,
       ftruncate,
       stat,
       lstat,
       fstat,
       isatty,
       LargeFile,
       map_file,
       unlink,
       rename,
       link,
       realpath,
       chmod,
       fchmod,
       chown,
       fchown,
       umask,
       access,
       dup,
       dup2,
       set_nonblock,
       clear_nonblock,
       set_close_on_exec,
       clear_close_on_exec,
       mkdir,
       rmdir,
       chdir,
       getcwd,
       chroot,
       opendir,
       readdir,
       rewinddir,
       closedir,
       pipe,
       mkfifo,
       create_process,
       create_process_env,
       open_process_in,
       open_process_out,
       open_process,
       open_process_full,
       open_process_args_in,
       open_process_args_out,
       open_process_args,
       open_process_args_full,
       process_in_pid,
       process_out_pid,
       process_pid,
       process_full_pid,
       close_process_in,
       close_process_out,
       close_process,
       close_process_full,
       symlink,
       has_symlink,
       readlink,
       select,
       lockf,
       kill,
       sigprocmask,
       sigpending,
       sigsuspend,
       pause,
       time,
       gettimeofday,
       gmtime,
       localtime,
       mktime,
       alarm,
       sleep,
       sleepf,
       times,
       utimes,
       getitimer,
       setitimer,
       getuid,
       geteuid,
       setuid,
       getgid,
       getegid,
       setgid,
       getgroups,
       setgroups,
       initgroups,
       getlogin,
       getpwnam,
       getgrnam,
       getpwuid,
       getgrgid,
       inet_addr_of_string,
       string_of_inet_addr,
       inet_addr_any,
       inet_addr_loopback,
       inet_addr_any$0,
       inet6_addr_loopback,
       is_inet6_addr,
       socket,
       domain_of_sockaddr,
       socketpair,
       accept,
       bind,
       connect,
       listen,
       shutdown,
       getsockname,
       getpeername,
       recv,
       recvfrom,
       send,
       send_substring,
       sendto,
       sendto_substring,
       getsockopt,
       setsockopt,
       getsockopt_int,
       setsockopt_int,
       getsockopt_optint,
       setsockopt_optint,
       getsockopt_float,
       setsockopt_float,
       getsockopt_error,
       open_connection,
       shutdown_connection,
       establish_server,
       gethostname,
       gethostbyname,
       gethostbyaddr,
       getprotobyname,
       getprotobynumber,
       getservbyname,
       getservbyport,
       getaddrinfo,
       getnameinfo,
       tcgetattr,
       tcsetattr,
       tcsendbreak,
       tcdrain,
       tcflush,
       tcflow,
       setsid];
    caml_register_global(136,include,"Unix");
    var
     UnixLabels=
      [0,
       Unix_error,
       error_message,
       handle_unix_error,
       environment,
       unsafe_environment,
       getenv,
       unsafe_getenv,
       putenv,
       execv,
       execve,
       execvp,
       execvpe,
       fork,
       wait,
       waitpid,
       system,
       exit,
       getpid,
       getppid,
       nice,
       stdin,
       stdout,
       stderr,
       openfile,
       close,
       fsync,
       read,
       write,
       single_write,
       write_substring,
       single_write_substring,
       in_channel_of_descr,
       out_channel_of_descr,
       descr_of_in_channel,
       descr_of_out_channel,
       lseek,
       truncate,
       ftruncate,
       stat,
       lstat,
       fstat,
       isatty,
       LargeFile,
       map_file,
       unlink,
       rename,
       link,
       realpath,
       chmod,
       fchmod,
       chown,
       fchown,
       umask,
       access,
       dup,
       dup2,
       set_nonblock,
       clear_nonblock,
       set_close_on_exec,
       clear_close_on_exec,
       mkdir,
       rmdir,
       chdir,
       getcwd,
       chroot,
       opendir,
       readdir,
       rewinddir,
       closedir,
       pipe,
       mkfifo,
       create_process,
       create_process_env,
       open_process_in,
       open_process_out,
       open_process,
       open_process_full,
       open_process_args_in,
       open_process_args_out,
       open_process_args,
       open_process_args_full,
       process_in_pid,
       process_out_pid,
       process_pid,
       process_full_pid,
       close_process_in,
       close_process_out,
       close_process,
       close_process_full,
       symlink,
       has_symlink,
       readlink,
       select,
       lockf,
       kill,
       sigprocmask,
       sigpending,
       sigsuspend,
       pause,
       time,
       gettimeofday,
       gmtime,
       localtime,
       mktime,
       alarm,
       sleep,
       sleepf,
       times,
       utimes,
       getitimer,
       setitimer,
       getuid,
       geteuid,
       setuid,
       getgid,
       getegid,
       setgid,
       getgroups,
       setgroups,
       initgroups,
       getlogin,
       getpwnam,
       getgrnam,
       getpwuid,
       getgrgid,
       inet_addr_of_string,
       string_of_inet_addr,
       inet_addr_any,
       inet_addr_loopback,
       inet_addr_any$0,
       inet6_addr_loopback,
       is_inet6_addr,
       socket,
       domain_of_sockaddr,
       socketpair,
       accept,
       bind,
       connect,
       listen,
       shutdown,
       getsockname,
       getpeername,
       recv,
       recvfrom,
       send,
       send_substring,
       sendto,
       sendto_substring,
       getsockopt,
       setsockopt,
       getsockopt_int,
       setsockopt_int,
       getsockopt_optint,
       setsockopt_optint,
       getsockopt_float,
       setsockopt_float,
       getsockopt_error,
       open_connection,
       shutdown_connection,
       establish_server,
       gethostname,
       gethostbyname,
       gethostbyaddr,
       getprotobyname,
       getprotobynumber,
       getservbyname,
       getservbyport,
       getaddrinfo,
       getnameinfo,
       tcgetattr,
       tcsetattr,
       tcsendbreak,
       tcdrain,
       tcflush,
       tcflow,
       setsid];
    caml_register_global(137,UnixLabels,"UnixLabels");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ1bml4LmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
