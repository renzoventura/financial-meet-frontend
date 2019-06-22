import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css', './circle.css']
})
export class AgentProfileComponent implements OnInit {

@Input() agentId;

  specialisations = ["PERSONAL LOANS", "HOME LOANS", "FIRST TIME HOME OWNER", "REFINANCE"]
  
  awards = ["RCP Commercial Office Property Award", "Yardi Retail Property Award", "CBRE Industrial Property Award", "Rider Levett Bucknall Supreme Award"]
  
  constructor() {

   }

  ngOnInit() {
    console.log("agentId:" + this.agentId)
  }

}
