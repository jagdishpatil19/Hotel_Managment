import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerLandingComponent } from './owner-landing/owner-landing.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    OwnerLandingComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class OwnerModule { }
