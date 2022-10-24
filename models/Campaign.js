import mongoose from "mongoose";

const Schema = mongoose.Schema;

const campaignSchema = new Schema(
  {
    title: {
      type: String,
      default: "Mukund cake shop",
    },
    status: {
      type: String,
      default: 'Live now'
    },
    clicks: {
      type: Number,
      default: 0
    },
    campaignType: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Campaign", campaignSchema, "campaigns");
