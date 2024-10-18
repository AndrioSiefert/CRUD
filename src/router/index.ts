import express from 'express';
import UserRouter from './UserRouter';

const router = (app: express.Router) => {
    app.use(UserRouter);
};

export default router;
