import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';
import {

  signOut,
  
} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private afAuth: AngularFireAuth,
    public router: Router,
  ) {}

  signIn(email: any, password: any) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
     
  }


 //Logout
//  Logout() {
//   signOut(this.auth).then(()=>this.router.navigate(['/sign-in']))


// }

}
