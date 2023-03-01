const mongoose = require('mongoose')

const Schema = mongoose.Schema

const FormSchema = new Schema ({
    name : {
        type:String
    },
    email:{
        type:String
    },
password:{
    type:String
},

cpassword:{
    type:String
}
})

const Registration = mongoose.model('Registration' , FormSchema)

module.exports = Registration