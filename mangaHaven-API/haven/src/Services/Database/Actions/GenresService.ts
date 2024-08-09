import { AppDataSource} from "../Connection/createConnection";
import { Genres } from "../Entity/Genres";
import { Categories } from "../../Model/Categories";
import logger from "../../../Logs/logger";


export class GenresService {
    private genreRepository = AppDataSource.getRepository(Genres);

    async getAllGenres(): Promise<Categories[]> {
        try {
            const genresEntities = await this.genreRepository.find();
            logger.info('Retrieving Author data', genresEntities);

            if(!genresEntities || genresEntities.length === 0) {
                logger.info('No authors data found.');
                return [];
            }


            const genreModel = genresEntities.map(entity => new Categories(
                entity.id,
                entity.genres
            ));

            return genreModel;


        } catch(err) {
            logger.error(err);
            throw err;
        }
    }
}