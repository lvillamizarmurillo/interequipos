import rateLimit from "express-rate-limit";

export default class limitPetitions{
    static limitLoginAdmin(){
        rateLimit({
            windowMs: 30 * 30 * 1000,
            max: 10,
            message: 'Limite de peticiones para el acceso de admin alcanzado, espere 30 minutos',
            standardHeaders: true,
            legacyHeaders: false
        })
    }
    static limitAllPetitions(){
        rateLimit({
            windowMs: 1 * 60 * 1000,
            max: 50,
            message: 'Limite de peticiones alcanzada',
            standardHeaders: true,
            legacyHeaders: false
        })
    }
}