import Router from "koa-router";
import  { getTitleBasedOnSearch } from "../Controller/Search/Manga_search_controller";

const router = new Router;

router.get("/search", getTitleBasedOnSearch);

export default router;