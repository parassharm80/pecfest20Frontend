import { SponsorComponent } from './sponsor/sponsor.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HospitalityComponent } from './hospitality/hospitality.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact-us', component: ContactsComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'events', component: EventsComponent},
  {path: 'hospitality', component: HospitalityComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sponsors', component: SponsorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
