import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/core/services/application/application.service';

@Component({
  selector: 'app-internal-create-account',
  templateUrl: './internal-create-account.component.html',
  styleUrls: ['./internal-create-account.component.css']
})
export class InternalCreateAccountComponent implements OnInit {

  registerUserData = {
    username: "",
    password: "",
  }

  confirmPassword: String

  error: String;
  userType: String;

  suburbs = ["Albany", "Bayswater", "Bayview", "Beach Haven", "Belmont", "Birkdale", "Birkenhead", "Browns Bay", "Campbells Bay", "Castor Bay", "Chatswood", "Cheltenham", "Crown Hill", "Devonport", "Fairview Heights", "Forrest Hill", "Glenfield", "Greenhithe", "Hauraki", "Highbury", "Long Bay", "Mairangi Bay", "Pinehill", "Rosedale", "Rothesay Bay", "Sunnynook", "Takapuna", "Torbay", "Wairau Valley", "Westlake"];
  specializations = [];
  RegisterUserspecialization = [];

  moneyRanges = [
    "$10,000-$50,000",
    "$50,001-$100,000",
    "$100,001-$200,000",
    "$200,001-$500,000",
    "$500,001-more"
  ]
  constructor(private authService : AuthService, private router : Router, private applicationService : ApplicationService) { }

  ngOnInit() {
    this.getApplicationSubTypesCode();
  }

  register() {
    if (!(this.registerUserData.username == null || this.registerUserData.password == null || this.confirmPassword == null)) {
      if (this.registerUserData.password == this.confirmPassword) {
        this.registerAgent();
      } else {
        this.error = "Passwords should match"
      }
    } else {
      this.error = "Please fill in the form"
    }
  }
  
  registerAgent() {
    this.authService.registerAgent(this.registerUserData).subscribe(
      res => {
        this.router.navigate(["./i/agents"])
        alert("Account Created!")
      },
      err => {
        this.error = err.error.message
      }
    )
  }

  getApplicationSubTypesCode() {
    this.applicationService.getAllApplicationSubTypeCodes().subscribe(
      res => {
        console.log(res)
        this.specializations = res;
      }
    )
  }

}
