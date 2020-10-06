import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from "./team.component"
import { ValidationGuard } from '../validation/validation.guard';

const routes: Routes = [
  {
    path: '',
    component: TeamComponent,
    canActivate: [ValidationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule { }
