import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
   const authToken = 'MY_SECRET_TOKEN_123';

  //  console.log('🚀 HTTP Request Outbound:', req.method, req.url, req.body);
   const reqclone = req.clone({setHeaders:{
    'x-Custom-Header':'angular-18-clinet Himanshu',
    'Authorization':`Bearer ${authToken}`
   }})
   console.log('clone req',reqclone.headers)
  return next(reqclone).pipe(
    catchError((error)=>{
      console.log("error", error)
      if(error.status === 400){
        console.log("getting error 400")
      }
      return throwError(()=> error)
    })
  ).pipe(retry(reqclone.method === 'GET' ? 2:0))
};
