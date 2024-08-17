import 'reflect-metadata';
import { DataSource } from "typeorm";
import logger from '../../../Logs/logger';
import { Manga } from "../Entity/Manga";
import { Author } from "../Entity/Author";
import { Cover } from "../Entity/Cover";
import { Genres } from "../Entity/Genres";
import * as dotenv from "dotenv";

const envFile = process.env.NODE_ENV === 'production' ? '.env-production' : '.env-development';
dotenv.config({path: envFile});

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'db',
    port: 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    synchronize: true,
    logging: true,
    entities: [Manga,Author,Cover, Genres],
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