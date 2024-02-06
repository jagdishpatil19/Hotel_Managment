import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
constructor(private apiCall:ApiCallService ,private formBuilder:FormBuilder ,private router:Router ){}

getHotelBookData:any;  // get hotel booking data with id 
endPoint:string='hotelBooking'
bookingForm!:FormGroup;

ngOnInit(){
  this.getHotelBookData= this.apiCall.hotelBookData
   console.log(this.getHotelBookData)

   this.formLoad()
}

formLoad(){
  this.bookingForm=this.formBuilder.group({

    userName:['',[Validators.required]],
    mobileNumber:['',[Validators.required ,Validators.maxLength(10),Validators.minLength(10)]],
    city:['',[Validators.required]],
    hotelName:[this.getHotelBookData ? this.getHotelBookData.hotelName:'' ],
    hotelContacNumber:[this.getHotelBookData ? this.getHotelBookData.hotelMobNo:''],
    hotleImage:[this.getHotelBookData? this.getHotelBookData.imageName:'']
  })


}
 async submit(){
   console.log(this.bookingForm.value)
   await this.apiCall.postApiCall(this.bookingForm.value,this.endPoint).toPromise()
   this.router.navigateByUrl('user/hotelList')
}
}
