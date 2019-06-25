import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-internal-view-profile',
  templateUrl: './internal-view-profile.component.html',
  styleUrls: ['./internal-view-profile.component.css']
})
export class InternalViewProfileComponent implements OnInit {

  agentId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("asdasdasdasdasdasd")
    this.route.params.subscribe(params => this.agentId = params.id);

  }

}
