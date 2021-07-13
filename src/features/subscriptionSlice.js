import { createSlice } from "@reduxjs/toolkit";

export const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: {
    subscription: null,
  },

  reducers: {
    setSubscription: (state, action) => {
      state.subscription = action.payload;
    },
  },
});

export const { setSubscription } = subscriptionSlice.actions;

export const selectSubscription = (state) => state.subscription.subscription;

export default subscriptionSlice.reducer;
