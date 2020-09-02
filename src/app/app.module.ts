import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from '@angular/material/dialog';
import {RouterModule} from "@angular/router";
import {AuthModule} from "./auth/auth.module";
import {HeaderModule} from "./header/header.module";
import {AccomodationModule} from "./accomodation/accomodation.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccomodationModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AuthModule,
    RouterModule,
    HeaderModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
