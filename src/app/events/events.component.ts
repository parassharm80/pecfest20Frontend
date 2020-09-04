import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  type: string;
  title: string
  events: Array<string>
  constructor(private route: ActivatedRoute) {
    console.log('Called Constructor');
    this.route.params.subscribe(params => {
      this.type = params['type'];
    });
    console.log(this.type);
    this.title = this.type != undefined ? `${this.type} events` : 'events'
    this.events = this.type != undefined ? ['asfa', 'berer', 'sddbad'] : ['cultural', 'technical', 'workshops', 'lectures']
  }
}
