import {BankDetails} from "./bank-details";
export interface PaymentDetails {
  bankDetails: BankDetails;
  accountAuthorised: boolean;
  directDebitDay: number;
}
