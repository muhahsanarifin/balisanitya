import axios from "axios";
import * as type from "../../utils/types/news";

const baseURL = (baseURL: string): string => baseURL;

const url = (url: string): string => url;

const config = (token: type.token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getNews = (query: string = "") =>
  axios.get(baseURL(import.meta.env.VITE_baseURL) + url("/news") + query);

export const getNew = (params: string = "") =>
  axios.get(baseURL(import.meta.env.VITE_baseURL) + url("/news") + params);

export const createNew = (body: type.createNewBody, token: type.token) =>
  axios.post(
    baseURL(import.meta.env.VITE_baseURL) + url("/news/create"),
    body,
    config(token)
  );

export const updateNew = (
  params: string,
  body: type.updateNewBody,
  token: type.token
) =>
  axios.patch(
    baseURL(import.meta.env.VITE_baseURL) + url("/news/update/") + params,
    body,
    config(token)
  );

export const deleteNew = (params: string, token: type.token) =>
  axios.delete(
    baseURL(import.meta.env.VITE_baseURL) + url("/news/delete/") + params,
    config(token)
  );
