import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProdEnvService } from '../../../prod-env.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  email_id = new FormControl('', Validators.email);
  private url = this.prodEnvService.prodUrl
  param = new HttpParams();
  submitted: boolean = false;
  message = null;
  successMessage = null;
  constructor(private fb: FormBuilder, private http: HttpClient, private prodEnvService: ProdEnvService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.message = null;
    this.successMessage = null;
    if (this.email_id.valid)
      this.http.get(this.url + "/generate-verification-code", { params: this.param.append("emailId", this.email_id.value) })
        .subscribe(response => {
          if (response["http_status"] != "OK")
            this.message = response["status_message"];
          else
            this.successMessage = "Check your email for password reset instructions."
        });
  }
}
