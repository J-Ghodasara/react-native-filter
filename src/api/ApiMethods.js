import {
  get,
  getWithAuthorization,
  post,
  put,
  del,
  delWithBody,
  postWithoutAuthorization,
  patch,
} from '../api/ServiceApi';

export const getUsers = apiName => {
  return get(apiName);
};
