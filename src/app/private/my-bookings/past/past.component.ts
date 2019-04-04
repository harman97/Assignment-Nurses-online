import { Component, OnInit } from '@angular/core';
import { BookingDetailsService } from '../booking-details.service';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {

  getColor(status) {
    switch (status) {
      case 'STARTED':
        return 'green';
      case 'PENDING':
        return 'red';
      case 'ON THE WAY':
        return '#0099ff';
    }
  }

  data: Object;

  constructor(private bookingService: BookingDetailsService) { }

  ngOnInit() {
    this.bookingService.getBookings({ "past": true }).subscribe(response => {
      this.data = response;
      console.log(response);

    });
  }

}
