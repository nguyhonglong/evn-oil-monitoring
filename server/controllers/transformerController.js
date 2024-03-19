import {Transformer} from '../models/transformerModel.js'

export const getAllTransformers = async (req, res, next) => {
    try {
        const transformers = await Transformer.find();
        res.status(200).json({
            status: 'success',
            data: { transformers }
        });
    } catch (error) {
        res.json({ error: error });
    }
}