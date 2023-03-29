import { TestBed } from '@angular/core/testing';

import { ManualentryService } from './manualentry.service';

describe('ManualentryService', () => {
  let service: ManualentryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManualentryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
