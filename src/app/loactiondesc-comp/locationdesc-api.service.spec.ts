import { TestBed } from '@angular/core/testing';

import { LocationdescApiService } from './locationdesc-api.service';

describe('LocationdescApiService', () => {
  let service: LocationdescApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationdescApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
