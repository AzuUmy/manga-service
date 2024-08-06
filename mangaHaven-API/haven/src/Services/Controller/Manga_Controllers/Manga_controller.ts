import { Context } from 'koa';
import { MangaService } from '../../Database/Actions/mangaService';
import logger from '../../../Logs/logger';
import { middleWareError } from '../../../Error/MidleWareError';

const mangaService = new MangaService();

export const getAllMangas = async (ctx: Context): Promise<void> => {
    try {
        const mangaList = await mangaService.getAllManga();
        ctx.body = mangaList;
    } catch (err) {
        const error = err as middleWareError;
        logger.error('Error requesting all Manga', error);
        ctx.status = error.status || 404;
        ctx.body = error.message || 'Internal Server Error';
    }
};