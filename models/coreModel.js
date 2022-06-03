const mongoose = require('mongoose')
const CoreSchema = mongoose.Schema({
    cedula:{
        type:String,
        require: true
    },
    nombre:{
        type: String,
        required:true
    },
    apellido:{
        type:String,
        require: true
    },
    celular:{
        type: String,
        required:true
    },
    date:{
        type:Date,
        require: true
    },
    deliverdate:{
        type: Date,
        required:true
    },
    motivo:{
        type:String,
        require: true
    },
    creationDate:{
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('core',CoreSchema)