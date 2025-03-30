const mongoose = require('mongoose');
const UserModel = require('./User.model');
const formateurSchema = new mongoose.Schema({
    specialite: { 
        type: String
    },
    description: {
        type: String
    },
    diplome:{
        type:String
    }
});
const formateurModel = UserModel.discriminator("formateur",formateurSchema);
module.exports =formateurModel; 