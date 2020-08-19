import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component"

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    component:AppComponent
  },
  {
    path: 'accomodation',
    loadChildren: () => import('./accomodation/accomodation.module').then(m => m.AccomodationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
