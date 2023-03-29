import { TestBed } from '@angular/core/testing';

import { OutboundapiService } from './outboundapi.service';

describe('OutboundapiService', () => {
  let service: OutboundapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutboundapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
