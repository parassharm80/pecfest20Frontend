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
    path: 'cultural',
    children: [
      {
        path: '',
        component: CulturalComponent,
      },
      {
        path: ':name',
        component: CulturalComponent,
      },
    ]
  },
  {
    path: 'technical',
    children: [
      {
        path: '',
        component: TechnicalComponent,
      },
      {
        path: ':name',
        component: TechnicalComponent,
      },
    ]
  },
  {
    path: 'workshops',
    children: [
      {
        path: '',
        component: AcademicComponent,
      },
      {
        path: ':name',
        component: AcademicComponent,
      },
    ]
  },
  {
    path: 'lectures',
    children: [
      {
        path: '',
        component: AcademicComponent,
      },
      {
        path: ':name',
        component: AcademicComponent,
      },
    ]
  },
  {},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule { }
