import { api } from '../';
import { CreateTransactionPayload, TransactionResponse } from '../types';
import { buildSearchQueryParams } from '../../utils/utils';

const RESOURCE = 'transactions';

/**
 * Returns a list of your transactions. The transactions are returned sorted by creation date, with the most recent
 * transactions appearing first.
 */
const getAllTransactions = async ({ queryParams = {} }: Partnerstack.GetAllArgs = {}): Promise<
  Partnerstack.ListResponse<TransactionResponse>
> => {
  const queryString = buildSearchQueryParams(queryParams);

  return (await api.get(`${RESOURCE}${queryString}`))?.data;
};
/** Creates a new transaction for a given target. */
const createTransaction = async ({
  payload,
}: Partnerstack.CreateArgs<{}, CreateTransactionPayload>): Promise<TransactionResponse> => {
  return (await api.post(`${RESOURCE}`, payload))?.data;
};

export default {
  getAllTransactions,
  createTransaction,
};
