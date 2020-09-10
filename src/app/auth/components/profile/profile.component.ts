import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile: profileType;
  public title: String;
  constructor() {
    this.profile =
      {
          name: "Paras Sharma",
          age: 20,
          email: "Email",
          college: "PEC",
          contact: "9999999999",
          gender: "Male",

      };
    this.title =  'Profile';


  }

  ngOnInit(): void {
  }

}
export interface profileType {
  name: String;
  age: number;
  email: String;
  college: String;
  contact: String;
  gender: String;
}
