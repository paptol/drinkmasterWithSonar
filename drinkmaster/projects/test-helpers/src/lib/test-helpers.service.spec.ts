import { TestBed } from '@angular/core/testing';

import { TestHelpersService } from './test-helpers.service';

describe('TestHelpersService', () => {
  let service: TestHelpersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestHelpersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
