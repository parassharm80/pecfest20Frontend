import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ValidationGuard} from "../validation/validation.guard";
import {AdminComponent} from "./admin.component";
import {TeamAdminComponent} from './team/team-admin/team-admin.component';
import {UserRegComponent} from './user/user-reg.component';


const routes: Routes = [
  {
    path: 'events',
    component: AdminComponent,
    canActivate:[ValidationGuard]
  },
  {
    path: 'team',
    component: TeamAdminComponent,
    canActivate:[ValidationGuard]
  },
  {
    path: 'user-reg',
    component: UserRegComponent,
    canActivate:[ValidationGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
