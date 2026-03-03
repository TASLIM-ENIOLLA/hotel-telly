import axios from "axios";
import cookies from "js-cookie";

import { useAuthStore } from "./store";

const TOKEN_NAME = process.env.TOKEN_NAME as string;
const CMS_BASEURL = process.env.CMS_BASEURL as string;

export const cms = axios.create({
  baseURL: CMS_BASEURL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const getAbsoluteURL = function (url: string) {
  const baseURL = cms.defaults.baseURL;
  const cmsBaseURL = new URL(baseURL!);

  return new URL(url, cmsBaseURL.origin).toString();
}

cms.interceptors.request.use(async (config) => {
  const authStore = useAuthStore.getState();

  const url = config.url ?? "";
  const token = cookies.get(TOKEN_NAME);

  if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) {
    delete config.baseURL;
  }

  if (authStore.token) {
    config.headers.Authorization = authStore.token;
  }
  else if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

cms.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response) {
      return Promise.reject({
        ...error.response.data,

        axiosError: error,
        request: error.request,
        status: error.response.status,
        config: error.response.config,
        headers: error.response.headers,
      });
    }

    return Promise.reject(error);
  }
);