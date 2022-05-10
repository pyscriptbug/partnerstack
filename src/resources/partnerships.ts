import { buildSearchQueryParams } from '../../../../util/query-param-util';
import { api } from '../api';
import {
  ListPartnershipResponse,
  PartnershipResponse,
  CreatePartnershipPayload,
  UpdatePartnershipPayload,
} from '../types';

const RESOURCE = 'partnerships';

/**Returns a list of your partnerships. The partnerships are returned sorted by creation date by default, with the most recent partnerships appearing first. */
const getAllPartnerships = async ({ queryParams = {} }: Partnerstack.GetAllArgs = {}): Promise<
  Partnerstack.ListResponse<ListPartnershipResponse>
> => {
  const queryString = buildSearchQueryParams(queryParams);

  return (await api.get(`${RESOURCE}${queryString}`))?.data;
};

/**Retrieves the details of an existing partnership. You need only supply the unique partnership key that was returned upon partnership creation. */
const getPartnership = async ({
  pathParams,
  queryParams = {},
}: Partnerstack.GetArgs<{ key: String }>): Promise<PartnershipResponse> => {
  const queryString = buildSearchQueryParams(queryParams);
  const { key } = pathParams;

  return (await api.get(`${RESOURCE}/${key}${queryString}`))?.data;
};

/**Creates a partnership with desired params. */
const createPartnership = async ({
  payload,
}: Partnerstack.CreateArgs<{}, CreatePartnershipPayload>): Promise<PartnershipResponse> => {
  return (await api.post(`${RESOURCE}`, payload))?.data;
};

/**Updates the specific partnership by setting the values of the parameters passed. */
const updatePartnership = async ({
  payload,
  pathParams,
}: Partnerstack.UpdateArgs<{ key: string }, UpdatePartnershipPayload>): Promise<PartnershipResponse> => {
  const { key } = pathParams;

  return (await api.patch(`${RESOURCE}/${key}`, payload))?.data;
};

/**Archives a partnership. */
const deletePartnership = async ({ pathParams }: Partnerstack.DeleteArgs<{ key: string }>): Promise<void> => {
  return api.delete(`${RESOURCE}/${pathParams.key}`);
};

export default {
  getAllPartnerships,
  getPartnership,
  createPartnership,
  updatePartnership,
  deletePartnership,
};
