import { TestBed } from '@angular/core/testing';

import { RetrunapiCompService } from './retrunapi-comp.service';

describe('RetrunapiCompService', () => {
  let service: RetrunapiCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrunapiCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
