import { Component } from '@angular/core';
import {Event, NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pecfest';
  showLoading = true;
  constructor(private router: Router) {
    this.router.events.subscribe((routerEvent: Event) => {

        if(routerEvent instanceof NavigationStart) {
          this.showLoading = true;
        }

        if(routerEvent instanceof NavigationEnd) {
          this.showLoading = false;
        }
    });
  }
}
