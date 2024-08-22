import {Context} from "koa";
import { CoverService } from "../../Database/Actions/CoverService";
import logger from "../../../Logs/logger";
import { middleWareError } from "../../../Error/MidleWareError";

// create a new CoverService
const coverService = new CoverService();
// this methods process querys generated in my services Entity file Covers
export const getAllMangasCover = async (ctx: Context): Promise<void> => {
    try {
        ctx.body = await coverService.getCoverAndTitle(); // returns a body of data 
    } catch (err){ // Error Handling
        const error = err as middleWareError;
        logger.error('Error Cover and Title from all Manga', error);
        ctx.status = error.status || 404;
        ctx.body = error.message || 'Internal Server Error';
    }
}