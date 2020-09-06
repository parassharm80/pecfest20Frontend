import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from "./events-routing.module"
import { EventsComponent } from "./events.component";
import { TechnicalComponent } from './types/technical/technical.component';
import { AcademicComponent } from './types/academic/academic.component'
import { CulturalComponent } from './types/cultural/cultural.component';
import { EventComponent } from './event/event.component'

@NgModule({
  declarations: [
    EventsComponent,
    TechnicalComponent,
    AcademicComponent,
    CulturalComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ],
  exports: [EventsRoutingModule]
})
export class EventsModule {
}