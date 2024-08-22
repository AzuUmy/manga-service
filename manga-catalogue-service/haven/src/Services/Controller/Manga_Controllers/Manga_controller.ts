import { Context } from 'koa';
import { MangaService } from '../../Database/Actions/mangaService';
import logger from '../../../Logs/logger';
import { middleWareError } from '../../../Error/MidleWareError';

// create a new CoverService
const mangaService = new MangaService();
// this methods process querys generated in my services Entity file Covers
export const getAllMangas = async (ctx: Context): Promise<void> => {
    try {
        ctx.body = await mangaService.getAllManga(); // returns a body of data 
    } catch (err) { // Error Handling
        const error = err as middleWareError;
        logger.error('Error requesting all Manga', error);
        ctx.status = error.status || 404;
        ctx.body = error.message || 'Internal Server Error';
    }
};