import { Component } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent {
constructor(private apiCall:ApiCallService){}
bookingList:any;
endPoint:string="hotelBooking"
ngOnInit(){
this.getBookingList()
}

 async getBookingList(){
 this.bookingList= await this.apiCall.getApilCall(this.endPoint).toPromise()
 console.log(this.bookingList)
}
}
