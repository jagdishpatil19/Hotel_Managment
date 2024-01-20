import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerLandingComponent } from './owner-landing/owner-landing.component';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';

const routes: Routes = [
  {path:'ownerLanding',component:OwnerLandingComponent},
  {path:'ownerSuccess',component:OwnerSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
