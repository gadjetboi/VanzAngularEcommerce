import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BillModel } from '../../../models/bill.model';
import { OrderService } from '../../../services/order.service';
import { ToastyMessageService } from '../../../services/toasty.service';

@Component({
  selector: 'billing-address-component',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.css']
})
export class BillingAddressComponent implements OnInit {
  
  billForm: FormGroup;
  address1: FormControl;
  address2: FormControl;
  country: FormControl;
  zipcode: FormControl;
  
  constructor(private orderService: OrderService,
              private toastyMessageService: ToastyMessageService) { 
      
      this.createFormControls();
      this.createForm();
      
      this.setFormData();
  }

  ngOnInit() {
    
  }

  createFormControls() {
    this.address1 = new FormControl('', [
      Validators.required]);
    this.address2 = new FormControl('', []);
    this.country = new FormControl('', [
      Validators.required]);
    this.zipcode = new FormControl('', [
      Validators.required]);
  }

  createForm() {
    this.billForm = new FormGroup({
      address1: this.address1,
      address2: this.address2,
      country: this.country,
      zipcode: this.zipcode
    });
  }

  setFormData() {
    if(this.orderService.isTabNavigatable('bill')) {
      let billInfo = this.orderService.order.orderDetail.billInfo;
      
      if(typeof(billInfo) !== 'undefined') {
        this.billForm.setValue({ 
          address1: billInfo.address1, 
          address2: billInfo.address2, 
          country: billInfo.country, 
          zipcode: billInfo.zipcode
        });
      }
      
    }
  }

  save() {
    if(!this.billForm.valid) {
      this.toastyMessageService.showMessage('', "Form is not valid!", 'error'); //TODO: move type to common
      return;
    }

    let billInfo = new BillModel(
      this.billForm.value.address1, 
      this.billForm.value.address2,
      this.billForm.value.country,
      this.billForm.value.zipcode);

    this.orderService.saveBillInfo(billInfo);

    this.orderService.addNavigatableTab('bill');

    this.orderService.setActiveTab('payment'); //TODO: move to common
  }

}
