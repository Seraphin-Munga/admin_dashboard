import { TestBed } from '@angular/core/testing';

import { ProductResourceService } from './product-resource.service';

describe('ProductResourceService', () => {
  let service: ProductResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
