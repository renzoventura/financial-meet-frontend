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

  newApplication : object = {};
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

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

  createApplication(){
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
