import { TestBed } from '@angular/core/testing';

import { ProdEnvService } from './prod-env.service';

describe('ProdEnvService', () => {
  let service: ProdEnvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdEnvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
