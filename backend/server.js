import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./src/middleware/errorHandler.js";
import userRoutes from "./src/routes/userRoutes.js";
import chartRoutes from "./src/routes/chartRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', userRoutes);
app.use('/api/chart', chartRoutes)

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
