export default class Admin{
    static async getAdminInfo(req,res){
        res.status(200).send({status: 200, message: ':)'})
    }
}