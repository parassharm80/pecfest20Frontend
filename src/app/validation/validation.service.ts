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
  public isLoggedIn=false;
  public stateChecked=false;
  public routeSet:Set<string>=new Set();
  private url="http://localhost:8080/session/verify"
  constructor(private http:HttpClient,private cookieService:CookieService) {
    this.routeSet.add("/reset-password");
    this.routeSet.add("/confirm-email");
  }

  public  verifySessionId(stateUrl) {

    if(this.stateChecked){
      if(this.isLoggedIn){
        if(stateUrl=="/register"||stateUrl=="/login")
          return of(!this.isLoggedIn);
        else
          return of(this.isLoggedIn);
      }
      else{
        if(stateUrl!=="/profile")
          return of(this.isLoggedIn);
        else
          return of(true);
      }
    }

    return this.http.get<boolean>(this.url,{headers:this.getHttpHeaders()}).pipe(
      map((response) => {
        this.isLoggedIn=response;
        this.stateChecked=true;
        if(this.isLoggedIn){
          if(stateUrl=="/register"||stateUrl=="/login")
            return !this.isLoggedIn;
          else
              return response;
        }
        else{
          if(stateUrl!=="/profile")
              return this.isLoggedIn;
          else
              return !response;
        }

      })
    );

  }

  private getHttpHeaders() {
    let  headers:HttpHeaders=new HttpHeaders();
    return headers.set("session_id",this.cookieService.get("session_id"));
  }
}
