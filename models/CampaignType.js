import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const campaignTypeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('CampaignType', campaignTypeSchema, 'campaignTypes');

