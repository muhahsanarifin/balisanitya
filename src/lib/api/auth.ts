import axios from "axios";
import * as type from "../../utils/types/auth";

const baseURL = import.meta.env.VITE_baseURL;


export const register = (body: type.registerBody) =>
  axios({
    url: "/auth/register",
    method: "post",
    baseURL: baseURL,
    data: body,
  });

export const login = (body: type.loginBody) =>
  axios({
    url: "/auth/login",
    method: "post",
    baseURL: baseURL,
    data: body,
  });

export const logout = (token: type.token) =>
  axios({
    url: "auth/logout",
    method: "delete",
    baseURL: baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
