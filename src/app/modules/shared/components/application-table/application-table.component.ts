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
  
  ngOnInit() {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
    };
    this.getApplication(null);
   }

  constructor(private applicationService: ApplicationService) { }

  getApplication(event) {
    console.log("This is my userType", this.userType)
    switch (this.userType) {
      case "USER": this.getUserApplication(event);
        break;
      case "AGENT": this.getAgentApplications(event);
        break;
      case "ALL": this.getAllApplications(event)
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
    console.log("title", this.title)
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
    console.log("title", this.title)
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


}
