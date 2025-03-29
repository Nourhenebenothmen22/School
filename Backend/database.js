const mongoose = require("mongoose");
const url='mongodb://127.0.0.1:27017/School'
const connectdb=()=>{
    try {
        mongoose.connect(url)
        console.log('connect with success')
        
    } catch (error) {
        console.log('failed to connect')
        
    }

}
module.exports=connectdb
