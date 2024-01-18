import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import { validate } from '../../validations/validations.js'
import { createToken } from "../../services/login.js";


const router = Router();
const version = routesVersioning();

router.post("/", version({'1.0.0': validate(createToken)}))

export { router };