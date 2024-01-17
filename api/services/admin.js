import { collectionGen } from "../config/mongoConnect.js"

const product = await collectionGen('admin');

export default class Admin{
    static async getAdminInfo(req,res){
        const data = await product.find().toArray()
        res.status(200).send({status: 200, message: data})
    }
}