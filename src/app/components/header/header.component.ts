import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  dataList: Array<any> = [];
  constructor(private router:Router){
  }
  onmsg(){
   this.router.navigate(['/messages'])  }

  clickProfile(){
    this.router.navigate(['/profile']) 
  } 
  clickHome(){
    this.router.navigate(['/acceuil']) 

  }
}
