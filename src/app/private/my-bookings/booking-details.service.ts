import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingDetailsService {

  constructor(private http: HttpClient) { }

  getBookings(getData) {
    return this.http.get('http://localhost:3000/bookings', {
      params: getData
    });
  }
}
