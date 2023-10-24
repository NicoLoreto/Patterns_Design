import { ICommand } from "./payment-commands/command.interface";
import { CreditCardDto } from "./payment-commands/dto/credit-card.dto";

export class MercadoPagoCommand implements ICommand {
    public readonly providerName: string = "MercadoPago";

    constructor(private readonly creditCardDef: CreditCardDto) {}

    handle(): void {
        console.log(`${this.providerName} has been triggered ..`);
    }
}
