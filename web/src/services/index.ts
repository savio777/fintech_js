import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { signOut } from "../store/modules/Session";
import store from "../store";

const api = axios.create({ baseURL: "http://localhost:4003" });

api.interceptors.request.use(
  // @ts-ignore
  function (config: AxiosRequestConfig) {
    const session = store.getState()?.session;

    const token = session?.token;

    if (token) {
      // @ts-ignore
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  async function (response: AxiosResponse) {
    return response;
  },

  async function (error) {
    console.log(
      `[ERRO: ${error.response.status}] {[${error.config.method}]`,
      error.config.url
    );

    if (error.response.status === 400) {
      toast(
        error.response.data.message ||
          "Falha na requisição, verifique os dados",
        {
          type: "warning",
        }
      );
    } else if (error.response.status === 401) {
      store.dispatch(signOut());

      toast(error.response.data.message || "Sua sessão expirou", {
        type: "error",
      });
    } else {
      toast(error.response.data.message || "Falha na requisição", {
        type: "error",
      });
    }
  }
);

export default api;
