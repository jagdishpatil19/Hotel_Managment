import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserSuccessComponent } from './user-success/user-success.component';
import { BookingComponent } from './booking/booking.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { BookingListComponent } from './booking-list/booking-list.component';

const routes: Routes = [
  {path:'userLanding',component:UserLandingComponent},
  {path:'userSuccess',component:UserSuccessComponent},
  {path:"booking",component:BookingComponent},
  {path:'',component:UserSuccessComponent},
  {path:'hotelList',component:HotelListComponent},
  {path:'hotelBookingList',component:BookingListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
