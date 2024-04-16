import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  isSignIn: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isSignIn = true; // Initially set to sign-in
    }, 200);
  }

  toggle(): void {
    this.isSignIn = !this.isSignIn; // Toggle between sign-in and sign-up
  }

  signUp(): void {
    // Implement sign-up logic
  }
 
  signIn(): void {
    // Implement sign-in logic
  }
}