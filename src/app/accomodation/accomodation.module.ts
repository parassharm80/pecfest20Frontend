import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from "@angular/material/button";
import { AccomodationRoutingModule } from "./accomodation-routing.module";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { AccomodationComponent } from "./accomodation.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AccomodationComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    AccomodationRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [],
  exports: [AccomodationComponent]
})
export class AccomodationModule {
}
