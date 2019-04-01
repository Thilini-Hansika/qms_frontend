import { TellerGuard } from './guard/teller.guard';
import { Authguard } from './guard/authguard';
import { SignupComponent } from './view/signup/signup.component';
 import { TelllerSigninComponent } from './view/telller-signin/telller-signin.component';
import { TelllerHomepageComponent } from './view/telller-homepage/telller-homepage.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

const routes: Routes = [
 
  
  {path:"signup",component:SignupComponent},
  {path:"",component:TelllerSigninComponent},
  {path: "login" , component:TelllerHomepageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

