import {Component, Injectable, OnInit} from '@angular/core';
import {TeamFormService} from './team-form.service';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
@Injectable({ providedIn: 'root'})
export class TeamFormComponent implements OnInit {

  constructor(private formService:TeamFormService) { }

  ngOnInit(): void {
  }

  initializeFormGroup() {
    this.formService.form.setValue({
      $key: null, // team_id
      event_name:'',
      organizing_club:'',
      team_name:'',
      leader_pec_fest_id:'',
      member_pec_fest_id_list: '',
    });
  }
}
