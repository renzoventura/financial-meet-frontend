import { Component, OnInit, Input } from '@angular/core';
import { ApplicationService } from 'src/app/core/services/application/application.service';

@Component({
  selector: 'app-application-table',
  templateUrl: './application-table.component.html',
  styleUrls: ['./application-table.component.css']
})
export class ApplicationTableComponent implements OnInit {
  @Input() userType: any;

  userApplications: any[];
  noApplications = false;
  title: String = "";
  config: any;

  hasAgent: boolean;
  dateOrder: string;

  isUser: boolean = false;
  isAgent: boolean = false;
  isInternal: boolean = false;


  ngOnInit() {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
    };
    this.getApplication(null);
  }

  constructor(private applicationService: ApplicationService) {

  }

  getApplication(event) {
    console.log(this.hasAgent);
    console.log("This is my userType", this.userType)
    switch (this.userType) {
      case "USER": this.getUserApplication(event);
        this.isUser = true;
        break;
      case "AGENT": this.getAgentApplications(event);
        this.isAgent = true;
        break;
      case "ALL": this.getAllApplications(event)
        this.isInternal = true;
        break;
    }
  }

  getUserApplication(event) {
    if (event != null) {
      this.config.currentPage = event
    }
    this.applicationService.getUserApplication(
      this.title, this.config.currentPage, this.config.itemsPerPage
    ).subscribe(
      res => {
        this.userApplications = res.content
        this.config.totalItems = res.totalElements
      }
    )
  }

  getAgentApplications(event) {
    if (event != null) {
      this.config.currentPage = event
    }
    this.applicationService.getAgentApplication(
      this.title, this.config.currentPage, this.config.itemsPerPage
    ).subscribe(
      res => {
        this.userApplications = res.content
        this.config.totalItems = res.totalElements
      }
    )
  }

  getAllApplications(event) {
    if (event != null) {
      this.config.currentPage = event
    }
    this.applicationService.getAllApplications(
      this.title, this.config.currentPage, this.config.itemsPerPage
    ).subscribe(
      res => {
        this.userApplications = res.content
        this.config.totalItems = res.totalElements
      }
    )
  }


  removeAgentFromApplication(currentApplicationId) {
    console.log(currentApplicationId.id)
    this.applicationService.removeAgentFromApplication(currentApplicationId.id)
      .subscribe(
        res => {
          console.log("updated!")
          this.ngOnInit();
        },
        err => {
          console.log(err)
        }
      )
  }

  assignAgentToApplication(currentApplication) {
    console.log("asdasdasd")
    let agentId = 10;
    this.applicationService.assignAgentToApplication(currentApplication,
      currentApplication.id, agentId).subscribe(
        res => {
          this.ngOnInit();
        },
        err => {
          console.log("Assigning Agent Failed, Could not find Agent.")
          console.log(err)

        }
      )
  }

  progressApplication(currentApplication) {
    this.applicationService.progressApplication(currentApplication.id).subscribe(
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
