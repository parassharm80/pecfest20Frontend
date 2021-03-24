import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ZinbucksComponent } from './zinbucks.component';

describe('ZinbucksComponent', () => {
  let component: ZinbucksComponent;
  let fixture: ComponentFixture<ZinbucksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ZinbucksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZinbucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
