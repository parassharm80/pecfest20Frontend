import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationComponent } from "./accomodation.component";

const routes: Routes = [
    {
        path: "",
        component: AccomodationComponent
    },
    {}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccomodationRoutingModule { }
