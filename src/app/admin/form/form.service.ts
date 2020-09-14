import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({providedIn: 'root'})
export class FormService{
  public form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    event_name: new FormControl('', Validators.required),
    event_type: new FormControl('', Validators.required),
    event_count: new FormControl('', Validators.required),
    organizing_club: new FormControl('', Validators.required),
    organizer_contact_no: new FormControl('', Validators.required),
    min_number_of_participants: new FormControl('', Validators.required),
    max_number_of_participants: new FormControl('', Validators.required),
    event_start_date_and_time: new FormControl('', Validators.required),
    event_end_date_and_time: new FormControl('', Validators.required),
    event_description: new FormControl('', Validators.required),
    prize_money_worth: new FormControl('', Validators.required),
    venue: new FormControl('', Validators.required),
    rules: new FormControl('', Validators.required),
  })
}
