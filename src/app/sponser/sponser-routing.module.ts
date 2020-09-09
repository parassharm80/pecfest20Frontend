import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SponsorComponent} from "./sponser.component"

const routes: Routes = [
  {
    path: '',
    component: SponsorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SponsorRoutingModule { }