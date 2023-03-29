import { TestBed } from '@angular/core/testing';

import { LocationAnalyserApiService } from './location-analyser-api.service';

describe('LocationAnalyserApiService', () => {
  let service: LocationAnalyserApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationAnalyserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
