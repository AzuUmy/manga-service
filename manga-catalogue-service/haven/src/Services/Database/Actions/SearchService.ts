import { AppDataSource } from "../Connection/createConnection";
import { Manga } from "../Entity/Manga";
import logger from "../../../Logs/logger";
import { MangasCover } from "../../../DTO/MangasCover";

export class SearchService {
    private mangaRepository = AppDataSource.getRepository(Manga);

    async getSearchData(author?: String, genres?: String, title?: string): Promise<MangasCover[]> {
        try {

            let queryBuilder = this.mangaRepository.createQueryBuilder("mangas")
            .leftJoinAndSelect('mangas.cover', 'cover')   
            .leftJoinAndSelect('mangas.author', 'author') 
            .leftJoinAndSelect('mangas.genres', 'genres')
            .select([
                'mangas.id',
                'mangas.title',
                'cover.id',
                'cover.url',
                'author.id',
                'author.author',
                'genres.id', 
                'genres.genres' 
            ]);


            if(author){
                queryBuilder = queryBuilder.andWhere('author.author = :author', { author });
            }

            if(genres){
                queryBuilder = queryBuilder.andWhere('genres.genres = :genres', { genres });
            }

            if(title){
                queryBuilder = queryBuilder.andWhere('mangas.title = :title', { title });
            }



            const mangaEntities = await queryBuilder.getMany();

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