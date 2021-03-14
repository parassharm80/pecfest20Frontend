import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../validation/validation.service';
import { HeaderService } from "./header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public validationGuardService: ValidationService, private headerService: HeaderService) {
  }

  toggle = false;

  toggleBtn() {
    this.toggle = !this.toggle
  }

  toggleClose() {
    this.toggle = false
  }

  ngOnInit(): void {
  }
}
