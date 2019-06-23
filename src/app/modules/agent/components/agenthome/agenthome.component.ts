import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-agenthome',
  templateUrl: './agenthome.component.html',
  styleUrls: ['./agenthome.component.css']
})
export class AgenthomeComponent implements OnInit {

  agentId: number;

  constructor(private auth: AuthService) {
    this.auth.getCurrentAccountDetails().subscribe(
      res => {
        this.agentId = res.body.id
      }
    )
  }

  ngOnInit() { }

}
