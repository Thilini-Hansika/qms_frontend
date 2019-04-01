import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Observable } from 'rxjs/index';
import { TellerService } from './../../service/teller.service';
import { Tellers } from './../../dto/tellers';
import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  cashier:Array<Tellers> = [];
  txtUserName:string;
  selectedTeller:Tellers=new  Tellers();
  error: string;
  
  @ViewChild("tellerForm") tellerForm: NgForm;

  manuallySelected: boolean = false;
  temptell: Tellers =null;  




  constructor(private tellerService:TellerService,private authService:AuthService,private router: Router ) { }
   

  ngOnInit() {
    
  }
  searchTeller(){
    this.tellerService.searchTeller(this.txtUserName).subscribe(
      ((result)=>{
       this.cashier=result;
       console.log(this.txtUserName);
       console.log(result);
      })

    )
   
  }
    selectTeller(teller:Tellers) :void{
      
        this.selectedTeller=teller;
        
    }
    logout() {
      this.authService.logout();
    }
    deleteTeller(teller: Tellers): void {
      if (confirm("Are you sure you want to delete this Teller?")) {
        this.tellerService.deleteTeller(this.txtUserName).subscribe(
          
          (result) => {
            if (result) {
              console.log(this.txtUserName);
              alert("Teller has been deleted successfully");
            } else {
              alert("Failed to delete the Teller");
            }
           
          }
        )
      }
    }
    /*
    this.tempCustomer = Object.assign({}, customer);
    */
    saveTeller():void{
      this.tellerService.saveTeller(this.selectedTeller).subscribe(

        (result)=>{
          if(result){

            console.log(result);
            alert("Teller   Succesfully");
          }else{
            alert("Failed");
          }
        }
      )
      
    }
   }

