import { CulquiCommand } from "./culqui.command";
import { MercadoPagoCommand } from "./mercadopago.command";
import { CreditCardDto } from "./payment-commands/dto/credit-card.dto";
import { PaymentMethodHandler } from "./payment-method.handler";
import { PayUCommand } from "./payu.command";

const creditCard = new CreditCardDto("visa", "Eduardo Rodríguez Patiño", "xxx-xxx-xxx-xxx", "xxx", 300.0);

const paymentMethodHandler = new PaymentMethodHandler();

// example 1
paymentMethodHandler.process(new CulquiCommand(creditCard));

// example 2
paymentMethodHandler.forceToProcess([new CulquiCommand(creditCard), new PayUCommand(creditCard), new MercadoPagoCommand(creditCard)]);
