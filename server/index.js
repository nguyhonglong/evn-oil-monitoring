import express from 'express';
import mongoose from 'mongoose';
import {Index} from './model/indexModel.js';
import cors from 'cors';


const mongoDBURL = "mongodb+srv://nguyhonglong2002:VoCm3fdhVCDf9vwK@cluster0.zokt7pa.mongodb.net/test?retryWrites=true&w=majority"

const app = express();


app.use(cors());
app.use(express.json());
app.get('/api/station', async (req, res) => {
  try {
    const indexData = await Index.find();

    if (indexData.length > 0) {
      res.status(200).json(indexData);
    } else {
      res.status(404).json({ message: 'Không tìm thấy dữ liệu.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server.' });
  }
});



app.post('/api/index', async (req, res) => {
  try {
    const records = req.body;
    const insertedRecords = await Index.insertMany(records);
    return res.status(200).json(insertedRecords);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

app.listen(3001);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("connect to db success")
    })
    .catch((error) => {
        console.log(error)
    });