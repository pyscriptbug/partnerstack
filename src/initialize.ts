import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Initialize } from './global';
import { camelCaseToSnakeCase, snakeCaseToCamelCase } from './utils/utils';

export let instance: AxiosInstance;

const defaultOnError = (error: Error) => Promise.reject(error);

const onRequest = (req: AxiosRequestConfig) => {
  return { ...req, data: camelCaseToSnakeCase(req.data) } as AxiosRequestConfig;
};

const onResponse = (res: AxiosResponse) => {
  return {
    ...res,
    data: snakeCaseToCamelCase(res.data?.data || res.data),
  } as AxiosResponse;
};

export const initializePartnerstack = ({ baseUrl, apiKey, apiSecret, onError }: Initialize) => {
  instance = axios.create({
    baseURL: baseUrl || 'https://api.partnerstack.com/api/v2',
    auth: {
      username: apiKey,
      password: apiSecret,
    },
  });

  instance.interceptors.request.use(onRequest, onError || defaultOnError);
  instance.interceptors.response.use(onResponse, onError || defaultOnError);
};
