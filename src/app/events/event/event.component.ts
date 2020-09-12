import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  private eventIndex;
   eventDetails;
  constructor(private route: ActivatedRoute,private eventService:EventService) {
    this.eventService.isFetchingEvents=true;
    this.route.params.subscribe(params => {
      this.eventIndex = params['id'];
      console.log(this.eventIndex);
      this.eventService.isFetchingEvents=false;
      this.eventDetails=this.eventService.clubEvents[this.eventIndex-1];
    });
  }

  ngOnInit(): void {

  }

}
