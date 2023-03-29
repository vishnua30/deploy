import { TestBed } from '@angular/core/testing';

import { OutLocApiService } from './out-loc-api.service';

describe('OutLocApiService', () => {
  let service: OutLocApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutLocApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
