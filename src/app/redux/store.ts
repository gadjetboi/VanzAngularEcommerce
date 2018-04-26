import { IAppState } from "./../interfaces/app-state";
import { 
    ADD_TO_CART, 
    UPDATE_CART, 
    REMOVE_FROM_CART, 
    ADD_PRODUCT, REMOVE_PRODUCT, 
    CHANGE_SETTING, 
    SELECTED_PRODUCT, 
    SAVE_ORDER, 
    SELECTED_ORDER } from "./actions/action";
import { Action, AnyAction } from "redux";
import { CartModel } from "./../models/cart.model";
import { ProductModel } from "./../models/product.model";
import { SettingModel } from "./../models/setting.model";
import { OrderModel } from "../models/order.model";

export const INITIAL_STATE : IAppState = {
    carts: new Array<CartModel>(),
    products: new Array<ProductModel>(),
    setting: new SettingModel(),
    selectedProduct: new ProductModel(),
    orders: new Array<OrderModel>(),
    selectedOrder: new OrderModel()
};

export function rootReducer(state: IAppState, action: AnyAction) : IAppState {
  
   switch(action.type) {
    case ADD_TO_CART:
        return Object.assign({}, state, action.payload);
    case UPDATE_CART:
        return Object.assign({}, state, action.payload);
    case REMOVE_FROM_CART:
        return Object.assign({}, state, action.payload);
    
    case ADD_PRODUCT:
        return {...state, products:{...action.payload.products}}
    case REMOVE_PRODUCT:
        return {...state, products:{...action.payload.products}};
    
    case CHANGE_SETTING:
        return {...state, setting:{...action.payload.setting}};

    case SELECTED_PRODUCT:
        return {...state, selectedProduct:{...action.payload.selectedProduct}};

    case SAVE_ORDER:
        return {...state, orders:{...action.payload.orders}};

    case SELECTED_ORDER:
        return {...state, selectedOrder:{...action.payload.selectedOrder}};
   }
   return state;
}