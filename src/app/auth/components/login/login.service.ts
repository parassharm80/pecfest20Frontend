import { Injectable } from '@angular/core';
import { sha512 } from 'js-sha512';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { ProdEnvService } from '../../../prod-env.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = this.prodEnvService.prodUrl;
  constructor(private http: HttpClient, private cookieService: CookieService, private prodEnvService: ProdEnvService) { }

  hashPassword(password: string) {
    return sha512(password);
  }

  sendLogInReqToBackend(email: any, hashedPassword: string): Observable<WrapperResponse> {
    return this.http.post<WrapperResponse>(this.url + "/login", { email_id: email, password: hashedPassword });
  }

  setSessionId(sessionId: string) {
    this.cookieService.delete("session_id", "/");
    this.cookieService.set("session_id", sessionId, 50, "/");
  }
}
export interface WrapperResponse {
  data;
  status_code;
  status_message;
  http_status;
}
