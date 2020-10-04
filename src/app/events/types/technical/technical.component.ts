import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../event.service';
import { SharedService } from '../shared.service';
import { ValidationService } from '../../../validation/validation.service';

@Component({
  selector: 'app-technical',
  templateUrl: '../eventType.component.html',
  styleUrls: ['../../events.component.css']
})
export class TechnicalComponent implements AfterViewInit {

  name: string;
  title: string
  events: Array<string>
  clubName: Array<string> = [];
  bannerUrl = [];
  clubEventsName: Array<string> = [];
  type="technical"
  loading= false
  counter = 0;

  constructor(private route: ActivatedRoute, private eventService: EventService, public validationService: ValidationService, private imageLoader: SharedService<boolean>) {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      if (this.name) {
        this.loading = true
        this.imageLoader.next(true);
      }
    });
    this.route.parent.url.subscribe(params => {
      this.title = (this.name != undefined ? `${this.name}` : params[0].path);
    });
  }

  ngAfterViewInit(): void {
    if (this.name != undefined)
      setTimeout(() => {
        this.eventService.fetchEvents().subscribe(response => {
          let myEvents = response.data.technical_event;
          this.eventService.manipulateResponse(response);
          for (let clubEvent of myEvents)
            if (clubEvent.club_name == this.name) {
              this.clubEventsName = clubEvent.event_list.map(event => event["event_name"]);
              this.bannerUrl = clubEvent.event_list.map(eventX => eventX["event_banner_image_url"]);
              this.eventService.clubEvents = clubEvent.event_list;
              break;
            }
          this.events = this.clubEventsName;
        });
      }, 0);
    else
      setTimeout(() => {
        this.eventService.fetchEvents().subscribe(response => {
          this.eventService.manipulateResponse(response);
          let myEvents = response.data.technical_event;
          for (let clubEvent of myEvents)
            this.clubName.push(clubEvent.club_name);
          this.events = this.clubName;
        });
      }, 0);
  }
  manipulateLink(indexOfelement: number) {
    let event_banner_image_url = this.bannerUrl[indexOfelement];
    let arr = event_banner_image_url.split('/');
    return `https://drive.google.com/uc?id=${arr[5]}&export=download`;
  }
  onLoad() {
    this.counter++
    if (this.counter == this.eventService.clubEvents.length) {
      this.loading = false
      this.imageLoader.next(false);
    }
  }
}
