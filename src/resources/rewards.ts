import { buildSearchQueryParams } from '../../../../util/query-param-util';
import { api } from '../api';
import { CreateRewardPayload, ListRewardResponse, RewardResponse } from '../types';

const RESOURCE = 'rewards';

/**Returns a list of your rewards. The rewards are returned sorted by creation date by default, with the most recent rewards appearing first. */
const getAllRewards = async ({ queryParams = {} }: Partnerstack.GetAllArgs = {}): Promise<
  Partnerstack.ListResponse<ListRewardResponse>
> => {
  const queryString = buildSearchQueryParams(queryParams);

  return (await api.get(`${RESOURCE}${queryString}`))?.data;
};

/**Creates a new reward for a given target. */
const createReward = async ({
  payload,
}: Partnerstack.CreateArgs<{}, CreateRewardPayload>): Promise<RewardResponse> => {
  return (await api.post(`${RESOURCE}`, payload))?.data;
};

export default {
  getAllRewards,
  createReward,
};
