import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css']
})
export class UserLandingComponent {

  constructor(private router:Router){}
  backLanding(){
this.router.navigateByUrl('landing')
  }
}
