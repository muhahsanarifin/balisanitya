import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../lib/api/news";
import * as type from "../../types/news";

type getNewsProps = {
  cbGetNewsPending?: () => void;
  cbGetNewsFulfilled?: (data: any) => void;
  cbGetNewsFinally?: () => void;
  query?: string;
};

export const getNewsThunk = createAsyncThunk(
  "getNews",
  async ({
    cbGetNewsPending,
    cbGetNewsFulfilled,
    cbGetNewsFinally,
    query,
  }: getNewsProps) => {
    try {
      typeof cbGetNewsPending === "function" && cbGetNewsPending();
      const response = await api.getNews(query);
      typeof cbGetNewsFulfilled === "function" &&
        cbGetNewsFulfilled(response.data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw JSON.stringify(error.response.data);
      } else {
        throw error;
      }
    } finally {
      typeof cbGetNewsFinally === "function" && cbGetNewsFinally();
    }
  }
);

type getNewProps = {
  cbGetNewPending?: () => void;
  cbGetNewFulfilled?: (data: any) => void;
  cbGetNewFinally?: () => void;
  params: string;
};

export const getNewThunk = createAsyncThunk(
  "getNew",
  async ({
    cbGetNewPending,
    cbGetNewFulfilled,
    cbGetNewFinally,
    params,
  }: getNewProps) => {
    try {
      typeof cbGetNewPending === "function" && cbGetNewPending();
      const response = await api.getNew(params);
      typeof cbGetNewFulfilled === "function" &&
        cbGetNewFulfilled(response.data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw JSON.stringify(error.response.data);
      } else {
        throw error;
      }
    } finally {
      typeof cbGetNewFinally === "function" && cbGetNewFinally();
    }
  }
);

type createNewProps = {
  cbCreateNewPending: () => void;
  cbCreateNewFulfilled: (data: any) => void;
  cbCreateNewFinally: () => void;
  body: type.createNewBody;
  token: type.token;
};

export const createNewThunk = createAsyncThunk(
  "createNew",
  async ({
    cbCreateNewPending,
    cbCreateNewFulfilled,
    cbCreateNewFinally,
    body,
    token,
  }: createNewProps) => {
    try {
      typeof cbCreateNewPending === "function" && cbCreateNewPending();
      const response = await api.createNew(body, token);
      typeof cbCreateNewFulfilled === "function" &&
        cbCreateNewFulfilled(response.data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw JSON.stringify(error.response.data);
      } else {
        throw error;
      }
    } finally {
      typeof cbCreateNewFinally === "function" && cbCreateNewFinally();
    }cbCreateNewFinally;
  }
);

type updateNewProps = {
  cbUpdateNewPending?: () => void;
  cbUpdateNewFulfilled?: (data: any) => void;
  cbUpdateNewFinally?: () => void;
  params: string;
  body: type.updateNewBody;
  token: type.token;
};

export const updateNewThunk = createAsyncThunk(
  "updateNew",
  async ({
    cbUpdateNewPending,
    cbUpdateNewFulfilled,
    cbUpdateNewFinally,
    params,
    body,
    token,
  }: updateNewProps) => {
    try {
      typeof cbUpdateNewPending === "function" && cbUpdateNewPending();
      const response = await api.updateNew(params, body, token);
      typeof cbUpdateNewFulfilled === "function" &&
        cbUpdateNewFulfilled(response.data);
      return response.data;
    } catch (error: any) {
      console.log("Result: ", error.response);
      if (error.response) {
        throw JSON.stringify(error.response.data);
      } else {
        throw error;
      }
    } finally {
      typeof cbUpdateNewFinally === "function" && cbUpdateNewFinally();
    }
  }
);

type deleteNewProps = {
  cbDeleteNewPending?: () => void;
  cbDeleteNewFulfilled?: (data: any) => void;
  cbDeleteNewFinally?: () => void;
  params: string;
  token: type.token;
};

export const deleteNewThunk = createAsyncThunk(
  "deleteNew",
  async ({
    cbDeleteNewPending,
    cbDeleteNewFulfilled,
    cbDeleteNewFinally,
    params,
    token,
  }: deleteNewProps) => {
    try {
      typeof cbDeleteNewPending === "function" && cbDeleteNewPending();
      const response = await api.deleteNew(params, token);
      typeof cbDeleteNewFulfilled === "function" &&
        cbDeleteNewFulfilled(response.data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.data);
        throw JSON.stringify(error.response.data);
      } else {
        throw error;
      }
    } finally {
      typeof cbDeleteNewFinally === "function" && cbDeleteNewFinally();
    }
  }
);
