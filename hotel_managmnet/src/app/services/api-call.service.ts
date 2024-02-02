import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  journey: any;
  logiData: any = [];
  dataByIdGet: any;
  deletById: any;
  hotelBookData:any;
  constructor(private httpClient: HttpClient) {}
  userUrl = 'http://localhost:3000';

  getApilCall(endPoint: any, id?: any) {
    let url = id
      ? this.userUrl + '/' + endPoint + '/' + id
      : this.userUrl + '/' + endPoint;
    return this.httpClient.get(url);
  }
  postApiCall(signUpData: any ,booking?:any) {
    let url = booking?  this.userUrl + '/' +booking :  this.userUrl + '/' + this.journey;
    return this.httpClient.post(url, signUpData);
  }

  patchApiCall(endPoint: any, id: any, updateData: any) {
    let url = this.userUrl + '/' + endPoint + '/' + id;
    return this.httpClient.patch(url, updateData);
  }

  deletApiCall(endPoint: any, id: any) {
    let url = this.userUrl + '/' + endPoint + '/' + id;
    return this.httpClient.delete(url);
  }
  hotelRegisterPostApi(endPoint: any, hotelRegData: any) {
    let url = this.userUrl + '/' + endPoint;
    return this.httpClient.post(url, hotelRegData);
  }
}
