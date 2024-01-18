import { collectionGen } from '../config/mongoConnect.js';
import { generateJWTToken } from '../middleware/jwt.js';

const adminCollection = await collectionGen('admin');

const createToken = async (req, res) => {
    if (!req.rateLimit) return;

    const { email, password } = req.body;
    const user = await adminCollection.findOne({ email, password });

    if (!user) {
        return res.status(401).send({ status: 401, message: 'Usuario no encontrado' });
    }

    const jwtToken = await generateJWTToken(user.email);

    res.status(200).send({ status: 200, message: jwtToken })
};

export { createToken };