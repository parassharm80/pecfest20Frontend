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
import {FormComponent} from "./components/profile/form/form.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {VerifyEmailComponent} from './components/verify-email/verify-email.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetpasswordComponent, ChangePasswordComponent, VerifyEmailComponent, ProfileComponent, FormComponent],
  providers:[        { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [FormComponent] },

  ],

  imports: [
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatTableModule,
    MatSortModule,
    DragDropModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatSnackBarModule,
    MatDialogModule,
    MatToolbarModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent,
    ChangePasswordComponent,
    VerifyEmailComponent,
    ProfileComponent,
    FormComponent
  ],
})
export class AuthModule { }
