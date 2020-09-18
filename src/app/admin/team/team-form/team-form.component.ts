import {Component, Injectable, OnInit} from '@angular/core';
import {TeamFormService} from './team-form.service';
import {FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialogRef} from '@angular/material/dialog';
import {AdminService} from '../../admin.service';
import {ProdEnvService} from '../../../prod-env.service';
import {TeamAdminService} from '../team-admin/team-admin.service';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
@Injectable({ providedIn: 'root'})
export class TeamFormComponent implements OnInit {

  constructor(private formService:TeamFormService,private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<TeamFormComponent>,private adminService:TeamAdminService,public  prodEnvService:ProdEnvService) { }
  public form: FormGroup = this.formService.form;
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

  onClose() {

  }

  newSubmit() {

  }

  onClear() {

  }
}
