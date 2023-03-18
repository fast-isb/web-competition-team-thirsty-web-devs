const mongoose = require('mongoose')

const applicationSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    oemail:{
        type:String,
        required:true,
    },
    opid:{
        type:Number,
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