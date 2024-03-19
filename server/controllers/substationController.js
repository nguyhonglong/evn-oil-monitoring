import {Substation} from '../models/SubstationModel.js'

export const getAllSubstations = async (req, res, next) => {
    try {
        const substations = await Substation.find();
        res.status(200).json({
            status: 'success',
            data: { substations }
        });
    } catch (error) {
        res.json({ error: error });
    }
}