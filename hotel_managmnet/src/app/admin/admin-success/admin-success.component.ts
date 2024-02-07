import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/services/api-call.service';
 
@Component({
  selector: 'app-admin-success',
  templateUrl: './admin-success.component.html',
  styleUrls: ['./admin-success.component.css']
})
export class AdminSuccessComponent {
constructor(private apiCall:ApiCallService ,private router:Router){}

searchData: any;
tableDataShowHide:boolean=false
 

  

  endPoint='hotelDetails'
  loginData:any;
  hotelList:any;
  deletBox:boolean=false
  tableShow:boolean=true 
  ngOnInit(){
  this.loginData= this.apiCall.logiData  //login data get and put loginData varible
 this.apiCall.getApilCall(this.endPoint).subscribe(res=>{  // get hotel list data in hotel lis property
  this.hotelList=res
  console.log(this.hotelList,'this is hotel list')
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


  // data delet Api call 
  deletHotelName:any;
  deletToId:any;
  deletSuccsess:boolean=false

  delet(hotelName:any ,id:any) {
    this.deletBox=true
    this.deletHotelName=hotelName
     this.deletToId=id 
  }
  
   async confirmDelet() {
   await this.apiCall.deletApiCall(this.endPoint ,this.deletToId).toPromise()
   this.deletBox=false
   this.apiCall.getApilCall(this.endPoint).subscribe(res=>{  // get hotel list data in hotel lis property
    this.hotelList=res
   })
    this.deletSuccsess=true
   setTimeout(()=>{
    this.deletSuccsess=false
   },2000)
  
  }


  cancle() {
    this.deletBox=false
  }


  //image display
  imagePath:any;
  imageDisplayer:boolean=false
  imageDisplay(image:any){
   this.imagePath=image
   this.imageDisplayer=true
  }
  closeImage(){
    this.imageDisplayer=false
  }
}
