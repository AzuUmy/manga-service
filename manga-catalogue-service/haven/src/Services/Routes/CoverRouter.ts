import Router from "koa-router";
import { getAllMangasCover } from "../Controller/Manga_Controllers/Cover_controller";

const router = new Router();

router.get("/GetAllCovers", getAllMangasCover);

export default router;

