const mongoose = require('mongoose')

const interviewSchema = mongoose.Schema({
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
    aid:{
        type:String,
        required:true,
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

module.exports= mongoose.model("Interview", interviewSchema);