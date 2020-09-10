import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;
  submitted: boolean=false;
   errorMessage=null;
  constructor(private formBuilder:FormBuilder,private logInService:LoginService) {
    this.logInForm=this.formBuilder.group({email:['',Validators.email],password:['',Validators.required]});
  }

  ngOnInit(): void {
  }

  onLogIn() {
    this.errorMessage=null;
    this.submitted=true;
    if(this.logInForm.valid){
      let email=this.logInForm.controls['email'].value;
      let hashedPassword=this.logInService.hashPassword(this.logInForm.controls['password'].value);
      this.logInService.sendLogInReqToBackend(email,hashedPassword).subscribe(response=>{
        if(response["http_status"]!="OK")
          this.errorMessage=response["status_message"];
        else
          this.logInService.setSessionId(response["data"]);
        },
          error => {
          this.errorMessage=error.toString();
          });
    }
  }

  setErrorToNull() {
    this.errorMessage=null;
  }
}
