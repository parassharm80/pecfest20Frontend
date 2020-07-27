import { EventsComponent } from './events/events.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'contact-us',
    component: ContactsComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'events',
    component: EventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
