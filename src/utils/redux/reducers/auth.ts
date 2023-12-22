import { createSlice } from "@reduxjs/toolkit";
import { registerThunk, loginThunk, logoutThunk } from "../actions/auth";

type authState = {
  [key: string]: any;
};

const initialState: authState = {
  register: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
  login: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
  logout: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearRegister: (prevState) => {
      return {
        ...prevState,
        register: {
          isLoading: false,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    },
    clearLogin: (prevState) => {
      return {
        ...prevState,
        login: {
          isLoading: false,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    },
  },
  extraReducers: (builder) => {
    // Register
    builder.addCase(registerThunk.pending, (prevState) => {
      return {
        ...prevState,
        register: {
          isLoading: false,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(registerThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        register: {
          isLoading: false,
          isFulfilled: false,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(registerThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        register: {
          isLoading: false,
          isFulfilled: false,
          isRejected: false,
          data: { msg: action.error.message },
          err: action.error.message,
        },
      };
    });
    // Login
    builder.addCase(loginThunk.pending, (prevState) => {
      return {
        ...prevState,
        login: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(loginThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        login: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(loginThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        login: {
          isLoading: false,
          isFulfilled: false,
          isRejected: true,
          data: { msg: action.error.message },
          err: action.error.message,
        },
      };
    });
    // Logout
    builder.addCase(logoutThunk.pending, (prevState) => {
      return {
        ...prevState,
        logout: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(logoutThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        logout: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(logoutThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        logout: {
          isLoading: false,
          isFulfilled: false,
          isRejected: true,
          data: { msg: action.error.message },
          err: action.error.message,
        },
      };
    });
  },
});

export const authAction = {
  ...authSlice.actions,
  registerThunk,
  loginThunk,
  logoutThunk,
};

export default authSlice.reducer;
