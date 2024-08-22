import { AppDataSource } from '../Connection/createConnection';
import { Manga } from "../Entity/Manga";
import { Mangas } from "../../Model/Mangas";
import logger from "../../../Logs/logger";

export class MangaService {
    private mangaRepository = AppDataSource.getRepository(Manga);

    
    // method for queryng Mangas
    async getAllManga(): Promise<Mangas[]> {
        try {
            const mangaEntities = await this.mangaRepository.find({ relations:
                    ['author', 'cover', 'genres', 'volumes'] });

            logger.info('Retrieving manga data', mangaEntities);

            if (!mangaEntities || mangaEntities.length === 0) {
                logger.info('No manga data found.');
                return [];
            }

            const mangaModels = mangaEntities.map(entity =>
                new Mangas(   entity.title,
                    entity.description,
                    entity.author,
                    entity.cover,
                    entity.id,
                    entity.genres,
                    entity.volumes
                )
            );

            return mangaModels;

        } catch (err) {
            logger.error(err);
            throw err;
        }
    }
}