import { createSlice } from "@reduxjs/toolkit";

import {
  createNewThunk,
  getNewsThunk,
  getNewThunk,
  updateNewThunk,
  deleteNewThunk,
} from "../actions/news";

type newsState = {
  [key: string]: any;
};

const initialState: newsState = {
  createNews: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
  getNews: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
  getNew: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
  updateNew: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
  deleteNew: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
  // Query
  queryNews: {
    sort_by: "",
    sort_by_lable: "",
    title: "",
    page: "" || 1,
    limit: 6,
    debouncedTitle: "",
  },
  // Confirmation
  confirmNews: {
    isUpdated: false,
    isDeleted: false,
  },
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    queryNews: (prevState, action) => {
      return {
        ...prevState,
        queryNews: action.payload,
      };
    },
    confirmNews: (prevState, action) => {
      return {
        ...prevState,
        confirmNews: action.payload,
      };
    },
    clearGetNew: (prevState) => {
      return {
        ...prevState,
        getNew: {
          isLoading: false,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    },
    clearUpdateNew: (prevState) => {
      return {
        ...prevState,
        updateNew: {
          isLoading: false,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    },
    clearDeleteNew: (prevState) => {
      return {
        ...prevState,
        deleteNew: {
          isLoading: false,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    }
  },
  extraReducers: (builder) => {
    // Create new
    builder.addCase(createNewThunk.pending, (prevState) => {
      return {
        ...prevState,
        createNews: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(createNewThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        createNews: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(createNewThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        createNews: {
          isLoading: false,
          isFulfilled: false,
          isRejected: true,
          data: { msg: action.error.message },
          err: action.error.message,
        },
      };
    });
    // Get news
    builder.addCase(getNewsThunk.pending, (prevState) => {
      return {
        ...prevState,
        getNews: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    //
    builder.addCase(getNewsThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        getNews: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(getNewsThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        getNews: {
          isLoading: false,
          isFulfilled: false,
          isRejected: true,
          data: { msg: action.error.message },
          err: action.error.message,
        },
      };
    });
    // Get new
    builder.addCase(getNewThunk.pending, (prevState) => {
      return {
        ...prevState,
        getNew: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    //
    builder.addCase(getNewThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        getNew: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(getNewThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        getNew: {
          isLoading: false,
          isFulfilled: false,
          isRejected: true,
          data: { msg: action.error.message },
          err: action.error.message,
        },
      };
    });
    // Update new
    builder.addCase(updateNewThunk.pending, (prevState) => {
      return {
        ...prevState,
        updateNew: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(updateNewThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        updateNew: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(updateNewThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        updateNew: {
          isLoading: false,
          isFulfilled: false,
          isRejected: true,
          data: { msg: action.error.message },
          err: action.error.message,
        },
      };
    });
    // Delete new
    builder.addCase(deleteNewThunk.pending, (prevState) => {
      return {
        ...prevState,
        deleteNew: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(deleteNewThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        deleteNew: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(deleteNewThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        deleteNew: {
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

export const newsAction = {
  ...newsSlice.actions,
  createNewThunk,
  getNewsThunk,
  getNewThunk,
  updateNewThunk,
  deleteNewThunk,
};

export default newsSlice.reducer;
