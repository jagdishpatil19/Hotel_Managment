import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {
  constructor(private apiCall:ApiCallService ,private router:Router){}

  searchData: any;
  tableDataShowHide:boolean=false
  tableShow: boolean=false
  
    
  
    endPoint='hotelDetails'
    loginData:any;
    hotelList:any;
    deletBox:boolean=false
  
    ngOnInit(){
    this.loginData= this.apiCall.logiData  //login data get and put loginData varible
   this.apiCall.getApilCall(this.endPoint).subscribe(res=>{  // get hotel list data in hotel lis property
    this.hotelList=res
    console.log(this.hotelList,'this is hotel list')
    this.showList()
   })
  
    }
  
    logOut(){
      this.loginData=null
      console.log(this.loginData,'this is loginDAta')
      this.router.navigateByUrl('signIn')
    }
    showList(){
  this.tableDataShowHide=true
  if(this.searchData=''){
  this.tableShow=false
  }
  else{
    this.tableShow=true
  }
    }
  
  
    //booking joureny start
  
  
    hotelBookData:any;
   async booking(id:any){
    this.apiCall.hotelBookData= await this.apiCall.getApilCall(this.endPoint,id).toPromise()
     
   
  this.router.navigateByUrl("user/booking")
    }
}
