import mongoose from "mongoose";

const Schema = mongoose.Schema;

const campaignSchema = new Schema(
  {
    title: {
      type: String,
      default: "Mukund cake shop",
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
    platform: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Campaign", campaignSchema, "campaigns");
