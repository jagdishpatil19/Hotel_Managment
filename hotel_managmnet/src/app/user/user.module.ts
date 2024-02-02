import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserSuccessComponent } from './user-success/user-success.component';
import { SearchPipe } from '../pipes/search.pipe';
import { BookingComponent } from './booking/booking.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
 

@NgModule({
  declarations: [
    UserLandingComponent,
    UserSuccessComponent,
     SearchPipe,
    BookingComponent,
    HotelListComponent,
    BookingListComponent,
    UserNavbarComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    SharedModule,
    
  ]
})
export class UserModule { }
