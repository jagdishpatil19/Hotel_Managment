import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  journey: any;

  constructor(private httpClient:HttpClient) { }
  userUrl="http://localhost:3000"

  getApilCall(endPoint:any){
    let url=this.userUrl+'/'+endPoint
     return this.httpClient.get(url)
  }
  postApiCall(signUpData:any){
    let url=this.userUrl+'/'+this.journey
    return this.httpClient.post(url,signUpData)
  }
  hotelRegisterPostApi(endPoint:any ,hotelRegData:any){
    let url=this.userUrl+'/'+endPoint
    return this.httpClient.post(url,hotelRegData)
  }
}
