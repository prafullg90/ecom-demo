import { request } from './request';

export const API = {
  getAllProducts: (data, onResponse) => {
    const url = `https://fakestoreapi.com/products`;
    return request(onResponse, url, data, {}, 'GET');
  },
};
