/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import get = require("./get");
import submit = require("./submit");
import cancel = require("./cancel");
import uploadFile = require("./uploadFile");
import { DisputesClient } from "../model/disputes";

const disputesClient: DisputesClient = {
  get: get,
  submit: submit,
  cancel: cancel,
  uploadFile: uploadFile
};
export = disputesClient;
