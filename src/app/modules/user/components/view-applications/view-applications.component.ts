import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/core/services/application/application.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent implements OnInit {

  constructor(private applicationService: ApplicationService) { }

  userApplicationPage;
  userApplications: [];
  subscription: Subscription;
  noApplications = false;
  title: String = "";
  page: String = "1";
  size: String = "10";
  displayedColumns = ['Row 1', 'Row 2'];
  //displayedColumns = {'studentID': 'ID', 'fname': 'First Name', 'lname': 'Last Name', 'weight': 'Weight', 'symbol': 'Code'};

  ngOnInit() {
    // this.applicationService.getCurrentUserApplicationWithParams(
    //   this.title, this.page, this.size
    // ).subscribe(
    //   res => {
    //     this.userApplicationPage = res;
    //     this.userApplications = res.content;
    //     console.log(this.userApplicationPage)
    //     console.log(this.userApplications)
    //   }
    // )

    // this.subscription = this.applicationService.getCurrentUserApplication().subscribe(
    //   res => {
    //     console.log(res)
    //     // this.userApplications = JSON.parse(res)['content'];
    //     // console.log("res:", JSON.parse(res)['content']);
    //     // if (this.userApplications.length == 0) { 
    //     //   console.log("i am empty")
    //     //   this.noApplications = true;
    //     // } else {
    //     //   console.log("i am NOT empty")
    //     //   this.noApplications = false;
    //     // }
    //   }
    // )


  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
