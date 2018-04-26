export class PaymentModel {
    constructor(paymentType? : string, nameOnCard? : string, cardType? : string, cardNo?: string,
                cardExpMonth? : string, cardExpDay? : string, cardExpYear? : string, 
                cardCvv? : string) {

        this.paymentType = paymentType;
        this.nameOnCard = nameOnCard;
        this.cardType = cardType;
        this.cardNo = cardNo;
        this.cardExpMonth = cardExpMonth;
        this.cardExpDay = cardExpDay;
        this.cardExpYear = cardExpYear;
        this.cardCvv = cardCvv;
    }

    public paymentType : string;
    public nameOnCard : string;
    public cardType : string;
    public cardNo : string;
    public cardExpMonth : string;
    public cardExpDay : string;
    public cardExpYear : string;
    public cardCvv : string;
}
