import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl, Validators, MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
space:string='    '
  constructor(private formBuilder:FormBuilder){}
  signUp!:FormGroup

  ngOnInit(){
    this.formLoad()
  }
  formLoad(){
     this.signUp=this.formBuilder.group({
    name:['',[Validators.required]],
    mobileNo:['',[ Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
    panNo:['',[Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$')]],
    email:[''],
    city:['Mumbai'],
    gender:[''],
    password:[''],
    confirmPassword:[''],
    Tnc:['']
     })
  }
  
  submit(){
    console.log(this.signUp.value)
  }
confirmPasswordError:boolean=false
  passwordHideShow(){
    let pass=this.signUp.get("password")?.value
    let confirmPass=this.signUp.get("confirmPassword")?.value
    console.log(pass,'this is password')
    if(pass!==confirmPass){
      this.confirmPasswordError=true
    }
    else{
      this.confirmPasswordError=false
    }
  }
}
