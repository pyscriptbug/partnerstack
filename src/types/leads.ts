import { StandardFields, StandardObject } from '../global';

export type LeadData = {
  /** Lead amount in cents */
  amount: number;
  /** Used to indicate whether this lead has been approved to move past the closed stage */
  approved: boolean;
  /** Reference that can be used in place of the key. Often given as leads email */
  externalKey: string;
  /** @deprecated Use `fields` instead. */
  fieldData: Record<string, string>;
  fields: StandardObject[];
  groupKey: string;
  /**
   * Key value pairs that store additional information about this lead. First and last name required. Other eligable
   * keys are based on Lead forms created. Use the /leads/form-template to view field names
   *
   * @deprecated Use `fields` instead
   */
  meta: Record<string, string>;
  moldKey: string;
  /** The unique key of the partner who submitted this lead */
  partnerKey: string;
  /** Current status of this lead. Must be one of either 'open', 'closed', 'dead', 'closed won', or 'closed lost' */
  status: 'open' | 'closed' | 'dead' | 'closed won' | 'closed lost';
};

export type LeadResponse = StandardFields & LeadData;

export type LeadPayload = LeadData;
