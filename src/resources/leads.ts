import { buildSearchQueryParams } from '../utils/utils';
import { api } from '../initialize';
import { ConvertPayload, ConvertResponse, LeadPayload, LeadResponse } from '../types';

const RESOURCE = 'leads';

/** Returns a list of your leads. The leads are returned sorted by creation date, with the most recent leads appearing first. */
const getAllLeads = async ({ queryParams = {} }: GetAllArgs = {}): Promise<ListResponse<LeadResponse>> => {
  const queryString = buildSearchQueryParams(queryParams);

  return (await api.get(`${RESOURCE}${queryString}`))?.data;
};

/** Retrieves the details of an existing lead. You need only supply the unique lead key that was returned upon lead creation. */
const getLead = async ({ pathParams, queryParams = {} }: GetArgs<{ key: string }>): Promise<LeadResponse> => {
  const queryString = buildSearchQueryParams(queryParams);
  const { key } = pathParams;

  return (await api.get(`${RESOURCE}/${key}${queryString}`))?.data;
};

/** Creates a lead with desired params. */
const createLead = async ({ payload }: CreateArgs<{}, LeadPayload>): Promise<LeadResponse> => {
  return (await api.post(`${RESOURCE}`, payload))?.data;
};

/** Updates the specified lead by setting the values of the parameters passed. Any parameters not provided will be left unchanged. */
const updateLead = async ({ payload, pathParams }: UpdateArgs<{ key: string }, LeadPayload>): Promise<LeadResponse> => {
  const { key } = pathParams;

  return (await api.patch(`${RESOURCE}/${key}`, payload))?.data;
};

/** Archives the specified lead. */
const deleteLead = async ({ pathParams }: DeleteArgs<{ key: string }>): Promise<void> => {
  return api.delete(`${RESOURCE}/${pathParams.key}`);
};

/** Converts a lead to a customer */
const convertLead = async ({
  payload,
  pathParams,
}: UpdateArgs<{ key: string }, ConvertPayload>): Promise<ConvertResponse> => {
  const { key } = pathParams;

  return (await api.post(`${RESOURCE}/${key}/convert`, payload))?.data;
};

export default {
  getAllLeads,
  getLead,
  createLead,
  updateLead,
  deleteLead,
  convertLead,
};
