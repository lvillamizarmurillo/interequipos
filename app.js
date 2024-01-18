import express from 'express';
import { loadEnv } from 'vite';
import cors from 'cors';
import LimitPetitions from './api/config/rateLimit.js';
import routerDynamic from './api/routers/index.js';
import { validate } from './api/validations/validations.js';

const env = loadEnv('development', process.cwd(), 'VITE');

const config = {
  hostname: env.VITE_HOST,
  port: env.VITE_PORT_BACKEND,
};

const corsOptions = {
  origin: env.VITE_HOST,
};

const app = express();

app
  .use(LimitPetitions.limitAllPetitions())
  .use(cors(corsOptions))
  .use(express.json())
  .use('/interequipos', dynamicRouterHandler)
  .listen(config, () => {
    console.log(`http://${config.hostname}:${config.port}`);
  });

async function dynamicRouterHandler(req, res, next) {
  try {
    const dynamicRouter = validate(await routerDynamic(req.header('Accept-version')));
    dynamicRouter(req, res, next);
  } catch (error) {
    res.status(400).send({ status: 405, message: 'Ingrese en los headers la versión a utilizar para el API' });
  }
}