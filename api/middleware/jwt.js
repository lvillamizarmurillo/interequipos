import { jwtVerify, SignJWT } from 'jose';
import { loadEnv } from 'vite';

const env = loadEnv('development', process.cwd(), 'JWT');

const generateJWTToken = async (email) => {
    const encoder = new TextEncoder();
    return new SignJWT({ email })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('3h')
        .sign(encoder.encode(env.JWT));
};

const verifyToken = async (token) => {
    try {
        const encoder = new TextEncoder();
        const decodedToken = await jwtVerify(token, encoder.encode(env.JWT));
        const email = decodedToken.payload.email;
        return { email };
    } catch (error) {
        return false;
    }
};

export { generateJWTToken, verifyToken };