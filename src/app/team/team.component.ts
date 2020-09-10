import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  title: string;
  coreTeam;
  constructor() {
    this.title =  'Team';

    this.coreTeam=[
      {
        "name": 'sd',
        "fb": "dsds",
        "insta": 'dss',
        "position": "dsfsd",
        "linkedIn": "dasfa",
        "photo": "name of photo",
        "whatsapp":"43"
      }
    ]
  }

  ngOnInit(): void {
  }

}
