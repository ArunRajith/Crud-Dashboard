import mongoose from "mongoose";

const chartSchema = new mongoose.Schema({
  label: { type: String, required: true },
  value: { type: Number, required: true },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
}, { timestamps: true });

export const Chart = mongoose.model("Chart", chartSchema);
