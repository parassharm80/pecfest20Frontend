import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url="http://localhost:8080/event/club-wise"
  isFetchingEvents=false;
  firstTimeFetch=true;
  events:EventResponse;
  constructor(private http:HttpClient) { }

  fetchEvents() {
    if(this.firstTimeFetch) {
      this.isFetchingEvents = true;
      this.http.get<EventWrapperResponse>(this.url).subscribe(response => {
        this.events = response.data;
        this.firstTimeFetch = false;
        this.isFetchingEvents=false;
      });
    }
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
