export class SettingModel {
    constructor(themeBackgroundColor? : string, 
        tax : number = 0.12, 
        shippingFee : number = 4.50) 
    {    
            this.themeBackgroundColor = themeBackgroundColor;
            this.tax = tax;
            this.shippingFee = shippingFee;
    }

    public themeBackgroundColor : string;
    public tax: number;
    public shippingFee: number;
}
