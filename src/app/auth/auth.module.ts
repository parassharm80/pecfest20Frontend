import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChangePasswordComponent} from "./components/change-password/change-password.component";
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';
import { ProfileComponent } from './components/profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetpasswordComponent, ChangePasswordComponent, ConfirmEmailComponent, ProfileComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent,
    ChangePasswordComponent,
    ConfirmEmailComponent,
    ProfileComponent
  ],
  providers:[CookieService]
})
export class AuthModule { }
