import { CreateArgs, GetAllArgs, ListResponse } from '../global';
import { instance } from '../initialize';
import { CreateTransactionPayload, TransactionResponse } from '../types';
import { buildSearchQueryParams } from '../utils/utils';

const RESOURCE = 'transactions';

/**
 * Returns a list of your transactions. The transactions are returned sorted by creation date, with the most recent
 * transactions appearing first.
 */
const getAllTransactions = async ({ queryParams = {} }: GetAllArgs = {}): Promise<
  ListResponse<TransactionResponse>
> => {
  const queryString = buildSearchQueryParams(queryParams);

  return (await instance.get(`${RESOURCE}${queryString}`))?.data;
};
/** Creates a new transaction for a given target. */
const createTransaction = async ({
  payload,
}: CreateArgs<{}, CreateTransactionPayload>): Promise<TransactionResponse> => {
  return (await instance.post(`${RESOURCE}`, payload))?.data;
};

export default {
  getAllTransactions,
  createTransaction,
};
