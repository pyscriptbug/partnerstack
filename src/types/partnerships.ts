import { GroupData } from './groups';

export type PartnershipData = Manager & {
  /** The email of the partner. */
  email: string;
  /** @deprecated `fields` should be the source of truth */
  fieldData?: Record<string, string>;
  fields?: StandardObject[];
  /** The first name of the partner. */
  firstName?: string;
  /** The last name of the partner. */
  lastName?: string;

  /** @deprecated `fields` should be the source of truth */
  meta?: Record<string, string>;
  /**
   * The partner_key you wish to use for this partner. If included, must be unique to this partner. For more information
   * on partner_key see PartnerStackJS.
   */
  partnerKey?: string;
  tags?: string[];
  /** The key of the group within PartnerStack that you want this partner to be placed into. */
  groupKey?: string;
};

export type CreatePartnershipPayload = PartnershipData;
export type UpdatePartnershipPayload = {
  fields?: StandardObject[];
  /** The key of the group within PartnerStack that you want this partner to be placed into. */
  groupKey?: string;
  /** The email of the partner manager that you would like to assign this partner. */
  managerEmail?: string;
  /** The key of the tier within PartnerStack that you want this partner to be placed into. */
  tierKey?: string;
};

export type PartnershipResponse = StandardFields &
  PartnershipData & {
    group: GroupData;
    tier: Tier;
    team: Team;
  };

export type ListPartnershipResponse = StandardFields &
  Pick<PartnershipResponse, 'email' | 'firstName' | 'lastName' | 'group' | 'team' | 'tags'> & {
    /** Timestamp for when the partner joined partnerstack */
    joinedAt: number;
    /** Partnership's manager information if applicable */
    manager: Manager;
    /** Partnership metadata */
    mdata: Record<string, string>;
    /** Key used externally when referencing the partnership */
    partnerKey: string;
    /** Latest stats data for partnership */
    stats: Record<string, number>;
  };
