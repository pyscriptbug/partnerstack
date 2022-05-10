import { ActionResponse } from './actions';
import { CustomerResponse } from './customers';
import { PartnershipResponse } from './partnerships';
import { TransactionResponse } from './transactions';

export type RewardData = {
  /** The amount of the reward in cents (USD) */
  amount: number;
  /** The description of what this reward is for */
  description: string;
  target: Target;
};

export type CreateRewardPayload = RewardData;
export type RewardResponse = StandardFields & RewardData;
export type ListRewardResponse = RewardResponse & {
  /** The status of the reward. Can be one of: hold, pending, approved, declined, paid. */
  rewardStatus: 'hold' | 'pending' | 'approved' | 'declined' | 'paid';
  /** The action associated with this reward. */
  action: Pick<ActionResponse, 'key' | 'type' | 'value'>;
  /** The customer associated with this reward. */
  customer: Pick<CustomerResponse, 'key' | 'email' | 'name'> & {
    externalKey: string;
  };
  /** The invoice associated with this reward. */
  invoice: Invoice;
  /** The offer associated with this reward. */
  offer: Offer;
  partnership: Pick<PartnershipResponse, 'key' | 'group'> & { name: string };
  transaction: Pick<TransactionResponse, 'key' | 'amount' | 'currency'>;
  /** The trigger associated with this reward. */
  trigger: Trigger;
};

type Target = {
  /** The key of the target for reward creation */
  key: string;
  /** The type of the target for the reward */
  type: 'customer' | 'transaction';
};

type Invoice = {
  /** Unique key of this invoice. */
  key: string;
  /** Epoch timestamp (ms) when this invoice was paid out. Available only if the invoice was charged successfully. */
  paymentDate: number;
  /** The status of this invoice. */
  status:
    | 'pending'
    | 'flagged'
    | 'approved'
    | 'charge_queued'
    | 'charge_pending'
    | 'charge_cancelled'
    | 'charge_failed'
    | 'charge_succeeded';
};

type Offer = {
  /** Unique key of this offer. */
  key: string;
  /** The offer description */
  description: string;
};

type Trigger = {
  /** Unique key of this trigger. */
  key: string;
};
