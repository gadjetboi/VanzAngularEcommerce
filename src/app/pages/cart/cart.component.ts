import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartModel } from '../../models/cart.model';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '../../interfaces/app-state';
import { NgRedux, select } from '@angular-redux/store';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { CheckoutModalComponent } from '../checkout/checkout-modal/checkout-modal.component';

@Component({
  selector: 'cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts = new Array<CartModel>();
  isCartChange = false;
  modalRef: BsModalRef;
  subTotal: number;
  total: number;
  
  constructor(public cartService: CartService, 
              private store: NgRedux<IAppState>,
              private modalService: BsModalService) { 
  
  }

  ngOnInit() {
    this.watchCarts();
  }

  watchCarts() {
    this.store.select<IAppState>().subscribe((res: IAppState) => {
      this.carts = new Array<CartModel>();
       Object.assign(this.carts, res.carts);
       this.subTotal = this.cartService.getSubTotal();
       this.isCartChange = true;
    });
  }

  openCheckoutModal() {
    const initialState = {
      title: 'Checkout'
    };

    let modalOptions = new ModalOptions();
    modalOptions.ignoreBackdropClick = true;
    modalOptions.initialState = initialState;
    modalOptions.class = 'modal-lg';

    this.modalRef = this.modalService.show(CheckoutModalComponent, modalOptions);
    this.modalRef.content.closeBtnName = 'Close';
  }

}
