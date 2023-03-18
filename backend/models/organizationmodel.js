const mongoose = require('mongoose')

const organizationSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    email:{
        type:email,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    tagline:{
        type:String,
    },
    role:{
        type:String,
        default:"research organization",
    },
    opportunitiesposted:{
        type:[{}],
    },
    messages:{
        type:[Object],
    },
    notifications:{
        type:[Object],
    },

},

{timestamps:true}

)

module.exports= mongoose.model("Organization", organizationSchema);