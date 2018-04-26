import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentModel } from '../../../models/payment.model';
import { OrderService } from '../../../services/order.service';
import { ToastyMessageService } from '../../../services/toasty.service';

@Component({
  selector: 'payment-info-component',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {
  paymentForm = new FormGroup({
    paymentType: new FormControl('',[
      Validators.required]),
    cardType: new FormControl('',[
      Validators.required]),
    nameOnCard: new FormControl('',[
      Validators.required]),
    cardNo: new FormControl('',[
      Validators.required]),
    cardExpMonth: new FormControl('',[
      Validators.required]),
    cardExpDay: new FormControl('',[
      Validators.required]),
    cardExpYear: new FormControl('',[
      Validators.required]),
    cardCvv: new FormControl('',[
      Validators.required])
  });
  constructor(private orderService : OrderService,
              private toastyMessageService: ToastyMessageService) {
  
     this.setFormData();
  }

  ngOnInit() {
  }

  setFormData() {
    if(this.orderService.isTabNavigatable('payment')) {
      let paymentInfo = this.orderService.order.orderDetail.paymentInfo;

      if(typeof(paymentInfo) !== 'undefined') {
        this.paymentForm.setValue({ 
          paymentType: paymentInfo.paymentType, 
          cardType: paymentInfo.cardType, 
          nameOnCard: paymentInfo.nameOnCard, 
          cardNo: paymentInfo.cardNo,
          cardExpMonth: paymentInfo.cardExpMonth,
          cardExpDay: paymentInfo.cardExpDay,
          cardExpYear: paymentInfo.cardExpYear,
          cardCvv: paymentInfo.cardCvv
        });
      }
      
    }
  }

  save() {
    if(!this.paymentForm.valid) {
      this.toastyMessageService.showMessage('', "Form is not valid!", 'error'); //TODO: move type to common
      return;
    }

    let paymentInfo = new PaymentModel(
      this.paymentForm.value.paymentType, 
      this.paymentForm.value.nameOnCard,
      this.paymentForm.value.cardType,
      this.paymentForm.value.cardNo,
      this.paymentForm.value.cardExpMonth,
      this.paymentForm.value.cardExpDay,
      this.paymentForm.value.cardExpYear,
      this.paymentForm.value.cardCvv);

    this.orderService.savePaymentInfo(paymentInfo);
    
    this.orderService.addNavigatableTab('payment');

    this.orderService.setActiveTab('review'); //TODO: move to common
  }
}
