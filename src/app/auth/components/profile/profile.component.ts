import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormComponent} from "./form/form.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile: profileType;
  public title: String;
  constructor(private formComponent: FormComponent,public dialog: MatDialog) {
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

  edit(profile){
    this.formComponent.populateForm(profile);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    console.log('hi')
    this.dialog.open(FormComponent, dialogConfig);
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
