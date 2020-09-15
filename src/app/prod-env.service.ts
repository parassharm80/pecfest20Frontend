import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdEnvService {

  clubNames=["SCC","EIC","CIM","EEB","HEB","PEB","Rotaract_Club","PDC","APC","Music_Club","SAASC","Dramatics","NSS","NCC",
  "WEC","IIM","IGS","SESI","ROBOTICS","SAE","IEEE","SME","ASPS","ASCE","ASME","ATS","ACM_CSS","IETE","SPORTS"];
  constructor() { }
}
