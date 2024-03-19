import 'dotenv/config'
import connectDB from './configs/db.js';
import  express  from "express";
import cors from "cors";
import auth from "./routes/authRoute.js";
import index from "./routes/indexRoute.js";
import transformer from "./routes/transformerRoute.js";
import substation from "./routes/substationRoute.js";
import errorHandler from './middlewares/errorHandler.js';

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', auth)
app.use('/api/v1/index', index)
app.use('/api/v1/transformers', transformer)
app.use('/api/v1/substations', substation)

app.all('*', (req,res,next) => {
    const err = new Error('The route cannot be found')
    err.statusCode = 404;
    next(err);
})

app.use(errorHandler);

const port = process.env.APP_PORT;
app.listen(port,()=>{
    console.log(`server listening on ${port}`);
})