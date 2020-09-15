import {Component, Injectable, OnInit} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {FormService} from "./form.service";
import {FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
@Injectable({ providedIn: 'root'})
export class FormComponent implements OnInit {

  constructor(private formService: FormService,private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<FormComponent>) { }

  public form: FormGroup = this.formService.form;

  ngOnInit(): void {
  }
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"
  };
  categories=["TECHNICAL","CULTURAL","WORKSHOP","LECTURE"];

  initializeFormGroup(){
    this.formService.form.setValue({
      $key: null,
      event_name:'',
      event_type:'',
      event_count:'',
      organizing_club:'',
      organizer_contact_no:'',
      min_number_of_participants:'',
      max_number_of_participants: '',
      event_start_date_and_time:'',
      event_end_date_and_time:'',
      event_description:'',
      prize_money_worth:'',
      venue: '',
      rules:'',
      event_banner_image_url:''
    });
  }

  success(msg){
    this.snackBar.open(msg,'',this.config);
  }

  onClear(){
    this.form.reset();
    this.initializeFormGroup();
    this.success('::Cleared Successfully');

  }

  onClose(){
    this.form.reset();
    this.initializeFormGroup();
    this.dialogRef.close();
  }

  populateForm(data)
  {
    this.form.setValue({
      $key: data.event_id,
      event_name: data.event_name,
      event_type: data.event_type,
      event_count: data.event_count,
      organizing_club: data.organizing_club,
      organizer_contact_no: data.organizer_contact_no,
      min_number_of_participants: data.min_number_of_participants,
      max_number_of_participants: data.max_number_of_participants,
      event_start_date_and_time: data.event_start_date_and_time,
      event_end_date_and_time: data.event_end_date_and_time,
      event_description: data.event_description,
      prize_money_worth: data.prize_money_worth,
      venue: data.venue,
      rules: data.rules,
      event_banner_image_url:data.event_banner_image_url
    });

  }

  newSubmit(){
    if(this.form.valid){
      if(this.form.get('$key').value){
        //EDIT functionality here

      }
      else
      {
        //ADD Functionality here

      }
      this.success('::Submitted Successfully');
    }
  }


}
