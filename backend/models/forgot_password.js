const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    full_name:{
        type:"String",
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

module.exports = mongoose.model("User",UserSchema);