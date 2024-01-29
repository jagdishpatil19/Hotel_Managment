import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {

constructor(private apiCall:ApiCallService,private router:Router){}
endPoint:any='hotelDetails'
hotelRegistraionData:any=[]  //new hotel registraion all data put here
loginData:any;      //login data put
myHotelList:any[]=[] 
dataById:any;
tableShow:boolean=false
ngOnInit(){
this.getHotelRegData()   
this.getLoginData()
// console.log()
 this.deletId=this.apiCall.deletById
 
}

getHotelRegData(){
   this.apiCall.getApilCall(this.endPoint).subscribe(res=>{
    this.hotelRegistraionData=res
  
    this.hotelRegistraionData.find((ele:any)=>{      //hotelregistrion find data and login data match
      // console.log(ele.ownerName)
      if(ele.ownerName===this.loginData.name && ele.ownerMobNo===this.loginData.mobileNo){
        this.myHotelList.push(ele)

        if(ele.id==0){              // this is condition for hotel list hide and show
          this.tableShow=false
       }
       else{
        this.tableShow=true
       }
       
       
      }
       
    })
   })
} 



getLoginData(){
this.apiCall.logiData.forEach((ele:any) => {
  this.loginData=ele
});

}

 async edit(id:any){
  this.apiCall.dataByIdGet=await this.apiCall.getApilCall(this.endPoint,id).toPromise()
  this.router.navigateByUrl('owner/newHotelRegistration')
  this.dataById=this.apiCall.dataByIdGet
   
 }
  


 //this is confirm delet massage box
 deletBox:boolean=false
 deletId:any;
cancle(){
  this.deletBox=false
}

delet(id:any){
   this.apiCall.deletById=id
   this.deletId=this.apiCall.deletById
    console.log(this.deletId ,'this is delet id')
    this.deletBox=true
}
 async confirmDelet(){
  await this.apiCall.deletApiCall(this.endPoint,this.deletId).toPromise()
  this.deletBox=false

this.router.navigateByUrl('owner/ownerSuccess')  
 
}

}
