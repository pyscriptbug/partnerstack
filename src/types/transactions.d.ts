import { CustomerResponse } from './customers';

export type TransactionData = {
  /**Key of customer who made the transaction. */
  customerKey: string;
  /**An external key that can be used to reference the customer. This is the same as the customer_key value used when creating the customer with PartnerStackJS. */
  customerExternalKey: string;
  /**Customer's email address. */
  customerEmail: string;
  /**Transaction amount in cents for specified currency. */
  amount?: number;
  /**Key of transaction category. */
  categoryKey?: string;
  /**Transaction currency type. (USD) */
  currency?: string;
  /**Key of transaction record in PartnerStack. */
  key?: string;
  /**Key of transaction product. */
  productKey?: string;
};

export type CreateTransactionPayload = Custom.OneOf<
  TransactionData,
  'customerKey' | 'customerExternalKey' | 'customerEmail'
>;

export type TransactionResponse = Partnerstack.StandardFields &
  Exclude<TransactionData, 'customerExternalKey' | 'customerEmail'> & {
    /**Transaction amount in cents converted to USD. */
    amountUsd: number;
    /**Used to indicate whether this transaction has been approved */
    approved: boolean;
    /**Customer info. */
    customer: Pick<CustomerResponse, 'key' | 'email'> & { externalKey: string };
  };
