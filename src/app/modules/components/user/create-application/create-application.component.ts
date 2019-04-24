import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ApplicationService } from 'src/app/core/services/application/application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {

  newApplication : object = {};

  constructor(private applicationService: ApplicationService,
    private router: Router) { }

  ngOnInit() {
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
