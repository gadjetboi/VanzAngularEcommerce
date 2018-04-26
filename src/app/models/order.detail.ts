import { CustomerModel } from "./customer.model";
import { BillModel } from "./bill.model";
import { PaymentModel } from "./payment.model";

export class OrderDetailModel {
    constructor(customerInfo? : CustomerModel,
                billInfo? : BillModel, 
                paymnetInfo? : PaymentModel) 
    {
        this.customerInfo = customerInfo;
        this.billInfo = billInfo;
        this.paymentInfo = this.paymentInfo;
    }

    public customerInfo: CustomerModel;
    public billInfo: BillModel;
    public paymentInfo: PaymentModel;
}