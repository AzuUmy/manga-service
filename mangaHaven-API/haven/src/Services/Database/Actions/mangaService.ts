import { AppDataSource } from '../Connection/createConnection';
import { Manga } from '../Entity/Manga';
import { Mangas } from '../../Model/Mangas';
import logger from '../../../Logs/logger';
import * as console from "node:console";


export class MangaService {
    private mangaRepository = AppDataSource.getRepository(Manga);


    async getAllManga(): Promise<Mangas[]> {
        try {

                const mangaEntities = await this.mangaRepository.find();
                logger.info('Retrieving manga data', mangaEntities)

            if(!mangaEntities ||  mangaEntities.length === 0) {
                logger.info('No manga data found.');
                return [];
            }

            const mangaModels = mangaEntities.map(entity =>
                new Mangas(entity.title, entity.description, entity.author, entity.genres, entity.url),

            );

            return mangaModels;

        } catch(err) {
            logger.error(err);
            throw err;
        }
    }

}

