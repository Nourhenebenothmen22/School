const mongoose=require('mongoose')
const formationSchema=new mongoose.Schema({
    titre:{
        type:String
    },
    description:{
        type:String
    },
    startDate:{
        type:Date
    },
    endDate:{
        type:Date
    }

})
module.exports=mongoose.model('formation',formationSchema)