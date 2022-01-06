import { DisputeResponse } from "../dispute";
import { PaymentResponse } from "../payment";
import { PayoutResponse } from "../payout";
import { RefundResponse } from "../refund";
import { TokenResponse } from "../token";

export interface WebhooksEvent {
  apiVersion?: string | null;
  id?: string | null;
  created?: string | null;
  merchantId?: string | null;
  type?: string | null;
  payment?: PaymentResponse | null;
  refund?: RefundResponse | null;
  payout?: PayoutResponse | null;
  token?: TokenResponse | null;
  dispute?: DisputeResponse | null;
}
