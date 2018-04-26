import { Component, OnInit } from '@angular/core';
import { CartModel } from '../../../models/cart.model';
import { CustomerModel } from '../../../models/customer.model';
import { BillModel } from '../../../models/bill.model';
import { PaymentModel } from '../../../models/payment.model';
import { OrderService } from '../../../services/order.service';
import { CartService } from '../../../services/cart.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../../interfaces/app-state';
import { OrderModel } from '../../../models/order.model';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'order-detail-modal.component',
  templateUrl: './order-detail-modal.component.html',
  styleUrls: ['./order-detail-modal.component.css']
})
export class OrderDetailModalComponent implements OnInit {

  selectedOrderNo: string;
  orderDetail = new OrderModel();
  
  orderItems = new Array<CartModel>();
  subTotal: number;
  totalAmount: number;
  tax: number;
  shippingFee: number;
  customer: CustomerModel;
  bill: BillModel;
  payment: PaymentModel;

  constructor(public bsModalRef: BsModalRef,
              private orderService: OrderService,
              private cartService: CartService,
              private store: NgRedux<IAppState>) { 
         
  }

  ngOnInit() {
    this.store.select().subscribe((res: IAppState) => {
      let selectedOrder = this.orderService.getOrderByOrderNo(res.selectedOrder.orderNo);
      //validate selectedOrder here...
      this.selectedOrderNo = selectedOrder.orderNo;
      this.orderItems = selectedOrder.orderItems;
      this.subTotal = selectedOrder.subTotal;
      this.totalAmount = selectedOrder.totalAmount;
      this.tax = selectedOrder.tax;
      this.shippingFee = selectedOrder.shippingFee;

      let orderDetail = selectedOrder.orderDetail;
      this.customer = orderDetail.customerInfo;
      this.bill = orderDetail.billInfo;
      this.payment = orderDetail.paymentInfo;
    });
    
  }
}
