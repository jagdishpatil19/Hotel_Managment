import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators,MaxLengthValidator,} from '@angular/forms';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(private formBuilder: FormBuilder ,private apiCall:ApiCallService) {}
  signUpForm!: FormGroup;

  ngOnInit() {
    this.formLoad();
  }
  formLoad() {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      mobileNo: ['',[
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
      panNo: ['', [ Validators.required ,Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$')]],
      email: ['', [Validators.required, Validators.email]],
      city: [''],
      gender: ['',[Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      Tnc: [''],
    });
  }

  submit() {
     
    this.apiCall.postApiCall(this.signUpForm.value).subscribe((res)=>{
     console.log(res)
    })
  }

  passwordHide = true;
  confirmPasswordHide = true;

  hide = true;
  hide2=true
  confirmPasswordError: boolean = false;
  passwordMatch() {
    let pass = this.signUpForm.get('password')?.value;
    let confirmPass = this.signUpForm.get('confirmPassword')?.value;
    
    if(pass!==confirmPass){
      this.confirmPasswordError=true
    }
    else{
      this.confirmPasswordError=false
    }
  }

}
