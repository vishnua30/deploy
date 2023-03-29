import { TestBed } from '@angular/core/testing';

import { InboundApiService } from './inbound-api.service';

describe('InboundApiService', () => {
  let service: InboundApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InboundApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
