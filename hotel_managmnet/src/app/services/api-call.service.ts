import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  journey: any;

  constructor(private httpClient:HttpClient) { }
  userUrl="http://localhost:3000"

  getApilCall(data:any){
     return this.httpClient.get(this.userUrl)
  }
  postApiCall(signUpData:any){
    let url=this.userUrl+'/'+this.journey
    return this.httpClient.post(url,signUpData)
  }
}
