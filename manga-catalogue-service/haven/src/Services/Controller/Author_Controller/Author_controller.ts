//controller for authros
import { Context } from "koa";
import { AuthorService } from "../../Database/Actions/AuthorService";
import logger from '../../../Logs/logger';
import { middleWareError } from '../../../Error/MidleWareError';

// create a new aAuthorService
const authorService = new AuthorService();

// this methods process querys generated in my services Entity file Author
export const getAllAuthors = async (ctx: Context): Promise<void> => {
    try{
        ctx.body = await authorService.getAllAuthors(); // returns a body of data 
    } catch(err) { // error Handling
        const error = err as middleWareError;
        logger.error('Error requesting all Authors', error);
        ctx.status = error.status || 404;
        ctx.body = error.message || 'Internal Server Error';
    }
}

