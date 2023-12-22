import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../lib/api/news";
import * as type from "../../types/news";

type getNewsProps = {
  cbPending?: () => void;
  cbFulfilled?: (data: any) => void;
  cbFinally?: () => void;
  query?: string;
};

export const getNewsThunk = createAsyncThunk(
  "getNews",
  async ({ cbPending, cbFulfilled, cbFinally, query }: getNewsProps) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.getNews(query);
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

type getNewProps = {
  cbPending?: () => void;
  cbFulfilled?: (data: any) => void;
  cbFinally?: () => void;
  params: string;
};

export const getNewThunk = createAsyncThunk(
  "getNew",
  async ({ cbPending, cbFulfilled, cbFinally, params }: getNewProps) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.getNew(params);
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

type createNewProps = {
  cbPending: () => void;
  cbFulfilled: (data: any) => void;
  cbFinally: () => void;
  body: type.createNewBody;
  token: type.token;
};

export const createNewThunk = createAsyncThunk(
  "createNew",
  async ({
    cbPending,
    cbFulfilled,
    cbFinally,
    body,
    token,
  }: createNewProps) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.createNew(body, token);
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

type updateNewProps = {
  cbPending?: () => void;
  cbFulfilled?: (data: any) => void;
  cbFinally?: () => void;
  params: string;
  body: type.updateNewBody;
  token: type.token;
};

export const updateNewThunk = createAsyncThunk(
  "updateNew",
  async ({
    cbPending,
    cbFulfilled,
    cbFinally,
    params,
    body,
    token,
  }: updateNewProps) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.updateNew(params, body, token);
      typeof cbFulfilled === "function" && cbFulfilled(response.data);
      return response.data;
    } catch (error: any) {

      console.log("Result: ", error.response);
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

type deleteNewProps = {
  cbPending: () => void;
  cbFulfilled: (data: any) => void;
  cbFinally: () => void;
  params: string;
  token: type.token;
};

export const deleteNewThunk = createAsyncThunk(
  "deleteNew",
  async ({
    cbPending,
    cbFulfilled,
    cbFinally,
    params,
    token,
  }: deleteNewProps) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.deleteNew(params, token);
      typeof cbFulfilled === "function" && cbFulfilled(response.data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.data);
        throw JSON.stringify(error.response.data);
      } else {
        throw error;
      }
    } finally {
      typeof cbFinally === "function" && cbFinally();
    }
  }
);
