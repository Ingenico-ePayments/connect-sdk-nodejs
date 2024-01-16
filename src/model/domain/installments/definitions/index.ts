/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { Installments } from "../../payment/definitions";

export interface InstallmentDisplayHints {
  displayOrder?: number | null;
  label?: string | null;
  logo?: string | null;
}

export interface InstallmentOptions {
  displayHints?: InstallmentDisplayHints | null;
  id?: string | null;
  installmentPlans?: Installments[] | null;
}
