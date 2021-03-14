import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  title: string
  events: Array<string>
  constructor(private route: ActivatedRoute, private eventService: EventService) {
    this.title = 'Events'
    this.events = ['cultural', 'technical', 'workshop', 'lecture']
    this.eventService.fetchEvents().subscribe(response => {
      this.eventService.manipulateResponse(response);
    });
  }
}
