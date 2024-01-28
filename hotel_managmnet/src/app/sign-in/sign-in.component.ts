import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  constructor(private router: Router, private apiCall: ApiCallService) {}
  backLanding() {
    this.router.navigateByUrl('landing');
  }
  hide = true;                 //this is a type of input fild
         
  endPoint:any='hotelDetails'             // Admin,Owner,User

  getApiData:any=''            // collect on API data  /owner/admin/user
  
  loginWrongError=false
  ngOnInit() {
    this.endPoint= this.apiCall.journey
     this.apiCall.getApilCall(this.endPoint).subscribe(res=>{
       this.getApiData=res
       console.log(this.getApiData)
    })
   
  }
  
  userNameValue: any = '';           //input name value get 
  passwordValue: any = '';            //input password Value get 

  getUserNameValue(userValue: any) {
    this.userNameValue = userValue;
  }
  getPasswordValue(passValue: any) {
    this.passwordValue = passValue;
  }

   
  
  loginDataGet:string[]=[]
  submit() {        
    this.getApiData.find((ele:any)=>{
     if(ele.name==this.userNameValue&&ele.password==this.passwordValue){
      console.log("this login form")
      this.loginDataGet.push(ele)
      this.apiCall.logiData=this.loginDataGet
      this.router.navigateByUrl(this.endPoint+'/'+this.endPoint+'Success')
     }
     
    //  else if(this.loginDataGet.length>0){
    //   this.router.navigateByUrl(this.endPoint+'/'+this.endPoint+'Success')
    //  }
     else if (this.loginDataGet.length==0){
       this.loginWrongError=true
     }
      
     else{
      this.loginWrongError=false
     }
    })
    
  }
 
  
}
