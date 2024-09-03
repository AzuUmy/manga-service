import Router from 'koa-router';
import { getTrandingMangas } from '../Controller/Manga_Controllers/Tranding';

const router = new Router();

router.get("/getTrandings", getTrandingMangas);

export default router;