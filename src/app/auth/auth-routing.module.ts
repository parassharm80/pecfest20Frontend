import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ResetpasswordComponent} from "./components/resetpassword/resetpassword.component";
import {ChangePasswordComponent} from "./components/change-password/change-password.component";
import {ConfirmEmailComponent} from "./components/confirm-email/confirm-email.component";
import {ValidationGuard} from '../validation/validation.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'reset-password', component: ResetpasswordComponent,canActivate:[ValidationGuard]},
  { path: 'change-password', component: ChangePasswordComponent},
  { path: 'confirm-email', component: ConfirmEmailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
