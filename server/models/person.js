const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
})

module.exports = new mongoose.model('Person',personSchema)