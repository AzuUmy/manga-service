import Router from "koa-router";
import { getAllMangasCover } from "../Controller/Manga_Controllers/Cover_controller";
// Routes for Covers
const router = new Router();

router.get("/GetAllCovers", getAllMangasCover);

export default router;

