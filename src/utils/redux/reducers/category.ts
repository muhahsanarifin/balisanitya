import { createSlice } from "@reduxjs/toolkit";

import {
  createCategoryThunk,
  getCategoryThunk,
  updateCategoryThunk,
  deleteCategoryThunk,
} from "../actions/category";

type categoryState = {
  [key: string]: any;
};

const initialState: categoryState = {
  createCategory: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
  getCategory: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
  updateCategory: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
  deleteCategory: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Create Category
    builder.addCase(createCategoryThunk.pending, (prevState) => {
      return {
        ...prevState,
        createCategory: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(createCategoryThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        createCategory: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(createCategoryThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        createCategory: {
          isLoading: false,
          isFulfilled: false,
          isRejected: true,
          data: { msg: action.error.message },
          err: action.error.message,
        },
      };
    });
    // Get Category
    builder.addCase(getCategoryThunk.pending, (prevState) => {
      return {
        ...prevState,
        getCategory: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(getCategoryThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        getCategory: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(getCategoryThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        getCategory: {
          isLoading: false,
          isFulfilled: false,
          isRejected: true,
          data: { msg: action.error.message },
          err: action.error.message,
        },
      };
    });
    // Update Category
    builder.addCase(updateCategoryThunk.pending, (prevState) => {
      return {
        ...prevState,
        updateCategory: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(updateCategoryThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        updateCategory: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(updateCategoryThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        updateCategory: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: { msg: action.error.message },
          err: action.error.message,
        },
      };
    });
    // Delete Category
    builder.addCase(deleteCategoryThunk.pending, (prevState) => {
      return {
        ...prevState,
        deleteCategory: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(deleteCategoryThunk.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        deleteCategory: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(deleteCategoryThunk.rejected, (prevState, action) => {
      return {
        ...prevState,
        deleteCategory: {
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          data: { msg: action.error.message },
          err: action.error.message,
        },
      };
    });
  },
});

export const categoryAction = {
  ...categorySlice.actions,
  createCategoryThunk,
  getCategoryThunk,
  updateCategoryThunk,
  deleteCategoryThunk,
};

export default categorySlice.reducer;
