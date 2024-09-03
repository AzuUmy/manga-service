import {Context} from "koa";
import { CoverService } from "../../Database/Actions/CoverService";
import logger from "../../../Logs/logger";
import { middleWareError } from "../../../Error/MidleWareError";

// create a new Tranding to return the covers based on name
const TrandinngTitlesCover = new CoverService();
// this methods process querys generated in my services Entity file Covers
export const getTrandingMangas = async (ctx: Context): Promise<void> => {
    try {
        const title = ctx.query.title as string;
        ctx.body = await TrandinngTitlesCover.getCoverAndTitle(title); 
    } catch (err){ // Error Handling
        const error = err as middleWareError;
        logger.error('Error Cover and Title from all Manga', error);
        ctx.status = error.status || 404;
        ctx.body = error.message || 'Internal Server Error';
    }
}