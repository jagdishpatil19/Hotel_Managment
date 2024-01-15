import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'landing',component:LandingComponent},
  {path:'signIn',component:SignInComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'admin',loadChildren :() =>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'owner',loadChildren :() =>import( './owner/owner.module').then(m=>m.OwnerModule)},
  {path:'user',loadChildren :() =>import( './user/user.module').then(m=>m.UserModule)},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
