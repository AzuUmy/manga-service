import { DataSource } from 'typeorm';
import { AppDataSource } from '../src/Services/Database/Connection/createConnection';
import { Manga } from '../src/Services/Database/Entity/Manga';

export async function clearCache() {
    // Get the repository from the data source
    const mangaRepository = AppDataSource.getRepository(Manga);

    // Example: Disabling cache for specific queries
    const mangas = await mangaRepository.createQueryBuilder('manga')
        .cache(false)
        .getMany();
}