import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/core/services/application/application.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private applicationService: ApplicationService) { }

  userApplications = []

  ngOnInit() {
    this.applicationService.getCurrentUserApplication().subscribe(
      res => {
        this.userApplications = res
      }
    )
  }


}
