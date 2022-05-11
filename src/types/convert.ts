import { StandardFields, StandardObject } from "../global";

export type ConvertPayload = {
  email: string;
  customerKey?: string;
};

export type ConvertResponse = StandardFields &
  ConvertPayload & {
    /**
     * Additional custom fields for the customer that is configured in your PartnerStack dashboard.
     *
     * @deprecated Use `fields` instead
     */
    meta: Record<string, string>;
    /** Should be either the customer's name, or the company name */
    name: string;
    /** A unique identifier given by a payment provider (Stripe, Recurly, Chargebee etc) */
    providerKey: string;
    fields: StandardObject[];
    /** The key of the partner that is responsible for the customer */
    partnerKey: string;
    /** Unique key of this partnership. */
    partnershipKey: string;
    /** The key of the source at which the customer was created through */
    sourceKey: string;
    /** The source at which the customer was created through */
    sourceType: string;
    /** True if created by a test partner */
    test: boolean;
  };
