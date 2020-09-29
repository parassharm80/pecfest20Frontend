import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ProdEnvService {

  prodUrl="http://ec2-13-232-246-179.ap-south-1.compute.amazonaws.com"
  clubNames=["SCC","EIC","CIM","EEB","HEB","PEB","Rotaract_Club","PDC","APC","Music_Club","SAASC","Dramatics","NSS","NCC",
  "WEC","IIM","IGS","SESI","ROBOTICS","SAE","IEEE","SME","ASPS","ASCE","ASME","ATS","ACM_CSS","IETE","SPORTS"];
  constructor(private cookieService:CookieService) { }
  public getHttpHeaders() {
    let  headers:HttpHeaders=new HttpHeaders();
    return headers.set("session_id",this.cookieService.getAll()["session_id"]==undefined ? this.cookieService.get("session_id") : this.cookieService.getAll()["session_id"]);
  }
}
