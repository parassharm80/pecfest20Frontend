import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router } from "@angular/router";
import { EventService } from './events/event.service';
import { SharedService } from './events/types/shared.service';
import { ValidationService } from './validation/validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PECFEST\'2020-21';
  showLoading = true;
  imageLoading = false;
  constructor(private router: Router, public eventService: EventService, public validationGuard: ValidationService, private imageLoader: SharedService<boolean>) {
    this.router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart) {
        this.showLoading = true;
      }

      if (routerEvent instanceof NavigationEnd) {
        this.showLoading = false;
      }
    });

    this.imageLoader.subscribe((bool) => {
      this.imageLoading = bool
    })
  }
  ngOnInit() {
  }
}
