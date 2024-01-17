import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import Admin from "../../services/admin.js";
import { validate } from '../../validations/validations.js'


const router = Router();
const version = routesVersioning();

router.get("/", version({'1.0.0': validate(Admin.getAdminInfo)}))

export { router };