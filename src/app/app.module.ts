import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitButtonComponent,
    ComingsoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
