import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { camelCaseToSnakeCase, snakeCaseToCamelCase } from './utils';

export const api = axios.create({
  baseURL: 'https://api.partnerstack.com/api/v2',
  auth: {
    username: process.env.PARTNERSTACK_PUBLIC_KEY || '',
    password: process.env.PARTNERSTACK_SECRET_KEY || '',
  },
});

const onError = (error: Error) => Promise.reject(error);

const onRequest = (req: AxiosRequestConfig) => {
  return { ...req, data: camelCaseToSnakeCase(req.data) } as AxiosRequestConfig;
};

const onResponse = (res: AxiosResponse) => {
  return { ...res, data: snakeCaseToCamelCase(res.data?.data || res.data) } as AxiosResponse;
};

api.interceptors.request.use(onRequest, onError);
api.interceptors.response.use(onResponse, onError);
