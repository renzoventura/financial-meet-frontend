import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserGuard {

  constructor(private authService: AuthService, private router: Router) { }

  loginUrl = '/login';

  isUser: boolean = false;
  currentUserRoles = [];

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.authService.getUserRole().subscribe(
      res => {
        switch (res[0]) {
          case this.authService.ROLE_USER: {
            this.router.navigate([state.url])
            this.isUser = true;
            break
          } default: {
            this.isUser = false;
            break
          }
        }
      }
    )
    return this.isUser;
  }



}
