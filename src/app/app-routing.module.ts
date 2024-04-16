import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { TestComponent } from './components/test/test.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { MessagesComponent } from './components/messages/messages.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'test', component: TestComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'messages', component: MessagesComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
