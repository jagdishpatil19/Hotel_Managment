import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-owner-landing',
  templateUrl: './owner-landing.component.html',
  styleUrls: ['./owner-landing.component.css']
})
export class OwnerLandingComponent {
  constructor(private router:Router){}
  backLanding(){
this.router.navigateByUrl('landing')
  }
   submit(data:any){
console.log(data)
   }
}
