import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cultural',
  templateUrl: './cultural.component.html',
  styleUrls: ['../../events.component.css']
})
export class CulturalComponent {
  name: string;
  title: string
  events: Array<string>
  constructor(private route: ActivatedRoute) {
    console.log('Called Constructor');
    this.route.params.subscribe(params => {
      this.name = params['name'];
      console.log(this.name);
    });
    this.route.parent.url.subscribe(params => {
      console.log(params);
      this.title = (this.name != undefined ? `${this.name}` : params[0].path) + ' events'
    });
    this.events = this.name != undefined ? ['asg'] : ['asfa', 'berer', 'sddbad']
  }
}
