import { createSlice } from "@reduxjs/toolkit";

import {
  createServiceThunk,
  getServiceThunk,
  getServicesThunk,
  updateServiceThunk,
  deleteServiceThunk,
} from "../actions/services";

type servicesState = {
  [key: string]: any;
};

const initialState: servicesState = {
  createService: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
  getServices: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
  getService: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
  updateService: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
  deleteService: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
  // Query
  queryService: {
    sort_by: "",
    order: "",
    page: "" || 1,
    title: "",
    debouncedTitle: ""
  },
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    queryService: (prevState, action) => {
      return {
        ...prevState,
        queryService: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    // Create Service
    builder.addCase(createServiceThunk.pending, (prevState) => {
      return {
        ...prevState,
        createService: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(createServiceThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        createService: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(createServiceThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        createService: {
          isLoading: false,
          isFulfilled: false,
          isRejected: true,
          data: { msg: action.error.message },
          err: action.error.message,
        },
      };
    });
    // Get Services
    builder.addCase(getServicesThunk.pending, (prevState) => {
      return {
        ...prevState,
        getServices: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(getServicesThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        getServices: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(getServicesThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        getServices: {
          isLoading: false,
          isFulfilled: false,
          isRejected: true,
          data: { msg: action.error.message },
          err: action.error.message,
        },
      };
    });
    // Get Service
    builder.addCase(getServiceThunk.pending, (prevState) => {
      return {
        ...prevState,
        getService: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(getServiceThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        getService: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(getServiceThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        getService: {
          isLoading: false,
          isFulfilled: false,
          isRejected: true,
          data: { msg: action.error.message },
          err: action.error.message,
        },
      };
    });
    // Update Service
    builder.addCase(updateServiceThunk.pending, (prevState) => {
      return {
        ...prevState,
        updateService: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(updateServiceThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        updateService: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(updateServiceThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        updateService: {
          isLoading: false,
          isFulfilled: false,
          isRejected: true,
          data: { msg: action.error.message },
          err: action.error.message,
        },
      };
    });
    // Delete Service
    builder.addCase(deleteServiceThunk.pending, (prevState) => {
      return {
        ...prevState,
        deleteService: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(deleteServiceThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        deleteService: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(deleteServiceThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        deleteService: {
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

export const servicesAction = {
  ...servicesSlice.actions,
  createServiceThunk,
  getServicesThunk,
  getServiceThunk,
  updateServiceThunk,
  deleteServiceThunk,
};

export default servicesSlice.reducer;
