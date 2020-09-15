import { Component, OnInit } from '@angular/core';
import {ValidationService} from '../validation/validation.service';
import {HeaderService} from "./header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public validationGuardService:ValidationService, private headerService: HeaderService) { }

  ngOnInit(): void {
    this.access();
  }
  view = false;
  access() {
    this.headerService.getEventDetails().subscribe(
      (response) => {
        if(response["http_status"]=="OK")
          this.view = true;
      })
  }
}
