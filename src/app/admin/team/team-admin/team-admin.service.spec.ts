import { TestBed } from '@angular/core/testing';

import { TeamAdminService } from './team-admin.service';

describe('TeamAdminService', () => {
  let service: TeamAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
