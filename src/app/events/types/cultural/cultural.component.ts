import {AfterViewInit, Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EventService} from '../../event.service';
import {delay} from 'rxjs/operators';
import {ValidationService} from '../../../validation/validation.service';

@Component({
  selector: 'app-cultural',
  templateUrl: './cultural.component.html',
  styleUrls: ['../../events.component.css']
})
export class CulturalComponent implements AfterViewInit{
  name: string;
  title: string
  events: Array<string>
  clubName:Array<string>=[];
  clubEventsName:Array<string>=[];
  constructor(private route: ActivatedRoute,private eventService:EventService,public validationService:ValidationService) {
    this.route.params.subscribe(params => {
      this.name = params['name'];
    });
    this.route.parent.url.subscribe(params => {
      this.title = (this.name != undefined ? `${this.name}` : params[0].path) + ' Events'

    });
  }
  ngAfterViewInit(): void {
    if(this.name!=undefined)
      setTimeout(() => {
        this.eventService.fetchEvents().subscribe(response => {
          let myEvents = response.data.cultural_event;
          this.eventService.manipulateResponse(response);
          for (let clubEvent of myEvents)
            if(clubEvent.club_name==this.name) {
              this.clubEventsName =clubEvent.event_list.map(event=>event["event_name"]);
              this.eventService.clubEvents=clubEvent.event_list;
              break;
            }
          this.events = this.clubEventsName;
        });
      },0);
    else
      setTimeout(() => {
        this.eventService.fetchEvents().subscribe(response => {
          this.eventService.manipulateResponse(response);
          let myEvents = response.data.cultural_event;
          for (let clubEvent of myEvents)
            this.clubName.push(clubEvent.club_name);
          this.events = this.clubName;
        });
      },0);
  }
}
