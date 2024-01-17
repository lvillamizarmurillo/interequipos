import express from 'express';
import { loadEnv } from 'vite';
import cors from 'cors'
import limitPetitions from './api/config/rateLimit.js';

const env = loadEnv('development', process.cwd(),'VITE')

const config = {
    hostname: env.VITE_HOST,
    port: env.VITE_PORT_BACKEND
}

const corsOption = {
    origin: env.VITE_HOST
}

const app = express();

app
   .use(limitPetitions.limitAllPetitions)

   .use(cors(corsOption))

   .use(express.json())

   .listen(config, ()=>{
        console.log(`http://${config.hostname}:${config.port}`)
   })

