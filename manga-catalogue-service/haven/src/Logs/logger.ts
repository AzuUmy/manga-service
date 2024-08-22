// Winstom script for log generation
import { createLogger, format, transports } from 'winston';

// create a obejct of logger that few Parameters for interaction such as info for logger.info declaration
const logger = createLogger({
    level: 'info', // this can be use to declare log of type info
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss' // generates logs based on date and time
        }),
        format.errors({ stack: true }), // supors log of type error
        format.splat(),
        format.json()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' })
    ]
});


// suport for envrioment variables not yet implmeneted
if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        format: format.combine(
            format.colorize(),
            format.simple()
        )
    }));
}

export default logger;