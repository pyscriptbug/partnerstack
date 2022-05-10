import { isArray } from 'lodash';

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
