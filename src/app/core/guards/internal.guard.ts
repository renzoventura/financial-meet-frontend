import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InternalGuard {

  constructor(private authService: AuthService, private router: Router) { }

  loginUrl = '/login';
  isInternal: boolean = false;
  currentUserRoles = [];

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.authService.getUserRole().subscribe(
      res => {
        switch (res[0]) {
          case this.authService.ROLE_INTERNAL: {
            this.router.navigate([state.url])
            this.isInternal = true;
            break
          } default: {
            this.isInternal = false;
            break
          }
        }
      },
      err => {
        console.log("Session finished")
        console.log(err)
        this.router.navigate([this.loginUrl])
        this.isInternal = false;
      }
    )
    return this.isInternal;
  }

}