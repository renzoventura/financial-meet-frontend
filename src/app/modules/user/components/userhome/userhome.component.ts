import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  currentAccount: string = 'Test';

  ngOnInit() {
    this.authService.getCurrentAccountDetails().subscribe(
      res => {
        this.currentAccount = res.body;
      }
    )
  }



  

}
