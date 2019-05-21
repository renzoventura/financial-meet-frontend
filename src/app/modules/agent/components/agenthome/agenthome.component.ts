import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/core/services/application/application.service';

@Component({
  selector: 'app-agenthome',
  templateUrl: './agenthome.component.html',
  styleUrls: ['./agenthome.component.css']
})
export class AgenthomeComponent implements OnInit {
  constructor(private applicationService: ApplicationService) { }

  userApplications = []

  noApplications = false;

  ngOnInit() {
    this.applicationService.getCurrentAgentApplication().subscribe(
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
