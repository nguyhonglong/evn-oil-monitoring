import express from 'express';
import { verifyToken } from '../middlewares/verifyToken.js';
import { getAllSubstations } from '../controllers/substationController.js';


const Router = express.Router();
Router.route('/').get( verifyToken, getAllSubstations)

export default Router;