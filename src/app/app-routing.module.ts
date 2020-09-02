import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component"
import {HeaderComponent} from "./header/header.component";
import {AccomodationComponent} from "./accomodation/accomodation.component";

const routes: Routes = [
  {
    path:"",
    component:AccomodationComponent
  },
  // {
  //   path:"headers",
  //   loadChildren: () => import('./header/header.module').then(m => m.HeaderModule)
  // },
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
