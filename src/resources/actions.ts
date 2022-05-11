import { CreateArgs, DeleteArgs, GetAllArgs, ListResponse } from '../global';
import { instance } from '../initialize';
import { ActionResponse, CreateActionPayload, ListActionResponse } from '../types';
import { buildSearchQueryParams } from '../utils/utils';

const RESOURCE = 'actions';

/**
 * Returns a list of your actions. The actions are returned sorted by creation date by default, with the most recent
 * actions appearing first.
 */
const getAllActions = async ({ queryParams = {} }: GetAllArgs = {}): Promise<ListResponse<ListActionResponse>> => {
  const queryString = buildSearchQueryParams(queryParams);

  return (await instance.get(`${RESOURCE}${queryString}`))?.data;
};

/** Records a new action taken by a given partner or customer, and the number of times that action was performed. */
const createAction = async ({ payload }: CreateArgs<{}, CreateActionPayload>): Promise<ActionResponse> => {
  return (await instance.post(`${RESOURCE}`, payload))?.data;
};

/** Archives an action. Any associated rewards or drip rewards will be archived as well. */
const deleteAction = async ({ pathParams }: DeleteArgs<{ key: string }>): Promise<void> => {
  return instance.delete(`${RESOURCE}/${pathParams.key}`);
};

export default {
  getAllActions,
  createAction,
  deleteAction,
};
