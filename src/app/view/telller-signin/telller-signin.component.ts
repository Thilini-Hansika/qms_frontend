import { Login } from './../../dto/login';
import { AuthService } from './../../service/auth.service';
import { Tellers } from './../../dto/tellers';
import { TellerService } from './../../service/teller.service';
import { Component, OnInit ,ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-telller-signin',
  templateUrl: './telller-signin.component.html',
  styleUrls: ['./telller-signin.component.css']
})
export class TelllerSigninComponent implements OnInit {

  @ViewChild("loginForm") loginForm: NgForm;
  validatermassage:string;
 message:string;
  signin: Tellers=new Tellers();
  failed: boolean;
  constructor(private authService:AuthService) { }
  
  ngOnInit() {
  }
  login(): void{
    if(!this.signin.userName==null && !this.signin.password==null){
    }else{ 
    this.authService.login(this.signin).subscribe(
      (result)=>{
        this.failed = !result;
      sessionStorage.setItem("Teller",this.signin.userName);
      this.validatermassage="Invalid  Password  or User Name";
      

      }
    );
  }
  }

}
