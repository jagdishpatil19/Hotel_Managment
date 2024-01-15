import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private router:Router){}
  backLanding(){
this.router.navigateByUrl('landing')
  }

  submit(formData:any){
console.log(formData)
  }
}
