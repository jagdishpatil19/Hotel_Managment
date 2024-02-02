import { Component } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent {


constructor(private apiCall:ApiCallService){}
allBookingList:any;
myBookingList:any=[]
endPoint:string="hotelBooking"
tableHide:boolean=false
getLoginData:any;
error:boolean=true
ngOnInit(){
this.getBookingList()
  this.apiCall.logiData.forEach((ele:any)=>{
    this.getLoginData=ele
  })
 
}

 async getBookingList(){
 this.allBookingList= await this.apiCall.getApilCall(this.endPoint).toPromise()

 this.allBookingList.find((ele:any)=>{
     
    if(ele.userName===this.getLoginData.name){
      this.myBookingList.push(ele)
    }
 })
 if(this.myBookingList.length>0){
this.tableHide=true
this.error=false
 }
  
}


deletBox:boolean=false
 bookingDeleteId:any;
deletHotelName:any;
cancle(){
 this.deletBox=false
}

delet(id:any ,hotelName:any){
  this.apiCall.deletByBookingId=id
  this.bookingDeleteId=this.apiCall.deletByBookingId
 
   this.deletBox=true
   this.deletHotelName=hotelName
}
async confirmDelet(){
 await this.apiCall.deletApiCall(this.endPoint,this.bookingDeleteId).toPromise()
 this.deletBox=false

 
 //delet keleli data remove karun new refresh karnyasathi parat ekda get karun gyaych
 this.apiCall.getApilCall(this.endPoint).subscribe(res=>{
   this.myBookingList=res
   if(this.myBookingList.length==0){
    this.tableHide=false
     
      this.error=true
     }
 })

 
}
}
