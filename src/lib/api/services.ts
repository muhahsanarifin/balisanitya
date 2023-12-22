import axios from "axios";
import * as type from "../../utils/types/services";

const baseURL = (baseURL: string): string => baseURL;

const url = (url: string): string => url;

const config = (token: type.token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getServices = (query: string = "") =>
  axios.get(baseURL(import.meta.env.VITE_baseURL) + url("/products") + query);

export const getService = (params: string = "") =>
  axios.get(baseURL(import.meta.env.VITE_baseURL) + url("/products") + params);

export const createService = (
  body: type.createServiceBody,
  token: type.token
) =>
  axios.post(
    baseURL(import.meta.env.VITE_baseURL) + url("/products/create"),
    body,
    config(token)
  );

export const updateService = (
  params: string,
  body: type.updateServiceBody,
  token: type.token
) =>
  axios.patch(
    baseURL(import.meta.env.VITE_baseURL) + url("/products/update/") + params,
    body,
    config(token)
  );

export const deleteService = (params: string, token: type.token) =>
  axios.delete(
    baseURL(import.meta.env.VITE_baseURL) + url("/products/delete/") + params,
    config(token)
  );
