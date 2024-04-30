import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  AbstractControl, Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  submitted=false;
  loginform!:FormGroup;
  isSignIn: boolean = true;


constructor(private router:Router,private loginService:LoginService,private formBuilder:FormBuilder){
  this.loginform = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      pwd: [
        '',
        [
          Validators.required,]
      ],

    }
  )}
  ngOnInit(): void {
    setTimeout(() => {
      this.isSignIn = true; // Initially set to sign-in
    }, 200);
  }

  toggle(): void {
    this.router.navigate(['signup']);

  }
  onLoginSubmit(): void {
    this.submitted = true;
  
    if (this.loginform.invalid) {

      return;
    }
  }
    
}
