import express from 'express';
import dotenv from 'dotenv';

const app = express();

const config = {
    hostname: '127.12.11.0',
    port: '4001'
}

app
   .use(express.json())
   .listen(config, ()=>{
        console.log('http://'+config.hostname+':'+config.port)
   })

