import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  title: string;
  coreTeam=[
    {
      "name": 'Parth Gauba',
      "fb": "dsds",
      "insta": 'dss',
      "post": "Convener",
      "photo": "name of photo",
      "wh":"8787678767",
    },
    {
      "name": 'Anirudh Gargya',
      "fb": "Co-Convener",
      "insta": 'dss',
      "post": "Co-Convener",
      "photo": "name of photo",
      "wh":"8787678767",
    },
    {
      "name": 'Ashish Kumar',
      "post": "Secretary - Infrastructure, Hospitality, Logistics & megashows",
      "fb": "Secretary - Infrastructure Hospitality Logistics megashows",
      "insta": 'dss',
      "photo": "name of photo",
      "wh":"8787678767",
    },
    {
      "name": 'Manan Gupta',
      "post": "Secretary - Infrastructure, Hospitality, Logistics & megashows",
      "fb": "Secretary - Finance, Alumni Relations, Marketing",
      "insta": 'dss',
      "photo": "name of photo",
      "wh":"8787678767",
    },
    {
      "name": 'Navteshwar',
      "post": "Secretary - \"Security Discipline, Prinitng stationary, Creative\"",
      "fb": "Secretary - Finance, Alumni Relations, Marketing",
      "insta": 'dss',
      "photo": "name of photo",
      "wh":"8787678767",
    },
    {
      "name": 'Vanshika Jain',
      "post": "Secretary - \"Public Relations & Media, Website Management\"",
      "fb": "Secretary - Finance, Alumni Relations, Marketing",
      "insta": 'dss',
      "photo": "name of photo",
      "wh":"8787678767",
    },
  ];

 
  constructor() {
    this.title =  'Team';
  }

  ngOnInit(): void {
  }

}
