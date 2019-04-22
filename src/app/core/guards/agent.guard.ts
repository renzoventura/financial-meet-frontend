import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AgentGuard {

  constructor(private authService : AuthService, private router : Router){}

  loginUrl = '/login';
  isAgent: boolean = false;
  currentUserRoles = [];

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.authService.getUserRole().subscribe(
      res => {
        switch (res[0]) {
          case this.authService.ROLE_AGENT: {
            this.router.navigate([state.url])
            this.isAgent = true;
            break
          } default: {
            this.isAgent = false;
            break
          }
        }
      }
    )
    return this.isAgent;
  }

}