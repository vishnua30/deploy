import { TestBed } from '@angular/core/testing';

import { NewProdApiService } from './new-prod-api.service';

describe('NewProdApiService', () => {
  let service: NewProdApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewProdApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
