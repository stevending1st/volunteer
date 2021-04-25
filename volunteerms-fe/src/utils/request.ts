import axios from "axios";
import { AxiosInstance } from "axios";

const request: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
});

request.interceptors.request.use(
  config => {
    // console.log("请求拦截");
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.common.Authorization = token;
    }
    return config;
  },
  function(err) {
    // console.log("请求拦截错误");
    return err;
  }
);

request.interceptors.response.use(
  response => {
    // console.log("响应拦截");
    if (response.data.errcode === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return response;
  },
  function(err) {
    // console.log("响应拦截错误");
    return err;
  }
);

export default request;
