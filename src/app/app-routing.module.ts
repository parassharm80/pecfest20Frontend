import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component"
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    // component: HomeComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
