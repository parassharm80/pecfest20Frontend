import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ValidationGuard} from '../validation/validation.guard';
import {MrMsPecfestComponent} from "./mr-ms-pecfest.component";

const routes: Routes = [
  {
    path: '',
    component: MrMsPecfestComponent,
    canActivate:[ValidationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MrMsPecfestRouting { }
