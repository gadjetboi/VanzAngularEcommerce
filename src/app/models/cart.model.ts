import { ProductModel } from "./product.model";

export class CartModel {
    constructor(product?: ProductModel, qty?: number, subTotal?: number, total?: number) {
        this.name = product ? product.name : '';
        this.description = product ? product.description : '';
        this.price = product ? product.price : null;
        this.imgUrl = product ? product.imgUrl : '';
        this.qty = qty;
        this.subTotal = subTotal;
        this.total = total;
    }
    
    public name : string;
    public description: string;
    public qty : number;
    public price: number;
    public imgUrl: string;
    public subTotal: number;
    public total: number
}
