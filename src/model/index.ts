/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { Context, SdkContext } from "./types";
import { HostedcheckoutsClient } from "./hostedcheckouts";
import { HostedmandatemanagementsClient } from "./hostedmandatemanagements";
import { PaymentsClient } from "./payments";
import { CapturesClient } from "./captures";
import { RefundsClient } from "./refunds";
import { DisputesClient } from "./disputes";
import { PayoutsClient } from "./payouts";
import { ProductgroupsClient } from "./productgroups";
import { ProductsClient } from "./products";
import { RiskassessmentsClient } from "./riskassessments";
import { ServicesClient } from "./services";
import { TokensClient } from "./tokens";
import { MandatesClient } from "./mandates";
import { SessionsClient } from "./sessions";
import { FilesClient } from "./files";
import { WebhooksHelper } from "./webhooks";

export interface ConnectSdk {
  init(context: Context): ConnectSdk;

  readonly hostedcheckouts: HostedcheckoutsClient;
  readonly hostedmandatemanagements: HostedmandatemanagementsClient;
  readonly payments: PaymentsClient;
  readonly captures: CapturesClient;
  readonly refunds: RefundsClient;
  readonly disputes: DisputesClient;
  readonly payouts: PayoutsClient;
  readonly productgroups: ProductgroupsClient;
  readonly products: ProductsClient;
  readonly riskassessments: RiskassessmentsClient;
  readonly services: ServicesClient;
  readonly tokens: TokensClient;
  readonly mandates: MandatesClient;
  readonly sessions: SessionsClient;
  readonly files: FilesClient;

  readonly context: SdkContext;

  readonly webhooks: WebhooksHelper;
}

export * from "./types";
