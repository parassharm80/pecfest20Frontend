import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormComponent} from "./form/form.component";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {ValidationService} from '../../../validation/validation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile: profileType;
  public title: String;
  private url="http://localhost:8080/logout";
  errorMessage=null;
  successMessage=null;
  constructor(private formComponent: FormComponent,public dialog: MatDialog,private http:HttpClient,private cookieService:CookieService
  ,private validationService:ValidationService,private router:Router) {
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
    this.dialog.open(FormComponent, dialogConfig);
  }
  ngOnInit(): void {
  }

  onClick() {
    this.errorMessage=null;
    this.successMessage=null;
    this.http.delete(this.url,{headers:this.getHttpHeaders()}).subscribe(response=>{
        if(response["http_status"]!="OK")
          this.errorMessage=response["status_message"];
        else {
          this.cookieService.set("session_id",response["data"]);
          this.validationService.isLoggedIn=false;
          this.validationService.stateChecked=true;
          this.successMessage="Logged out. Redirecting to home page";
          setTimeout((router: Router) => {
            this.router.navigate([".."]);
          }, 2000);
        }
    });
  }
  private getHttpHeaders() {
    let  headers:HttpHeaders=new HttpHeaders();
    return headers.set("session_id",this.cookieService.get("session_id"));
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
