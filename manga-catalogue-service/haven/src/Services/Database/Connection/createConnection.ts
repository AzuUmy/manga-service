import 'reflect-metadata';
import { DataSource } from "typeorm";
import logger from '../../../Logs/logger';
import { Manga } from "../Entity/Manga";
import { Author } from "../Entity/Author";
import { Cover } from "../Entity/Cover";
import { Genres } from "../Entity/Genres";
import { Volume } from "../Entity/Volume";
import * as dotenv from "dotenv";

// this script creates a connection with mysql database

const envFile = process.env.NODE_ENV === 'production' ? '.env-production' : '.env-development';
dotenv.config({path: envFile});

export const AppDataSource = new DataSource({
    type: 'mysql', // specify database utilized
    host: 'mysql-db', // host in this case based on docker-compose file
    port: 3306, // specify database port
    username: process.env.MYSQL_USER, // security info
    password: process.env.MYSQL_PASSWORD, // security info
    database: process.env.MYSQL_DATABASE, // security info
    synchronize: true, // activate for development only deactivate in production mode!
    logging: true, // debbuger for devlopment can be deactivate 
    entities: [Manga,Author,Cover, Genres, Volume], // references used entitys to permonf querys
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