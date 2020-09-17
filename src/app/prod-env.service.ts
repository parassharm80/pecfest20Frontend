import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ProdEnvService {

  prodUrl="http://localhost:8080"
  clubNames=["SCC","EIC","CIM","EEB","HEB","PEB","Rotaract_Club","PDC","APC","Music_Club","SAASC","Dramatics","NSS","NCC",
  "WEC","IIM","IGS","SESI","ROBOTICS","SAE","IEEE","SME","ASPS","ASCE","ASME","ATS","ACM_CSS","IETE","SPORTS"];
  constructor(private cookieService:CookieService) { }
  public getHttpHeaders() {
    let  headers:HttpHeaders=new HttpHeaders();
    return headers.set("session_id",this.cookieService.get("session_id"));
  }
}
