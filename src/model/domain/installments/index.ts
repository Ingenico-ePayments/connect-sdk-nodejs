/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { AmountOfMoney } from "../definitions";
import { InstallmentOptions } from "./definitions";

export interface GetInstallmentRequest {
  amountOfMoney?: AmountOfMoney | null;
  bin?: string | null;
  countryCode?: string | null;
  paymentProductId?: number | null;
}

export interface InstallmentOptionsResponse {
  installmentOptions?: InstallmentOptions[] | null;
}
