import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/core/services/application/application.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';

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
  thirdFormGroup: FormGroup;

  applicationExtraDetails: object= {};

  // applicationTypes = ["Mortgage",
  //   "Insurance", "banking", "Advisory", "Wealth Management", "Mutual Funds"]
  applicationType: String;
  applicationSubType: String;
  applicationTypes : [];
  applicationSubTypes: [];
  applicationSubTypeError = true;

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
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.getApplicationTypesTitles()
  }

  createApplication(stepper: MatStepper) {
    this.applicationService.createApplication(this.newApplication, this.applicationType, this.applicationSubType).subscribe(
      res => {
        stepper.next();
      },
      err => {
        alert("Enter Details")
      }
    )
  }

  finish() {
    this.router.navigate(["../applications"])
  }

  getApplicationTypesTitles() {
    this.applicationService.getApplicationTypesTitles().subscribe(
      res => {
        this.applicationTypes = res;
      }
    )
  }

  getApplicationSubTypesTitles() {
    this.applicationService.getApplicationSubTypesTitles(this.applicationType).subscribe(
      res => {
        this.applicationSubTypes = res;
      }
    )
  }

  
  checkApplicationTypeAndSubType(stepper){
    if (this.applicationType != null && this.applicationSubType != null) {
      stepper.next();
    } else {
      alert ("Please select application Type")
    }
  }

}
