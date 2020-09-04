import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingsoonComponent } from './comingsoon.component';

describe('ComingsoonComponent', () => {
  let component: ComingsoonComponent;
  let fixture: ComponentFixture<ComingsoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingsoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingsoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
