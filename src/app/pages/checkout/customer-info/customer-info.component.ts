import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerModel } from '../../../models/customer.model';
import { OrderService } from '../../../services/order.service';
import { ToastyMessageService } from '../../../services/toasty.service';

@Component({
  selector: 'customer-info-component',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  customerInfoForm: FormGroup;
  firstname: FormControl;
  lastname: FormControl;
  gender: FormControl;
  email: FormControl;
  
  constructor(private orderService: OrderService,
              private toastyMessageService: ToastyMessageService) { 
      
      this.createFormControls();
      this.createForm();
      
      this.setFormData();
  }

  ngOnInit() {
  }

  createFormControls() {
    this.firstname = new FormControl('',[
      Validators.required]);
    this.lastname = new FormControl('',[
      Validators.required]);
    this.gender = new FormControl('',[
      Validators.required]);
    this.email = new FormControl('',[
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")]);
  }

  createForm() {
    this.customerInfoForm = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname,
      gender: this.gender,
      email: this.email
    });
  }

  setFormData() {
    if(this.orderService.isTabNavigatable('customer')) {
      let customerInfo = this.orderService.order.orderDetail.customerInfo;
      
      if(typeof(customerInfo) !== 'undefined') {
        this.customerInfoForm.setValue({ 
          firstname: customerInfo.firstname, 
          lastname: customerInfo.lastname, 
          gender: customerInfo.gender, 
          email: customerInfo.email
        });
      }
      
    }
  }

  save() {
    if(!this.customerInfoForm.valid) {
      this.toastyMessageService.showMessage('', "Form is not valid!", 'error'); //TODO: move type to common
      return;
    }

    let customerInfo = new CustomerModel(
      this.customerInfoForm.value.firstname, 
      this.customerInfoForm.value.lastname,
      this.customerInfoForm.value.gender,
      this.customerInfoForm.value.email);

     this.orderService.saveCustomerInfo(customerInfo);
     
     this.orderService.addNavigatableTab('customer');

     this.orderService.setActiveTab('bill'); //TODO: move to common
     
    
    
  }

}
