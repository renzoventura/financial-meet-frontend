import { Component, OnInit, Input } from '@angular/core';
import { ApplicationService } from 'src/app/core/services/application/application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-table',
  templateUrl: './application-table.component.html',
  styleUrls: ['./application-table.component.css']
})
export class ApplicationTableComponent implements OnInit {
  @Input() userType: any;

  userApplications: any[];
  noApplications = false;
  
  isUser: boolean = false;
  isAgent: boolean = false;
  isInternal: boolean = false;
  config: any;

  title: String = "";
  dateOrder: string = "asc";
  applicationType: String;
  applicationSubType: String;
  applicationTypes : [];
  applicationSubTypes: [];


  dateOrders = ["ASC", "DESC"]

  ngOnInit() {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
    };
    this.getApplication(null);
    this.getApplicationTypesTitles()

  }

  constructor(private applicationService: ApplicationService,
    private router: Router) {

  }

  getApplication(event) {
   // console.log(this.hasAgent);
    //console.log("This is my userType", this.userType)
    if (this.applicationType != null) {
      this.getApplicationSubTypesTitles();
    }
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
    //(this.dateOrder)
    if (event != null) {
      this.config.currentPage = event
    }
    this.applicationService.getUserApplication(
      this.title, this.config.currentPage, this.config.itemsPerPage, this.dateOrder, this.applicationType,
      this.applicationSubType
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
      this.title, this.config.currentPage, this.config.itemsPerPage, this.dateOrder, this.applicationType,
      this.applicationSubType
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
      this.title, this.config.currentPage, this.config.itemsPerPage, this.dateOrder, this.applicationType,
      this.applicationSubType    ).subscribe(
      res => {
        this.userApplications = res.content
        this.config.totalItems = res.totalElements
      }
    )
  }


  removeAgentFromApplication(currentApplicationId) {
    this.applicationService.removeAgentFromApplication(currentApplicationId.id)
      .subscribe(
        res => {
          this.ngOnInit();
        },
        err => {
          alert("Cannot remove agent");
        }
      )
  }

  assignAgentToApplication(currentApplication, agentId) {
    this.applicationService.assignAgentToApplication(currentApplication,
      currentApplication.id, agentId).subscribe(
        res => {
          this.ngOnInit();
        },
        err => {
          alert("Assigning Agent Failed");
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
  
  resetSubType() {
    this.applicationSubType = "";
  }


}
