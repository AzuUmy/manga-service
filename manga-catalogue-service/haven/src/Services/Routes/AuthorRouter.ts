import Router from "koa-router";
import { getAllAuthors } from '../Controller/Author_Controller/Author_controller';
// routes for Authors
const router = new Router();

router.get("/getAuthors", getAllAuthors);

export default router;