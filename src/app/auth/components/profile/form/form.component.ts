import { Component, Injectable, OnInit } from '@angular/core';
import { profileService } from "../profile.service";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { FormGroup } from "@angular/forms";
import { formService } from "./form.service";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdEnvService } from '../../../../prod-env.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
@Injectable({ providedIn: 'root' })
export class FormComponent implements OnInit {
  private userId = null;
  private url: string = this.prodEnvService.prodUrl;
  errorMessage = null;
  successMessage = null;

  constructor(private profileService: profileService, private dialog: MatDialog, private snackBar: MatSnackBar,
    private formService: formService, private dialogRef: MatDialogRef<FormComponent>, private http: HttpClient, private prodEnvService: ProdEnvService) { }
  public form: FormGroup = this.formService.form;
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"
  };

  initializeFormGroup() {
    this.errorMessage = null;
    this.successMessage = null;
    this.formService.form.setValue({
      $key: null,
      first_name: '',
      last_name: '',
      full_name: '',
      college_name: '',
      year_of_education: '',
      contact_no: '',
      gender: '',
    });
  }

  success(msg) {
    this.snackBar.open(msg, '', this.config);
  }

  onClear() {
    this.errorMessage = null;
    this.successMessage = null;
    this.form.reset();
    this.initializeFormGroup();
    this.success('::Cleared Successfully');
  }

  onClose() {
    this.errorMessage = null;
    this.successMessage = null;
    this.form.reset();
    this.initializeFormGroup();
    this.dialogRef.close();
  }
  populateForm(data) {
    this.errorMessage = null;
    this.successMessage = null;
    this.formService.userId = data.id;
    this.form.setValue({
      $key: null,
      first_name: data.first_name,
      last_name: data.last_name,
      full_name: data.full_name,
      college_name: data.college_name ? data.college_name : '',
      year_of_education: data.year_of_education,
      contact_no: data.contact_no,
      gender: data.gender ? data.gender : '',
    });
  }

  newSubmit() {

    this.errorMessage = null;
    this.successMessage = null;
    if (this.form.valid) {
      this.sendToBackend().subscribe(response => {
        if (response["http_status"] != "OK")
          this.errorMessage = response["status_message"];
        else
          this.successMessage = "Successfully Edited. Refresh your profile page";
      })
    }
  }

  ngOnInit(): void {
  }

  private sendToBackend(): Observable<any> {
    return this.http.put(this.url + `/user/${this.formService.userId}`, {
      first_name: this.form.controls["first_name"].value, last_name: this.form.controls["last_name"].value,
      gender: this.form.controls["gender"].value, contact_no: this.form.controls["contact_no"].value, college_name: this.form.controls["college_name"].value,
      year_of_education: this.form.controls["year_of_education"].value
    })
  }
}
