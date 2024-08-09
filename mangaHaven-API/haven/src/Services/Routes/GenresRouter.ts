import Router from "koa-router";
import { getAllAuthors } from "../Controller/Author_Controller/Author_controller";
import {getAllGenres} from "../Controller/Genres_Controller/Genres_controller";

const router = new Router();

router.get("/getAllGenres", getAllGenres);

export default router;