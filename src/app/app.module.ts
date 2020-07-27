import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule, } from "@angular/material/checkbox";
import {MatToolbarModule} from "@angular/material/toolbar";
import { ContactsComponent } from './contacts/contacts.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { EventsComponent } from './events/events.component';
import { SignupComponent } from './signup/signup.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { HospitalityComponent } from './hospitality/hospitality.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ScheduleComponent,
    HomeComponent,
    HeaderComponent,
    EventsComponent,
    SignupComponent,
    SponsorComponent,
    HospitalityComponent,
    ProfileComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
