const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id:String,
    name:String,
    image:String,
    price:Number,
    description:String,
});

module.exports=mongoose.model('plastic',schema);