import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ApplicationService } from 'src/app/core/services/application/application.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {

  newApplication: object = {};
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  applicationExtraDetails: object= {};

  applicationTypes = ["Mortgage",
    "Insurance", "banking", "Advisory", "Wealth Management", "Mutual Funds"]

  moneyRanges = [
    "$10,000-$50,000",
    "$50,001-$100,000",
    "$100,001-$200,000",
    "$200,001-$500,000",
    "$500,001-more"
  ]

  yesOrNo = ["Yes", "No"]

  constructor(private applicationService: ApplicationService,
    private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  createApplication() {
    this.applicationService.createApplication(this.newApplication).subscribe(
      res => {
        console.log("APPLICATION CREATED")
        this.router.navigate(["/user"])
      },
      err => {
        console.log("APPLICATION FAILED")
      }
    )
  }

}
