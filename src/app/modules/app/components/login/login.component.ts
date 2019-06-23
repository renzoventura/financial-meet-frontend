import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'view-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('token');
  }
  
  loginUserData = {}

  login() {
    console.log(this.loginUserData);
    return this.authService.login(this.loginUserData).subscribe(
      res => {
        localStorage.setItem("token", res.token);
        console.log(res.roles);
        switch (res.roles[0]) {
          case this.authService.ROLE_USER: {
            this.router.navigate(["/u"])
            break;
          }
          case this.authService.ROLE_AGENT: {
            this.router.navigate(["/a"])
            break;
          }
          case this.authService.ROLE_INTERNAL: {
            this.router.navigate(["/i/applications"])
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
