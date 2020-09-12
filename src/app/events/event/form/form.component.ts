import {Component, Injectable, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {formService} from "./form.service";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {FormGroup} from "@angular/forms";
import {eventService} from "../event.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
@Injectable({ providedIn: 'root'})
export class FormComponent implements OnInit {

  constructor(private eventService: eventService,private dialog: MatDialog,private snackBar: MatSnackBar,
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
      username1: '',
      username2: '',
      username3: '',
      username4: '',
      teamname: '',
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
      username1: '',
      username2: '',
      username3: '',
      username4: '',
      teamname: '',
    });
  }

  newSubmit() {
    if(this.form.valid) {
      if (this.form.get('$key').value) {
        // this.eventService.editConfigurations(this.form.get('$key').value, this.form.value)
        //   .subscribe(() => {
        //  Enter call to event service here
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
