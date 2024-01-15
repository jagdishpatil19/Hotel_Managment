import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private formBuilder:FormBuilder){}
  signUp!:FormGroup

  ngOnInit(){
    this.formLoad()
  }
  formLoad(){
     this.signUp=this.formBuilder.group({
    name:['',Validators.required],
    mobileNo:['',Validators.required],
    panNo:[''],
    email:[''],
    city:[''],
    gender:[''],
    password:[''],
    confirmPassword:[''],
    Tnc:['']
     })
  }
  
  submit(){
    console.log(this.signUp.value)
  }
}
