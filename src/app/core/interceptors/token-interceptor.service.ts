import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let authService = this.injector.get(AuthService)
    let avoidUrl = [authService.REGISTER_USER_URL, authService.REGISTER_AGENT_URL, authService.REGISTER_INTERNAL_URL, authService.LOGIN_URL]
    if (avoidUrl.includes(req.url)) {
      //console.log("this is auth: " + req.url)
      return next.handle(req)

    } else {
      //send edited request
      //console.log(req.url + " is not auth. " + "Intercepting...")
      let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authService.getToken()}`
        }
      })
      return next.handle(tokenizedReq)
    }
  }


}
