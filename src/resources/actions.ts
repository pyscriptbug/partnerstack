import { buildSearchQueryParams } from '../utils/utils';
import { api } from '../initialize';
import { ActionResponse, CreateActionPayload, ListActionResponse } from '../types';

const RESOURCE = 'actions';

/**
 * Returns a list of your actions. The actions are returned sorted by creation date by default, with the most recent
 * actions appearing first.
 */
const getAllActions = async ({ queryParams = {} }: GetAllArgs = {}): Promise<
  ListResponse<ListActionResponse>
> => {
  const queryString = buildSearchQueryParams(queryParams);

  return (await api.get(`${RESOURCE}${queryString}`))?.data;
};

/** Records a new action taken by a given partner or customer, and the number of times that action was performed. */
const createAction = async ({ payload }: CreateArgs<{}, CreateActionPayload>): Promise<ActionResponse> => {
  return (await api.post(`${RESOURCE}`, payload))?.data;
};

/** Archives an action. Any associated rewards or drip rewards will be archived as well. */
const deleteAction = async ({ pathParams }: DeleteArgs<{ key: string }>): Promise<void> => {
  return api.delete(`${RESOURCE}/${pathParams.key}`);
};

export default {
  getAllActions,
  createAction,
  deleteAction,
};
