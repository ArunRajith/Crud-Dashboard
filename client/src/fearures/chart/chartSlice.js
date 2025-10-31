import { createSlice } from "@reduxjs/toolkit";
import { fetchCharts } from "./chartThunk";

const chartSlice = createSlice({
  name: "chart",
  initialState: {
    charts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharts.fulfilled, (state, action) => {
        state.charts = action.payload;
        state.status = "succeeded";
      })
      .addMatcher((a) => a.type.endsWith("/pending"), (state) => {
        state.status = "loading";
      })
      .addMatcher((a) => a.type.endsWith("/rejected"), (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || action.error?.message;
      });
  },
});

export default chartSlice.reducer;
