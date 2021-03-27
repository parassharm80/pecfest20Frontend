import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CulturalComponent } from './cultural.component';

describe('CulturalComponent', () => {
  let component: CulturalComponent;
  let fixture: ComponentFixture<CulturalComponent>;

  beforeEach(waitForAsync(() => {
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
