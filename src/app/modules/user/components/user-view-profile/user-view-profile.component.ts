import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-view-profile',
  templateUrl: './user-view-profile.component.html',
  styleUrls: ['./user-view-profile.component.css']
})
export class UserViewProfileComponent implements OnInit {

  agentId: number;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.agentId = params.id );
  }

}
