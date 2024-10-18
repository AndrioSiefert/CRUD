import express from 'express';
import cors from 'cors';
import { AppDataSource } from './config/database';

const app = express();
app.use(express.json());
app.use(cors());

AppDataSource.initialize()
    .then(() => {
        console.log('Database connected');
    })
    .catch(error => {
        console.error('Error connecting to database', error);
    });

export default app;
