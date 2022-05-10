import { buildSearchQueryParams } from '../utils/utils';
import { api } from '../initialize';
import { ConvertPayload, ConvertResponse, CreateDealPayload, DealResponse, UpdateDealPayload } from '../types';

const RESOURCE = 'deals';

/** Returns a list of your deals. The deals are returned sorted by creation date, with the most recent deals appearing first. */
const getAllDeals = async ({ queryParams = {} }: GetAllArgs = {}): Promise<ListResponse<DealResponse>> => {
  const queryString = buildSearchQueryParams(queryParams);

  return (await api.get(`${RESOURCE}${queryString}`))?.data;
};

/** Retrieves the details of an existing deal. You need only supply the unique deal key that was returned upon deal creation. */
const getDeal = async ({ pathParams, queryParams = {} }: GetArgs<{ key: string }>): Promise<DealResponse> => {
  const queryString = buildSearchQueryParams(queryParams);
  const { key } = pathParams;

  return (await api.get(`${RESOURCE}/${key}${queryString}`))?.data;
};

/** Creates a deal with desired params. */
const createDeal = async ({ payload }: CreateArgs<{}, CreateDealPayload>): Promise<DealResponse> => {
  return (await api.post(`${RESOURCE}`, payload))?.data;
};

/** Updates the specified deal by setting the values of the parameters passed. Any parameters not provided will be left unchanged. */
const updateDeal = async ({
  payload,
  pathParams,
}: UpdateArgs<{ key: string }, UpdateDealPayload>): Promise<DealResponse> => {
  const { key } = pathParams;

  return (await api.patch(`${RESOURCE}/${key}`, payload))?.data;
};

/** Archives the specified deal */
const deleteDeal = async ({ pathParams }: DeleteArgs<{ key: string }>): Promise<void> => {
  return api.delete(`${RESOURCE}/${pathParams.key}`);
};

/** Converts a deal to a customer */
const convertDeal = async ({
  payload,
  pathParams,
}: UpdateArgs<{ key: string }, ConvertPayload>): Promise<ConvertResponse> => {
  const { key } = pathParams;

  return (await api.post(`${RESOURCE}/${key}/convert`, payload))?.data;
};

export default {
  getAllDeals,
  getDeal,
  createDeal,
  updateDeal,
  deleteDeal,
  convertDeal,
};
