import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  message=null;
  successMessage=null;
  private url="http://localhost:8080/register/verify";
  param:HttpParams=new HttpParams();
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.http.get(this.url,{params:this.param.append("confirmation_token",params["verification_token"])})
        .subscribe(response=>{
          if(response["http_status"]!="OK")
            this.message=response["status_message"];
          else
          { this.successMessage="Email Verified. Redirecting to login page."
            setTimeout((router: Router) => {
              this.router.navigate(["../login"]);
            }, 5000);
          }
        })
    })

  }

}
