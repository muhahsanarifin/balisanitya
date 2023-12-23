import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../lib/api/auth";
import * as type from "../../types/auth";

type registerActionProp = {
  cbPending: () => void;
  cbFulfilled: (data: any) => void;
  cbFinally: () => void;
  body: type.registerBody;
};

export const registerThunk = createAsyncThunk(
  "register",
  async ({ cbPending, cbFulfilled, cbFinally, body }: registerActionProp) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.register(body);
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

type loginActionProp = {
  cbPending?: () => void;
  cbFulfilled?: (data: any) => void;
  cbFinally?: () => void;
  body: type.loginBody;
};

export const loginThunk = createAsyncThunk(
  "login",
  async ({ cbPending, cbFulfilled, cbFinally, body }: loginActionProp) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.login(body);
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

type logoutActionProp = {
  cbPending?: () => void;
  cbFulfilled?: (data: any) => void;
  cbFinally?: () => void;
  token: string;
};

export const logoutThunk = createAsyncThunk(
  "logout",
  async ({ cbPending, cbFulfilled, cbFinally, token }: logoutActionProp) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.logout(token);
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
