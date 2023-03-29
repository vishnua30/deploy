import { TestBed } from '@angular/core/testing';

import { TruckCompService } from './truck-comp.service';

describe('TruckCompService', () => {
  let service: TruckCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TruckCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
