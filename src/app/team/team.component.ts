import { Component, OnInit } from '@angular/core';
import {head} from "./heads";
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
      "photo": "",
      "ph":"8787678767",
      // "wh":"8787678767",
      "linked":""
    },
    {
      "name": 'Anirudh Gargya',
      "fb": "Co-Convener",
      "insta": 'dss',
      "post": "Co-Convener",
      "photo": "",
      // "wh":"8787678767",
      "ph":"8787678767",
      "linked":""
    },
    {
      "name": 'Ashish Kumar Singh',
      "post": "Infrastructure, Megashows and Hospitality & Logistics",
      "fb": "https://www.facebook.com/profile.php?id=100005854021744",
      "insta": 'https://www.instagram.com/singh_ashish99/',
      "photo": "Ashish_Kumar_Singh.jpg",
      // "wh":"9971982018",
      "ph":"9971982018",
      "linked":"https://www.linkedin.com/in/singhashish23"
    },
    {
      "name": 'Manan Gupta',
      "post": "Marketing, Finance and Alumni & Industry Relations",
      // "fb": "",
      // "insta": '',
      "photo": "Manan_Gupta.jpg",
      // "wh":"",
      "ph":"9023482677",
      // "linked":""
    },
    {
      "name": 'Navteshwar Singh',
      "post": "Discipline, Printing Publishing Stationary, and Creative",
      // "fb": "",
      // "insta": '',
      "photo": "Navteshwar_Singh.jpg",
      // "wh":"h",
      "ph":"7717271111",
      // "linked":""
    },
    {
      "name": 'Vanshika',
      "post": "Public Relations, Media, Publicity, Website Management",
      "fb": "https://www.facebook.com/vanshika.jain.1610",
      "insta": 'https://instagram.com/vanshika_vj?igshid=xcsqonhu2qp0',
      "photo": "Vanshika.jpg",
      // "wh":"9417428303",
      "ph":"9417428303",
      "linked":"https://www.linkedin.com/in/vanshika-jain-6b6024166"
    },
  ];
  heads=head;


  constructor() {
    this.title =  'Contact Us';
  }

  ngOnInit(): void {
  }

}
