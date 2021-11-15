import { TestBed } from '@angular/core/testing';

import { AuthenticationResourceService } from './authentication-resource.service';

describe('AuthenticationResourceService', () => {
  let service: AuthenticationResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
