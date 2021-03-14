
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorRoutingModule } from "./sponser-routing.module";
import { SponsorComponent } from "./sponser.component";


@NgModule({
  declarations: [SponsorComponent],
  imports: [
    CommonModule,
    SponsorRoutingModule,
  ],
  exports: [

  ]
})
export class SponsorModule { }

