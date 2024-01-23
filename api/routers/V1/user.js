import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import User from "../../services/user.js";


const router = Router();
const version = routesVersioning();

router.get("/", version({
    '1.0.0': User.getAllProducts
}));

router.get("/category", version({
    '1.0.0': User.getAllProducts
}));

export { router };