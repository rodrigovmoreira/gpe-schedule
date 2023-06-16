import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class HeaderInterceptor implements HttpInterceptor {

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authorization = 'Basic YWRtaW46UmRnMDEyMDIz';

    return next.handle(httpRequest.clone({ setHeaders: { authorization } }));

  }

}
