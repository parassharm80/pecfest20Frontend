import { Component, OnInit } from '@angular/core';
import {ValidationService} from '../validation/validation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public validationGuardService:ValidationService) { }

  ngOnInit(): void {
  }

}
