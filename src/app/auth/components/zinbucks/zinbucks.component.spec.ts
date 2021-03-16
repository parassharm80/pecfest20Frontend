import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZinbucksComponent } from './zinbucks.component';

describe('ZinbucksComponent', () => {
  let component: ZinbucksComponent;
  let fixture: ComponentFixture<ZinbucksComponent>;

  beforeEach(async(() => {
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
