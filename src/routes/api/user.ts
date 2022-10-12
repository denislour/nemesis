import Router from "koa-router";
import { register } from "../../controllers/user";

const router = new Router();
router.prefix("/user");

router.post("/register", register);

export default router.routes();
