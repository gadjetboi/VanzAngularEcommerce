import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'checkout-modal-component',
  templateUrl: './checkout-modal.component.html',
  styleUrls: ['./checkout-modal.component.css']
})
export class CheckoutModalComponent implements OnInit {
  toggleNav: string;
  
  constructor(public bsModalRef: BsModalRef,
              private orderService: OrderService) { 

    this.orderService.createNewInstance();
    this.orderService.setFees();
    this.orderService.setOrderItems();
  }

  ngOnInit() {
    this.orderService.setActiveTab('customer'); //TODO: move customer to common
  }
  
  setActiveTab(tabName: string) {
    if(this.orderService.isTabNavigatable(tabName)) {
      this.orderService.setActiveTab(tabName);
    }
  }
}
