import { TestBed } from '@angular/core/testing';

import { GetFaqService } from './get-faq.service';

describe('GetFaqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFaqService = TestBed.get(GetFaqService);
    expect(service).toBeTruthy();
  });
});
