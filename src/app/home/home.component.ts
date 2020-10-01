import { Component, OnInit } from '@angular/core';
import {ValidationService} from '../validation/validation.service';
import {EventService} from '../events/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private eventService:EventService) {
    this.eventService.fetchEvents().subscribe(response=>
      this.eventService.manipulateResponse(response));
  }

  ngOnInit(): void {
  }

}
