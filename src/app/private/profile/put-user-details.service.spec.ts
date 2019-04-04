import { TestBed } from '@angular/core/testing';

import { PutUserDetailsService } from './put-user-details.service';

describe('PutUserDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PutUserDetailsService = TestBed.get(PutUserDetailsService);
    expect(service).toBeTruthy();
  });
});
