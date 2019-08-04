import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Application } from 'src/app/models/Application';
import { ApplicationService } from 'src/app/core/services/application/application.service';

@Component({
  selector: 'app-agent-view-application',
  templateUrl: './agent-view-application.component.html',
  styleUrls: ['./agent-view-application.component.css']
})
export class AgentViewApplicationComponent implements OnInit {

  applicationId: number;
  application: Application;

  constructor(private route: ActivatedRoute, private applicationService : ApplicationService) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.applicationId = params.id );
    this.getApplication();
  }

  getApplication() {
    this.applicationService.getApplicationById(this.applicationId).subscribe(
      res => {
        this.application = new Application(res);
        console.log(this.application);
      },
      err => {
        console.log(err)
      }
    )
  }
  
  progressApplication() {
    this.applicationService.progressApplication(this.applicationId).subscribe(
      res => {
        this.ngOnInit();
      },
      err => {
        console.log(err)
        alert(err.error)

      }
    )
  }

}
