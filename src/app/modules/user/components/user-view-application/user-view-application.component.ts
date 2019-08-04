import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from 'src/app/core/services/application/application.service';
import { Application } from 'src/app/models/Application';

@Component({
  selector: 'app-user-view-application',
  templateUrl: './user-view-application.component.html',
  styleUrls: ['./user-view-application.component.css']
})
export class UserViewApplicationComponent implements OnInit {

  applicationId: number;
  application: Application;

  constructor(private route: ActivatedRoute, private applicationService : ApplicationService) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.applicationId = params.id );
    console.log(this.applicationId)
    this.getApplication();
  }

  getApplication() {
    this.applicationService.getApplicationById(this.applicationId).subscribe(
      res => {
        console.log("test")
        this.application = new Application(res);
        console.log(this.application);
      },
      err => {
        console.log(err)
      }
    )
  }

}
