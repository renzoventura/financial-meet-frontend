import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-verification-page',
  templateUrl: './verification-page.component.html',
  styleUrls: ['./verification-page.component.css']
})
export class VerificationPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService : AuthService) { }

  token : String;
  verificationSent : boolean;
  accountVerified: boolean;

  username : String;
  email: String;

  ngOnInit() {
    this.route.params.subscribe(params => this.token = params.token);
    console.log(this.token)
    this.verifyAccount();
    //this.accountVerified = true;
  }

  verifyAccount() {
    this.authService.verifyAccount(this.token).subscribe(
      res => {
        this.accountVerified = true;
        this.username = res.username;
        this.email = res.email;
      }, 
      err => {
        this.accountVerified = false;
      }

    )
  }

}
