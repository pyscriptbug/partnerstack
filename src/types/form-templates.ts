import { GroupData } from './groups';

export type FormTemplateResponse = StandardFields & {
  /** A description for users to better understand the form */
  description: string;
  /** The presented name of this form */
  name: string;
  /** A title to display to users when they fill out the form */
  title: string;
  /** The type of object within PartnerStack that this form translates to */
  type: string;
  fields: Field[];
  groups: GroupData[];
};

type Field = Exclude<StandardObject, 'apiName' | 'externalType' | 'fieldKey' | 'value'> & {
  /** The default value that will be pinned to this field on the resulting object if no value is provided */
  defaultValue: string;
  /** If provided, the response to the current field will map to responses of fields within maps_to array */
  mapsTo: string;
  /**
   * Boolean that limits values of field that can be edited. If True, this field may not be archived and type as well as
   * required cannot be edited.
   */
  protected: boolean;
};
