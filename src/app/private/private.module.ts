import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { PrivateRoutingModule } from './private-routing.module';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { ProfileComponent } from './profile/profile.component';
import { FaqComponent } from './faq/faq.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { GetUserDetailsService } from './profile/get-user-details.service';
import { BookingDetailsService } from './my-bookings/booking-details.service';
import { UpcomingComponent } from './my-bookings/upcoming/upcoming.component';
import { PastComponent } from './my-bookings/past/past.component';

@NgModule({
  declarations: [MyBookingsComponent, ProfileComponent, FaqComponent, NavbarComponent, UpcomingComponent, PastComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [GetUserDetailsService, BookingDetailsService]
})
export class PrivateModule { }
