import { StandardFields } from '../global';
import { CustomerResponse } from './customers';

export type ActionData = {
  /**
   * The identifier of the target specified in target_type. For a customer, this is the customer key. For a partnership,
   * it is their partner key.
   */
  targetKey: string;
  /** Whether to record an action under a partnership or customer */
  targetType: 'partnership' | 'customer';
  /** The type of action the partner or customer performed */
  type: string;
  /** The number of times the action was performed */
  value: number;
};

export type ActionResponse = StandardFields & ActionData;
export type ListActionResponse = Exclude<ActionResponse, 'targetKey' | 'targetType'> & {
  /** The boolean flag which determines if the action is archived or not. */
  archived: boolean;
  /** Unique key of this partnership. */
  partnershipKey: string;
  /** Base schema representation of a company */
  company: Company;
  customer: CustomerResponse;
};

export type CreateActionPayload = ActionData;

type Company = {
  /** Unique key of this company */
  key: string;
  /** The name of this company */
  name: string;
};

type Customer = {
  /** Unique key of this customer */
  key: string;
  subIds: string[];
};
