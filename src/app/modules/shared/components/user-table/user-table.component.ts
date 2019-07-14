import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Placeholders } from 'src/app/models/placeholders/placeholders';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  users: any[];
  config: any;

  firstName = ""
  lastName = ""
  suburb = ""

  suburbs = ["Albany", "Bayswater", "Bayview", "Beach Haven", "Belmont", "Birkdale", "Birkenhead", "Browns Bay", "Campbells Bay", "Castor Bay", "Chatswood", "Cheltenham", "Crown Hill", "Devonport", "Fairview Heights", "Forrest Hill", "Glenfield", "Greenhithe", "Hauraki", "Highbury", "Long Bay", "Mairangi Bay", "Pinehill", "Rosedale", "Rothesay Bay", "Sunnynook", "Takapuna", "Torbay", "Wairau Valley", "Westlake"];
  constructor(private authServer: AuthService) { }

  ngOnInit() {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
    };
    this.getAgents(null);

  }

  getAgents(event) {
    if (event != null) {
      this.config.currentPage = event
    }
    // console.log(this.searchFilter.suburb)
    this.authServer.getAllAgents(this.firstName, this.lastName, this.suburb, this.config.currentPage, this.config.itemsPerPage,).subscribe(
      res => {
        this.users = res.content
        this.config.totalItems = res.totalElements
      }
    )
  }
}
