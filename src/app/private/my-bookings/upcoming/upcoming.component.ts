import { Component, OnInit } from '@angular/core';
import { BookingDetailsService } from '../booking-details.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

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

  data: any;

  constructor(private bookingService: BookingDetailsService) { }

  ngOnInit() {
    this.bookingService.getBookings({ "upcoming": true }).subscribe(response => {
      this.data = response;
      console.log(response);
    });
  }

}
