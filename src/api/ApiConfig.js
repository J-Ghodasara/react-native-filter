import {BASE_URL} from './constants';
import {bearerToken} from '../api/TokenRefreshService';

export const request = async function (options, endPoint, isFormData = false) {
  const onSuccess = async function (response, method) {
    var res = await response.json();
    if (response.status === 200 || response.status === 201) {
      console.log(
        `Request ${method} :- ${BASE_URL}${endPoint} ------->  Response :-`,
        res,
      );
      return res;
    } else {
      console.log(
        `Request ${method} :- ${BASE_URL}${endPoint} ------->  Response :-`,
        res,
      );
      return Promise.reject(res);
    }
  };

  const onError = async function (error) {
    console.log(
      `ERROR  Request :- ${BASE_URL}${endPoint} ------->  Response :-`,
      error,
    );
    console.log('Error', error.toString());
    return Promise.reject(error);
  };
  if (options.method === 'POST' && options.authorization) {
    console.log('REQUESTBODY----->', JSON.stringify(options.data));
    return fetch(`${BASE_URL}${endPoint}`, {
      withCredentials: true,
      credentials: 'include',
      method: 'POST',
      headers: {
        Authorization: bearerToken(),
        // Accept: "application/json",
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
      },
      body: isFormData ? options.data : JSON.stringify(options.data),
    })
      .then(async res => {
        return await onSuccess(res, 'POST');
      })
      .catch(async e => {
        return await onError(e);
      });
  } else if (options.method === 'POST' && !options.authorization) {
    console.log('REQUESTBODY----->', options.data);
    return fetch(`${BASE_URL}${endPoint}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
      },
      body: isFormData ? options.data : JSON.stringify(options.data),
    })
      .then(async res => {
        return await onSuccess(res, 'POST');
      })
      .catch(async e => {
        return await onError(e);
      });
  } else if (options.method === 'GET' && options.authorization) {
    return fetch(`${BASE_URL}${endPoint}`, {
      withCredentials: true,
      credentials: 'include',
      method: 'GET',
      headers: {
        Authorization: bearerToken(),
        Accept: 'application/json',
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
      },
    })
      .then(async res => {
        return await onSuccess(res, 'GET');
      })
      .catch(async e => {
        return await onError(e);
      });
  } else if (options.method === 'GET' && !options.authorization) {
    return fetch(`${BASE_URL}${endPoint}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
      },
    })
      .then(async res => {
        return await onSuccess(res, 'GET');
      })
      .catch(async e => {
        return await onError(e);
      });
  } else if (options.method === 'PUT' && options.authorization) {
    console.log('REQUESTBODY----->', options.data);
    return fetch(`${BASE_URL}${endPoint}`, {
      withCredentials: true,
      credentials: 'include',
      method: 'PUT',
      headers: {
        Authorization: bearerToken(),
        Accept: 'application/json',
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
      },
      body: isFormData ? options.data : JSON.stringify(options.data),
    })
      .then(async res => {
        if (res.status === 200 || res.status === 201 || res.status === 401) {
          return await onSuccess(res, 'PUT');
        } else {
          return await onError(res);
        }
      })
      .catch(async e => {
        return await onError(e);
      });
  } else if (options.method === 'PUT' && !options.authorization) {
    console.log('REQUESTBODY----->', options.data);
    return fetch(`${BASE_URL}${endPoint}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
      },
      body: isFormData ? options.data : JSON.stringify(options.data),
    })
      .then(async res => {
        return await onSuccess(res, 'PUT');
      })
      .catch(async e => {
        return await onError(e);
      });
  } else if (options.method === 'DELETE' && options.authorization) {
    return fetch(
      `${BASE_URL}${endPoint}`,
      options.data === undefined
        ? {
            withCredentials: true,
            credentials: 'include',
            method: 'DELETE',
            headers: {
              Authorization: bearerToken(),
              Accept: 'application/json',
              'Content-Type': isFormData
                ? 'multipart/form-data'
                : 'application/json',
            },
            // body: JSON.stringify(options.data)
          }
        : {
            withCredentials: true,
            credentials: 'include',
            method: 'DELETE',
            headers: {
              Authorization: bearerToken(),
              Accept: 'application/json',
              'Content-Type': isFormData
                ? 'multipart/form-data'
                : 'application/json',
            },
            body: isFormData ? options.data : JSON.stringify(options.data),
          },
    )
      .then(async res => {
        if (res.status === 200 || res.status === 201 || res.status === 401) {
          return await onSuccess(res, 'DELETE');
        } else {
          return await onError(res);
        }
      })
      .catch(async e => {
        return await onError(e);
      });
  } else if (options.method === 'PATCH' && options.authorization) {
    console.log('REQUESTBODY----->', options.data);
    return fetch(`${BASE_URL}${endPoint}`, {
      withCredentials: true,
      credentials: 'include',
      method: 'PATCH',
      headers: {
        Authorization: bearerToken(),
        Accept: 'application/json',
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
      },
      body: isFormData ? options.data : JSON.stringify(options.data),
    })
      .then(async res => {
        if (res.status === 200 || res.status === 201 || res.status === 401) {
          return await onSuccess(res, 'PATCH');
        } else {
          return await onError(res);
        }
      })
      .catch(async e => {
        return await onError(e);
      });
  } else if (options.method === 'PATCH' && !options.authorization) {
    console.log('REQUESTBODY----->', options.data);
    return fetch(`${BASE_URL}${endPoint}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
      },
      body: isFormData ? options.data : JSON.stringify(options.data),
    })
      .then(async res => {
        return await onSuccess(res, 'PATCH');
      })
      .catch(async e => {
        return await onError(e);
      });
  }
};
