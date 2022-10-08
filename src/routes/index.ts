import Router from "koa-router";
import healthCheckRoute from "./api/healthCheck";

const router = new Router();

router.use("/api", healthCheckRoute);

export default router;
