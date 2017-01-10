import {PaymentDetails} from "./payment-details";
import {CustomerPermissions} from "./customer-permissions";
export interface CustomerDetails {
  title: string;
  firstName: string;
  lastName: string;
  phoneMobile: string;
  phoneLandline: string;
  email: string;
  dateOfBirth: string;
  difficulties: string[];
  employmentStatus: string;
  paymentDetails: PaymentDetails;
  smartMeter: boolean;
  permissions: CustomerPermissions;
}
