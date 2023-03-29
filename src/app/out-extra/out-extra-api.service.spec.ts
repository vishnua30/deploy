import { TestBed } from '@angular/core/testing';

import { OutExtraApiService } from './out-extra-api.service';

describe('OutExtraApiService', () => {
  let service: OutExtraApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutExtraApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
