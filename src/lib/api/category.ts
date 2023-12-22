import axios from "axios";
import * as type from "../../utils/types/category"

const baseURL = (baseURL: string): string => baseURL;

const url = (url: string): string => url;

const config = (token: type.token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getCategory = (query: string = "") =>
  axios.get(
    baseURL(import.meta.env.VITE_baseURL) + url("/category/news") + query
  );

export const createCategory = (body: type.createCategoryBody, token: type.token) =>
  axios.post(
    baseURL(import.meta.env.VITE_baseURL) + url("/category/news/create"),
    body,
    config(token)
  );

export const updateCategory = (
  params: string,
  body: type.updateCategoryBody,
  token: type.token
) =>
  axios.patch(
    baseURL(import.meta.env.VITE_baseURL) +
      url("/category/news/update/") +
      params,
    body,
    config(token)
  );

export const deleteCategory = (params: string, token: type.token) =>
  axios.delete(
    baseURL(import.meta.env.VITE_baseURL) +
      url("/category/news/delete/") +
      params,
    config(token)
  );
