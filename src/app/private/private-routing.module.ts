import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { UpcomingComponent } from './my-bookings/upcoming/upcoming.component';
import { PastComponent } from './my-bookings/past/past.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [

  {
    path: 'navbar',
    component: NavbarComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'faq',
        component: FaqComponent,
      },
      {
        path: 'my-bookings',
        component: MyBookingsComponent,
        children: [
          {
            path: 'upcoming',
            component: UpcomingComponent
          },
          {
            path: 'past',
            component: PastComponent
          }
        ]
      },
      {
        path: 'profile',
        component: ProfileComponent,
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
