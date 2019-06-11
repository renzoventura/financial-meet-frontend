import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/core/services/application/application.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent implements OnInit {



  noApplications = false;
  title: String = "";
  page: String = "1";
  size: String = "5";
  displayedColumns = ['Row 1', 'Row 2'];

  config: any;
  userApplications: [];

  ngOnInit() {

  }

  constructor(private applicationService: ApplicationService) {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
    };

    this.applicationService.getCurrentUserApplicationWithParams(
      this.title, this.page, this.size
    ).subscribe(
      res => {
        this.userApplications = res.content
        this.config.totalItems = res.totalElements - (res.numberOfElements)
      }
    )

  }

  pageChanged(event) {
    this.config.currentPage = event;

    this.applicationService.getCurrentUserApplicationWithParams(
      this.title, event, this.size
    ).subscribe(
      res => {
        this.userApplications = res.content
        this.config.totalItems = res.totalElements - (res.numberOfElements)
      }
    )
  }


}
