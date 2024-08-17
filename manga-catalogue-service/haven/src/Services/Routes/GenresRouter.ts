import Router from "koa-router";
import {getAllGenres} from "../Controller/Genres_Controller/Genres_controller";

const router = new Router();

router.get("/getAllGenres", getAllGenres);

export default router;