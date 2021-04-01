import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeamAdminComponent } from './team-admin.component';

describe('TeamAdminComponent', () => {
  let component: TeamAdminComponent;
  let fixture: ComponentFixture<TeamAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
