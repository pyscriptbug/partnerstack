import { GetAllArgs, ListResponse } from '../global';
import { api } from '../initialize';
import { FormTemplateResponse } from '../types';
import { buildSearchQueryParams } from '../utils/utils';

const RESOURCE = 'form-templates';

/**
 * Returns a list of your form templates. The form templates are returned sorted by creation date, with the most recent
 * form templates appearing first.
 */
const getAllFormTemplates = async ({ queryParams = {} }: GetAllArgs = {}): Promise<
  ListResponse<FormTemplateResponse>
> => {
  const queryString = buildSearchQueryParams(queryParams);

  return (await api.get(`${RESOURCE}${queryString}`))?.data;
};

export default {
  getAllFormTemplates,
};
