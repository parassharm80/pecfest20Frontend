import { TestBed } from '@angular/core/testing';

import { TeamFormService } from './team-form.service';

describe('TeamFormService', () => {
  let service: TeamFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
