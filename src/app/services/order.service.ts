import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../interfaces/app-state';
import { OrderModel } from '../models/order.model';
import { CustomerModel } from '../models/customer.model';
import { BillModel } from '../models/bill.model';
import { PaymentModel } from '../models/payment.model';
import { CartService } from './cart.service';
import { SettingService } from './setting.service';
import { UtilityService } from './utility.service';
import { OrderDetailModel } from '../models/order.detail';

@Injectable()
export class OrderService {

  orders = new Array<OrderModel>();
  order: OrderModel;
  activeTab: string = 'customer'; //TODO: move to common
  navigatableTabs = new Array<string>();

  constructor(private store: NgRedux<IAppState>,
              private cartService: CartService,
              private settingService: SettingService,
              private utilityService: UtilityService) { 
    
  }

  createNewInstance() {
    this.order = new OrderModel();
    this.order.orderDetail = new OrderDetailModel();
  }

  setFees() {
    this.order.tax = this.settingService.getTax();
    this.order.shippingFee = this.settingService.getShippingFee();
    this.order.subTotal = this.cartService.getSubTotal();
    this.order.totalAmount = this.order.subTotal + this.order.shippingFee + this.order.tax;
  }

  setOrderItems(){
    this.order.orderItems = this.cartService.carts;
  }

  saveCustomerInfo(customerInfo : CustomerModel) {
    this.order.orderDetail.customerInfo = customerInfo;
  }

  saveBillInfo(billInfo: BillModel) {
    this.order.orderDetail.billInfo = billInfo;
  }

  savePaymentInfo(paymentInfo : PaymentModel) {
    this.order.orderDetail.paymentInfo = paymentInfo;
  }

  save() {
    this.order.orderNo = this.utilityService.generateOrderNo();
    this.order.orderDate = this.utilityService.getCurrentDate();
    this.order.status = 'Pending'; //TODO: Move to common

    this.orders.push(this.order);

    this.store.dispatch({type: 'SAVE_ORDER', payload: {orders: this.orders}});
  }

  getOrders() : Array<OrderModel> {
    return this.orders;
  }

  getOrderByOrderNo(orderNo: string) : OrderModel {
    return this.orders.find((order: OrderModel) => {
      return order.orderNo === orderNo
    });
  }

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }
  
  addNavigatableTab(tabName: string) {
    let isExist = (this.navigatableTabs.indexOf(tabName) == -1) ? false : true;

    if(!isExist) {
      this.navigatableTabs.push(tabName);
    }
  }

  isTabNavigatable(tabName: string) : boolean {
    let navigatableIndex = this.navigatableTabs.findIndex((navigatableTab: string) => {
      return tabName === navigatableTab
    });

    return (navigatableIndex < 0) ? false : true;
  }

  removeNavigatableTab(tabName: string){
    let navigatableIndex = this.navigatableTabs.findIndex((navigatableTab: string) => {
      return tabName === navigatableTab
    });

    console.log(navigatableIndex);
    console.log(this.navigatableTabs);
    if(navigatableIndex < 0) {
      this.navigatableTabs.splice(navigatableIndex);
      console.log(this.navigatableTabs);
    }
  }
}
