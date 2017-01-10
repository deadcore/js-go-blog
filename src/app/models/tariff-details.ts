export interface TariffDetails {
  id: string;
  supplierName: string;
  tariffName: string;
  fuelType: string;
  newSpend: number;
  newDDMonthlyElec: number;
  newDDMonthlyGas: number;
  saving: number;
  features: string[];
  paperlessBillingFlag: string;
  isPaperlessBilling: boolean;
  securityQuestionCode: string;
  securityQuestionText: string;
  securityAnswer: string;
  existingSupplierNameElec: string;
  existingSupplierNameGas: string;
}
