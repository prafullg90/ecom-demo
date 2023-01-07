import axios from 'axios';

const headerObj = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-cache',
  'Access-control-allow-origin': '*',
};
export const request = (
  onResponse,
  featureURL,
  data,
  params = {},
  type,
  secureRequest = headerObj,
  responseType = ''
) => {
  let callApi;
  if (type === 'GET') {
    const requestData = {
      url: featureURL,
      method: type,
      params,
      headers: secureRequest,
    };

    callApi = axios.request(requestData);
  } else if (type === 'PATCH') {
    callApi = axios.patch(featureURL, data, {
      headers: secureRequest,
    });
  } else if (type === 'POST') {
    callApi = axios({
      url: featureURL,
      method: type,
      data,
      params,
      headers: secureRequest,
      responseType,
    });
  } else if (type === 'ALL') {
    callApi = axios.all(
      featureURL.map((url) => axios.get(url), {
        headers: secureRequest,
      })
    );
  } else {
    callApi = axios({
      url: featureURL,
      method: type,
      data,
      params,
      headers: secureRequest,
    });
  }

  if (!onResponse) return callApi;

  callApi
    .then((response) => {
      if (
        Array.isArray(response) &&
        response.every((arr) => arr.status === 200)
      ) {
        onResponse.success(response);
      } else if (response.status !== 200 && response.status !== 201) {
        onResponse.error(response);
      } else {
        onResponse.success(response.data);
      }
    })
    .catch((error) => {
      //Handle Error
    });
};
