import express from 'express';
import logger from './logger/logger.js';

const app = express();

app.get('/world', (req, res) => {
    res.send('World');
    logger.info('Response sent');
});

const server = app.listen(process.env.PORT, () => {
    logger.info(`Application is listening on port ${process.env.PORT}`);
});
