import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url="http://localhost:8080/event/club-wise"
  isFetchingEvents=false;
  firstTimeFetch=true;
  events:EventResponse;
  cachedWrapperResponse:EventWrapperResponse;
  clubEvents: Array<any>;
  constructor(private http:HttpClient) { }

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
