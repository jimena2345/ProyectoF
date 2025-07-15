import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Suponiendo que el token se guarda en localStorage
    const token = localStorage.getItem('token');

    if (token) {
      // Clona la solicitud y agrega el header Authorization
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(authReq);
    }

    // Si no hay token, pasa la solicitud original
    return next.handle(req);
  }
}
