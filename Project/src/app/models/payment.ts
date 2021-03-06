import { PaymentMethods } from "../enums/payment-methods";
import { User } from "./user";

export class Payment {
  id!:number;
  client!:User;
  date!:Date;
  amount!:number;
  payment_method!:PaymentMethods;
  invoiceId!:number;
}
