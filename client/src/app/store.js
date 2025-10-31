import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../fearures/auth/authSlice";
import chartReducer from "../fearures/chart/chartSlice";

const store = configureStore({
    reducer:{
        auth: authReducer,
        chart: chartReducer,
    }
})

export default store