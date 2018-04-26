import { CartModel } from "./cart.model";
import { OrderDetailModel } from "./order.detail";

export class OrderModel {
    constructor(orderNo?: string, subTotal? : number,
        tax? : number, shippingFee? : number, 
        totalAmount? : number, orderItems? : Array<CartModel>,
        orderDetail? : OrderDetailModel,
        status? : string) {

        this.orderNo = orderNo;
        this.subTotal = subTotal;
        this.tax = tax;
        this.shippingFee = shippingFee;
        this.totalAmount = totalAmount;
        this.orderItems = orderItems;
        this.orderDetail = orderDetail;
        this.status = status;
       
    }
    public orderDetail: OrderDetailModel;
    public orderNo: string;
    public orderDate: string;
    public subTotal: number;
    public tax: number;
    public shippingFee: number;
    public totalAmount: number;
    public orderItems: Array<CartModel>;
    public status: string;
}