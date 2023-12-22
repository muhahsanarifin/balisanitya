import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../lib/api/services";
import * as type from "../../types/services";

type createServiceProps = {
  cbPending: () => void;
  cbFulfilled: (data: any) => void;
  cbFinally: () => void;
  body: type.createServiceBody;
  token: type.token;
};

export const createServiceThunk = createAsyncThunk(
  "createService",
  async ({
    cbPending,
    cbFulfilled,
    cbFinally,
    body,
    token,
  }: createServiceProps) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.createService(body, token);
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

type getServicesProps = {
  cbPending?: () => void;
  cbFulfilled?: (data: any) => void;
  cbFinally?: () => void;
  query?: string;
};

export const getServicesThunk = createAsyncThunk(
  "services/get",
  async ({ cbPending, cbFulfilled, cbFinally, query }: getServicesProps) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.getServices(query);
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

type getServiceProps = {
  cbPending: () => void;
  cbFulfilled: (data: any) => void;
  cbFinally: () => void;
  params: string;
};

export const getServiceThunk = createAsyncThunk(
  "service/get",
  async ({ cbPending, cbFulfilled, cbFinally, params }: getServiceProps) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.getService(params);
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

type updateServiceProps = {
  cbPending: () => void;
  cbFulfilled: (data: any) => void;
  cbFinally: () => void;
  params: string;
  body: type.updateServiceBody;
  token: type.token;
};

export const updateServiceThunk = createAsyncThunk(
  "service/update",
  async ({
    cbPending,
    cbFulfilled,
    cbFinally,
    params,
    body,
    token,
  }: updateServiceProps) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.updateService(params, body, token);
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

type deleteServiceProps = {
  cbPending: () => void;
  cbFulfilled: (data: any) => void;
  cbFinally: () => void;
  params: string;
  token: type.token;
};

export const deleteServiceThunk = createAsyncThunk(
  "service/delete",
  async ({
    cbPending,
    cbFulfilled,
    cbFinally,
    params,
    token,
  }: deleteServiceProps) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.deleteService(params, token);
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
