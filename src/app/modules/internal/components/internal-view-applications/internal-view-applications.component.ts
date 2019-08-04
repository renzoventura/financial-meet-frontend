import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-view-applications',
  templateUrl: './internal-view-applications.component.html',
  styleUrls: ['./internal-view-applications.component.css']
})
export class InternalViewApplicationsComponent implements OnInit {

  userType = "ALL"
  
  constructor() { }

  ngOnInit() {
  }

}
