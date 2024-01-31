import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private router: Router
  ) {}

  dataById: any; // editing data save

  ngOnInit() {
    this.formLoad();
    this.dataById = this.apiCall.dataByIdGet;
    console.log(this.dataById, 'this is data by id');
    // console.log('this is regs in data ',this.dataById ? this.dataById?.ownerName : 'hhhh');
    // console.log('this is regs in data ',this.dataById ? this.dataById?.ownerMobNo : 'hhhh222');
  }
  formLoad() {
    this.hotelRegistration = this.formBuilder.group({
      ownerName: [ this.dataById ? this.dataById?.ownerName : '', [Validators.required],],
      ownerMobNo: [ this.dataById ? this.dataById?.ownerMobNo : '',[Validators.maxLength(10), Validators.minLength(10)],],
      hotelName: [this.dataById ? this.dataById?.hotelName : '',[Validators.required], ],
      state: [this.dataById ? this.dataById?.state : '', [Validators.required]],
      city: [this.dataById ? this.dataById?.city : ''],
      pinCode: [ this.dataById ? this.dataById?.pinCode : '', [Validators.required],],
      hotelMenu: [this.dataById ? this.dataById?.hotelMenu : '',[Validators.required],],
      hotelMobNo: [ this.dataById ? this.dataById?.hotelMobNo : '',[Validators.maxLength(10), Validators.minLength(10)],],
      roomsAvailable: [ this.dataById ? this.dataById?.roomsAvailable : '',[Validators.required],],
      // ownerCheck:[''],
      // userCheck:['']
    });
  }

  hotelRegisterData: any;
  endPoint: any = 'hotelDetails';
  submit() {
    console.log(this.hotelRegistration.value);
    this.apiCall.hotelRegisterPostApi(this.endPoint, this.hotelRegistration.value).subscribe((res) => {
        this.hotelRegisterData = res;

     if (this.hotelRegisterData?.id) {
          this.router.navigateByUrl('owner/ownerSuccess');
        }
      });
  }
  async update() {
    await this.apiCall.patchApiCall(this.endPoint,this.dataById?.id,this.hotelRegistration.value ).toPromise();
    console.log(this.hotelRegistration.value);
  }
}
