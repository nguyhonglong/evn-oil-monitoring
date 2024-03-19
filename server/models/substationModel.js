import mongoose from 'mongoose';

const substationSchema = new mongoose.Schema({
    substationId: String,
    name: String,
}, { timestamps: true });

export const Substation = mongoose.model('Substation', substationSchema);