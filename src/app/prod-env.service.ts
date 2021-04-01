import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ProdEnvService {

  prodUrl="http://localhost:8080";
  // prodUrl = "https://pecfest.in/backend"
  clubNames = [
    "RHYTHM_AND_SHOES",
    "GAMEOTHONS",
    "BRAIN_BOOSTERS",
    "VERBAL_WARS",
    "ALL_THE_WORLD_S_A_STAGE",
    "ARTIST_S_PARADISE",
    "Treasure_Hunt",
    "CAD_Competitions",
    "Gaming",
    "Electronics_and_Circuits",
    "Webinars",
    "Miscellaneous",
    "Coding",
    "Quiz",
    "Case_Study_Competition",
    "ROBOTICS"
  ];
  constructor(private cookieService: CookieService) { }
  public getHttpHeaders() {
    let headers: HttpHeaders = new HttpHeaders();
    return headers.set("session_id", this.cookieService.getAll()["session_id"] == undefined ? this.cookieService.get("session_id") : this.cookieService.getAll()["session_id"]);
  }
}
