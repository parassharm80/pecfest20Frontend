import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-team',
  templateUrl: './website-team.component.html',
  styleUrls: ['./website-team.component.css']
})
export class WebsiteTeamComponent implements OnInit {

  websiteTeam = [
    {
      name: 'Paras Sharma',
      fb: "https://www.facebook.com/people/Paras-Sharma/100004424837970",
      insta: "https://www.instagram.com/infiniteloop.80/?r=nametag",
      image: "Paras.jpg",
      event: false,
      post: "Full-Stack Developer",
      linked: "https://www.linkedin.com/in/paras-sharma-b8835715b"
    },
    {
      name: 'Himanshu Gaur',
      fb: "https://www.facebook.com/himanshu.gaur.3192",
      insta: "https://www.instagram.com/poetic.himanshu/?r=nametag",
      image: "Himanshu Gaur.jpg",
      event: false,
      post: "",
      linked: "https://www.linkedin.com/in/himanshu-gaur-149101163"
    },
    // {
    //   name:'Animesh Garg',
    //   insta:"https://www.instagram.com/animesh_garg07/",
    //   image:"ani.jpg",
    //   event:false,
    //   post:"",
    //   linked:"https://www.linkedin.com/in/animesh-garg-15997a145/"
    // },
    {
      name: 'Gandharv Jaggi',
      fb: "https://www.facebook.com/gandharv.jaggi",
      insta: "https://www.instagram.com/gandharv_jaggi/",
      image: "Gandharv Jaggi.jpg",
      event: false,
      post: "Frontend Developer",
      linked: "https://www.linkedin.com/in/gandharv-jaggi-26778a182"
    },

    {
      name: 'Harshit Sharma',
      fb: "",
      insta: "",
      image: "Harshit_Sharma.jpg",
      event: false,
      post: "Backend Developer"
    },
    {
      name: 'Pallavi',
      fb: "",
      insta: "",
      image: "Pallavi.jpg",
      event: false,
      post: "Backend Developer",
      linked: "https://www.linkedin.com/in/pallavi-dua-808432181"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  okie(i: number) {
    this.websiteTeam[i].event = !this.websiteTeam[i].event;
    console.log("yes");
  }
}
