import { Component } from '@angular/core';
 
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {

constructor(private apiCall:ApiCallService){}

hotelRegistraionData:any=[]  //new hotel registraion all data put here
loginData:any;      //login data put
myHotelList:any[]=[]
ngOnInit(){
this.getHotelRegData()
this.getLoginData()
// console.log()
 
}

getHotelRegData(){
   this.apiCall.getApilCall('hotelDetails').subscribe(res=>{
    this.hotelRegistraionData=res
    console.log(this.hotelRegistraionData)
    this.hotelRegistraionData.find((ele:any)=>{      //hotelregistrion find data and login data match
      // console.log(ele.ownerName)
      if(ele.ownerName===this.loginData.name && ele.ownerMobNo===this.loginData.mobileNo){
        this.myHotelList.push(ele)
      }
    })
   })
} 



getLoginData(){
this.apiCall.logiData.forEach((ele:any) => {
  this.loginData=ele
});

}

 
 
}
