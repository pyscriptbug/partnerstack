import { CreateArgs, DeleteArgs, GetAllArgs, GetArgs, ListResponse, UpdateArgs } from '../global';
import { instance } from '../initialize';
import {
  CreatePartnershipPayload,
  ListPartnershipResponse,
  PartnershipResponse,
  UpdatePartnershipPayload,
} from '../types';
import { buildSearchQueryParams } from '../utils/utils';

const RESOURCE = 'partnerships';

/**
 * Returns a list of your partnerships. The partnerships are returned sorted by creation date by default, with the most
 * recent partnerships appearing first.
 */
const getAllPartnerships = async ({ queryParams = {} }: GetAllArgs = {}): Promise<
  ListResponse<ListPartnershipResponse>
> => {
  const queryString = buildSearchQueryParams(queryParams);

  return (await instance.get(`${RESOURCE}${queryString}`))?.data;
};

/**
 * Retrieves the details of an existing partnership. You need only supply the unique partnership key that was returned
 * upon partnership creation.
 */
const getPartnership = async ({
  pathParams,
  queryParams = {},
}: GetArgs<{ key: string }>): Promise<PartnershipResponse> => {
  const queryString = buildSearchQueryParams(queryParams);
  const { key } = pathParams;

  return (await instance.get(`${RESOURCE}/${key}${queryString}`))?.data;
};

/** Creates a partnership with desired params. */
const createPartnership = async ({
  payload,
}: CreateArgs<{}, CreatePartnershipPayload>): Promise<PartnershipResponse> => {
  return (await instance.post(`${RESOURCE}`, payload))?.data;
};

/** Updates the specific partnership by setting the values of the parameters passed. */
const updatePartnership = async ({
  payload,
  pathParams,
}: UpdateArgs<{ key: string }, UpdatePartnershipPayload>): Promise<PartnershipResponse> => {
  const { key } = pathParams;

  return (await instance.patch(`${RESOURCE}/${key}`, payload))?.data;
};

/** Archives a partnership. */
const deletePartnership = async ({ pathParams }: DeleteArgs<{ key: string }>): Promise<void> => {
  return instance.delete(`${RESOURCE}/${pathParams.key}`);
};

export default {
  getAllPartnerships,
  getPartnership,
  createPartnership,
  updatePartnership,
  deletePartnership,
};
