import axios from 'axios';
import { BASEURL } from './constant';

// Create an Axios instance
const api = axios.create({
  baseURL: BASEURL,
  timeout: 50000, // set your preferred timeout
});

// Helper function to make API requests
const request = (method, endpoint, data = null, headers = {}) => {
  return api({
    method,
    url: endpoint,
    data,
    headers,
  })
    .then((response) => {
      console.log('-----------API RESPONSE>>>>>>-----------', JSON.stringify(response.data, null, 2));
      return response.data;
    })
    .catch((error) => {
      console.log('API THROW>>>>>>>', JSON.stringify(error, null, 2));
      return error.response; // Return error response if any
    });
};

// METHODS
export const get = (endpoint) => request('GET', endpoint);
export const post = (endpoint, data = null, additionalHeaders = {}) =>
  request('POST', endpoint, data, additionalHeaders);
export const patch = (endpoint, data = null) => request('PATCH', endpoint, data);
export const del = (endpoint) => request('DELETE', endpoint);
