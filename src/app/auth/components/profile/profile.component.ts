import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormComponent} from "./form/form.component";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {ValidationService} from '../../../validation/validation.service';
import {profileService} from './profile.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile:any;
  public title: String;
  private url="http://localhost:8080/logout";
  errorMessage=null;
  successMessage=null;
  isFetchingProfile=true;
  constructor(private formComponent: FormComponent,public dialog: MatDialog,private http:HttpClient,
  private validationService:ValidationService,private router:Router,private profile_Service:profileService,private cookieService:CookieService) {
    this.profile_Service.getUserDetails().subscribe(response=>{
      if(response["http_status"]=="OK"){
        this.profile=response["data"];
        this.isFetchingProfile=false;
      }
    });
    this.title =  'Your Profile';

  }

  edit(profile){
    this.formComponent.populateForm(profile);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
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
          this.cookieService.delete("session_id","/");
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
