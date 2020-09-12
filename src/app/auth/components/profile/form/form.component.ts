import {Component, Injectable, OnInit} from '@angular/core';
import {profileService} from "../profile.service";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {FormGroup, Validators} from "@angular/forms";
import {formService} from "./form.service";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
@Injectable({ providedIn: 'root'})
export class FormComponent implements OnInit {

  constructor(private profileService: profileService,private dialog: MatDialog,private snackBar: MatSnackBar,
              private formService: formService, private dialogRef: MatDialogRef<FormComponent>) { }
  public form: FormGroup = this.formService.form;
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"
  };

  initializeFormGroup(){
    this.formService.form.setValue({
      $key: null,
      first_name:'',
      last_name:'',
      full_name: '',
      college_name: '',
      year_of_education:'',
      contact_no: '',
      gender: '',
    });
  }

  success(msg){
    this.snackBar.open(msg,'',this.config);
  }

  onClear(){
    this.form.reset();
    this.initializeFormGroup();
    this.success('::Cleared Successfully');
  }

  onClose(){
    this.form.reset();
    this.initializeFormGroup();
    this.dialogRef.close();
  }
  populateForm(data) {
    this.form.setValue({
      $key: null,
      first_name:data.first_name,
      last_name:data.last_name,
      full_name: data.full_name,
      college_name: data.college_name ? data.college_name : '',
      year_of_education:data.year_of_education,
      contact_no: data.contact_no,
      gender: data.gender ? data.gender : '',
    });
  }

  newSubmit() {
    if(this.form.valid) {
      if (this.form.get('$key').value) {
        // this.profileService.editConfigurations(this.form.get('$key').value, this.form.value)
        //   .subscribe(() => {
        //
        //   });
      }
      this.form.reset();
      this.initializeFormGroup();
      this.success('::Submitted Successfully');
      this.onClose();
    }
  }

  ngOnInit(): void {
  }

}
