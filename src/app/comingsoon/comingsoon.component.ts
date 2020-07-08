import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.css'],
})
export class ComingsoonComponent implements OnInit {
  title: string = 'COMING SOON';
  sub_title: string = 'We will be celebrating the launch soon!';

  constructor() {}

  ngOnInit(): void {}
}
