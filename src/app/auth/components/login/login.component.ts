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
  constructor(private formBuilder:FormBuilder,private logInService:LoginService) {
    this.logInForm=this.formBuilder.group({email:['',Validators.email],password:['',Validators.required]});
  }

  ngOnInit(): void {
  }

  onLogIn() {
    this.submitted=true;
    if(this.logInForm.valid){
      let email=this.logInForm.controls['email'].value;
      let hashedPassword=this.logInService.hashPassword(this.logInForm.controls['password'].value);
    }
  }
}
