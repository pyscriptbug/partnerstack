import { GetAllArgs, ListResponse } from '../global';
import { instance } from '../initialize';
import { GroupResponse } from '../types';
import { buildSearchQueryParams } from '../utils/utils';

const RESOURCE = 'groups';

/** Returns a list of your groups. The groups are returned sorted by creation date, with the most recent groups appearing first. */
const getAllGroups = async ({ queryParams = {} }: GetAllArgs = {}): Promise<ListResponse<GroupResponse>> => {
  const queryString = buildSearchQueryParams(queryParams);

  return (await instance.get(`${RESOURCE}${queryString}`))?.data;
};

export default {
  getAllGroups,
};
