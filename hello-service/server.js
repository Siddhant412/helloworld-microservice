import express from 'express';
import logger from './logger/logger.js';

const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello');
    logger.info('Response sent');
});

const server = app.listen(process.env.PORT, () => {
    logger.info(`Application is listening on port ${process.env.PORT}`);
});
