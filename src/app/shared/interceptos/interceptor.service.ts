import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class Interceptor implements HttpInterceptor {

  private token  = 'Basic YWRtaW46UmRnMDEyMDIz';

  intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({  setHeaders: { Authorization: this.token }})

    //console.log(request)

    return next.handle(request);
    //return next.handle(httpRequest.clone({ setHeaders: { Authorization: this.token } }));

  }

}
