import { element } from 'protractor';
import { QueueService } from './../../service/queue.service';
import { Queue } from './../../dto/queue';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit ,ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-telller-homepage',
  templateUrl: './telller-homepage.component.html',
  styleUrls: ['./telller-homepage.component.css']
})
export class TelllerHomepageComponent implements OnInit {
  @ViewChild("homesForm") homesForm: NgForm;
  
  customers:Array<Queue>=[];
  selectedCustomer:Queue=new Queue();
  manuallySelected:boolean=false;
  selectedRow : Number;
  setClickedRow : Function;
  constructor(private  authService:AuthService,private queueService:QueueService ) { }
 
  ngOnInit() {
    this.loadAllCustomers();

    this.setClickedRow = function(index){
      this.selectedRow = index;
      console.log(index);
      
  }
  console.log(this
  .selectedRow)
  
  }

 
  loadAllCustomers():void{
    this.queueService.getAll().subscribe(
      (result)=>{
        this.customers=result;
      }
    )
  }
  
  selectCustomer(customer: Queue): void {
    // this.clear();
    this.selectedCustomer = customer;
    // this.tempCustomer = Object.assign({}, customer);
    this.manuallySelected = true;
  }
  deleteRecord(customer:Queue): void{
    if(confirm("Confirm Task")){
      this.queueService.deactiveRecord(customer.ticketno).subscribe(
        (result)=>{
          if(result){
          alert("Success");
        }else{
          alert("Failed");
        }
        this.loadAllCustomers();
      }
      
      )
    
    }
  }
/*
deleteCustomer(customer: Customer): void {
    if (confirm("Are you sure you want to delete this customer?")) {
      this.customerService.deleteCustomer(customer.id).subscribe(
        (result) => {
          if (result) {
            alert("Customer has been deleted successfully");
          } else {
            alert("Failed to delete the customer");
          }
          this.loadAllCustomers();
        }
      )
    }
  }
*/

  logout() {
    this.authService.logout();
  }
}
