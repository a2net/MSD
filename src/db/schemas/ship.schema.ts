import * as mongoose from 'mongoose';

export const ShipSchema = new mongoose.Schema({
    id: Number,
    name: {
        type: String,
        required: true
    },
    speed: {
        type: String,
        required: true
    },
});