/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { Capture } from "./definitions";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CaptureResponse extends Capture {}

export interface CapturesResponse {
  captures?: Capture[] | null;
}
