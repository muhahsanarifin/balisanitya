import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../lib/api/category";
import * as type from "../../types/category";

type createCategoryProps = {
  cbPending: () => void;
  cbFulfilled: (data: any) => void;
  cbFinally: () => void;
  body: type.createCategoryBody;
  token: type.token;
};

export const createCategoryThunk = createAsyncThunk(
  "createCategory",
  async ({
    cbPending,
    cbFulfilled,
    cbFinally,
    body,
    token,
  }: createCategoryProps) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.createCategory(body, token);
      typeof cbFulfilled === "function" && cbFulfilled(response.data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw error.response.data;
      } else {
        throw error;
      }
    } finally {
      typeof cbFinally === "function" && cbFinally();
    }
  }
);

type getCategoryProps = {
  cbPending?: () => void;
  cbFulfilled?: (data: any) => void;
  cbFinally?: () => void;
  query?: string;
};

export const getCategoryThunk = createAsyncThunk(
  "getCategory",
  async ({ cbPending, cbFulfilled, cbFinally, query }: getCategoryProps) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.getCategory(query);
      typeof cbFulfilled === "function" && cbFulfilled(response.data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw JSON.stringify(error.response.data);
      } else {
        throw error;
      }
    } finally {
      typeof cbFinally === "function" && cbFinally();
    }
  }
);

type updateCategoryProps = {
  cbPending: () => void;
  cbFulfilled: (data: any) => void;
  cbFinally: () => void;
  params: string;
  body: type.createCategoryBody;
  token: type.token;
};

export const updateCategoryThunk = createAsyncThunk(
  "updateCategory",
  async ({
    cbPending,
    cbFulfilled,
    cbFinally,
    params,
    body,
    token,
  }: updateCategoryProps) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.updateCategory(params, body, token);
      typeof cbFulfilled === "function" && cbFulfilled(response.data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw JSON.stringify(error.response.data);
      } else {
        throw error;
      }
    } finally {
      typeof cbFinally === "function" && cbFinally();
    }
  }
);

type deleteCategoryProps = {
  cbPending: () => void;
  cbFulfilled: (data: any) => void;
  cbFinally: () => void;
  params: string;
  token: type.token;
};

export const deleteCategoryThunk = createAsyncThunk(
  "deleteCategory",
  async ({
    cbPending,
    cbFulfilled,
    cbFinally,
    params,
    token,
  }: deleteCategoryProps) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.deleteCategory(params, token);
      typeof cbFulfilled === "function" && cbFulfilled(response.data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw JSON.stringify(error.response.data);
      } else {
        throw error;
      }
    } finally {
      typeof cbFinally === "function" && cbFinally();
    }
  }
);
