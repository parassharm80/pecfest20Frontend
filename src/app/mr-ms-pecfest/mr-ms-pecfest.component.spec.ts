import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrMsPecfestComponent } from "./mr-ms-pecfest.component";

describe('MrMsPecfestComponent', () => {
  let component: MrMsPecfestComponent;
  let fixture: ComponentFixture<MrMsPecfestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrMsPecfestComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrMsPecfestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
