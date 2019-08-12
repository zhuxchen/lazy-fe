import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface HttpRequester {
  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R>;
}

export interface Result<T = any> {
  success: boolean;
  status?: number;
  msg?: string;
  data?: T;
}

export type ServicePromise<T = any> = Promise<Result<T>>;

export interface RequestConfig extends AxiosRequestConfig {
  [additionalField: string]: any;
}

export interface ResponseObject<T = any> {
  data: Result<T>;
  status: number;
  statusText: string;
  headers: any;
  config: RequestConfig;
  request?: any;
}

export type PendingHook = (config?: RequestConfig) => false | void;
export type ProcedureHook = <T>(result?: Result<T>, response?: ResponseObject<T>) => false | void;
export type RequestConfigFactory = () => RequestConfig;

export type Request = <T = any>(config: RequestConfig) => ServicePromise<T>;
export type RequestProxy = <T = any>(url: string, config?: RequestConfig) => ServicePromise<T>;
export type RequestProxyWithData = <T = any>(url: string, data?: any, config?: RequestConfig) => ServicePromise<T>;
export type RequestProxyUpload = <T = any>(url: string, data: Record<string, string | Blob>, config?: RequestConfig) => ServicePromise<T>;

export interface FunctionalServiceOptions {
  httpRequester: HttpRequester;
  defaultFailureResult: Result;
  type: string;
  restful: boolean;
  requestConfig: RequestConfigFactory;
  onPending: PendingHook;
  onComplete: ProcedureHook;
  onSuccess: ProcedureHook;
  onFailure: ProcedureHook;
}

export type ServiceCreator<T extends object> = (creatorHelpers: {
  request?: Request;
  get: RequestProxy;
  post: RequestProxyWithData;
  put: RequestProxyWithData;
  head: RequestProxy;
  delete: RequestProxy;
  patch: RequestProxyWithData;
  upload: RequestProxyUpload;
}) => T;
