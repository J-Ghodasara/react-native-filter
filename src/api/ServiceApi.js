import {request} from '../api/ApiConfig';

export const post = async function (apiName, requestBody, isFormData = false) {
  return request(
    {
      method: 'POST',
      data: requestBody,
      authorization: true,
    },
    apiName,
    isFormData,
  );
};

export const postWithoutAuthorization = async function (
  apiName,
  requestBody,
  isFormData = false,
) {
  return request(
    {
      method: 'POST',
      data: requestBody,
      authorization: false,
    },
    apiName,
    isFormData,
  );
};

export const getWithAuthorization = async function (apiName) {
  return await request(
    {
      method: 'GET',
      authorization: true,
    },
    apiName,
  );
};

export const get = async function (apiName) {
  return request(
    {
      method: 'GET',
      authorization: false,
    },
    apiName,
  );
};

export const put = async function (apiName, requestBody, isFormData = false) {
  return request(
    {
      method: 'PUT',
      data: requestBody,
      authorization: true,
    },
    apiName,
    isFormData,
  );
};

export const del = async function (apiName) {
  return request(
    {
      method: 'DELETE',
      // data: requestBody,
      authorization: true,
    },
    apiName,
  );
};

export const delWithBody = async function (
  apiName,
  requestBody,
  isFormData = false,
) {
  return request(
    {
      method: 'DELETE',
      data: requestBody,
      authorization: true,
    },
    apiName,
    isFormData,
  );
};

export const patch = async function (apiName, requestBody, isFormData = false) {
  return request(
    {
      method: 'PATCH',
      data: requestBody,
      authorization: true,
    },
    apiName,
    isFormData,
  );
};
