import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
