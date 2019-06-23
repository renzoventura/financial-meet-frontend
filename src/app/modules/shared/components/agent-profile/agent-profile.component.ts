import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css', './circle.css']
})
export class AgentProfileComponent implements OnInit {

  @Input() agentId;

  agent: Object;
  agentUsername: String;

  specialisations = ["PERSONAL LOANS", "HOME LOANS", "FIRST TIME HOME OWNER", "REFINANCE"]
  awards = ["RCP Commercial Office Property Award", "Yardi Retail Property Award", "CBRE Industrial Property Award", "Rider Levett Bucknall Supreme Award"]
  
  constructor(private authService : AuthService) {}

  ngOnInit() {
    console.log("agentId:" + this.agentId)
    this.authService.getAgentById(this.agentId).subscribe(
      res => {
        this.agent = res.body;
        this.agentUsername = res.body.username;
      }
    )
  }

}
