import { TestBed } from '@angular/core/testing';

import { ValidationGuard } from './validation.guard';

describe('ValidationGuard', () => {
  let guard: ValidationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
