import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authServer: AuthService) {
   }


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
    console.log("asdasdasdasdsa");
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
