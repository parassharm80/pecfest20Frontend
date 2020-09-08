import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  title: string
  events: Array<string>
  constructor(private route: ActivatedRoute) {
    this.title =  'Events'
    this.events = ['cultural', 'technical', 'workshops', 'lectures']
  }
}