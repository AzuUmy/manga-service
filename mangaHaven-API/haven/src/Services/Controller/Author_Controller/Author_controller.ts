import { Context } from "koa";
import { AuthorService } from "../../Database/Actions/AuthorService";
import logger from '../../../Logs/logger';
import { middleWareError } from '../../../Error/MidleWareError';


const authorService = new AuthorService();

export const getAllAuthors = async (ctx: Context): Promise<void> => {
    try{
        ctx.body = await authorService.getAllAuthors();
    } catch(err) {
        const error = err as middleWareError;
        logger.error('Error requesting all Authors', error);
        ctx.status = error.status || 404;
        ctx.body = error.message || 'Internal Server Error';
    }
}

