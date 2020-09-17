import {Component, Injectable, OnInit} from '@angular/core';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
@Injectable({ providedIn: 'root'})
export class TeamFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  initializeFormGroup() {

  }
}
