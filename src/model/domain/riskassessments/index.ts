/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { BankAccountBban, BankAccountIban, Card, ResultDoRiskAssessment } from "../definitions";
import { RiskAssessment } from "./definitions";

export interface RiskAssessmentBankAccount extends RiskAssessment {
  bankAccountBban?: BankAccountBban | null;
  bankAccountIban?: BankAccountIban | null;
}

export interface RiskAssessmentCard extends RiskAssessment {
  card?: Card | null;
}

export interface RiskAssessmentResponse {
  results?: ResultDoRiskAssessment[] | null;
}
