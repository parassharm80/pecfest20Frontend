import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccomodationRoutingModule } from "./accomodation-routing.module"
import { AboutUsComponent } from "./about-us/about-us.component"
import { ChargesComponent } from "./charges/charges.component"
import { HomeComponent } from "./home/home.component"
import { faqComponent } from "./faq/faq.component"
import { PrivilegesComponent } from "./privileges/privileges.component"
import { RegisterComponent } from "./register/register.component"


@NgModule({
  declarations: [
    AboutUsComponent,ChargesComponent,
    HomeComponent, faqComponent, PrivilegesComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AccomodationRoutingModule
  ],
  exports: [AccomodationRoutingModule]
})
export class AccomodationModule {
}
