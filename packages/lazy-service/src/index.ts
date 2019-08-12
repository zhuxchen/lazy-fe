import {
  RequestConfig,
  Result,
  ResponseObject,
  RequestProxyWithData,
  RequestProxyUpload,
  Request,
  RequestProxy,
  FunctionalServiceOptions,
  ServiceCreator,
} from './interface';
import util from './util';

function service({ }, serviceCreator?) {

  const request: Request = () => {
    return new Promise((resolve, reject) => {

    });
  }
  const get: RequestProxy = (url, config = {}) => {
    return request(util.merge(config, { method: 'get', url }));
  }
  const del: RequestProxy = (url, config = {}) => {
    return request(util.merge(config, { method: 'delete', url }));
  }
  const head: RequestProxy = (url, config = {}) => {
    return request(util.merge(config, { method: 'delete', url }));
  }
  const post: RequestProxyWithData = (url, data, config = {}) => {
    return request(util.merge(config, { method: 'post', url, data }));
  }
  const put: RequestProxyWithData = (url, data, config = {}) => {
    return request(util.merge(config, { method: 'post', url, data }));
  }
  const patch: RequestProxyWithData = (url, data, config = {}) => {
    return request(util.merge(config, { method: 'post', url, data }));
  }
  const upload: RequestProxyUpload = (url, data, config = {}) => {
    return post(url, util.createFormData(data), config);
  }

  const createrHelpers = {
    get,
    delete: del,
    head,
    post,
    put,
    patch,
    upload,
  };

  if (serviceCreator !== undefined) {
    return serviceCreator(createrHelpers);
  }

  return (creator) => creator(createrHelpers);
}

export default service;
