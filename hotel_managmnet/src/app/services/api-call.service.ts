import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private httpClient:HttpClient) { }
  userUrl="http://localhost:3000/user"

  getApilCall(data:any){
     return this.httpClient.get(this.userUrl)
  }
  postApiCall(signUpData:any){
    return this.httpClient.post(this.userUrl,signUpData)
  }
}
