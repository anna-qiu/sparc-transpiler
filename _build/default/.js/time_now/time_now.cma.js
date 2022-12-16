(function(globalThis)
   {"use strict";
    var runtime=globalThis.jsoo_runtime;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_clock_gettime_CLOCK_REALTI=
      runtime.caml_string_of_jsbytes("clock_gettime(CLOCK_REALTIME) failed"),
     Base_Int63=global_data.Base__Int63,
     Base=global_data.Base;
    function nanoseconds_since_unix_epoch(param)
     {var t=runtime.time_now_nanoseconds_since_unix_epoch_or_zero(0);
      return caml_call2(Base_Int63[17],t,Base_Int63[38])
              ?t
              :caml_call1(Base[200],cst_clock_gettime_CLOCK_REALTI)}
    var Time_now=[0,nanoseconds_since_unix_epoch];
    runtime.caml_register_global(3,Time_now,"Time_now");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ0aW1lX25vdy5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
