import { Context } from "koa";
import { GenresService } from "../../Database/Actions/GenresService";
import logger from '../../../Logs/logger';
import { middleWareError } from '../../../Error/MidleWareError';

// create a new GenreService
const genresService = new GenresService();

// this methods process querys generated in my services Entity file Genres
export const getAllGenres = async (ctx: Context): Promise<void> => {
    try {
        ctx.body = await genresService.getAllGenres(); // returns a body of data 
    } catch(err) { // Error Handling
        const error = err as middleWareError;
        logger.error('Error requesting all Genres', error);
        ctx.status = error.status || 404;
        ctx.body = error.message || 'Internal Server Error';
    }
}