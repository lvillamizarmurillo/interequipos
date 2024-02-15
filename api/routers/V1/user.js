import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import User from "../../services/user.js";


const router = Router();
const version = routesVersioning();

router.get("/", version({
    '1.0.0': User.getAllInfoContact,
}));

router.get("/v1/:zone?", version({
    '1.0.0': User.getAllProducts,
    '1.0.1': User.getAllProductZone
}));

router.get("/v2/:category/:zone?", version({
    '1.0.0': User.getProductCategory,
    '1.0.1': User.getProductCategoryZone
}));

router.get("/product/:nameProduct", version({
    '1.0.0': User.getProductInfo
}));

export { router };