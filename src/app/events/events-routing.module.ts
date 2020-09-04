import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { CulturalComponent } from './types/cultural/cultural.component';
import { TechnicalComponent } from './types/technical/technical.component';
import { AcademicComponent } from './types/academic/academic.component';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
  },
  {
    path: 'cultural/:name',
    component: CulturalComponent,
  },
  {
    path: 'cultural',
    component: CulturalComponent,
  },
  {
    path: 'technical/:name',
    component: TechnicalComponent,
  },
  {
    path: 'technical',
    component: TechnicalComponent,
  },
  {
    path: 'workshops/:name',
    component: AcademicComponent,

  },
  {
    path: 'workshops',
    component: AcademicComponent,

  },
  {
    path: 'lectures/:name',
    component: AcademicComponent,

  },
  {
    path: 'lectures',
    component: AcademicComponent,

  },
  {},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule { }
