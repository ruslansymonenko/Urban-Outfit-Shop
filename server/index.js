import express from 'express';
import cors from 'cors';

import goodsRoute from './routes/goods.js';

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/goods', goodsRoute);

const PORT = 3001;

app.listen(PORT, () => {console.log(`server working on port: ${PORT}...`)})