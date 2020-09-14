import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ValidationGuard } from './validation/validation.guard';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [ValidationGuard]
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule),
  },
  // {
  //   path: 'accomodation',
  //   loadChildren: () => import('./accomodation/accomodation.module').then(m => m.AccomodationModule)
  // },
  {
    path: 'team',
    loadChildren: () => import('./team/team.module').then(m => m.TeamModule)
  },
  {
    path: 'website-team',
    loadChildren: () => import('./website-team/website-team.module').then(m => m.WebsiteTeamModule)
  },
  {
    path: 'sponsors',
    loadChildren: () => import('./sponser/sponser.module').then(m => m.SponsorModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
