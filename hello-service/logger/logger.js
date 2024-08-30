import winston from 'winston';
const dotenv = (await import('dotenv')).default;
dotenv.config();

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    ),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: process.env.LOGS_LOCATION })
    ]
  });
  
  export default logger;