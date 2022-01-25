/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import convertAmount = require("./convertAmount");
import bankaccount = require("./bankaccount");
import getIINdetails = require("./getIINdetails");
import privacypolicy = require("./privacypolicy");
import testconnection = require("./testconnection");
import settlementdetails = require("./settlementdetails");
import { ServicesClient } from "../model/services";

const servicesClient: ServicesClient = {
  convertAmount: convertAmount,
  bankaccount: bankaccount,
  getIINdetails: getIINdetails,
  privacypolicy: privacypolicy,
  testconnection: testconnection,
  settlementdetails: settlementdetails
};
export = servicesClient;
