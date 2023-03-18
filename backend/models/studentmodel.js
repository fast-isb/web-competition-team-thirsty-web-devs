const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3,
    },
    address:{
        type:String,
    },
    contact:{
        type:String,
        min:9,
    },
    email:{
        type:email,
        required:true,
        unique:true,
    },
    password:{
        type:password,
        required:true,
        min:8,
    },
    role:{
        type:String,
        default:"student",
    },
    education:{
        type:[{Degree:String, institute:String, startDate:Date, enddate:Date, Grade:String}],
    },
    preferences:{
        type:[String],
    },
    experience:{
        type:[{title:String,organization:String,startDate:Date,enddate:Date}],
    },
    wishlist:{
        type:[String],
    },
    notifications:{
        time:Date.now(),
        type:[Object],
    },
    messages:{
        time:Date.now(),
        type:[Object],
    },
    

},

{timestamps:true}

)

module.exports= mongoose.model("Student", studentSchema);