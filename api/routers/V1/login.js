import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import { createToken } from "../../services/login.js";
import { middlewareLogin } from "../../middleware/storageLogin.js";

const router = Router();
const version = routesVersioning();

router.post("/", middlewareLogin, version({
    '1.0.0': createToken
}))

export { router };