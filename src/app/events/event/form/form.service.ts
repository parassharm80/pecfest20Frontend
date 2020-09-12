import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({providedIn: 'root'})
export class formService{
  public form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    username1: new FormControl('',Validators.required),
    username2: new FormControl('',Validators.required),
    username3: new FormControl('',Validators.required),
    username4: new FormControl('',Validators.required),
    teamname: new FormControl('',Validators.required),
  })
}
