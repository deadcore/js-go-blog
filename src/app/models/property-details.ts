import {AddressDuration} from "./address-duration";
import {Address} from "./address";

export interface PropertyDetails {
  homeAddress: AddressDuration;
  residentialStatus: string;
  useHomeAddressAsBillingAddress: boolean;
  billingAddress: Address;
  previousAddress: AddressDuration;
  previousAddress2: AddressDuration;
  landlordPermission: boolean;
}
