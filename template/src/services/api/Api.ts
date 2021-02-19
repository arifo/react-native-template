import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { API_URL } from 'configs';

export class Api {
  static instance: Api;
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_URL,
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    });
  }

  static getInstance() {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  static getAxios() {
    return Api.getInstance().axiosInstance;
  }

  static setAuthToken(token: string | null) {
    Api.getAxios().defaults.headers.Authorization = `Token ${token}`;
  }

  static clearAuthToken() {
    delete Api.getAxios().defaults.headers.Authorization;
  }

  static get<T>(url: string, params: object = {}, config: AxiosRequestConfig = {}) {
    return Api.getAxios().get<T>(url, { params, ...config });
  }

  static post<T>(url: string, data?: object, config?: AxiosRequestConfig) {
    return Api.getAxios().post<T>(url, data, config);
  }

  static put<T>(url: string, data?: object, config?: AxiosRequestConfig) {
    return Api.getAxios().put<T>(url, data, config);
  }

  static patch<T>(url: string, data?: object, config?: AxiosRequestConfig) {
    return Api.getAxios().patch<T>(url, data, config);
  }

  static delete<T>(url: string, config?: AxiosRequestConfig) {
    return Api.getAxios().delete<T>(url, config);
  }
}
