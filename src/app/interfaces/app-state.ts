import { CartModel } from "../models/cart.model";
import { ProductModel } from "../models/product.model";
import { SettingModel } from "../models/setting.model";
import { OrderModel } from "../models/order.model";

export interface IAppState {
    carts: Array<CartModel>
    products: Array<ProductModel>
    setting: SettingModel,
    selectedProduct: ProductModel,
    orders: Array<OrderModel>,
    selectedOrder: OrderModel
}
