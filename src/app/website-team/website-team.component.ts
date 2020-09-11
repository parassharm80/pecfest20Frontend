import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-team',
  templateUrl: './website-team.component.html',
  styleUrls: ['./website-team.component.css']
})
export class WebsiteTeamComponent implements OnInit {

  websiteTeam=[
    {
      name:'Paras Sharma',
      fb:"lodu",
      insta:"lodu",
      image:"Paras.jpg",
      event:false,
      // post:"Frontend & Backend"
    },
    {
      name:'animesh garg',
      fb:"fdfd",
      insta:"fdfd",
      image:"ani.jpg",
      event:false,
      // post:"Frontend"
    },
    {
      name:'Gandharv Jaggi',
      fb:"fdfd",
      insta:"fdfd",
      image:"Gandharv Jaggi.jpg",
      event:false,
      // post:"Frontend",
      linked:"sa"
    },
    {
      name:'Himanshu Gaur',
      fb:"fdfd",
      insta:"fdfd",
      image:"Himanshu Gaur.jpg",
      event:false,
      // post:"Backend"
    },
    
    {
      name:'Harshit Sharma',
      fb:"fdfd",
      insta:"fdfd",
      image:"Harshit_Sharma.jpg",
      event:false,
      // post:"Backend"
    } ,
    {
      name:'Pallavi',
      fb:"fdfd",
      insta:"fdfd",
      image:"demo.jpeg",
      event:false,
      // post:"Backend"
    } ,
    {
      name:'Venkatesh',
      fb:"fdfd",
      insta:"fdfd",
      image:"demo.jpeg",
      event:false,
      // post:"Backend"
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
