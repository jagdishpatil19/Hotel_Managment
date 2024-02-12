import { Component } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-booking-data',
  templateUrl: './booking-data.component.html',
  styleUrls: ['./booking-data.component.css']
})
export class BookingDataComponent {

  constructor(private apiCall:ApiCallService){}

  endPoint:any='hotelBooking'
  bookingData:any;
  obs:any;
  ngOnInit(){
    this.apiCall.getApilCall(this.endPoint).subscribe(res=>{
      this.bookingData=res
      console.log(this.bookingData.length)
      for (let index = 0; index < this.bookingData.length; index++) {
       
        this.obs=index
        console.log(this.obs)
      }
    })
    
  }

  
}
