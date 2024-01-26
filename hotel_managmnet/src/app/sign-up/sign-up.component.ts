import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators,MaxLengthValidator,} from '@angular/forms';
import { ApiCallService } from '../services/api-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(private formBuilder: FormBuilder ,private apiCallService:ApiCallService,private router:Router) {}
  signUpForm!: FormGroup;
  endPoint:any=''
  ngOnInit() {
    this.formLoad();
    this.endPoint=this.apiCallService.journey
  }
  formLoad() {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      mobileNo: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{10}$'),
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
      Tnc: ['' ,[Validators.required]],
    });
  }

  result:any=''
  async submit() {
    let journey=this.apiCallService.journey
     this.result=await this.apiCallService.postApiCall(this.signUpForm.value).toPromise()
    if(this.result?.id){
     this.router.navigateByUrl(journey+'/'+journey+'Success')
    }
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
