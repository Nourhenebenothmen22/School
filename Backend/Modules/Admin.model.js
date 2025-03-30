const mongoose=require("mongoose")
const UserModel = require("./User.model")
const AdminShema=new mongoose.Schema({

})
const AdminModel = UserModel.discriminator("admin",AdminShema);
module.exports = AdminModel; 