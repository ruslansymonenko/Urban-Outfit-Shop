import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import goodsRoute from './routes/goods.js';
import authRoute from './routes/auth.route.js'

const app = express();
const PORT = 3001;

dotenv.config();

const DBLOGIN = process.env.DBLOGIN;
const DBPASSWORD = process.env.DBPASSWORD;

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));

//Routes
app.use('/api/goods', goodsRoute);
app.use('/api/auth/', authRoute);

async function start () {
  try{
    await mongoose.connect(`mongodb+srv://${DBLOGIN}:${DBPASSWORD}@cluster0.aglpyvz.mongodb.net/?retryWrites=true&w=majority`);

    app.listen(PORT, () => {console.log(`server working on port: ${PORT}...`)})

  } catch (err) {console.log(err)}
}


start();