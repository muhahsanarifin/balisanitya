import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

import authSlice from "./auth";
import newsSlice from "./news";
import servicesSlice from "./services";
import categorySlice from "./category";
import userSlice from "./user";
import notificationSlice from "./notifications";

// Notification store
const notificationsPersistConfig = {
  key: "balisanitya-notif",
  storage: storageSession,
};

export default combineReducers({
  auth: authSlice,
  news: newsSlice,
  services: servicesSlice,
  category: categorySlice,
  user: userSlice,
  notifications: persistReducer(notificationsPersistConfig, notificationSlice),
});
