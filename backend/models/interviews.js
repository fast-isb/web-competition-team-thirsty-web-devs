const mongoose = require('mongoose')

const interviewSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    oemail:{
        type:String,
        required:true,
    },
    opid:{
        type:String,
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
    scheduledTime:{
        type:Date,
    }
},

{timestamps:true}

)

module.exports= mongoose.model("Interview", interviewSchema);