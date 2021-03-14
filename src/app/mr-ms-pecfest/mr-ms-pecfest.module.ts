import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MrMsPecfestRouting} from "./mr-ms-pecfest-routing";
import {MrMsPecfestComponent} from "./mr-ms-pecfest.component";


@NgModule({
  declarations: [MrMsPecfestComponent],
  imports: [
    CommonModule,
    MrMsPecfestRouting,

  ],
  exports: [

  ]
})
export class MrMsPecfestModule { }

