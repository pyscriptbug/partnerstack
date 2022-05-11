import { SourceFields, StandardFields, StandardObject } from '../global';

export type CustomerData = {
  /** External customer key that can be configured on creation. */
  customerKey: string;
  /** The customers email, must be a valid email */
  email: string;
  /** The key of the partner that is responsible for the customer (note: partner_key must belong to a partner in your program). */
  partnerKey: string;
  /** A unique identifier given by a payment provider (Stripe, Recurly, Chargebee etc) */
  providerKey?: string;
  /** Should be either the customer's name, or the company name */
  name?: string;
  /** Additional custom fields for the customer that is configured in your PartnerStack dashboard. */
  meta?: Record<string, string>;
};

export type CustomerResponse = StandardFields &
  SourceFields &
  CustomerData & {
    fields?: StandardObject[];
  };

export type CreateCustomerPayload = CustomerData;
export type UpdateCustomerPayload = Exclude<CustomerData, 'partnerKey'>;
