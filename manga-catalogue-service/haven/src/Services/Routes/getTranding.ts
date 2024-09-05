import Router from 'koa-router';
import { getTrandingMangas } from '../Controller/Manga_Controllers/Tranding';

const router = new Router();

// this route only works when the call is made throug tranding server else it will return regular cover and title
router.get("/getTrandings", getTrandingMangas);

export default router;