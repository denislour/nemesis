import Router from "koa-router";
import { createUser } from "../../controllers/user";

const router = new Router();
router.prefix("/user");

router.get("/", createUser);

export default router.routes();
