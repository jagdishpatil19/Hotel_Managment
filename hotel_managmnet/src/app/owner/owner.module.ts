import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerLandingComponent } from './owner-landing/owner-landing.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';
import { NewHotelRegistrationComponent } from './new-hotel-registration/new-hotel-registration.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';


@NgModule({
  declarations: [
    OwnerLandingComponent,
    OwnerSuccessComponent,
    NewHotelRegistrationComponent,
    HotelListComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class OwnerModule { }
