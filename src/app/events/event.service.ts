import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { ProdEnvService } from '../prod-env.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = this.prodEnvService.prodUrl
  private registerUrl = this.prodEnvService.prodUrl
  isFetchingEvents = false;
  firstTimeFetch = true;
  events: EventResponse;
  cachedWrapperResponse: EventWrapperResponse;
  clubEvents: Array<any>;
  constructor(private http: HttpClient, private cookieService: CookieService, private prodEnvService: ProdEnvService) { }

  fetchEvents(): Observable<EventWrapperResponse> {
    this.isFetchingEvents = true;
    if (this.firstTimeFetch)
      return this.http.get<EventWrapperResponse>(this.url + "/event/club-wise");
    return of(this.cachedWrapperResponse);
  }

  manipulateResponse(response: EventWrapperResponse) {
    this.cachedWrapperResponse = response;
    this.isFetchingEvents = false;
    this.firstTimeFetch = false;
    this.events = response.data;
  }

  registerIndividual(event_id): Observable<any> {
    return this.http.post(this.registerUrl + `/pecfest-registration/${event_id}`, [], { headers: this.getHttpHeader() });
  }
  private getHttpHeader() {
    let headers: HttpHeaders = new HttpHeaders();
    return headers.set("session_id", this.cookieService.getAll()["session_id"] == undefined ? this.cookieService.get("session_id") : this.cookieService.getAll()["session_id"]);
  }
}
interface EventWrapperResponse {
  data: EventResponse;
  http_status;
  status_code;
  status_message;
}
interface EventResponse {
  cultural_event: Array<ClubEventList>;
  technical_event: Array<ClubEventList>;
  lecture: Array<ClubEventList>;
  workshop: Array<ClubEventList>;
}
interface ClubEventList {
  club_name: string;
  event_list: Array<any>;
}
