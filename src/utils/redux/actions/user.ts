import { createAsyncThunk } from "@reduxjs/toolkit";
import * as type from "../../types/user";
import * as api from "../../../lib/api/user";

type getProfileProps = {
  cbPending: () => void;
  cbFulfilled: (data: any) => void;
  cbFinally: () => void;
  token: type.token;
};

export const getProfileThunk = createAsyncThunk(
  "getProfile",
  async ({ cbPending, cbFulfilled, cbFinally, token }: getProfileProps) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.getProfile(token);
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

type updateProfileProps = {
  cbPending: () => void;
  cbFulfilled: (data: any) => void;
  cbFinally: () => void;
  token: type.token;
  body: type.updateProfileBody;
};

export const updateProfileThunk = createAsyncThunk(
  "updateProfile",
  async ({
    cbPending,
    cbFulfilled,
    cbFinally,
    token,
    body,
  }: updateProfileProps) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.updateProfile(token, body);
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

type deleteAccountProps = {
  cbPending: () => void;
  cbFulfilled: (data: any) => void;
  cbFinally: () => void;
  token: type.token;
};

export const deleteAccountThunk = createAsyncThunk(
  "deleteAccount",
  async ({ cbPending, cbFulfilled, cbFinally, token }: deleteAccountProps) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.deleteAccount(token);
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

type statusAccountProps = {
  cbPending: () => void;
  cbFulfilled: (data: any) => void;
  cbFinally: () => void;
  token: type.token;
  body: type.statusAccountBody;
};

export const statusAccountThunk = createAsyncThunk(
  "statusAccount",
  async ({
    cbPending,
    cbFulfilled,
    cbFinally,
    token,
    body,
  }: statusAccountProps) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.statusAccount(token, body);
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
