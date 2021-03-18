import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { WrapperResponse } from '../auth/components/login/login.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProdEnvService } from '../prod-env.service';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  public isLoggedIn = true;
  public stateChecked = true;
  public isAdmin = true;
  public routeSet: Set<string> = new Set();
  private url = this.prodEnvService.prodUrl;
  constructor(private http: HttpClient, private cookieService: CookieService, private prodEnvService: ProdEnvService) {
    this.routeSet.add("/reset-password");
    this.routeSet.add("/confirm-email");
  }

  public verifySessionId() {
    if (this.stateChecked)
      return of({ admin: this.isAdmin, logged_in: this.isLoggedIn });
    return this.http.get<SessionResponse>(this.url + "/session/verify", { headers: this.getHttpHeaders() });
  }

  private getHttpHeaders() {
    let headers: HttpHeaders = new HttpHeaders();
    return headers.set("session_id", this.cookieService.getAll()["session_id"] == undefined ? this.cookieService.get("session_id") : this.cookieService.getAll()["session_id"]);
  }
}
export interface SessionResponse {
  admin: boolean;
  logged_in: boolean;
}
