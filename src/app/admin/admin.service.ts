import {Injectable} from "@angular/core";
import {CookieService} from "ngx-cookie-service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({providedIn: 'root'})
export class AdminService{
  private url="http://localhost:8080/event/all"
  constructor(private http: HttpClient,private cookieService:CookieService) {
  }
  getEventDetails():Observable<any> {
    return this.http.get(this.url);
  }

  private getHttpHeader() {
    let  headers:HttpHeaders=new HttpHeaders();
    return headers.set("session_id",this.cookieService.get("session_id"));
  }


}

