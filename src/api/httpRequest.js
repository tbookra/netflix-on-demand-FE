import axios from "axios";
import {getToken} from './tokenHandler'
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

export default instance;
