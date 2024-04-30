import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { SignService } from 'src/app/services/signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signupform!:FormGroup;
  name:any;
   email:any;
   pwd!:String;
   repwd!:String;
   submitted=false;
   isSignIn: boolean = true;

  constructor(private router:Router,private formBuilder:FormBuilder,private signupService:SignService) {
 
    this.signupform = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],     
        name: ['', [Validators.required]],
        pwdd: ['', [Validators.required]],

        pwd: [
          '',
          [Validators.required,, Validators.minLength(6)], Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)],
      


      }
    )}

    ngOnInit(): void {
      this.onSignSubmit();
      setTimeout(() => {
        this.isSignIn = false; // Initially set to sign-in
      }, 200);
    }
    get f() { return this.signupform.controls; }

  
    toggle(): void {
      this.router.navigate(['login']);

    }
  

  onSignSubmit(): void {
    this.submitted = true;
  
    if (this.signupform.invalid) {

      return;
    }
    console.log('testttttttttttttttt');

 
    this.signupService.SignIn(this.signupform.value.email, this.signupform.value.pwd).subscribe
    (respond => {
      console.log('testttttttttttttttt');
      console.log( respond); 
          this.router.navigate(['/login']);})
     
 
  }
  

}
