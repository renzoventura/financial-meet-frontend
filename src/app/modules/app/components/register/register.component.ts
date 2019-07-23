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

  suburbs = ["Albany", "Bayswater", "Bayview", "Beach Haven", "Belmont", "Birkdale", "Birkenhead", "Browns Bay", "Campbells Bay", "Castor Bay", "Chatswood", "Cheltenham", "Crown Hill", "Devonport", "Fairview Heights", "Forrest Hill", "Glenfield", "Greenhithe", "Hauraki", "Highbury", "Long Bay", "Mairangi Bay", "Pinehill", "Rosedale", "Rothesay Bay", "Sunnynook", "Takapuna", "Torbay", "Wairau Valley", "Westlake"];

  moneyRanges = [
    "$10,000-$50,000",
    "$50,001-$100,000",
    "$100,001-$200,000",
    "$200,001-$500,000",
    "$500,001-more"
  ]


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
        alert("Account Created! Verification email is sent to your email");
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
