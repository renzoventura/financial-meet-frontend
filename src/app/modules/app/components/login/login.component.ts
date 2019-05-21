import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { UserRoutingModule } from 'src/app/modules/user/user-routing.module';

@Component({
  selector: 'view-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  
  loginUserData = {}

  login() {
    console.log("Loggin in...");
    console.log(this.loginUserData);
    return this.authService.login(this.loginUserData).subscribe(
      res => {
        console.log("Login success");
        localStorage.setItem("token", res.token);
        console.log(res.roles);
        switch (res.roles[0]) {
          case this.authService.ROLE_USER: {
            console.log("Login as User");
            this.router.navigate(["/u"])
            break;
          }
          case this.authService.ROLE_AGENT: {
            console.log("Login as Agent");
            this.router.navigate(["/a"])
            break;
          }
          case this.authService.ROLE_INTERNAL: {
            console.log("Login as Internal");
            this.router.navigate(["/i"])
            break;
          }
          default: {
            console.log("Invalid choice");
            break;
          }
        }
      }
    )
  }

}
