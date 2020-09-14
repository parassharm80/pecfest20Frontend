import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {sha512} from 'js-sha512';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  isFetchingParams=true;
  changePasswordForm:FormGroup;
  submitted: boolean=false;
  errorMessage=null;
  successMessage=null;
  userId;
  verificationCode;
  private url="http://localhost:8080/reset-password"
  constructor(private router:Router,private formBuilder:FormBuilder,private http:HttpClient,private route: ActivatedRoute) {
    this.changePasswordForm=this.formBuilder.group({password:['',Validators.required],confirm_password:['',Validators.required]});
    this.route.params.subscribe(params => {
      this.userId = params['user_id'];
      this.verificationCode=params["verification_code"];
      this.isFetchingParams=false;
    });
  }

  ngOnInit(): void {
  }

  setErrorToNull() {
    this.errorMessage=null;
    this.successMessage=null;
  }

  changePasswordRequest() {
    this.errorMessage=null;
    this.successMessage=null;

    if(this.changePasswordForm.valid&&(this.changePasswordForm.controls["password"].value==this.changePasswordForm.controls["confirm_password"].value))
      this.http.post(this.url,{user_id:this.userId,verification_code:this.verificationCode,password:sha512(this.changePasswordForm.controls["password"].value)}).subscribe(
        response=>{
          if(response["http_status"]!="OK")
          {
            this.errorMessage="Try Resetting again. Redirecting to forgot password link"
            setTimeout((router: Router) => {
              this.router.navigate(["../reset-password"]);
            }, 2000);
          }
          else{
            this.successMessage="Password has been changed. Redirecting to login page"
            setTimeout((router: Router) => {
              this.router.navigate(["../login"]);
            }, 2000);
          }
        }
      );

  }
}
