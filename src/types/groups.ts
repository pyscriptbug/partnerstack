export type GroupData = Partnerstack.StandardFields & {
  /**Whether or not this group is still active */
  archived: boolean;
  /**Whether this is the default Group for partners to join */
  default: boolean;
  /**Features that partners within this group have access too */
  features: Record<string, any>;
  /**The name of this Group as presented to partners */
  name: string;
  /**The slugified version of this groups name to be added to routes */
  slug: string;
};

export type GroupResponse = GroupData;
