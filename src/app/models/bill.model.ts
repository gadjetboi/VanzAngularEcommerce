export class BillModel {
    constructor(address1?: string, address2?: string, country?: string, zipcode?:string) {
        this.address1 = address1;
        this.address2 = address2;
        this.country = country;
        this.zipcode = zipcode;
    }

    public address1 : string;
    public address2 : string;
    public country : string;
    public zipcode : string;
}
