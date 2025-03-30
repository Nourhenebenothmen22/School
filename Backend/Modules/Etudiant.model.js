const mongoose=require('mongoose')
const UserModel = require('./User.model')
const EtudiantSchema=new mongoose.Schema({
    cv:{
        type:String
    },
    niveau:{
        type:String
    }

})
const EtudiantModel=UserModel.discriminator('Etudiant',EtudiantSchema)
module.exports=EtudiantModel