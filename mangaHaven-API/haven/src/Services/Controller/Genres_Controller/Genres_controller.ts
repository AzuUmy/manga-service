import { Context } from "koa";
import { GenresService } from "../../Database/Actions/GenresService";
import logger from '../../../Logs/logger';
import { middleWareError } from '../../../Error/MidleWareError';

const genresService = new GenresService();

export const getAllGenres = async (ctx: Context): Promise<void> => {
    try {
        ctx.body = await genresService.getAllGenres();
    } catch(err) {
        const error = err as middleWareError;
        logger.error('Error requesting all Genres', error);
        ctx.status = error.status || 404;
        ctx.body = error.message || 'Internal Server Error';
    }
}