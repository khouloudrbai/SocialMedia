import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from "@angular/fire/compat";
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './components/test/test.component';
import { HeaderComponent } from './components/header/header.component';
import { MessagesComponent } from './components/messages/messages.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AcceuilComponent,
    ProfileComponent,
    TestComponent,
    HeaderComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyAwJR93lIOeaeEY3bUIw69aJrE9WIe8LUM",
      authDomain: "blog-230a0.firebaseapp.com",
      projectId: "blog-230a0",
      storageBucket: "blog-230a0.appspot.com",
      messagingSenderId: "570012823737",
      appId: "1:570012823737:web:7f720546065ebde2c6eb68",
      measurementId: "G-HSPW7RJZCD"}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
