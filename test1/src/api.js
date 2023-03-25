/**
 * @description Interceptor File
 */
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    access_key: `bb85adaac47d508337508075779a3c70`
  }
});

/**
 * @description for request
 */

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

/**
 * @description for response
 */
// Add a response interceptor

api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;