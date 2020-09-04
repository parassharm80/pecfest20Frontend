import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalComponent } from './cultural.component';

describe('CulturalComponent', () => {
  let component: CulturalComponent;
  let fixture: ComponentFixture<CulturalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
