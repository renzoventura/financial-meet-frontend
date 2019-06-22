import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent-view-profile',
  templateUrl: './agent-view-profile.component.html',
  styleUrls: ['./agent-view-profile.component.css']
})
export class AgentViewProfileComponent implements OnInit {

  agentId: number;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.agentId = params.id );

  }

}
