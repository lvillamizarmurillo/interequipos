import multer from "multer";

const save = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null, './public/imgs')
    },
    filename: (req,file,cb) =>{
        if (file !== null){
            cb(null, file.originalname)
        }
    }
})

const filter = (req,file,cb)=>{
    if (file &&(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jepg')){
        cb(null, false)
    }else(
        cb(null, false)
    )
}

export const saveImage = multer({storage: save, fileFilter: filter})