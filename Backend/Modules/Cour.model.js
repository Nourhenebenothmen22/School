const mongoose=require('mongoose')
const gallerieschema=new mongoose.Schema({
    image:String
})
const courSchema=new mongoose.Schema({
    titre:{
        type:String
    },
    galleries:[gallerieschema],
    nombre:{
        type:Number
    },
    description:{
        type:String
    }

})
module.exports=mongoose.model("cour",courSchema)