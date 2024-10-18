import express from 'express';
import app from './src/app';

const port = 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
