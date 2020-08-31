import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import {FormsModule} from "@angular/forms";


// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetpasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent
  ]
})
export class AuthModule { }
