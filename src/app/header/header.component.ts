import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ValidationService } from '../validation/validation.service';
import { HeaderService } from "./header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() fire: EventEmitter<any> = new EventEmitter();

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
    // this.access();
  }
  // view = false;
  // access() {
  //   this.headerService.getEventDetails().subscribe(
  //     (response) => {
  //       if(response["http_status"]=="OK")
  //         this.view = true;
  //     })
  // }
}
