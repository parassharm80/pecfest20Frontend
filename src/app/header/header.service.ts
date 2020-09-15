import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class HeaderService {

  private url = "http://localhost:8080/event/admin"

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  getEventDetails(): Observable<any> {
    return this.http.get(this.url, {headers: this.getHttpHeader()});
  }

  private getHttpHeader() {
    let headers: HttpHeaders = new HttpHeaders();
    return headers.set("session_id", this.cookieService.get("session_id"));
  }
}
