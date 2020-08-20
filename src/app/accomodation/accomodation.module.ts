import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccomodationRoutingModule } from "./accomodation-routing.module"
import { AccomodationComponent } from "./accomodation.component"
import {  }

@NgModule({
  declarations: [
    AccomodationComponent
  ],
  imports: [
    CommonModule,
    AccomodationRoutingModule
  ],
  exports: [AccomodationRoutingModule]
})
export class AccomodationModule {
}
