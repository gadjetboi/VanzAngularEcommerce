import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { OrderModel } from '../../../models/order.model';
import { DatePipe } from '@angular/common';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../../interfaces/app-state';
import { SELECTED_ORDER } from '../../../redux/actions/action';
import { ModalOptions, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { OrderDetailModalComponent } from '../order-detail-modal/order-detail-modal.component';

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders = new Array<OrderModel>();
  modalRef: BsModalRef;
  
  constructor(private orderService: OrderService,
              private store: NgRedux<IAppState>,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

  // selectedOrder(orderModel: OrderModel) {
  //   this.store.dispatch({ type: SELECTED_ORDER, payload: { selectedOrder: orderModel }});
  // }

  openOrderDetailModal(orderModel: OrderModel) {
    const initialState = {
      title: 'Order Detail'
    };

    let modalOptions = new ModalOptions();
    modalOptions.ignoreBackdropClick = true;
    modalOptions.initialState = initialState;
    modalOptions.class = 'modal-lg';

    this.store.dispatch({ type: SELECTED_ORDER, payload: { selectedOrder: orderModel }});

    this.modalRef = this.modalService.show(OrderDetailModalComponent, modalOptions);
  }
}
