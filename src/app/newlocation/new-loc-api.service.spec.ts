import { TestBed } from '@angular/core/testing';

import { NewLocApiService } from './new-loc-api.service';

describe('NewLocApiService', () => {
  let service: NewLocApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewLocApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
