import Router from "koa-router";
import healthCheckRoute from "./api/healthCheck";
import userRoute from "./api/user";

const router = new Router();

router.use("/api", healthCheckRoute);
router.use("/api", userRoute);

export default router;
