import { collectionGen } from "../config/mongoConnect.js"
import ValidationsAdmin from "../controller/storageAdmin.js";

const category = await collectionGen('category');
const product = await collectionGen('product');

export default class Admin{
    static async postCategory(req,res){
        if (!req.rateLimit) return;

        const dateCategoryName = req.body;

        const { error } = ValidationsAdmin.validateAdmin(dateCategoryName,'nameCategory');

        if (error) return res.status(400).send({status:400, message:error.details.map(err => err.message).join(', ')});

        await category.insertOne(req.body);

        res.status(200).send({status: 200, message: 'Categoria registrada con éxito.'})
    }

    static async postProduct(req,res){
        if (!req.rateLimit) return;

        const dateProduct = req.body;

        const { error } = ValidationsAdmin.validateAdmin(dateProduct,'postProduct');

        if (error) return res.status(400).send({status:400, message:error.details.map(err => err.message).join(', ')});

        const dataCategory = await category.findOne({name: req.body.category})

        if ( !dataCategory ) return res.status(400).send({status: 400, message: "La categoria a la que la relacionas no existe, agrega una categoria válida."})

        await product.insertOne(req.body);

        res.status(200).send({status: 200, message: 'Producto registrada con éxito.'})
    }
}