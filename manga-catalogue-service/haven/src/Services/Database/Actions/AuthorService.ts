import { AppDataSource } from "../Connection/createConnection";
import { Author } from "../Entity/Author";
import { Authors } from "../../Model/Authors";
import logger from "../../../Logs/logger";


export class AuthorService {
    private authorRepository = AppDataSource.getRepository(Author);

  async getAllAuthors(): Promise<Authors[]> {
        try {
            const authorEntities = await this.authorRepository.find();
                  logger.info('Retrieving Manga data', authorEntities);

            if(!authorEntities || authorEntities.length === 0) {
                logger.info('No authors data found.');
                return [];
            }

            const authorsModel = authorEntities.map(entity => new Authors(
                    entity.id,
                    entity.author
                )
            );

            return authorsModel;

        } catch (err){
            logger.error(err);
            throw err;
        }
    }
}