const multer = require('multer')
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./Storage")
    },
    filename:function(req,file,cb){
        const uniquename=Date.now()+"-"+file.originalname
        cb(null,uniquename)

    }
})
const upload=multer({
    storage:storage,
    fileFilter:(req,file,cb)=>{
        if (file.mimetype==="image/png" || file.mimetype==="image/jpeg"|| file.mimetype==="image/jpg"){
            cb(null,true)
        }
        else{
            cb(new error("fichier imcompatible"));
            
        }

    }
})
module.exports=upload
