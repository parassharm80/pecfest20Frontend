import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SponsorComponent} from "./sponser.component"
import {ValidationGuard} from '../validation/validation.guard';

const routes: Routes = [
  {
    path: '',
    component: SponsorComponent,
    canActivate:[ValidationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SponsorRoutingModule { }
