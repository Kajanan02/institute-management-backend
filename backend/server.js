import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import cookieParser from 'cookie-parser';
import {errorHandler, notFound} from "./middleware/errorMiddleware.js";
import userRoutes from './routes/userRoutes.js';
import studentRoutes from "./routes/studentRoutes.js";
import marksRoutes from "./routes/marksRoutes.js";
import feesRoutes from "./routes/feesRoutes.js";
import broadcastRoutes from "./routes/broadcastRoutes.js";
import calenderRoutes from "./routes/calenderRoutes.js";
import cors from 'cors';
import parentRoutes from "./routes/parentRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
// import paymentRoutes from "./routes/paymentRoutes.js";
import careerRoutes from "./routes/careerRoutes.js";
import leaderBoardRoutes from "./routes/leaderBoardRoutes.js";

dotenv.config();

connectDB();
const port =  5000;
const app = express();
// Enable CORS for all routes
app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use(express.urlencoded({extended: true}))
app.use('/api/users', userRoutes);
app.use('/api/institute', studentRoutes);
app.use('/api/institute', marksRoutes);
app.use('/api/institute', parentRoutes);
app.use('/api/institute', attendanceRoutes);
app.use('/api/institute', feesRoutes);
app.use('/api/institute', broadcastRoutes);
app.use('/api/institute', calenderRoutes);
app.use('/api/institute', appointmentRoutes);
app.use('/api', roomRoutes);
// app.use('/api', paymentRoutes);
app.use('/api', careerRoutes);
app.use('/api', leaderBoardRoutes);
app.use(notFound);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});