import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class eventService {
  constructor(private http: HttpClient) {
  }
  //Enter Backend Call Here
}
