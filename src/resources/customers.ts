import { buildSearchQueryParams } from '../utils/utils';
import { api } from '../initialize';
import { CreateCustomerPayload, CustomerResponse, UpdateCustomerPayload } from '../types';

const RESOURCE = 'customers';

/**
 * Returns a list of your customers. The customers are returned sorted by creation date by default, with the most recent
 * customers appearing first.
 */
const getAllCustomers = async ({ queryParams = {} }: GetAllArgs = {}): Promise<
  ListResponse<CustomerResponse>
> => {
  const queryString = buildSearchQueryParams(queryParams);

  return (await api.get(`${RESOURCE}${queryString}`))?.data;
};

/**
 * Retrieves the details of an existing customer. You need only supply the unique customer key that was returned upon
 * customer creation.
 */
const getCustomer = async ({
  pathParams,
  queryParams = {},
}: GetArgs<{ key: string }>): Promise<CustomerResponse> => {
  const queryString = buildSearchQueryParams(queryParams);
  const { key } = pathParams;

  return (await api.get(`${RESOURCE}/${key}${queryString}`))?.data;
};

/** Creates a new customer with the data provided. */
const createCustomer = async ({
  payload,
}: CreateArgs<{}, CreateCustomerPayload>): Promise<CustomerResponse> => {
  return (await api.post(`${RESOURCE}`, payload))?.data;
};

/** Updates a customer with the data provided. Any parameters not passed will not be updated. */
const updateCustomer = async ({
  payload,
  pathParams,
}: UpdateArgs<{ key: string }, UpdateCustomerPayload>): Promise<CustomerResponse> => {
  const { key } = pathParams;

  return (await api.patch(`${RESOURCE}/${key}`, payload))?.data;
};

/** Deletes a customer with a given customer key. */
const deleteCustomer = async ({ pathParams }: DeleteArgs<{ key: string }>): Promise<void> => {
  return api.delete(`${RESOURCE}/${pathParams.key}`);
};

export default {
  getAllCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
