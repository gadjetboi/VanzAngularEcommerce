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
  
  billForm = new FormGroup({
    address1: new FormControl('',[
      Validators.required]),
    address2: new FormControl('',[]),
    country: new FormControl('',[
      Validators.required]),
    zipcode: new FormControl('',[
      Validators.required])
  });
  
  constructor(private orderService: OrderService,
              private toastyMessageService: ToastyMessageService) { 
      
      this.setFormData();
  }

  ngOnInit() {
    
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
