import 'reflect-metadata';
import { DataSource } from "typeorm";
import logger from '../../../Logs/logger';
import { Manga } from "../Entity/Manga";
import { Author } from "../Entity/Author";
import { Cover } from "../Entity/Cover";


export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: '',
    database: 'haven',
    synchronize: false,
    logging: true,
    entities: [Manga,Author,Cover],
    migrations: [],
    subscribers: [],
});

AppDataSource.initialize()
    .then(() => {
        logger.info('Data Source has been initialized!');
    })
    .catch((err) => {
        logger.error('Error during Data Source initialization:', err);
    });