import express from "express";
import { protect } from "../middleware/userMiddleware.js";
import { validateChart } from "../validators/chartValidators.js";
import { createChartData,  getAllChartData } from "../controllers/chartController.js";

const chartRoutes = express.Router();

chartRoutes.post('/create', protect, validateChart, createChartData)
chartRoutes.get('/', protect, getAllChartData)


export default chartRoutes