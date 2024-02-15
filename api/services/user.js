import { collectionGen } from "../config/mongoConnect.js"

const product = await collectionGen('product');
const contact = await collectionGen('contact');

export default class User{
    static async getAllInfoContact(req,res){
        const data = await contact.aggregate([
            {
                $match: {}
            },
            {
                $project: {
                    _id: 0
                }
            }
        ]).toArray();
        res.status(200).send({status: 200, message: data})
    }

    static async getAllProducts(req,res){
        const data = await product.aggregate([
            {
                $match: {}
            },
            {
                $project: {
                    _id: 0,
                    category: 0,
                    productPdf: 0,
                    info: 0,
                    zone: 0
                }
            }
        ]).toArray();
        res.status(200).send({status: 200, message: data})
    }

    static async getAllProductZone(req,res){

        if(!req.params.zone) return res.status(400).send({status: 400, message: 'Es necesario elejir una zona para esta opcion'})

        const data = await product.aggregate([
            {
                $match: { zone: req.params.zone}
            },
            {
                $project: {
                    _id: 0,
                    category: 0,
                    productPdf: 0,
                    info: 0,
                    zone: 0
                }
            }
        ]).toArray();
        res.status(200).send({status: 200, message: data})
    }

    static async getProductCategory(req,res){
        const data = await product.aggregate([
            {
                $match: {category: req.params.category}
            },
            {
                $project: {
                    _id: 0,
                    category: 0,
                    productPdf: 0,
                    info: 0,
                    zone: 0
                }
            }
        ]).toArray();
        res.status(200).send({status: 200, message: data})
    }

    static async getProductCategoryZone(req,res){

        if(!req.params.zone) return res.status(400).send({status: 400, message: 'Es necesario elejir una zona para esta opcion'})

        const data = await product.aggregate([
            {
                $match: {category: req.params.category, zone: req.params.zone}
            },
            {
                $project: {
                    _id: 0,
                    category: 0,
                    productPdf: 0,
                    info: 0,
                    zone: 0
                }
            }
        ]).toArray();
        res.status(200).send({status: 200, message: data})
    }
    
    static async getProductInfo(req,res){
        const data = await product.aggregate([
            {
                $match: {name: req.params.nameProduct}
            },
            {
                $project: {
                    _id: 0,
                    category: 0,
                    zone: 0
                }
            }
        ]).toArray();
        res.status(200).send({status: 200, message: data})
    }
}