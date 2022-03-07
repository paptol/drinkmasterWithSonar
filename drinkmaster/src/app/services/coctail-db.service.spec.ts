import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CoctailDbService } from './coctail-db.service';

describe('CoctailDbService', () => {
  let service: CoctailDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CoctailDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
