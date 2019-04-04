import { TestBed } from '@angular/core/testing';

import { BookingDetailsService } from './booking-details.service';

describe('BookingDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookingDetailsService = TestBed.get(BookingDetailsService);
    expect(service).toBeTruthy();
  });
});
