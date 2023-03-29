import { TestBed } from '@angular/core/testing';

import { AutosuggestApiService } from './autosuggest-api.service';

describe('AutosuggestApiService', () => {
  let service: AutosuggestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutosuggestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
