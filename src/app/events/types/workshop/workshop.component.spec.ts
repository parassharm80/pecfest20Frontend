import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorkshopComponent } from './workshop.component';

describe('WorkshopComponent', () => {
  let component: WorkshopComponent;
  let fixture: ComponentFixture<WorkshopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
