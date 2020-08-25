import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css']
})
export class AccomodationComponent {
  constructor(public dialog: MatDialog) {}

  openConfirmationDialog() {
    this.dialog.open(ConfirmationDialogBox);
  }
}

@Component({
  selector: 'confirmation-dialog-box',
  templateUrl: './confirmationDialogBox.html',
})
export class ConfirmationDialogBox {

    applyForAccomodation() {
      console.log("applied");
    }

}
