import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.AuthToken = token;
    return config;
  },
  (err) => Promise.reject(err)
);

export default instance;
