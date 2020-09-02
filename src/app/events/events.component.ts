import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  type: string;
  constructor(private route: ActivatedRoute) {
    console.log('Called Constructor');
    this.route.queryParams.subscribe(params => {
      this.type = params['type'];
    });
    console.log(this.type);
  }
  console = console
  title = this.type ? `${this.type} events` : 'events'
  log() { console.log(this.title); }
  events = ['cultural', 'technical', 'workshops', 'lectures']
}