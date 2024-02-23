import mongoose from 'mongoose';

const stationSchema = new mongoose.Schema({
    idStation: String ,
    Hydrogen: Number,
    Methane: Number,
    Acetylene: Number,
    Ethylene: Number,
    Ethane: Number,
    CO2: Number,
    CO: Number,
    Water: Number,
    TDCG: Number
}, { timestamps: true });

export const Index = mongoose.model('Index', stationSchema);