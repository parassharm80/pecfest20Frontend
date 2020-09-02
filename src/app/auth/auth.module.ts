import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import {FormsModule} from "@angular/forms";
import {ChangePasswordComponent} from "./components/change-password/change-password.component";
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetpasswordComponent, ChangePasswordComponent, ConfirmEmailComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent,
    ChangePasswordComponent,
    ConfirmEmailComponent
  ]
})
export class AuthModule { }
