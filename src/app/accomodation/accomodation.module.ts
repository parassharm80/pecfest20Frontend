import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule } from '@angular/material/expansion';
import { AccomodationRoutingModule } from "./accomodation-routing.module";
import { AccomodationComponent } from "./accomodation.component";

@NgModule({
  declarations: [
    AccomodationComponent
  ],
  imports: [
    CommonModule,
    AccomodationRoutingModule,
    MatExpansionModule
  ],
  exports: [AccomodationRoutingModule]
})
export class AccomodationModule {
}
