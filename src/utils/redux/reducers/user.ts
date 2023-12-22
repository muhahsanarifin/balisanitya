import { createSlice } from "@reduxjs/toolkit";

import {
  getProfileThunk,
  updateProfileThunk,
  deleteAccountThunk,
  statusAccountThunk,
} from "../actions/user";

type userState = {
  [key: string]: any;
};

const initialState: userState = {
  getProfile: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
  updateProfile: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
  deleteProfile: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
  statusAccount: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Profile
    builder.addCase(getProfileThunk.pending, (prevState) => {
      return {
        ...prevState,
        getProfile: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(getProfileThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        getProfile: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(getProfileThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        getProfile: {
          isLoading: false,
          isFulfilled: false,
          isRejected: true,
          data: { msg: action.error.message },
          err: action.error.message,
        },
      };
    });
    // Update Profile
    builder.addCase(updateProfileThunk.pending, (prevState) => {
      return {
        ...prevState,
        updateProfile: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(updateProfileThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        updateProfile: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(updateProfileThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        updateProfile: {
          isLoading: false,
          isFulfilled: false,
          isRejected: true,
          data: { msg: action.error.message },
          err: action.error.message,
        },
      };
    });
    // Delete Account
    builder.addCase(deleteAccountThunk.pending, (prevState) => {
      return {
        ...prevState,
        deleteAccount: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(deleteAccountThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        deleteAccount: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(deleteAccountThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        deleteAccount: {
          isLoading: false,
          isFulfilled: false,
          isRejected: true,
          data: { msg: action.error.message },
          err: action.error.message,
        },
      };
    });
    // Status Account
    builder.addCase(statusAccountThunk.pending, (prevState) => {
      return {
        ...prevState,
        statusAccount: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(statusAccountThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        statusAccount: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(statusAccountThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        statusAccount: {
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

export const userAction = {
  ...userSlice.actions,
  getProfileThunk,
  updateProfileThunk,
  deleteAccountThunk,
  statusAccountThunk,
};

export default userSlice.reducer;
