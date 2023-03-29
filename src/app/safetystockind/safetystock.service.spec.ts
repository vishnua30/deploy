import { TestBed } from '@angular/core/testing';

import { SafetystockService } from './safetystock.service';

describe('SafetystockService', () => {
  let service: SafetystockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SafetystockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
