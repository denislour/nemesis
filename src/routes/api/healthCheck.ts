import Router from "koa-router";
import { checkDb } from "../../controllers/healthCheck/dbCheck";

const router = new Router();
router.prefix("/health-check");

router.get("/", checkDb);

export default router.routes();
