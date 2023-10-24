// cada proveedor de compra es un comando

// implementa la interface

// la lógica va en el handler

import { ICommand } from "./payment-commands/command.interface";
import { CreditCardDto } from "./payment-commands/dto/credit-card.dto";

// En el constructor van a recibir el mismo objeto los tres comandos. El objeto que contiene la info de la tarjeta
export class CulquiCommand implements ICommand {
    public readonly providerName: string = "Culqui";

    constructor(private readonly creditCardDef: CreditCardDto) {}

    handle(): void {
        console.log(`${this.providerName} has been triggered ..`);
    }
}
