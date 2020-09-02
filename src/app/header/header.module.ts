import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from "../auth/auth-routing.module";
import {HeaderRoutingModule} from "./header-routing.module";
import {HeaderComponent} from "./header.component";


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HeaderRoutingModule,
  ],
})
export class HeaderModule { }
