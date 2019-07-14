import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApplicationService } from 'src/app/core/services/application/application.service';
import { Application } from 'src/app/models/Application';

@Component({
  selector: 'shared-application-profile',
  templateUrl: './application-profile.component.html',
  styleUrls: ['./application-profile.component.css']
})
export class ApplicationProfileComponent implements OnInit {
  
  @Input() application: Application;
  
  constructor() { }

  ngOnInit() {
  }

}
