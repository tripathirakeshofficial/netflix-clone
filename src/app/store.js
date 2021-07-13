import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import subscriptionReducer from "../features/subscriptionSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    subscription: subscriptionReducer,
  },
});
