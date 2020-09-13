import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {WrapperResponse} from '../auth/components/login/login.service';
import { map, catchError } from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  public isLoggedIn=true;
  public stateChecked=true;
  public routeSet:Set<string>=new Set();
  private url="http://localhost:8080/session/verify"
  constructor(private http:HttpClient,private cookieService:CookieService) {
    this.routeSet.add("/reset-password");
    this.routeSet.add("/confirm-email");
  }

  public  verifySessionId() {
    if(this.stateChecked)
      return of(this.isLoggedIn);
    return this.http.get<boolean>(this.url,{headers:this.getHttpHeaders()});
  }

  private getHttpHeaders() {
    let  headers:HttpHeaders=new HttpHeaders();
    return headers.set("session_id",this.cookieService.get("session_id"));
  }
}
