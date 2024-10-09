const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id:String,
    name:String,
    price:Number,
    image:String,
    description:String,
});

module.exports=mongoose.model('hardware',schema);