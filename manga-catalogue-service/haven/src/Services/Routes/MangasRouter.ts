import Router from "koa-router";
import { getAllMangas } from '../Controller/Manga_Controllers/Manga_controller';

const router = new Router();
// Models for mangas
router.get("/getMangas", getAllMangas);

export default router;

