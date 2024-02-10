import { collectionGen } from '../config/mongoConnect.js';
import { generateJWTToken } from '../middleware/jwt.js';
import Validations from '../controller/storageLogin.js';

const adminCollection = await collectionGen('admin');

const createToken = async (req, res) => {
    if (!req.rateLimit) return;

    const dateAdminLogin = req.body;

    const { error, value } = Validations.validateRegistration(dateAdminLogin);

    if (error) return res.status(400).send({status:400, message:error.details[0].message});

    const user = await adminCollection.findOne({ email:dateAdminLogin.email, password:dateAdminLogin.password });

    if (!user) {
        return res.status(401).send({ status: 401, message: 'Usuario no encontrado' });
    }

    const jwtToken = await generateJWTToken(user.email);

    res.status(200).send({ status: 200, message: jwtToken })
};

export { createToken };