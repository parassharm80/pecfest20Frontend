import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from "./confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css']
})
export class AccomodationComponent {
  constructor(public dialog: MatDialog) {}

  openConfirmationDialog() {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result == "true") {
        this.applyForAccomodation();
      }
    })
  }

  applyForAccomodation() {
    console.log("applied");
  }
}