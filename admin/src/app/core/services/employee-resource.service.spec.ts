import { TestBed } from '@angular/core/testing';

import { EmployeeResourceService } from './employee-resource.service';

describe('EmployeeResourceService', () => {
  let service: EmployeeResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
