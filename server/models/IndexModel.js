import mongoose from "mongoose";

const indexSchema = mongoose.Schema({
    transformerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transformer',
    },
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

const Index = mongoose.model("index", indexSchema);
export default Index;