import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Initialize } from './global';
import { camelCaseToSnakeCase, snakeCaseToCamelCase } from './utils/utils';

export let api: AxiosInstance;

export const initializePartnerstack = ({ baseUrl, apiKey, apiSecret }: Initialize) => {
  api = axios.create({
    baseURL: baseUrl || 'https://api.partnerstack.com/api/v2',
    auth: {
      username: apiKey,
      password: apiSecret,
    },
  });

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
