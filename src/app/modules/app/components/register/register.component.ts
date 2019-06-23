import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'view-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerUserData = {
    username: "",
    password: "",
  }

  confirmPassword: String

  error: String;
  userType: String;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }


  register() {
    if (!(this.registerUserData.username == null || this.registerUserData.password == null || this.confirmPassword == null)) {
      if (this.registerUserData.password == this.confirmPassword) {
        switch (this.userType) {
          case "USER": this.registerUser()
            break;
          case "AGENT": this.registerAgent()
            break;
          default: {
            this.error = "Please select User Type"
            break;
          }
        }

      } else {
        this.error = "Passwords should match"
      }
    } else {
      this.error = "Please fill in the form"
    }



  }

  registerUser() {
    this.authService.registerUser(this.registerUserData).subscribe(
      res => {
        this.router.navigate(["./"])
        alert("Account Created!")
      },
      err => {
        this.error = err.error.message
      }
    )
  }

  registerAgent() {
    this.authService.registerAgent(this.registerUserData).subscribe(
      res => {
        this.router.navigate(["./"])
        alert("Account Created!")
      },
      err => {
        this.error = err.error.message
      }
    )
  }
}
