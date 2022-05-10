import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { camelCaseToSnakeCase, snakeCaseToCamelCase } from '../utils/utils';

export let api: AxiosInstance;
export let initialized = false;

export const initializePartnerstack = ({ baseUrl, apiKey, apiSecret }: Partnerstack.Initialize) => {
  api = axios.create({
    baseURL: baseUrl || 'https://api.partnerstack.com/api/v2',
    auth: {
      username: apiKey,
      password: apiSecret,
    },
  });

  initialized = true;

  const onError = (error: Error) => Promise.reject(error);

  const onRequest = (req: AxiosRequestConfig) => {
    return { ...req, data: camelCaseToSnakeCase(req.data) } as AxiosRequestConfig;
  };

  const onResponse = (res: AxiosResponse) => {
    return {
      ...res,
      data: snakeCaseToCamelCase(res.data?.data || res.data),
    } as AxiosResponse;
  };

  api.interceptors.request.use(onRequest, onError);
  api.interceptors.response.use(onResponse, onError);
};
