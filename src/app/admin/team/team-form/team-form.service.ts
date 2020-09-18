import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TeamFormService {
  public form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    event_name: new FormControl('', Validators.required),
    organizing_club: new FormControl('', Validators.required),
    team_name: new FormControl('', Validators.required),
    leader_pec_fest_id: new FormControl('', Validators.required),
    member_pec_fest_id_list: new FormControl('', Validators.required),
  })
}
