/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import bankaccounts = require("./bankaccounts");
import cards = require("./cards");
import { RiskassessmentsClient } from "../model/riskassessments";

const riskassessmentsClient: RiskassessmentsClient = {
  bankaccounts: bankaccounts,
  cards: cards
};
export = riskassessmentsClient;
