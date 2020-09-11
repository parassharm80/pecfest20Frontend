import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({providedIn: 'root'})
export class formService{
  public form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    college: new FormControl('',Validators.required),
    contact: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
  })
}
