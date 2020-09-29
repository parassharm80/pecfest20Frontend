import {Component, OnInit} from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router } from "@angular/router";
import { EventService } from './events/event.service';
import { ValidationService } from './validation/validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PECFEST\'20';
  showLoading = true;
  onMain: Boolean;
  constructor(private router: Router, public eventService: EventService, public validationGuard: ValidationService) {
    this.onMain = false;
    this.router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart) {
        this.showLoading = true;
      }

      if (routerEvent instanceof NavigationEnd) {
        this.showLoading = false;
      }
    });

  }
  displayCounter(count) {
    this.onMain = count;
  }
  ngOnInit() {
  }

}
