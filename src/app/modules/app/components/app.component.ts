import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  showSideBar = true;
  componentsWithoutSidebar = ["/login", "/register"];
  title = 'FinancialMeet';


  ngOnInit() {
  }

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.showSideBar = !this.componentsWithoutSidebar.includes(event.url);
      }
    });

  }

}

