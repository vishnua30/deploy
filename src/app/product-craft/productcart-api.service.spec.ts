import { TestBed } from '@angular/core/testing';

import { ProductcartApiService } from './productcart-api.service';

describe('ProductcartApiService', () => {
  let service: ProductcartApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductcartApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
