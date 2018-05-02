import { Injectable, EventEmitter, Output } from '@angular/core';
import { CartModel } from '../models/cart.model';
import { ProductModel } from '../models/product.model';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../interfaces/app-state';
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from '../redux/actions/action';
import { ToastyMessageService } from './toasty.service';

@Injectable()
export class CartService {

  carts = new Array<CartModel>();
  
  @Output()
  cartChanged = new EventEmitter<Array<CartModel>>();

  constructor(
      private store: NgRedux<IAppState>,
      private toastyMessageService: ToastyMessageService) 
  { 
    
  }

  add(product: ProductModel, qty: number) : void {
    
    let cartIndex = this.getCartIndex(product);
    
    if(cartIndex >= 0) {
      this.incrementCartQty(cartIndex);

      this.store.dispatch({type: UPDATE_CART, payload: { carts: this.carts } }); //TODO: move to action. create a function addToCart in action and trigger dispatch
      
      this.toastyMessageService.showMessage('', product.name + " increment qty to 1.", 'success'); //TODO: move type to common

      return;
    }
    
    let cartModel = new CartModel(product, qty);
    this.carts.push(cartModel);
    this.store.dispatch({type: ADD_TO_CART, payload: { carts: this.carts } });

    this.toastyMessageService.showMessage('', product.name + " added to cart.", 'success'); //TODO: move type to common
  }

  private getCartIndex(product: ProductModel): number {
    let cartIndex = this.carts.findIndex((cart: CartModel) => {
      return cart.name + cart.description === product.name + product.description; //FYI: temporary identification
    });

    return cartIndex;
  }

  private incrementCartQty(cartIndex) {
    this.carts[cartIndex].qty += 1;
  }

  remove(key) : void {
   this.carts = this.carts.filter((res) => {
      let tempKey = res.name+res.description; //TODO: temporary: change when using ID
     
      return (tempKey !== key);
    });

    this.store.dispatch({type: REMOVE_FROM_CART, payload: { carts: this.carts }});

    this.toastyMessageService.showMessage('', "Removed from cart.", 'success'); //TODO: move type to common
  }

  getSubTotal() : number {
    let subTotal = 0;
    this.carts.forEach(cart => {
      subTotal += cart.price * cart.qty;
    });

    return subTotal;
  }

  clearCarts() {
    this.carts = new Array<CartModel>();
    this.store.dispatch({type: REMOVE_FROM_CART, payload: { carts: this.carts }});
  }

}
