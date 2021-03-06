import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { ValidationService } from '../../../validation/validation.service';
import {RecaptchaErrorParameters} from "ng-recaptcha";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;
  submitted: boolean = false;
  errorMessage = null;
  successMessage = null;
  constructor(private formBuilder: FormBuilder, private logInService: LoginService, private router: Router, private validationService: ValidationService) {
    this.logInForm = this.formBuilder.group({ email: ['', Validators.email], password: ['', Validators.required],      captcha: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onLogIn() {
    this.errorMessage = null;
    this.submitted = true;
    this.successMessage = null;
    if (this.logInForm.valid) {
      let email = this.logInForm.controls['email'].value;
      let hashedPassword = this.logInService.hashPassword(this.logInForm.controls['password'].value);
      this.logInService.sendLogInReqToBackend(email, hashedPassword).subscribe(response => {
        if (response["http_status"] != "OK")
          this.errorMessage = response["status_message"];
        else {
          this.logInService.setSessionId(response["data"]);
          this.validationService.isLoggedIn = true;
          this.validationService.stateChecked = false;
          this.successMessage = "OK";
          setTimeout((router: Router) => {
            this.router.navigate([".."]);
          }, 2000);
        }
      },
        error => {
          this.errorMessage = error.toString();
        });
    }
  }

  setErrorToNull() {
    this.errorMessage = null;
    this.successMessage = null;
  }
  public resolved(captchaResponse: string): void {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  public onError(errorDetails: RecaptchaErrorParameters): void {
    console.log(`reCAPTCHA error encountered; details:`, errorDetails);
  }

}
