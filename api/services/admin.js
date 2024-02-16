import { promises as fsPromises } from 'fs';
import { saveImage } from "../middleware/saveImagen.js";
import { collectionGen } from "../config/mongoConnect.js";
import ValidationsAdmin from "../controller/storageAdmin.js";

const category = await collectionGen('category');
const product = await collectionGen('product');

export default class Admin {
    static async postCategory(req, res) {
        if (!req.rateLimit) return;

        const dateCategoryName = req.body;

        const { error } = ValidationsAdmin.validateAdmin(dateCategoryName, 'nameCategory');

        if (error) return res.status(400).send({ status: 400, message: error.details.map(err => err.message).join(', ') });

        await category.insertOne(req.body);

        res.status(200).send({ status: 200, message: 'Categoria registrada con éxito.' });
    }

    static async postProduct(req, res) {
        if (!req.rateLimit) return;

        try {
            await new Promise((resolve, reject) => {
                saveImage.single('image')(req, res, (err) => {
                    if (err) {
                        reject({ status: 500, message: 'Error al subir la imagen.' });
                    } else {
                        resolve();
                    }
                });
            });

            const existingProduct = await product.findOne({ image: req.file.filename });

            if (existingProduct) {
                await fsPromises.unlink(req.file.path);
                return res.status(400).send({ status: 400, message: 'El nombre de la imagen ya está en uso. Elige otro nombre.' });
            }

            const dateProduct = req.body;

            const { error } = ValidationsAdmin.validateAdmin(dateProduct, 'postProduct');

            if (error) {
                await fsPromises.unlink(req.file.path);
                return res.status(400).send({ status: 400, message: error.details.map(err => err.message).join(', ') });
            }

            const dataCategory = await category.findOne({ name: req.body.category });

            if (!dataCategory) {
                await fsPromises.unlink(req.file.path);
                return res.status(400).send({ status: 400, message: "La categoria a la que la relacionas no existe, agrega una categoria válida." });
            }

            req.body.image = req.file.filename;
            req.body.productPdf = req.file.filename;

            await product.insertOne(req.body);

            res.status(200).send({ status: 200, message: 'Producto registrado con éxito.' });
        } catch (error) {
            return res.status(error.status || 500).send({ status: error.status || 500, message: error.message || 'Error interno del servidor.' });
        }
    }
}
