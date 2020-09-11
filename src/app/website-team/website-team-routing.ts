import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WebsiteTeamComponent} from "./website-team.component"
import {ValidationGuard} from '../validation/validation.guard';

const routes: Routes = [
  {
    path: '',
    component: WebsiteTeamComponent,
    canActivate:[ValidationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteTeamRoutingModule { }
