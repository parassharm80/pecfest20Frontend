import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ProdEnvService } from '../prod-env.service';

@Injectable({ providedIn: 'root' })
export class HeaderService {

  private url = this.prodEnvService.prodUrl;

  constructor(private http: HttpClient, private cookieService: CookieService, private prodEnvService: ProdEnvService) {
  }

  getEventDetails(): Observable<any> {
    return this.http.get(this.url + "/event/admin", { headers: this.getHttpHeader() });
  }

  private getHttpHeader() {
    let headers: HttpHeaders = new HttpHeaders();
    return headers.set("session_id", this.cookieService.get("session_id"));
  }
}
