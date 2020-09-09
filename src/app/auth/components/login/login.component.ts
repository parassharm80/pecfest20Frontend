import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;
  submitted: boolean=false;
  constructor(private formBuilder:FormBuilder) {
    this.logInForm=this.formBuilder.group({email:['',Validators.email],password:['',Validators.required]});
  }

  ngOnInit(): void {
  }

  onLogIn() {
    this.submitted=true;
  }
}
