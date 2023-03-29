import { TestBed } from '@angular/core/testing';

import { RelocationApiService } from './relocation-api.service';

describe('RelocationApiService', () => {
  let service: RelocationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelocationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
