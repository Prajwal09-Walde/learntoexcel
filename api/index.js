import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authsRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import coursesRoute from './routes/courses.js';
import examsRoute from './routes/exams.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

const connect = async () => {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongoDB connected :)");
};

mongoose.connection.on('disconnected', () => {
    console.log('mongodb disconnected :(');
});

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authsRoute);
app.use("/api/users", usersRoute);
app.use("/api/courses", coursesRoute);
app.use("/api/exams", examsRoute);

app.listen(8500, () => {
    connect();
    console.log('Connected to backend :)')
});