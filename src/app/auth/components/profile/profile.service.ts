import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {ProdEnvService} from '../../../prod-env.service';

@Injectable({providedIn: 'root'})
export class profileService{
  private url=this.prodEnvService.prodUrl;
  constructor(private http: HttpClient,private cookieService:CookieService,private prodEnvService:ProdEnvService) {
  }

  getUserDetails():Observable<any> {
    return this.http.get(this.url+"/user/details",{headers:this.getHttpHeader()});
  }

  private getHttpHeader() {
    let  headers:HttpHeaders=new HttpHeaders();
    return headers.set("session_id",this.cookieService.getAll()["session_id"]==undefined ? this.cookieService.get("session_id") : this.cookieService.getAll()["session_id"]);
  }
}
