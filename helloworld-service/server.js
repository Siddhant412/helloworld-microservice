import express from 'express';
import axios from 'axios';
import logger from './logger/logger.js';

const app = express();

app.get('/helloworld', async (req, res) => {
    try {
        const helloResponse = await axios.get('http://hello-service:4000/hello');
        const helloMessage = helloResponse.data;
    
        const worldResponse = await axios.get('http://world-service:4001/world');
        const worldMessage = worldResponse.data;
    
        const fullMessage = `${helloMessage} ${worldMessage}`;
    
        res.send(fullMessage);
    } catch (error) {
        console.error('Error calling services:', error);
        res.status(500).send('Error calling Hello and World services');
    }
});

const server = app.listen(process.env.PORT, () => {
    logger.info(`Application is listening on port ${process.env.PORT}`);
});
  