import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const campaignProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('CampaignProduct', campaignProductSchema, 'campaignProducts');

