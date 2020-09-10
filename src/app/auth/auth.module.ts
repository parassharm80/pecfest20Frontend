import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import {FormsModule} from "@angular/forms";
import {ChangePasswordComponent} from "./components/change-password/change-password.component";
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetpasswordComponent, ChangePasswordComponent, ConfirmEmailComponent, ProfileComponent],
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
    ConfirmEmailComponent,
    ProfileComponent
  ]
})
export class AuthModule { }
