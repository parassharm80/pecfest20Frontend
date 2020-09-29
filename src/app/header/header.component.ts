import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ValidationService} from '../validation/validation.service';
import {HeaderService} from "./header.service";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() fire: EventEmitter<any> = new EventEmitter();

  constructor(public validationGuardService:ValidationService, private headerService: HeaderService) {
  }
  navview = false;
  check=false;
  changeName(navview) {
    if(this.check==true) {
      this.check=false;
      this.navview = !navview
      this.fire.emit(this.navview);
    }
    else{
      this.navview = false;
      this.fire.emit(this.navview);
    }
  }
  changeName1(navView){
    this.check = true;
    this.changeName(navView);
  }
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
