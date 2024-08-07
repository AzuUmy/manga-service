import { AppDataSource } from '../Connection/createConnection';
import { Manga } from '../Entity/Manga';
import { Mangas } from '../../Model/Mangas';
import logger from '../../../Logs/logger';

export class MangaService {
    private mangaRepository = AppDataSource.getRepository(Manga);

    async getAllManga(): Promise<Mangas[]> {
        try {
            const mangaEntities = await this.mangaRepository.find({ relations: ['author', 'cover'] }); // Ensure relations are fetched

            logger.info('Retrieving manga data', mangaEntities);

            if (!mangaEntities || mangaEntities.length === 0) {
                logger.info('No manga data found.');
                return [];
            }

            const mangaModels = mangaEntities.map(entity =>
                new Mangas(entity.title, entity.description, entity.author, entity.cover)
            );

            return mangaModels;

        } catch (err) {
            logger.error(err);
            throw err;
        }
    }
}