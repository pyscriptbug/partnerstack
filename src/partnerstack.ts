declare namespace Partnerstack {
  /** Arguments for the partnerstack initializer function */
  export type Initialize = {
    /** The base URL for the public Partnerstack API. Default is `https://api.partnerstack.com/api/v2` */
    baseUrl?: string;
    /** Your partnerstack public key. */
    apiKey: string;
    /** Your partnerstack secret key. */
    apiSecret: string;
  };

  /** T argument is the type of the response. */
  export type GetAllArgs<T = unknown> = {
    queryParams?: QueryParams<T>;
  };

  /**
   * P argument is the object containing the path parameters.
   *
   * T argument is the type of the response.
   */
  export type GetArgs<P, T = unknown> = {
    pathParams: P;
    queryParams?: QueryParams<T>;
  };

  /**
   * P argument is the object containing the path parameters.
   *
   * T argument is the type of the response.
   */
  export type CreateArgs<P, T = unknown> = {
    payload: T;
    pathParams?: P;
    queryParams?: QueryParams<T>;
  };

  /**
   * P argument is the object containing the path parameters.
   *
   * T argument is the type of the response.
   */
  export type UpdateArgs<P, T = unknown> = CreateArgs<P, T> & Required<{ pathParams: P }>;
  /** P argument is the object containing the path parameters. */
  export type DeleteArgs<P> = GetArgs<P>;

  /** Response from partnerstack for all list requests. */
  export type ListResponse<T = unknown> = {
    hasMore: boolean;
    items: T[];
  };

  /**
   * Query params for the Partnerstack Partner API
   *
   * A cursor for use in pagination. starting_after is an item key that defines your place in the list. For instance, if
   * you make a list request and receive 100 items, then the last item with "key":"part_f4Jmxb7LmvhERZ", can be used in
   * your subsequent call as the parameter value to fetch the next page of results: ?starting_after=part_f4Jmxb7LmvhERZ.
   */
  export type QueryParams<T = unknown> = {
    /** Applies a minimum epoch timestamp (ms) filter to the response created_at. */
    minCreated?: number;
    /** Applies a maximum epoch timestamp (ms) filter to the response created_at. */
    maxCreated?: number;
    /** The field in which the results are ordered by. A - prefix denotes that the results are in descending order. */
    orderBy?: keyof T | `-${StringLiteral<keyof T>}`;
    /**
     * Will filter for partnerships who are in a group with the specified name. Name must have spaces and special
     * characters removed.
     */
    group?: string;
    /** Group key in which the results are filtered by */
    groupKey?: string;
    /**
     * Will filter to a specific partnership's partner_key, which can be found using the partnership's get endpoint or
     * from the partnership view in your PartnerStack dashboard.
     */
    partnerKey?: string;
    /** Partnership key in which the results are filtered by. */
    partnershipKey?: string;
    /** Will filter for actions with the specified name. */
    actionType?: string;
    /** A limit on the number of items to be returned. Limits can range between 1 and 250, and the default is 10. */
    limit?: number;
    /**
     * A cursor for use in pagination, starting_after takes in an item key and the subsequent call will return the
     * following items in the list. This is mutually exclusive with ending_before.
     */
    startingAfter?: string;
    /**
     * A cursor for use in pagination, ending_before takes in an item key and the subsequent call will return the prior
     * items in the list. This is mutually exclusive with starting_after.
     */
    endingBefore?: string;
    /** The molds' target type. If empty, filter by all types. */
    targetType?: string;
    /** The keys of the molds to filter by. If empty, returns fields for all molds. */
    moldKey?: string;
  };

  /** Standard source fields that is present on some Partnerstack responses. */
  export type SourceFields = {
    /** The key of the source at which the customer was created through */
    sourceKey: string;
    /** The source at which the customer was created through */
    sourceType: string;
    /** True if created by a test partner */
    test: boolean;
  };

  /** Standard fields that are present on all database objects. */
  export type StandardFields = {
    /** A unique identifier used to reference the object */
    key: string;
    /** Immutable Unix timestamp in milliseconds taken at time of creation */
    createdAt: number;
    /** Unix timestamp in milliseconds taken at time of last update */
    updatedAt: number;
  };

  /** Standard manager data for some Partnerstack responses. */
  export type Manager = {
    /** The email of the Partner Manager who you wish to manage this partner. */
    managerEmail?: string;
    /** The name of the Partner Manager who you wish to manage this partner. */
    managerName?: string;
  };

  /** Standard team field that is present on all database objects. */
  export type Team = StandardFields & {
    /** The name of the partner team */
    name: string;
  };

  /** Standard team member field that is present on all database objects. */
  export type TeamMember = StandardFields & {
    /** Email of the partner team member */
    email: string;
    /** First name of the partner team member */
    firstName: string;
    /** Last name of the partner team member */
    lastName: string;
  };

  /** Tiers enable vendors to provide reward and feature levels. */
  export type Tier = {
    /** A unique identifier to identify the tier */
    key: string;
    /** Specifies name of the Tier */
    name: string;
  };

  /** Standard partner field object that is present on all database objects. */
  export type StandardObject = {
    /** API name of this field to be used on create / update / serialization. Created at time of field creation but can be edited */
    apiName?: string;
    /** Name that can be used for external systems */
    externalType?: string;
    /** Key of field that is presented */
    fieldKey?: string;
    /** The help text that is provided for this field */
    helpText?: string;
    /** Whether or not this field is displayed when filling out its attached form */
    hidden?: boolean;
    /**
     * Internal name of this field. Created by PartnerStack at time of field creation. Used when referencing field in
     * created objects. Cannot be edited.
     */
    internalName?: string;
    /** Name of field that is presented */
    name?: string;
    /** The text of the placeholder that is provided for this field */
    placeholderText?: string;
    /** The position that this field will be displayed in relation to others on the same form (index starts at 0) */
    position?: number;
    /** Whether or not this field will be required when filling out its attached form */
    required?: boolean;
    /** The type of field that will be presented (input, picklist, number ect.) */
    type?: string;
    /** The value that was submitted to the field and stored on the target object */
    value?: string;
    /** Options to select from if this field is a picklist/checkbox */
    options?: Record<string, string>;
  };
}
