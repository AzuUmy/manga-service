import {Context} from "koa";
import { CoverService } from "../../Database/Actions/CoverService";
import logger from "../../../Logs/logger";
import { middleWareError } from "../../../Error/MidleWareError";

const coverService = new CoverService();

export const getAllMangasCover = async (ctx: Context): Promise<void> => {
    try {
        ctx.body = await coverService.getCoverAndTitle();
    } catch (err){
        const error = err as middleWareError;
        logger.error('Error Cover and Title from all Manga', error);
        ctx.status = error.status || 404;
        ctx.body = error.message || 'Internal Server Error';
    }
}