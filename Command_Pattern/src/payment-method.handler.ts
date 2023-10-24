import { ICommand } from "./payment-commands/command.interface";

export class PaymentMethodHandler {
    // este metodo desconoce el tipo de tarjeta que recibirá, pero sabe que debe ejecutar handler()
    process(command: ICommand): void {
        console.log("Payment method handler has been started");
        command.handle();
    }

    forceToProcess(commands: ICommand[]): void {
        for (const cmd of commands) {
            try {
                if (cmd.providerName === "Culqui") {
                    throw new Error(`${cmd.providerName} rejected the user credit card by fraud`);
                }

                cmd.handle();
                break;
            } catch (error) {
                console.warn(`\tERR: ${error}`);
            }
        }
    }
}
