import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

export const fetchCharts = createAsyncThunk("chart/fetchCharts", async (_, { rejectWithValue }) => {
  try {
    const res = await api.get("/api/chart");
    return res.data.charts;
  } catch (err) {
    return rejectWithValue(err.response?.data || { message: err.message });
  }
});

