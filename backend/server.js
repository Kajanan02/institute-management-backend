import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import cookieParser from 'cookie-parser';
import {errorHandler, notFound} from "./middleware/errorMiddleware.js";
import userRoutes from './routes/userRoutes.js';
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();

connectDB();
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cookieParser());


app.use(express.urlencoded({extended: true}))

app.use('/api/users', userRoutes);
app.use('/api/institute', studentRoutes);


app.use(notFound);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});