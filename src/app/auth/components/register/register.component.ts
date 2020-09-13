import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from './register.service';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  submitted: boolean=false;
  errorMessage=null;
  constructor(private formBuilder:FormBuilder,private regService:RegisterService,
              private snackBar: MatSnackBar,private dialogRef: MatDialogRef<RegisterComponent>) {
    this.registrationForm=this.formBuilder.group({first_name:['',Validators.required],last_name:['',Validators.required],
    contact_no:['',Validators.minLength(10)],
    email:['',Validators.email],password:['',Validators.required],college_name:['',Validators.required],
    year_of_education:['',Validators.required],
    gender:['',Validators.required]});
  }
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"
  };


  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted=true;
    this.errorMessage=null;
    if(this.registrationForm.valid){
      let hashedPassword=this.regService.hashPassword(this.registrationForm.controls['password'].value);
      this.regService.sendRegistrationReqToBackend(this.registrationForm,hashedPassword).subscribe(response=>{
          if(response["http_status"]!="OK") {
            this.errorMessage = response["status_message"];
            this.snackBar.open(this.errorMessage,'',this.config);
          }
          else
          {
            this.snackBar.open("Check your Email for verification",'',this.config);
            // redirecting for verification
          }
        },
        error => {
          this.errorMessage=error.toString();
        });
    }
  }
}
