import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [], loading: false, error: false };

const comicsSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {
    fetch(state) {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    fetchSuccess(state, action) {
      state.data = action.payload.data;
      state.loading = false;
    },
    fetchFailure(state, action) {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export const { fetch, fetchSuccess, fetchFailure } = comicsSlice.actions;

export default comicsSlice.reducer;
