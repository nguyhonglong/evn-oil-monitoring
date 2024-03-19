import express from 'express';
import { verifyToken } from '../middlewares/verifyToken.js';
import { getAllTransformers } from '../controllers/transformerController.js'

const Router = express.Router();
Router.route('/').get(getAllTransformers)

export default Router;