import mongoose from 'mongoose';

const transformerSchema = new mongoose.Schema({
    transformerId: String,
    area: String,
    substation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Substation',
    },
    ratedVoltage: String,
    monitorType: String,
    name: String,
    serialnumber: String,
    alarmState: String,
    serviceState: String,
    transformerManufacturer: String,
    rating: Number,
}, { timestamps: true });

export const Transformer = mongoose.model('Transformer', transformerSchema);