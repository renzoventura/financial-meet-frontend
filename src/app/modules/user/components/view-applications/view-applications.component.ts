import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/core/services/application/application.service';

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent implements OnInit {



  constructor(private applicationService: ApplicationService) { }

  userApplications = []

  noApplications = false;

  ngOnInit() {
    this.applicationService.getCurrentUserApplication().subscribe(
      res => {
        this.userApplications = res
        if (this.userApplications.length == 0) {
          console.log("i am empty")
          this.noApplications = true;
        } else {
          console.log("i am NOT empty")

          this.noApplications = false;
        }
      }
    )
  }


}
