import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

export const register = createAsyncThunk("auth/register", async (payload, { rejectWithValue }) => {
  try {
    const res = await api.post("/api/auth/register", payload);
    return res.data.user;
  } catch (err) {
    return rejectWithValue(err.response?.data || { message: err.message });
  }
});

export const login = createAsyncThunk("auth/login", async (payload, { rejectWithValue }) => {
  try {
    const res = await api.post("/api/auth/login", payload);
    const profile = await api.get("/api/auth/profile");
    return profile.data.user;
  } catch (err) {
    return rejectWithValue(err.response?.data || { message: err.message });
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
  try {
    await api.post("/api/auth/logout");
    return true;
  } catch (err) {
    return rejectWithValue(err.response?.data || { message: err.message });
  }
});

export const fetchProfile = createAsyncThunk(
  "auth/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/api/auth/profile");
      return res.data.user;
    } catch (err) {
      console.error("PROFILE ERROR:", err.response?.data || err.message); 
      return rejectWithValue(err.response?.data?.message || "Failed to fetch profile");
    }
  }
);

