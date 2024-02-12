import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminSuccessComponent } from './admin-success/admin-success.component';
import { BookingDataComponent } from './booking-data/booking-data.component';

const routes: Routes = [
  {path:'adminLanding',component:AdminLandingComponent},
  {path:'adminSuccess',component:AdminSuccessComponent},
  {path:'bookingList',component:BookingDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
