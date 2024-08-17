import { AppDataSource } from "../Connection/createConnection";
import { Manga } from "../Entity/Manga";
import logger from "../../../Logs/logger";
import { MangasCover } from "../../../Dto/MangasCover";

export class CoverService {
    private mangaRepository = AppDataSource.getRepository(Manga);

    async getCoverAndTitle(): Promise<MangasCover[]> {
        try{
         const mangaEntities = await this.mangaRepository.createQueryBuilder('mangas')
             .leftJoinAndSelect('mangas.cover', 'cover')
             .select(['mangas.id', 'mangas.title', 'cover.id', 'cover.url'])
             .getMany();

         logger.info('Retrieving manga data', mangaEntities);

         if(!mangaEntities || mangaEntities.length === 0) {
             logger.info('No manga data found.');
             return [];
         }

             return mangaEntities.map(manga => {
                    const { id, title, cover } = manga;
                    return {
                        id,
                        title,
                        cover: {
                            id: cover?.id || null,
                            url: cover?.url || '',
                        }
                    } as MangasCover;
             });

        } catch (err){
            logger.error(err);
            throw err;
        }
    }
}