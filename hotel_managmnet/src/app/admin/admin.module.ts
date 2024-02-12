import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminSuccessComponent } from './admin-success/admin-success.component';
import { SearchingPipe } from './pipes/searching.pipe';
import { BookingDataComponent } from './booking-data/booking-data.component';
// import { SearchPipe } from '../pipes/search.pipe';
 

@NgModule({
  declarations: [
    AdminLandingComponent,
    AdminSuccessComponent,
    SearchingPipe,
    BookingDataComponent,
    // SearchPipe,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class AdminModule { }
