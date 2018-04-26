export class ProductModel {
    constructor(name? : string, description? : string, price? : number, imgUrl? : string) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
    }
    
    public name: string;
    public description: string;
    public price: number;
    public imgUrl: string;
}
