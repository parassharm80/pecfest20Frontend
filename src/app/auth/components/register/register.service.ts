import { Injectable } from '@angular/core';
import {sha512} from 'js-sha512';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {WrapperResponse} from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url="http://localhost:8080/register"
  constructor(private http:HttpClient) { }
  hashPassword(password: string) {
    return sha512(password);
  }

  sendRegistrationReqToBackend(registrationForm: FormGroup,hashedPassword) {
    return this.http.post<WrapperResponse>(this.url,{email:registrationForm.controls["email"].value
      ,password:hashedPassword,first_name:registrationForm.controls["first_name"].value,
    last_name:registrationForm.controls["last_name"].value,
    contact_no:registrationForm.controls["contact_no"].value,
    year_of_education:registrationForm.controls["year_of_education"].value,
    college:registrationForm.controls["college"].value});
  }
}
