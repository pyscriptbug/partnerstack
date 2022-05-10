import { isArray, snakeCase } from 'lodash';
import { stringify } from 'query-string';

export const camelCaseToSnakeCase = (obj: any): any => {
  if (typeof obj !== 'object') return obj;

  return Object.entries(obj).reduce((acc, [key, value]) => {
    const newKey = key.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`);
    return {
      ...acc,
      [newKey]: isArray(value) ? value.map(camelCaseToSnakeCase) : camelCaseToSnakeCase(value),
    };
  }, {});
};

export const snakeCaseToCamelCase = (obj: any): any => {
  if (!obj || typeof obj !== 'object') return obj;

  return Object.entries(obj).reduce((acc, [key, value]) => {
    const newKey = key.replace(/^_/, '').replace(/_([a-z])/g, (match) => match[1].toUpperCase());
    return {
      ...acc,
      [newKey]: isArray(value) ? value.map(snakeCaseToCamelCase) : snakeCaseToCamelCase(value),
    };
  }, {});
};

export const buildSearchQueryParams = (params: { [key: string]: any }): string => {
  if (!params) return '';
  if (Object.keys(params).length === 0) return '';
  else return `?${snakeCase(stringify(params))}`;
};
