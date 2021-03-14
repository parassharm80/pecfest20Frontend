import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class formService {
  userId;
  public form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    full_name: new FormControl('', Validators.required),
    college_name: new FormControl('', Validators.required),
    contact_no: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    year_of_education: new FormControl('', Validators.required)
  })
}
