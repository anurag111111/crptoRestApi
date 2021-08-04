const mongoose = require('mongoose')

//crypto schema
const CryptoSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    symbol:{
        type:String,
        required:true,
       
    },
    price:{
        type:Number,
        required:true,
    },
    marketcap:{
        type:Number,
        required:true,
    },
    change:{
        type:Number,
        required:true,
    },
       

});
module.exports = new mongoose.model('crypto',CryptoSchema);