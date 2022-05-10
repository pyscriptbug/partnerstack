import { buildSearchQueryParams } from '../../../../util/query-param-util';
import { api } from '../api';
import { FormTemplateResponse } from '../types';

const RESOURCE = 'form-templates';

/**Returns a list of your form templates. The form templates are returned sorted by creation date, with the most recent form templates appearing first. */
const getAllFormTemplates = async ({ queryParams = {} }: Partnerstack.GetAllArgs = {}): Promise<
  Partnerstack.ListResponse<FormTemplateResponse>
> => {
  const queryString = buildSearchQueryParams(queryParams);

  return (await api.get(`${RESOURCE}${queryString}`))?.data;
};

export default {
  getAllFormTemplates,
};
