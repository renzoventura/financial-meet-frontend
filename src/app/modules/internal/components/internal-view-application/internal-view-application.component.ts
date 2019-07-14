import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Application } from 'src/app/models/Application';
import { ApplicationService } from 'src/app/core/services/application/application.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-internal-view-application',
  templateUrl: './internal-view-application.component.html',
  styleUrls: ['./internal-view-application.component.css']
})
export class InternalViewApplicationComponent implements OnInit {

  applicationId: number;
  application: Application;

  constructor(private route: ActivatedRoute, private applicationService: ApplicationService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.applicationId = params.id);

    this.getApplication();
  }

  getApplication() {
    this.applicationService.getApplicationById(this.applicationId).subscribe(
      res => {
        this.application = new Application(res);
      },
      err => {
        console.log(err)
      }
    )
  }


  applicationHandler(application: Application) {
    this.application = application;
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
    this.applicationService.assignAgentToApplication(currentApplication.id, agentId).subscribe(
      res => {
        console.log('asdasd')
        this.ngOnInit();
      },
      err => {
        alert("Assigning Agent Failed");
      }
    )
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '50%',
      data: this.application
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './assign-agent-dialog.html',
  styleUrls: ['./assign-agent-dialog.css']

})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public application: Application,
    private applicationService: ApplicationService,
    private authServer: AuthService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
    };
    this.getAgents(null);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  agentId: number;

  users: any[];
  config: any;

  firstName = ""
  lastName = ""
  suburb = ""
  suburbs = ["Albany", "Bayswater", "Bayview", "Beach Haven", "Belmont", "Birkdale", "Birkenhead", "Browns Bay", "Campbells Bay", "Castor Bay", "Chatswood", "Cheltenham", "Crown Hill", "Devonport", "Fairview Heights", "Forrest Hill", "Glenfield", "Greenhithe", "Hauraki", "Highbury", "Long Bay", "Mairangi Bay", "Pinehill", "Rosedale", "Rothesay Bay", "Sunnynook", "Takapuna", "Torbay", "Wairau Valley", "Westlake"];
  public currentAgent;

  public selectCompany(user: any) {
    this.currentAgent = user;
    console.log("Selected! " + user.id)
    this.agentId = user.id;
  }

  getAgents(event) {
    if (event != null) {
      this.config.currentPage = event
    }
    // console.log(this.searchFilter.suburb)
    this.authServer.getAllAgents(this.firstName, this.lastName, this.suburb, this.config.currentPage, this.config.itemsPerPage).subscribe(
      res => {
        this.users = res.content
        this.config.totalItems = res.totalElements
      }
    )
  }

  assignAgentToApplication() {
    this.applicationService.assignAgentToApplication(this.application.id, this.agentId).subscribe(
      res => {
        this.dialogRef.close();
      },
      err => {
        alert("Assigning Agent Failed");
      }
    )
  }

}