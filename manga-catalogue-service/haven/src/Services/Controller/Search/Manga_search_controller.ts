import {Context  } from "koa";
import { SearchService } from "../../Database/Actions/SearchService";
import logger from "../../../Logs/logger";
import { middleWareError } from "../../../Error/MidleWareError";

const returnSearch = new SearchService();

export const getTitleBasedOnSearch = async (ctx: Context): Promise<void> => {
    try {
        const { author, genres, title } = ctx.query as { author?: string, genres?: string, title?: string };
        ctx.body = await returnSearch.getSearchData(author, genres, title);
    } catch (err){
        const error = err as middleWareError;
        logger.error('Error Cover and Title from all Manga', error);
        ctx.status = error.status || 404;
        ctx.body = error.message || 'Internal Server Error';
    }
}

