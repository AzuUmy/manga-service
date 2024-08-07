import { DataSource } from 'typeorm';
import { AppDataSource } from '../src/Services/Database/Connection/createConnection';


async function runMigrations() {
    await AppDataSource.initialize();
    await AppDataSource.runMigrations();
}

runMigrations().catch((error) => console.log('Error running migrations:', error));