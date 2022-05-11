import { CreateArgs, DeleteArgs, GetAllArgs, GetArgs, ListResponse, UpdateArgs } from '../global';
import { instance } from '../initialize';
import { CreateCustomerPayload, CustomerResponse, UpdateCustomerPayload } from '../types';
import { buildSearchQueryParams } from '../utils/utils';

const RESOURCE = 'customers';

/**
 * Returns a list of your customers. The customers are returned sorted by creation date by default, with the most recent
 * customers appearing first.
 */
const getAllCustomers = async ({ queryParams = {} }: GetAllArgs = {}): Promise<ListResponse<CustomerResponse>> => {
  const queryString = buildSearchQueryParams(queryParams);

  return (await instance.get(`${RESOURCE}${queryString}`))?.data;
};

/**
 * Retrieves the details of an existing customer. You need only supply the unique customer key that was returned upon
 * customer creation.
 */
const getCustomer = async ({ pathParams, queryParams = {} }: GetArgs<{ key: string }>): Promise<CustomerResponse> => {
  const queryString = buildSearchQueryParams(queryParams);
  const { key } = pathParams;

  return (await instance.get(`${RESOURCE}/${key}${queryString}`))?.data;
};

/** Creates a new customer with the data provided. */
const createCustomer = async ({ payload }: CreateArgs<{}, CreateCustomerPayload>): Promise<CustomerResponse> => {
  return (await instance.post(`${RESOURCE}`, payload))?.data;
};

/** Updates a customer with the data provided. Any parameters not passed will not be updated. */
const updateCustomer = async ({
  payload,
  pathParams,
}: UpdateArgs<{ key: string }, UpdateCustomerPayload>): Promise<CustomerResponse> => {
  const { key } = pathParams;

  return (await instance.patch(`${RESOURCE}/${key}`, payload))?.data;
};

/** Deletes a customer with a given customer key. */
const deleteCustomer = async ({ pathParams }: DeleteArgs<{ key: string }>): Promise<void> => {
  return instance.delete(`${RESOURCE}/${pathParams.key}`);
};

export default {
  getAllCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
