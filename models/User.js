const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlegnth: 50
    },
    email:{
        type: String,
        trim: true,
        unique: 1
    },
    password:{
        type: String,
        minlegnth: 5
    },
    lastname:{
        type: String,
    maxlegnth:5
    },
    role: {
        type:Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp:{
        type: Number
    }
})

const User =mongoose('User',userSchema)

module.exports = {User}