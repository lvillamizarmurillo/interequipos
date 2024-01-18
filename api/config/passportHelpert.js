import passport from 'passport';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { verifyToken } from '../middleware/jwt.js';

passport.use(new BearerStrategy(async (token, done) => {
    try {
        const user = await verifyToken(token);
        if (!user) return done(null, false);
        return done(null, user);
    } catch (error) {
        return done(error);
    }
}));

export default passport;
