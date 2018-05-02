import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { CustomerInfoComponent } from '../customer-info/customer-info.component';
import { CustomerModel } from '../../../models/customer.model';
import { BillModel } from '../../../models/bill.model';
import { PaymentModel } from '../../../models/payment.model';
import { OrderModel } from '../../../models/order.model';
import { CartModel } from '../../../models/cart.model';
import { CartService } from '../../../services/cart.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../../interfaces/app-state';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastyMessageService } from '../../../services/toasty.service';

@Component({
  selector: 'review-component',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  orderItems = new Array<CartModel>();
  subTotal: number;
  totalAmount: number;
  tax: number;
  shippingFee: number;
  customer: CustomerModel;
  bill: BillModel;
  payment: PaymentModel;

  constructor(private orderService: OrderService,
              private cartService: CartService,
              private store: NgRedux<IAppState>,
              public bsModalRef: BsModalRef,
              private toastyMessageService: ToastyMessageService) { 

    this.orderItems = this.orderService.order.orderItems;
    this.subTotal = this.orderService.order.subTotal;
    this.totalAmount = this.orderService.order.totalAmount;
    this.tax = this.orderService.order.tax;
    this.shippingFee = this.orderService.order.shippingFee;
  }

  ngOnInit() {
    let orderDetail = this.orderService.order.orderDetail;
    this.customer = orderDetail.customerInfo;
    this.bill = orderDetail.billInfo;
    this.payment = orderDetail.paymentInfo;
  }

  saveOrder() {
    this.orderService.save();
    this.cartService.clearCarts();
    this.bsModalRef.hide();
    this.toastyMessageService.showMessage('', "We are now processing your order.", 'success'); //TODO: move type to common
  }
}
