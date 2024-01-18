import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { StorageLogin } from '../controller/storageLogin.js';
import express from 'express';
import LimitPetitions from '../config/rateLimit.js';

const middlewareLogin = express();

middlewareLogin.use(LimitPetitions.limitLoginAdmin())

middlewareLogin.use(async(req,res,next)=>{
    try {
        let errorData = []
        let data = plainToClass(StorageLogin, req.body , { excludeExtraneousValues: true });
        req.body = data;
        await validate(data)
        next()
    } catch (error) {
        res.status(error.status).json(error)
    }
});

export default middlewareLogin;