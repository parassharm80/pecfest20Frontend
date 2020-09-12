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
  eventType;
  eventSubType;
   eventDetails=null;
  constructor(private route: ActivatedRoute,private eventService:EventService) {
    this.eventService.isFetchingEvents=true;

    this.route.params.subscribe(params => {
      this.eventIndex = params['id'];
      this.eventSubType=params["event_sub_type"];
      this.eventType=params["event_type"];
    });
    this.eventService.fetchEvents().subscribe(response=>{
      this.eventService.manipulateResponse(response);
      let myEvents=response.data[this.eventType+"_event"];
      for (let clubEvent of myEvents)
        if(clubEvent.club_name==this.eventSubType) {
          this.eventService.clubEvents=clubEvent.event_list;
          break;
        }
      this.eventDetails=this.eventService.clubEvents[this.eventIndex-1];

    });
  }

  ngOnInit(): void {

  }

}
