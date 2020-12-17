import axios from "axios";
import { getToken } from "./tokenHandler";
const instance = axios.create({
  baseURL: "http://localhost:5000",
});

instance.interceptors.request.use(
  async (config) => {
    const token = getToken();
    if (token) config.headers.AuthToken = token;
    return config;
  },
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
