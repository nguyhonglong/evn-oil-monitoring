import express from 'express';
import { verifyToken } from '../middlewares/verifyToken.js';
import { getAllIndex} from '../controllers/indexController.js'

const Router = express.Router();

Router.route('/').get(verifyToken,getAllIndex)

export default Router;