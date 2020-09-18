import { Injectable } from '@angular/core';
import {ProdEnvService} from '../../../prod-env.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TeamAdminService {

  constructor(private prodEnvService:ProdEnvService,private http:HttpClient) { }

  getRegsDetails(event_name: any):Observable<any> {
    return this.http.get(this.prodEnvService.prodUrl+"/admin/pecfest-registration/"+event_name,{headers:this.prodEnvService.getHttpHeaders()});
  }

  editEvent(form: FormGroup) {
    return this.http.put(this.prodEnvService.prodUrl+"/admin/pecfest-registration/"+form.controls["$key"].value,{new_team_name:form.controls["team_name"].value,member_pec_fest_id_list:this.getPecFestIds(form.controls["member_pec_fest_id_list"].value),leader_pec_fest_id:form.controls["leader_pec_fest_id"].value},{headers:this.prodEnvService.getHttpHeaders()});
  }

  addEvent(form: FormGroup) {
    return this.http.post(this.prodEnvService.prodUrl+"/admin/pecfest-registration/"+`${form.controls["organizing_club"].value}/${form.controls["event_name"].value}/${form.controls["team_name"].value}`,
      this.getPecFestIds(form.controls["member_pec_fest_id_list"].value),{headers:this.prodEnvService.getHttpHeaders()});
  }
  getPecFestIds(pecFestIds:string){
    return pecFestIds.split(',');
  }

  deleteEventRegs(team_id: any) {
    return this.http.delete(this.prodEnvService.prodUrl+"/admin/pecfest-registration/"+team_id,{headers:this.prodEnvService.getHttpHeaders()});
  }
}
