import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { envirenemnt } from '../envirenments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignService {
  url=envirenemnt.Baseurl;

  headers=new HttpHeaders;

  constructor(private router:Router,private httpClient:HttpClient){}

  SignIn(email:String,password:String){
    return this.httpClient.post<any>(this.url+'/api/users/signup',{email,password}).pipe(map(res=>{
      return res;
    }))

  }
}


