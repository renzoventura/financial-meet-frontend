import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/core/services/application/application.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internalhome',
  templateUrl: './internalhome.component.html',
  styleUrls: ['./internalhome.component.css']
})
export class InternalhomeComponent implements OnInit {

  constructor(private applicationService: ApplicationService,
    private authService: AuthService) { }

  userApplications = []
  allAgents = []


  noApplications = false;
  agentId: number;

  ngOnInit() {
    this.applicationService.getAllApplications().subscribe(
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

    this.authService.getAllAgents().subscribe(
      res => {
        console.log("Loading agents")
        this.allAgents = res;
      },
      err => {
        console.log("Cannot load agents")
        console.log(err)
      }
    )
  }

  assignAgentToApplication(currentApplication) {
    this.applicationService.assignAgentToApplication(currentApplication,
      currentApplication.id, this.agentId).subscribe(
        res => {
          console.log("updated!")
          console.log(res)
          this.ngOnInit();
        },
        err => {
          console.log("Assigning Agent Failed, Could not find Agent.")
          console.log(err)

        }
      )
  }

  removeAgentFromApplication(currentApplicationId) {
    console.log(currentApplicationId.id)
    this.applicationService.removeAgentFromApplication(currentApplicationId.id)
    .subscribe(
        res => {
          console.log("updated!")
          console.log(res)
          this.ngOnInit();
        },
        err => {
          console.log("Assigning Agent Failed, Could not find Agent.")
          console.log(err)

        }
      )
  }

}
