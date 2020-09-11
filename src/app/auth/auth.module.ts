import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChangePasswordComponent} from "./components/change-password/change-password.component";
import { ProfileComponent } from './components/profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {VerifyEmailComponent} from './components/verify-email/verify-email.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetpasswordComponent, ChangePasswordComponent, VerifyEmailComponent, ProfileComponent],
  imports: [
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent,
    ChangePasswordComponent,
    VerifyEmailComponent,
    ProfileComponent
  ],
  providers:[CookieService]
})
export class AuthModule { }
