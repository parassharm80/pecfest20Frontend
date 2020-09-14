import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SponsorComponent} from "../sponser/sponser.component";
import {ValidationGuard} from "../validation/validation.guard";
import {AdminComponent} from "./admin.component";


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate:[ValidationGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
