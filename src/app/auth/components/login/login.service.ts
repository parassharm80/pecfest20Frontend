import { Injectable } from '@angular/core';
import {sha512} from 'js-sha512';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url="http://localhost:8080/login"
  constructor(private http:HttpClient) { }

  hashPassword(password: string) {
    return sha512(password);
  }

  sendLogInReqToBackend(email: any, hashedPassword: string):Observable<WrapperResponse> {
    return this.http.post<WrapperResponse>(this.url,{email_id:email,password:hashedPassword});
  }

  setSessionId(sessionId:string) {

  }
}
export interface WrapperResponse{
  data;
  status_code;
  status_message;
  http_status;
}
