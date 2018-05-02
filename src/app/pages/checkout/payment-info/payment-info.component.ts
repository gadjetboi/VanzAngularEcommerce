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
  paymentForm: FormGroup;
  paymentType: FormControl;
  cardType: FormControl;
  nameOnCard: FormControl;
  cardNo: FormControl;
  cardExpMonth: FormControl;
  cardExpDay: FormControl;
  cardExpYear: FormControl;
  cardCvv: FormControl;

  constructor(private orderService : OrderService,
              private toastyMessageService: ToastyMessageService) {
  
     this.createFormControls();
     this.createForm();

     this.setFormData();
  }

  ngOnInit() {
  }

  createFormControls() {
    this.paymentType = new FormControl('',[
      Validators.required]),
    this.cardType = new FormControl('',[
      Validators.required]),
    this.nameOnCard = new FormControl('',[
      Validators.required]),
    this.cardNo = new FormControl('',[
      Validators.required]),
    this.cardExpMonth = new FormControl('',[
      Validators.required]),
    this.cardExpDay = new FormControl('',[
      Validators.required]),
    this.cardExpYear = new FormControl('',[
      Validators.required]),
    this.cardCvv = new FormControl('',[
      Validators.required])
  }

  createForm() {
    this.paymentForm = new FormGroup({
      paymentType: this.paymentType,
      cardType: this.cardType,
      nameOnCard: this.nameOnCard,
      cardNo: this.cardNo,
      cardExpMonth: this.cardExpMonth,
      cardExpDay: this.cardExpDay,
      cardExpYear: this.cardExpYear,
      cardCvv: this.cardCvv
    });
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
