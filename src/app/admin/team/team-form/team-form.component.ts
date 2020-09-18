import {Component, Injectable, OnInit} from '@angular/core';
import {TeamFormService} from './team-form.service';
import {FormGroup} from '@angular/forms';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {MatDialogRef} from '@angular/material/dialog';
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
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"
  };
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
  populateForm(data)
  {
    this.form.setValue({
      $key: data.team_id,
      event_name: data.event_name,
      organizing_club: data.organizing_club,
      team_name: data.team_name,
      leader_pec_fest_id: data.leader_pec_fest_id,
      member_pec_fest_id_list: data.member_pec_fest_id_list,
    });

  }

  onClose() {

  }

  newSubmit() {
    if(this.form.valid){
      if(this.form.get('$key').value){
        this.adminService.editEvent(this.form).subscribe(response=>{
          if(response["http_status"]=="OK")
            this.success('::Edited Successfully. Refresh your page');
          else
            this.success(response["status_message"]);
        },error => this.success('Oops! Some error occurred'))

      }
      else
      {
        this.adminService.addEvent(this.form).subscribe(response=>{
          if(response["http_status"]=="OK")
            this.success('::Added Successfully. Refresh your page');
          else
            this.success(response["status_message"]);
        },error => this.success('Oops! Some error occurred'))

      }

    }
  }

  onClear() {
    this.form.reset();
    this.initializeFormGroup();
    this.success('::Cleared Successfully');
  }
  success(msg){
    this.snackBar.open(msg,'',this.config);
  }
}
