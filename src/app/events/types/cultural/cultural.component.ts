import {AfterViewInit, Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EventService} from '../../event.service';
import {delay} from 'rxjs/operators';

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
  constructor(private route: ActivatedRoute,private eventService:EventService) {
    this.route.params.subscribe(params => {
      this.name = params['name'];
    });
    this.route.parent.url.subscribe(params => {
      this.title = (this.name != undefined ? `${this.name}` : params[0].path) + ' Events'
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.eventService.fetchEvents().subscribe(response => {
        let myEvents = response.data.cultural_event;
        this.eventService.isFetchingEvents=false;
        for (let clubEvent of myEvents)
          this.clubName.push(clubEvent.club_name);
        this.events = this.clubName;
      });
    },0);
  }
}
