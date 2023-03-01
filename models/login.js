const mongoose = require('mongoose')

const Schema = mongoose.Schema

const FormSchema = new Schema ({
    email:{
        type:String
    },
password:{
    type:String
},
})

const Login = mongoose.model('Login' , FormSchema)

module.exports = Login