import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { CulturalComponent } from './types/cultural/cultural.component';
import { TechnicalComponent } from './types/technical/technical.component';
import { AcademicComponent } from './types/academic/academic.component';
import { EventComponent } from './event/event.component';
import {ValidationGuard} from '../validation/validation.guard';
import {FormComponent} from "./event/form/form.component";

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    canActivate:[ValidationGuard]
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
    ],
    canActivate:[ValidationGuard]
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
    ],
    canActivate:[ValidationGuard]
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
    ],
    canActivate:[ValidationGuard]
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
    ],
    canActivate:[ValidationGuard]
  },
  {
    path: ':event_type/:event_sub_type/:id',
    component: EventComponent,
    canActivate:[ValidationGuard]
  },
  {
    path: ':event_type/:event_sub_type/:id/edit',
    component: FormComponent,
  },
  {},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule { }
