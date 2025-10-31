import { Chart } from "../models/chart.js";

export const createChartData = async (req, res, next) => {
    try {
        const { label, value } = req.body;

        const chart = await Chart.create({ label, value, user: req.user._id });

        res.status(201).json({
            success: true,
            message: "Chart created successfully",
            chart,
        });
    } catch (err) {
        next(err);
    }
};

export const getAllChartData = async (req, res, next) => {
    try {
        const charts = await Chart.find({ user: req.user._id }).sort({ createdAt: -1 });
        res.json({
            success: true,
            message: "Fetched successfully",
            charts,
        });
    } catch (err) {
        next(err);
    }
};

