const mongoose = require('mongoose')

const applicationSchema = mongoose.Schema({
    sid:{
        type:String,
        required:true,
    },
    oid:{
        type:String,
        required:true,
    },
    opid:{
        type:email,
        required:true,
        unique:true,
    },
    status:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },

},

{timestamps:true}

)

module.exports= mongoose.model("Application", applicationSchema);