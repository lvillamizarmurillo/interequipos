import { collectionGen } from "../config/mongoConnect.js"

const product = await collectionGen('product');

export default class User{
    static async getAllProducts(req,res){
        const data = await product.aggregate([
            {
                $match: {}
            },
            {
                $project: {
                    _id: 0,
                    category: 0
                }
            }
        ]).toArray();
        res.status(200).send({status: 200, message: data})
    }

    static async getProductCategory(req,res){
        const data = await product.aggregate([
            {
                $match: {category}
            },
            {
                $project: {
                    _id: 0,
                    category: 0
                }
            }
        ]).toArray();
        res.status(200).send({status: 200, message: data})
    }
}