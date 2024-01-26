import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerLandingComponent } from './owner-landing/owner-landing.component';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';
import { NewHotelRegistrationComponent } from './new-hotel-registration/new-hotel-registration.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';

const routes: Routes = [
  {path:'ownerLanding',component:OwnerLandingComponent},
  {path:'ownerSuccess',component:OwnerSuccessComponent},
   {path:'newHotelRegistration',component:NewHotelRegistrationComponent},
   {path:'hotelList',component:HotelListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
