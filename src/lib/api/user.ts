import axios from "axios";
import * as type from "../../utils/types/user";

const baseURL = (baseURL: string): string => baseURL;

const url = (url: string): string => url;

const config = (token: type.token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getProfile = (token: type.token) =>
  axios.get(
    baseURL(import.meta.env.VITE_baseURL) + url("/users/profile"),
    config(token)
  );

export const updateProfile = (
  token: type.token,
  body: type.updateProfileBody
) =>
  axios.patch(
    baseURL(import.meta.env.VITE_baseURL) + url("/users/profile/update"),
    body,
    config(token)
  );

export const deleteAccount = (token: type.token) =>
  axios.delete(
    baseURL(import.meta.env.VITE_baseURL) + url("/users/account/delete"),
    config(token)
  );

export const statusAccount = (
  token: type.token,
  body: type.statusAccountBody
) =>
  axios.patch(
    baseURL(import.meta.env.VITE_baseURL) + url("/users/account/status/update"),
    body,
    config(token)
  );
