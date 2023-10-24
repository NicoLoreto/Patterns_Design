type CreditCardType = "visa" | "marstercard" | "dinner";

// la info de la tarjeta es en común para las tres
export class CreditCardDto {
    constructor(
        private readonly cardtype: CreditCardType,
        private readonly cardCustomerFullName: string,
        private readonly cardNumber: string,
        private readonly cardCcv: string,
        private readonly transactionAmount: number
    ) {}
}
