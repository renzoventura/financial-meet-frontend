import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApplicationService } from 'src/app/core/services/application/application.service';
import { Application } from 'src/app/models/Application';

@Component({
  selector: 'shared-application-profile',
  templateUrl: './application-profile.component.html',
  styleUrls: ['./application-profile.component.css']
})
export class ApplicationProfileComponent implements OnInit {

  @Input() application: Application;
  statuses: string[];

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    this.getStatusesByType();
  }

  getStatusesByType() {
    this.applicationService.getApplicationStatusesByType(this.application.type).subscribe(
      res => {
        this.statuses = res.map( x => x.applicationStatusCode);
      },
      err => {
        console.log("Cannot find statuses")
      }
    )
  }

  nodeIsActive(status){
    if (this.statuses.indexOf(status) <= this.statuses.indexOf(this.application.status)) {
      return true;
    } else {
      return false;
    }

  }

}
