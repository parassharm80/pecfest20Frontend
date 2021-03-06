import { Injectable } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ProdEnvService } from '../../../prod-env.service';
import {EventRegData} from "../form2/form2.service";

@Injectable({ providedIn: 'root' })
export class formService {
  public form: FormGroup;
  localEventDetails: any;
  url = this.prodEnvService.prodUrl
  constructor(private http: HttpClient, private cookieService: CookieService, private prodEnvService: ProdEnvService) {
  }
  createForm(eventDetails: any) {
    this.form = new FormGroup({
      $key: new FormControl(null),
      teamname: new FormControl('', Validators.required),
      check: new FormControl('',Validators.required),
      team_members: this.getFormArray(eventDetails),
      link: new FormControl('',Validators.required)
    });
  }
  private getFormArray(eventDetails: any) {
    this.localEventDetails = eventDetails;
    let teamMemberArray = new FormArray([]);
    for (let i = 0; i < eventDetails.min_number_of_participants; i++)
      teamMemberArray.push(new FormControl('', Validators.required));
    return teamMemberArray;
  }

  addTeamMember() {
    if (this.localEventDetails.max_number_of_participants > this.form.controls["team_members"].value.length) {
      (this.form.controls["team_members"] as FormArray).push(new FormControl('', Validators.required));
      return null;
    }
    else
      return "Max Team Size Limit Reached"
  }

  registerTeam(pecfestIdList, team_name) {
    let obj:EventRegData={"pecfestIdList":pecfestIdList,"contentLink": this.form.controls["link"].value}
    return this.http.post(this.url + `/pecfest-registration/${this.localEventDetails.event_id}/${team_name}`, obj, { headers: this.getHttpHeaders() });
  }

  private getHttpHeaders() {
    let headers: HttpHeaders = new HttpHeaders();
    return headers.set("session_id", this.cookieService.getAll()["session_id"] == undefined ? this.cookieService.get("session_id") : this.cookieService.getAll()["session_id"]);
  }
}
