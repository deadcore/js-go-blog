import {ElxStatus} from "./elx-status";
import {MeterPointAdministrationNumber} from "./meter-point-administration-number";
import {MeterPointRegistrationNumber} from "./meter-point-registration-number";
import {TariffDetails} from "./tariff-details";
import {PropertyDetails} from "./property-details";
import {CustomerDetails} from "./customer-details";
import {Id} from "./id";

export interface SwitchRequest {
  _id: Id;
  quoteId: string;
  updated: Date;
  created: Date;
  customerDetails: CustomerDetails;
  propertyDetails: PropertyDetails;
  tariffDetails: TariffDetails;
  meterPointRegistrationNumber: MeterPointRegistrationNumber;
  meterPointAdministrationNumber: MeterPointAdministrationNumber;
  elxId: number;
  elxStatus: ElxStatus;
  status: string;
  errorDescription: String;
}
