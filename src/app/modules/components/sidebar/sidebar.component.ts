import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authServer: AuthService) {
   }


  isUserSideBar = false;
  isAgentSideBar = false;
  isInternalSideBar = false;

  showSideBar = false;

  ngOnInit() {
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
           this.showSideBar = true;
           break;
         }
         case this.authServer.ROLE_AGENT: {
          this.isAgentSideBar = true;
          this.showSideBar = true;
          break;
        }
        case this.authServer.ROLE_INTERNAL: {
          this.isInternalSideBar = true;
          this.showSideBar = true;
          break;
        }
       }
      }
    )
  }

}
