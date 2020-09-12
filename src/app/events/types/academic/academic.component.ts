import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EventService} from '../../event.service';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['../../events.component.css']
})
export class AcademicComponent {
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
    for(let clubEvent of this.eventService.events.lecture)
      this.clubName.push(clubEvent.club_name);
    this.events=this.clubName;
  }
}
