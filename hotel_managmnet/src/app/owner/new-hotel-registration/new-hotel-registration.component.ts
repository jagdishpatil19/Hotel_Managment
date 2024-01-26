import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-new-hotel-registration',
  templateUrl: './new-hotel-registration.component.html',
  styleUrls: ['./new-hotel-registration.component.css'],
})
export class NewHotelRegistrationComponent {
  hotelRegistration!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private apiCall: ApiCallService,
    private router:Router
  ) {}

  ngOnInit() {
    this.formLoad();
  }
  formLoad() {
    this.hotelRegistration = this.formBuilder.group({
      ownerName: ['', [Validators.required]],
      ownerMobNo: ['', [Validators.maxLength(10), Validators.minLength(10)]],
      hotelName: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: [''],
      pinCode: ['', [Validators.required]],
      hotelMenu: ['', [Validators.required]],
      hotelMobNo: ['', [Validators.maxLength(10), Validators.minLength(10)]],
      roomsAvailable: ['', [Validators.required]],
      // ownerCheck:[''],
      // userCheck:['']
    });
  }

  hotelRegisterData:any=""
  endPoint: any = 'hotelDetails';
  submit() {
    console.log(this.hotelRegistration.value);
    this.apiCall.hotelRegisterPostApi(this.endPoint, this.hotelRegistration.value).subscribe((res) => {
      this.hotelRegisterData=res
      if(this.hotelRegisterData?.id){
        this.router.navigateByUrl('owner/ownerSuccess')
      }
       
    });
  }
}
