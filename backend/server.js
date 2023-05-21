import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";

dotenv.config();

import cookieParser from 'cookie-parser';


import {notFound,errorHandler} from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cookieParser());
connectDB();



app.use(express.urlencoded({extended: true}))
import userRoutes from './routes/userRoutes.js';
app.use('/api/users', userRoutes);




app.use(notFound);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});