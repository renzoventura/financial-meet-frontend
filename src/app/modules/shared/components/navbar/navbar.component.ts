import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private authServer: AuthService) {}

  
  isUserSideBar = false;
  isAgentSideBar = false;
  isInternalSideBar = false;

  ngOnInit() {
    console.log("LOADING SIDE BAR");
    if (!!localStorage.getItem(this.authServer.TOKEN)) {
      this.loadSidebarBasedOnRole()
    }
  }

  loadSidebarBasedOnRole() {
    this.authServer.getUserNameAndRole().subscribe(
      res => {
       switch (res.roles[0]) {
         case this.authServer.ROLE_USER: {
           this.isUserSideBar = true;
           break;
         }
         case this.authServer.ROLE_AGENT: {
          this.isAgentSideBar = true;
          break;
        }
        case this.authServer.ROLE_INTERNAL: {
          this.isInternalSideBar = true;
          break;
        }
       }
      }
    )
  }
}
