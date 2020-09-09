import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WebsiteTeamComponent} from "./website-team.component"

const routes: Routes = [
  {
    path: '',
    component: WebsiteTeamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteTeamRoutingModule { }