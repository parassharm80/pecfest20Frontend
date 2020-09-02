import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from "./confirmation-dialog/confirmation-dialog.component";
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css']
})
export class AccomodationComponent {
//  constructor(public dialog: MatDialog) {}
  showLoading = true;
  constructor(public dialog: MatDialog, private router: Router) {
    this.router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart)
        this.showLoading = true;

      if (routerEvent instanceof NavigationEnd||
          routerEvent instanceof NavigationCancel||
          routerEvent instanceof NavigationError)
        this.showLoading = false;
    });
    console.log(this.showLoading+'file');
  }

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
