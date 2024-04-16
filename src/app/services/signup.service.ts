import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  UserData: any;
  ngZone: any;
  constructor(
    private afAuth: AngularFireAuth,
    public router: Router,

  ) {}

  Register(email : string, password : string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      this.UserData = result.user;
      result.user?.sendEmailVerification(); // Send email verification

        this.router.navigate(['/acceuil']);
        return this.UserData;
      })
  
    .catch((error) => {
      window.alert(error.message);
    });
  }

}


