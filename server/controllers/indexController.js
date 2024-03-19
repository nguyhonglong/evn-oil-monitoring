import Index from "../models/IndexModel.js"

export const getAllIndex = async (req, res, next) => {
    try {
        const index = await Index.find();
        res.status(200).json({
            status: 'success',
            data: { index }
        });
    } catch (error) {
        res.json({ error: error });
    }
}