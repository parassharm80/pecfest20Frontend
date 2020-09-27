import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url="http://localhost:8080/event/club-wise"
  private registerUrl="http://localhost:8080/pecfest-registration";
  isFetchingEvents=false;
  firstTimeFetch=true;
  events:EventResponse;
  cachedWrapperResponse:EventWrapperResponse;
  clubEvents: Array<any>;
  constructor(private http:HttpClient,private cookieService:CookieService) { }

  fetchEvents():Observable<EventWrapperResponse> {
    this.isFetchingEvents = true;
    if(this.firstTimeFetch)
      return this.http.get<EventWrapperResponse>(this.url);
    return of(this.cachedWrapperResponse);
  }

  manipulateResponse(response: EventWrapperResponse) {
    this.cachedWrapperResponse=response;
    this.isFetchingEvents=false;
    this.firstTimeFetch=false;
    this.events=response.data;
  }

  registerIndividual(event_id):Observable<any> {
    return this.http.post(this.registerUrl+`/${event_id}`,[],{headers:this.getHttpHeader()});
  }
  private getHttpHeader() {
    let  headers:HttpHeaders=new HttpHeaders();
    return headers.set("session_id",this.cookieService.getAll()["session_id"]==undefined ? this.cookieService.get("session_id") : this.cookieService.getAll()["session_id"]);
  }
}
interface EventWrapperResponse{
  data:EventResponse;
  http_status;
  status_code;
  status_message;
}
interface EventResponse{
  cultural_event:Array<ClubEventList>;
  technical_event:Array<ClubEventList>;
  lecture:Array<ClubEventList>;
  workshop:Array<ClubEventList>;
}
interface ClubEventList{
  club_name:string;
  event_list:Array<any>;
}
