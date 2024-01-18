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
  hide = true;
  getUserApiData: any;

  ngOnInit() {}
  userNameValue: any = '';
  passwordValue: any = '';

  getUserNameValue(userValue: any) {
    this.userNameValue = userValue;
  }
  getPasswordValue(passValue: any) {
    this.passwordValue = passValue;
  }

  async submit(formData:any) {
    console.log(formData);
    this.getUserApiData = await this.apiCall.getApilCall(formData).toPromise();
    console.log(this.getUserApiData);
  }
 
}
