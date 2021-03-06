import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { form2Service } from "./form2.service";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { eventService } from "../event.service";

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
@Injectable({ providedIn: 'root' })
export class Form2Component implements OnInit {
  errorMessage = null;
  successMessage = null;

  constructor(private eventService: eventService, private dialog: MatDialog, private snackBar: MatSnackBar,
              public formService: form2Service, private dialogRef: MatDialogRef<Form2Component>) { }
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"
  };
  maxLimitMessage = null;
  success(msg) {
    this.snackBar.open(msg, '', this.config);
  }

  onClear() {
    this.maxLimitMessage = null;
    this.formService.form.reset();
    this.formService.createForm(this.formService.localEventDetails);
    this.success('::Cleared Successfully');
  }

  onClose() {
    this.maxLimitMessage = null;
    this.formService.form.reset();
    this.formService.createForm(this.formService.localEventDetails);
    this.dialogRef.close();
  }
  populateForm(eventDetails) {
    this.maxLimitMessage = null;
    this.formService.createForm(eventDetails);
  }

  ngOnInit(): void {
  }

  addTeamMember() {
    this.maxLimitMessage = this.formService.addTeamMember();
    if (this.maxLimitMessage != null)
      this.success(this.maxLimitMessage);
  }

  onSubmit() {
    this.errorMessage = null;
    this.successMessage = null;
    let mySet: Set<any> = new Set<any>();
    let pecFestIdList: Array<string> = [];
    for (let teamMemberControl of this.formService.form.controls['team_members']['controls']) {
      let username = teamMemberControl.value;
      username = username.toUpperCase();
      if (mySet.has(username)) {
        this.errorMessage = "No two PECFEST usernames could be same";
        return;
      }
      pecFestIdList.push(username);
      mySet.add(username);
    }
    if (this.formService.form.valid)
      this.formService.registerTeam(pecFestIdList, this.formService.form.controls["team_members"].value).subscribe(response => {
        if (response["http_status"] != "OK")
          this.errorMessage = response["status_message"];
        else
          this.successMessage = "Successfully Registered";
      });
  }
}
