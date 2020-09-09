import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-team',
  templateUrl: './website-team.component.html',
  styleUrls: ['./website-team.component.css']
})
export class WebsiteTeamComponent implements OnInit {

  websiteTeam=[
    {
      name:'animesh garg',
      fb:"fdfd",
      insta:"fdfd",
      image:"animesh.jpg",
      event:false,
      post:"joint head"
    },
    {
      name:'animesh garg',
      fb:"fdfd",
      insta:"fdfd",
      image:"animesh.jpg",
      event:false,
      post:"joint head"
    },
    {
      name:'animesh garg',
      fb:"fdfd",
      insta:"fdfd",
      image:"animesh.jpg",
      event:false,
      post:"joint head"
    },
    {
      name:'animesh garg',
      fb:"fdfd",
      insta:"fdfd",
      image:"animesh.jpg",
      event:false,
      post:"joint head"
    },
    {
      name:'animesh garg',
      fb:"fdfd",
      insta:"fdfd",
      image:"animesh.jpg",
      event:false,
      post:"joint head"
    },
    {
      name:'animesh garg',
      fb:"fdfd",
      insta:"fdfd",
      image:"animesh.jpg",
      event:false,
      post:"joint head"
    },
    {
      name:'animesh garg',
      fb:"fdfd",
      insta:"fdfd",
      image:"animesh.jpg",
      event:false,
      post:"joint head"
    },
    {
      name:'animesh garg',
      fb:"fdfd",
      insta:"fdfd",
      image:"animesh.jpg",
      event:false,
      post:"joint head"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  okie(i:number){
    this.websiteTeam[i].event=!this.websiteTeam[i].event;
    console.log("yes");
  }
}
