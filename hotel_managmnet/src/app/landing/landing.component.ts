import { Component } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

constructor(private apiCallServices:ApiCallService){}
  journey(journeyData:string){
    this.apiCallServices.journey=journeyData
  }

  
 
  
  
}
