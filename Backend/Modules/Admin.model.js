const mongoose=require("mongoose")
const AdminShema=new mongoose.Schema({

})
const Admin=mongoose.model("Admin",AdminShema)
module.exports=Admin