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
    
  }

  addEvent(form: FormGroup) {
    
  }
}
