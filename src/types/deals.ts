export type DealSource = 'partner' | 'vendor';

export type CreateDealPayload = OneOf<
  {
    /** The unique key of the partner who owns this deal. Required if 'source' is specified as 'partner'. */
    partnerKey: string;
    /** The unique key of the group in which this deals's prospective partner is. Required if 'source' is specified as 'vendor' */
    groupKey: string;
    /** Name of the account */
    accountName?: string;
    /** Deal amount in cents */
    amount?: number;
    /** Expected close date of deal as YYYY-MM-DD */
    closeDate?: Date;
    /** First name of the account's contact */
    contactFirstName?: string;
    /** Last name of the account's contact */
    contactLastName?: string;
    /** Source of the deal, either 'partner' or 'vendor', defaults to 'partner' if not specified */
    source?: DealSource;
    /** Current stage of this deal. Must appear in Deals Stage list found in group settings. */
    stage?: string;
    /** @deprecated Use `fields` instead. */
    fieldData?: Record<string, string>;
    fields?: Partnerstack.StandardObject[];
    meta?: Record<string, string>;
  },
  'partnerKey' | 'groupKey'
>;

export type UpdateDealPayload = Exclude<CreateDealPayload, 'partnerKey' | 'groupKey'>;

export type DealResponse = CreateDealPayload &
  Pick<Partnerstack.StandardFields, 'key' | 'createdAt'> & {
    moldKey: string;
    team: Partnerstack.Team;
    teamMember: Partnerstack.TeamMember;
  };
