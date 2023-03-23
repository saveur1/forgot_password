const mongoose = require("mongoose");

module.exports = async(req,res,next)=>{
    try {
        mongoose.set("strictQuery",false);
        await mongoose.connect("mongodb://127.0.0.1:27017/password_reset",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Connected To database successfully");
    } catch (error) {
        console.log(error);
    }
}