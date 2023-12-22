import { createSlice } from "@reduxjs/toolkit";

type notificationsState = {
  [key: string]: any;
};

const initialState: notificationsState = {
  announcement: {
    isActived: true,
  },
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    announcement: (prevState, action) => {
      return {
        ...prevState,
        announcement: action.payload,
      };
    },
  },
});

export const notificationsAction = {
  ...notificationSlice.actions,
};

export default notificationSlice.reducer;
